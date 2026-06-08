/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState, useCallback, useImperativeHandle, forwardRef } from 'react';
import * as THREE from 'three';
import { Block, BlockType, WorldConfig, PlayerStats } from '../types';
import { getCubeMaterials } from '../utils/textures';
import { playBreakSound, playPlaceSound, playJumpSound, playExplosionSound, playMuffleSound } from '../utils/audio';

interface GameCanvasProps {
  selectedBlock: BlockType;
  isFlying: boolean;
  lightMode: 'day' | 'sunset' | 'night' | 'sunrise';
  worldConfig: WorldConfig;
  actionMode: 'break' | 'place';
  soundEnabled: boolean;
  setStats: React.Dispatch<React.SetStateAction<PlayerStats>>;
  setCurrentPos: (pos: { x: number; y: number; z: number }) => void;
  joystickState: { moveX: number; moveY: number };
  onUpdateConfig: (newConfig: Partial<WorldConfig>) => void;
  id?: string;
}

export interface GameCanvasHandle {
  triggerJump: () => void;
  clearWorld: () => void;
  saveWorld: () => void;
  loadWorld: () => void;
}

const SKY_COLORS = {
  day: { sky: 0xaaccff, light: 0xffffff, ground: 0x90b0d0, intensity: 1.0 },
  sunset: { sky: 0xff6644, light: 0xffaa66, ground: 0x704040, intensity: 0.6 },
  night: { sky: 0x050515, light: 0x334466, ground: 0x050510, intensity: 0.15 },
  sunrise: { sky: 0xff99aa, light: 0xffccaa, ground: 0x605050, intensity: 0.7 },
};

// Voxel Particle for explosions and breaking blocks
interface VoxelParticle {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  life: number;
  maxLife: number;
}

export default forwardRef<GameCanvasHandle, GameCanvasProps>(function GameCanvas(
  {
    selectedBlock,
    isFlying,
    lightMode,
    worldConfig,
    actionMode,
    soundEnabled,
    setStats,
    setCurrentPos,
    joystickState,
    onUpdateConfig,
    id,
  },
  ref
) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Three.js instances stored in refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const lightRef = useRef<THREE.DirectionalLight | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const pointerRaycasterRef = useRef<THREE.Raycaster | null>(null);
  
  // Voxel storage
  const blocksMapRef = useRef<Map<string, { type: BlockType; mesh: THREE.Mesh }>>(new Map());
  const blockGeometryRef = useRef<THREE.BoxGeometry | null>(null);
  const selectionOutlineRef = useRef<THREE.LineSegments | null>(null);
  
  // Game loop, physics state
  const playerPosRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 10, 0));
  const playerVelRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const onGroundRef = useRef<boolean>(false);
  const keysPressedRef = useRef<{ [key: string]: boolean }>({});
  const particlesRef = useRef<VoxelParticle[]>([]);
  
  // Mobile look dragging helper state
  const isDraggingCameraRef = useRef<boolean>(false);
  const previousTouchRef = useRef<{ x: number; y: number } | null>(null);
  const targetRotationRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Floating active TNT array for blinking physics
  const activeTntsRef = useRef<{
    id: string;
    mesh: THREE.Mesh;
    flashCount: number;
    pos: { x: number; y: number; z: number };
  }[]>([]);

  // 1. Initial WebCL scene setup
  useEffect(() => {
    if (!containerRef.current) return;

    // A. Setup Scene and Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Use exponential fog like Minecraft chunk horizon loading
    const initialConfig = SKY_COLORS[lightMode];
    scene.background = new THREE.Color(initialConfig.sky);
    scene.fog = new THREE.FogExp2(initialConfig.sky, 0.045);

    const camera = new THREE.PerspectiveCamera(
      70,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      100
    );
    camera.rotation.order = 'YXZ'; // Important order for horizontal/vertical rotation
    cameraRef.current = camera;

    // B. Setup Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // C. Setup Ambient & Directional Lights
    const ambientLight = new THREE.AmbientLight(initialConfig.ground, 0.4);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    const sunLight = new THREE.DirectionalLight(initialConfig.light, 0.8);
    sunLight.position.set(10, 40, 20);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 80;
    const d = 25;
    sunLight.shadow.camera.left = -d;
    sunLight.shadow.camera.right = d;
    sunLight.shadow.camera.top = d;
    sunLight.shadow.camera.bottom = -d;
    scene.add(sunLight);
    lightRef.current = sunLight;

    // D. Shared Geometry for box sizes
    const blockGeom = new THREE.BoxGeometry(1, 1, 1);
    blockGeometryRef.current = blockGeom;

    // E. Setup Selection Red Outline box selector
    const outlineGeom = new THREE.EdgesGeometry(blockGeom);
    const outlineMat = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 });
    const selectionOutline = new THREE.LineSegments(outlineGeom, outlineMat);
    selectionOutline.visible = false;
    scene.add(selectionOutline);
    selectionOutlineRef.current = selectionOutline;

    // F. Raycaster for looking at blocks
    pointerRaycasterRef.current = new THREE.Raycaster();
    pointerRaycasterRef.current.far = 6; // Range threshold for break/place

    // G. Generate default landscape
    generateTerrain(worldConfig);

    // H. Event listeners for keyboard
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      keysPressedRef.current[key] = true;
      
      // Numeric Hotbar selection
      const num = parseInt(key);
      if (num >= 1 && num <= 9) {
        const blocks: BlockType[] = ['grass', 'dirt', 'stone', 'wood', 'leaves', 'glass', 'brick', 'tnt', 'bedrock', 'gold'];
        const selected = blocks[num - 1];
        if (selected && (window as any).setGameBlockType) {
          (window as any).setGameBlockType(selected);
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressedRef.current[e.key.toLowerCase()] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // I. Window Resize listener
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(containerRef.current);

    // J. Start Animation Game Frame Loop
    let animationFrameId = requestAnimationFrame(animate);

    // G. Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      resizeObserver.disconnect();
      
      // Clear geometries
      blockGeom.dispose();
      outlineGeom.dispose();
      outlineMat.dispose();
      
      // Clean up blocks
      blocksMapRef.current.forEach((val) => {
        scene.remove(val.mesh);
        if (Array.isArray(val.mesh.material)) {
          val.mesh.material.forEach((m) => m.dispose());
        } else {
          val.mesh.material.dispose();
        }
      });
      blocksMapRef.current.clear();

      activeTntsRef.current.forEach((t) => {
        scene.remove(t.mesh);
        if (Array.isArray(t.mesh.material)) {
          t.mesh.material.forEach(m => m.dispose());
        } else {
          t.mesh.material.dispose();
        }
      });
      activeTntsRef.current = [];

      particlesRef.current.forEach((p) => {
        scene.remove(p.mesh);
        (p.mesh.material as THREE.Material).dispose();
      });
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (containerRef.current && rendererRef.current.domElement) {
          try {
            containerRef.current.removeChild(rendererRef.current.domElement);
          } catch(err) { /* silent check */ }
        }
      }
    };
  }, []);

  // Update setGameBlockType handle globally so hotkey updates it
  useEffect(() => {
    (window as any).setGameBlockType = (type: BlockType) => {
      const activeEl = document.getElementById(`hotbar-slot-${type}`);
      if (activeEl) activeEl.click();
    };
  }, [selectedBlock]);

  // Handle ambient sun cycle updates
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const config = SKY_COLORS[lightMode];
    
    // Animate color transition
    const duration = 800; // ms transition animation
    const startTime = Date.now();
    const origSky = scene.background instanceof THREE.Color ? scene.background.clone() : new THREE.Color();
    const destSky = new THREE.Color(config.sky);

    const stepTransition = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const nextSky = origSky.clone().lerp(destSky, progress);
      scene.background = nextSky;
      scene.fog = new THREE.FogExp2(nextSky.getHex(), 0.045);
      
      if (lightRef.current) {
        lightRef.current.color.lerp(new THREE.Color(config.light), progress);
        lightRef.current.intensity = config.intensity * 0.8;
      }
      if (ambientLightRef.current) {
        ambientLightRef.current.color.lerp(new THREE.Color(config.ground), progress);
      }
      
      if (progress < 1) {
        requestAnimationFrame(stepTransition);
      }
    };
    stepTransition();
  }, [lightMode]);


  // Helper trigger block updates based on coordinates keying
  const getBlockKey = (x: number, y: number, z: number) => {
    return `${Math.round(x)},${Math.round(y)},${Math.round(z)}`;
  };

  const getBlockAt = (x: number, y: number, z: number): { type: BlockType; mesh: THREE.Mesh } | undefined => {
    return blocksMapRef.current.get(getBlockKey(x, y, z));
  };

  // Check custom coordinates collision bounding box
  const hasBlockAt = (x: number, y: number, z: number): boolean => {
    return blocksMapRef.current.has(getBlockKey(x, y, z));
  };

  // Full terrain procedural landscape generator
  const generateTerrain = (config: WorldConfig) => {
    const scene = sceneRef.current;
    if (!scene) return;

    // A. Dispose old blocks
    blocksMapRef.current.forEach((val) => {
      scene.remove(val.mesh);
      if (Array.isArray(val.mesh.material)) {
        val.mesh.material.forEach((m) => m.dispose());
      } else {
        val.mesh.material.dispose();
      }
    });
    blocksMapRef.current.clear();

    const minX = -Math.floor(config.sizeX / 2);
    const maxX = Math.floor(config.sizeX / 2);
    const minZ = -Math.floor(config.sizeZ / 2);
    const maxZ = Math.floor(config.sizeZ / 2);
    
    // Seed noise parameter offsets
    const seedNum = config.seed.split('').reduce((acc, val) => acc + val.charCodeAt(0), 0) || 5;
    
    // B. Build map voxels row by row
    for (let x = minX; x <= maxX; x++) {
      for (let z = minZ; z <= maxZ; z++) {
        let height = 0;
        
        if (config.type === 'flat') {
          height = 0;
        } else if (config.type === 'hills') {
          // Complex hilly waves using sine harmonics
          const nx = x + seedNum;
          const nz = z - seedNum;
          height = Math.floor(
            Math.sin(nx * 0.2) * Math.cos(nz * 0.2) * 3 +
            Math.sin(nx * 0.08) * 1.5 +
            3
          );
        } else if (config.type === 'mountains') {
          // Sharp ridges and deep valleys
          const nx = x * 0.12 + (seedNum % 7);
          const nz = z * 0.12 - (seedNum % 3);
          height = Math.floor(
            (Math.sin(nx) * Math.cos(nz) + Math.cos(nx * 0.5) * Math.sin(nz * 0.5)) * 6 + 5
          );
        } else if (config.type === 'caves') {
          // Hollow layered look
          const nx = x + seedNum;
          const nz = z;
          height = Math.floor(Math.cos(nx * 0.15) * Math.sin(nz * 0.15) * 2 + 3);
        }

        // Clamp height
        height = Math.max(0, Math.min(height, config.heightLimit));

        // Create column of block types
        for (let y = 0; y <= height; y++) {
          let blockType: BlockType = 'dirt';
          
          if (y === height) {
            // Grass top layer
            blockType = 'grass';
          } else if (y >= height - 2) {
            blockType = 'dirt';
          } else if (y === 0) {
            // Unbreakable core bottom
            blockType = 'bedrock';
          } else {
            blockType = 'stone';
          }

          // In cave worlds, omit specific middle ranges to draw empty cave spaces
          if (config.type === 'caves' && y > 1 && y < height && (Math.sin(x*0.4) + Math.cos(z*0.4) > 0.4)) {
            // Seed a gold block at bottom instead of stone!
            if (y === 1 && Math.random() < 0.25) {
              createVoxelMesh(x, y, z, 'gold');
            }
            continue; // hollow space
          }

          createVoxelMesh(x, y, z, blockType);
        }
      }
    }

    // C. SPAWN TREES (Add 3-5 procedural trees in random spots with leaves)
    if (config.type !== 'flat') {
      const treeCount = Math.floor(config.sizeX * 0.15) + 2;
      for (let t = 0; t < treeCount; t++) {
        const tx = Math.floor(Math.random() * (config.sizeX - 4)) - Math.floor(config.sizeX/2) + 2;
        const tz = Math.floor(Math.random() * (config.sizeZ - 4)) - Math.floor(config.sizeZ/2) + 2;
        
        // Find highest block to place tree trunk
        let highestY = -1;
        for (let y = config.heightLimit; y >= 0; y--) {
          if (hasBlockAt(tx, y, tz)) {
            highestY = y;
            break;
          }
        }

        // Only plant on solid grass
        const topBlock = getBlockAt(tx, highestY, tz);
        if (highestY !== -1 && topBlock && topBlock.type === 'grass') {
          // Plant tree!
          const trunkHeight = 3 + Math.floor(Math.random() * 2);
          for (let ty = 1; ty <= trunkHeight; ty++) {
            createVoxelMesh(tx, highestY + ty, tz, 'wood');
          }
          // Leaves crown
          const crownY = highestY + trunkHeight + 1;
          for (let lx = -2; lx <= 2; lx++) {
            for (let lz = -2; lz <= 2; lz++) {
              for (let ly = -1; ly <= 1; ly++) {
                // Avoid replacing wood trunk
                if (lx === 0 && lz === 0 && ly <= 0) continue;
                // Round corner leaves shaping
                if (Math.abs(lx) + Math.abs(lz) + Math.abs(ly) > 3) continue;
                
                const finalX = tx + lx;
                const finalY = crownY + ly;
                const finalZ = tz + lz;
                
                if (!hasBlockAt(finalX, finalY, finalZ)) {
                  createVoxelMesh(finalX, finalY, finalZ, 'leaves');
                }
              }
            }
          }
        }
      }
    }

    // D. Safe position player securely above highest surface voxel
    let spawnY = 6;
    for (let y = config.heightLimit; y >= 0; y--) {
      if (hasBlockAt(0, y, 0)) {
        spawnY = y + 2; // Head height clear
        break;
      }
    }
    playerPosRef.current.set(0, spawnY, 0);
    playerVelRef.current.set(0, 0, 0);
    targetRotationRef.current = { x: 0, y: 0 };
    if (cameraRef.current) {
      cameraRef.current.rotation.set(0, 0, 0);
    }
  };

  // Mesh creation function
  const createVoxelMesh = (x: number, y: number, z: number, type: BlockType): THREE.Mesh => {
    const scene = sceneRef.current!;
    const geom = blockGeometryRef.current!;
    const materials = getCubeMaterials(type);

    const mesh = new THREE.Mesh(geom, materials);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    
    // Store type in custom userData
    mesh.userData = { coords: { x, y, z }, blockType: type };
    
    scene.add(mesh);
    blocksMapRef.current.set(getBlockKey(x, y, z), { type, mesh });
    return mesh;
  };

  // Spawn break debris particles for tactile satisfying game feedback
  const spawnBreakParticles = (x: number, y: number, z: number, type: BlockType) => {
    const scene = sceneRef.current;
    if (!scene) return;

    // Use a small solid-color mesh for particle shards
    const particleGeom = new THREE.BoxGeometry(0.15, 0.15, 0.15);
    
    // Extract base color based on block type
    let color = 0x885533; // Brown default
    if (type === 'grass') color = 0x33aa33;
    if (type === 'stone' || type === 'bedrock') color = 0x888888;
    if (type === 'leaves') color = 0x228822;
    if (type === 'glass') color = 0xbbffff;
    if (type === 'brick') color = 0xaa4433;
    if (type === 'tnt') color = 0xdd2222;
    if (type === 'gold') color = 0xffdd00;

    const particleMat = new THREE.MeshStandardMaterial({
      color: color,
      roughness: 0.9,
    });

    const qty = type === 'tnt' ? 30 : 12;

    for (let i = 0; i < qty; i++) {
      const pMesh = new THREE.Mesh(particleGeom, particleMat);
      
      // Random position inside original block unit
      pMesh.position.set(
        x + (Math.random() - 0.5) * 0.8,
        y + (Math.random() - 0.5) * 0.8,
        z + (Math.random() - 0.5) * 0.8
      );
      
      scene.add(pMesh);

      // Random outwards velocity vectors
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 0.15,
        (Math.random() * 0.2) + 0.05,
        (Math.random() - 0.5) * 0.15
      );

      particlesRef.current.push({
        mesh: pMesh,
        velocity: vel,
        life: 0,
        maxLife: 25 + Math.floor(Math.random() * 15),
      });
    }
  };

  // TRIGGER JUMP ACTION
  const triggerJump = useCallback(() => {
    if (onGroundRef.current || isFlying) {
      if (soundEnabled) playJumpSound();
      playerVelRef.current.y = isFlying ? 0.14 : 0.22;
    }
  }, [isFlying, soundEnabled]);

  // ACTIVATE TNT ARMING MECHANICS
  const armTntBlock = (x: number, y: number, z: number, key: string) => {
    const scene = sceneRef.current;
    if (!scene) return;

    const targetInfo = blocksMapRef.current.get(key);
    if (!targetInfo) return;

    // A. Extract TNT mesh and remove it from colliders so player can walk through it
    const activeMesh = targetInfo.mesh;
    blocksMapRef.current.delete(key);

    const activeTntId = `tnt_${Date.now()}_${Math.random()}`;
    activeTntsRef.current.push({
      id: activeTntId,
      mesh: activeMesh,
      flashCount: 0,
      pos: { x, y, z },
    });

    // B. Trigger pulsing alarm sequence
    let count = 0;
    const maxFlashes = 9;

    const runPulse = () => {
      const activeObj = activeTntsRef.current.find(t => t.id === activeTntId);
      if (!activeObj) return;

      count++;
      activeObj.flashCount = count;

      if (count >= maxFlashes) {
        // Trigger Explosion!
        explodeTntAt(x, y, z, activeTntId);
      } else {
        // Sound and Material flash glow toggle
        if (soundEnabled) playMuffleSound();
        
        // Swap materials between default TNT texture and glowing white
        const isWhite = count % 2 === 1;
        if (isWhite) {
          const whiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
          activeMesh.material = Array(6).fill(whiteMat);
        } else {
          activeMesh.material = getCubeMaterials('tnt');
        }

        // Slightly expand size to show armed pressure buildup
        const scaleFactor = 1.0 + count * 0.025;
        activeMesh.scale.set(scaleFactor, scaleFactor, scaleFactor);

        setTimeout(runPulse, 200);
      }
    };
    runPulse();
  };

  // TNT DETONATION
  const explodeTntAt = (cx: number, cy: number, cz: number, armedId: string) => {
    const scene = sceneRef.current;
    if (!scene) return;

    // A. Remove original animated armed active TNT box
    const idx = activeTntsRef.current.findIndex(t => t.id === armedId);
    if (idx !== -1) {
      const active = activeTntsRef.current[idx];
      scene.remove(active.mesh);
      if (Array.isArray(active.mesh.material)) {
        active.mesh.material.forEach(m => m.dispose());
      } else {
        active.mesh.material.dispose();
      }
      activeTntsRef.current.splice(idx, 1);
    }

    if (soundEnabled) {
      playExplosionSound();
    }

    setStats((prev) => ({ ...prev, tntExploded: prev.tntExploded + 1 }));

    // B. Raycast sphere radius destruction
    const radius = 3;
    const destroyedBlocks: { x: number; y: number; z: number; type: BlockType }[] = [];

    blocksMapRef.current.forEach((val, key) => {
      const { x, y, z } = val.mesh.userData.coords;
      const dx = x - cx;
      const dy = y - cy;
      const dz = z - cz;
      const distance = Math.sqrt(dx*dx + dy*dy + dz*dz);

      if (distance <= radius && val.type !== 'bedrock') {
        destroyedBlocks.push({ x, y, z, type: val.type });
      }
    });

    // Delete blocks
    destroyedBlocks.forEach((b) => {
      const key = getBlockKey(b.x, b.y, b.z);
      const val = blocksMapRef.current.get(key);
      if (val) {
        scene.remove(val.mesh);
        if (Array.isArray(val.mesh.material)) {
          val.mesh.material.forEach(m => m.dispose());
        } else {
          val.mesh.material.dispose();
        }
        blocksMapRef.current.delete(key);
        spawnBreakParticles(b.x, b.y, b.z, b.type);
      }
    });

    // C. Giant glowing flash particle sphere effect
    const flashGeom = new THREE.SphereGeometry(radius * 1.1, 16, 16);
    const flashMat = new THREE.MeshBasicMaterial({
      color: 0xffaa44,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const flashSphere = new THREE.Mesh(flashGeom, flashMat);
    flashSphere.position.set(cx, cy, cz);
    scene.add(flashSphere);

    // Fade and expand the dome
    let scale = 0.5;
    const animateFlash = () => {
      scale += 0.08;
      flashSphere.scale.set(scale, scale, scale);
      flashMat.opacity -= 0.08;
      
      if (flashMat.opacity > 0) {
        requestAnimationFrame(animateFlash);
      } else {
        scene.remove(flashSphere);
        flashGeom.dispose();
        flashMat.dispose();
      }
    };
    animateFlash();

    // D. Explosion impulse kickback on player if they're near
    const dpx = playerPosRef.current.x - cx;
    const dpy = playerPosRef.current.y - cy;
    const dpz = playerPosRef.current.z - cz;
    const playerDist = Math.sqrt(dpx*dpx + dpy*dpy + dpz*dpz);
    
    if (playerDist < radius + 1.5) {
      const impulsePower = (radius + 2 - playerDist) * 0.15;
      const dir = new THREE.Vector3(dpx, dpy + 0.5, dpz).normalize();
      playerVelRef.current.addScaledVector(dir, impulsePower);
    }
  };

  // DIRECT ACTION MINE/BUILD TRIGGERS DIRECTED AT CAMERA HORIZON
  const performActionRaycast = (type: 'break' | 'place') => {
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const raycaster = pointerRaycasterRef.current;
    
    if (!scene || !camera || !raycaster) return;

    // Raycast straight forward from center point of screen camera
    raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);

    // Find intersected meshes excluding skybox
    const meshes = Array.from(blocksMapRef.current.values()).map(v => (v as { type: BlockType; mesh: THREE.Mesh }).mesh);
    const intersects = raycaster.intersectObjects(meshes);

    if (intersects.length > 0) {
      const hit = intersects[0];
      const targetMesh = hit.object as THREE.Mesh;
      const { x, y, z } = targetMesh.userData.coords;
      const key = getBlockKey(x, y, z);
      const blockInfo = blocksMapRef.current.get(key);

      if (type === 'break' && blockInfo) {
        if (blockInfo.type === 'bedrock') {
          // Bedrock is unbreakable
          if (soundEnabled) playMuffleSound();
          return;
        }

        // Check if armed TNT!
        if (blockInfo.type === 'tnt') {
          armTntBlock(x, y, z, key);
        } else {
          // standard break block
          scene.remove(targetMesh);
          if (Array.isArray(targetMesh.material)) {
            targetMesh.material.forEach((m) => m.dispose());
          } else {
            targetMesh.material.dispose();
          }
          blocksMapRef.current.delete(key);

          // Update stats and trigger audio
          setStats((prev) => ({ ...prev, blocksBroken: prev.blocksBroken + 1 }));
          if (soundEnabled) playBreakSound(blockInfo.type);
          spawnBreakParticles(x, y, z, blockInfo.type);
        }
      } else if (type === 'place') {
        const face = hit.face;
        if (!face) return;

        // Calculate adjacent block positioning using bounding normal vector
        const nx = x + Math.round(face.normal.x);
        const ny = y + Math.round(face.normal.y);
        const nz = z + Math.round(face.normal.z);

        // Check height boundary
        if (ny < 0 || ny > worldConfig.heightLimit) return;

        // Prevent placing inside solid collders or existing voxels
        if (hasBlockAt(nx, ny, nz)) return;

        // Prevent placing inside actual player body bounding cylinder coordinate ranges
        const px = Math.round(playerPosRef.current.x);
        const py = Math.floor(playerPosRef.current.y);
        const pHeadY = Math.floor(playerPosRef.current.y + 0.9);
        const pz = Math.round(playerPosRef.current.z);

        if (nx === px && nz === pz && (ny === py || ny === pHeadY)) {
          // can't place block inside player
          return;
        }

        // Spawn new block style
        createVoxelMesh(nx, ny, nz, selectedBlock);
        
        // Audio tactile pops
        if (soundEnabled) playPlaceSound();
        setStats((prev) => ({ ...prev, blocksPlaced: prev.blocksPlaced + 1 }));
      }
    }
  };

  // TOUCH DISPATCHER FOR DIRECT SCREEN BLOCK INTERACTION
  const handleCanvasClick = (e: React.MouseEvent) => {
    // Rely exclusively on pointer action triggers
    if (document.pointerLockElement) {
      // Native desktop HUD actions
      if (e.button === 0) {
        // click left breaker
        performActionRaycast('break');
      } else if (e.button === 2) {
        // right click placer
        performActionRaycast('place');
      }
    } else {
      // Pointer lock disabled, either user clicked/tapped to lock on PC OR clicked on mobile screen
      const canvasEl = rendererRef.current?.domElement;
      if (canvasEl && !('ontouchstart' in window)) {
        // Desktop support: Request pointer lock
        canvasEl.requestPointerLock();
      } else {
        // Mobile tap: execute selected active action mode targeting centered cursor
        performActionRaycast(actionMode);
      }
    }
  };

  // MOBILE DRAG TO LOOK LOGIC
  const handleTouchStart = (e: React.TouchEvent) => {
    // Avoid capturing inputs on joysticks or UI elements
    const element = e.target as HTMLElement;
    if (element.closest('#virtual-joystick') || element.closest('#hotbar') || element.closest('button')) {
      return;
    }

    isDraggingCameraRef.current = true;
    const touch = e.touches[0];
    previousTouchRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingCameraRef.current || !previousTouchRef.current || !cameraRef.current) return;

    const touch = e.touches[0];
    const dx = touch.clientX - previousTouchRef.current.x;
    const dy = touch.clientY - previousTouchRef.current.y;

    previousTouchRef.current = { x: touch.clientX, y: touch.clientY };

    // Apply swipe direction to target look angles
    targetRotationRef.current.y -= dx * 0.007; // Yaw
    targetRotationRef.current.x -= dy * 0.007; // Pitch

    // Clamp vertical look pitch to prevent neck snapping flips
    targetRotationRef.current.x = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, targetRotationRef.current.x));

    cameraRef.current.rotation.y = targetRotationRef.current.y;
    cameraRef.current.rotation.x = targetRotationRef.current.x;
  };

  const handleTouchEnd = () => {
    isDraggingCameraRef.current = false;
    previousTouchRef.current = null;
  };

  // INJECT INSTANCE EXPORTS OUTWARD TO MENU CALLS
  useImperativeHandle(ref, () => ({
    triggerJump() {
      triggerJump();
    },
    clearWorld() {
      generateTerrain(worldConfig);
    },
    saveWorld() {
      try {
        const serializedBlocks: { x: number; y: number; z: number; type: BlockType }[] = [];
        blocksMapRef.current.forEach((val) => {
          const { x, y, z } = val.mesh.userData.coords;
          serializedBlocks.push({ x, y, z, type: val.type });
        });
        localStorage.setItem('minecraft_saved_config', JSON.stringify(worldConfig));
        localStorage.setItem('minecraft_saved_blocks', JSON.stringify(serializedBlocks));
        alert('Minecraft world successfully saved in your browser storage! 🌱');
      } catch (err) {
        alert('Failed saving block arrays to localstorage');
      }
    },
    loadWorld() {
      const scene = sceneRef.current;
      if (!scene) return;
      
      const savedConfigStr = localStorage.getItem('minecraft_saved_config');
      const savedBlocksStr = localStorage.getItem('minecraft_saved_blocks');
      
      if (!savedBlocksStr) {
        alert('No saved world found! Compile a build and save one first.');
        return;
      }

      try {
        // Clear old blocks first
        blocksMapRef.current.forEach((val) => {
          scene.remove(val.mesh);
          if (Array.isArray(val.mesh.material)) {
            val.mesh.material.forEach(m => m.dispose());
          } else {
            val.mesh.material.dispose();
          }
        });
        blocksMapRef.current.clear();

        // Restore custom config if saved
        if (savedConfigStr) {
          const savedConfig = JSON.parse(savedConfigStr);
          onUpdateConfig(savedConfig);
        }

        const savedBlocks: { x: number; y: number; z: number; type: BlockType }[] = JSON.parse(savedBlocksStr);
        savedBlocks.forEach((b) => {
          createVoxelMesh(b.x, b.y, b.z, b.type);
        });

        // Safe player position
        let spawnY = 8;
        for (let y = worldConfig.heightLimit; y >= 0; y--) {
          if (hasBlockAt(0, y, 0)) {
            spawnY = y + 2;
            break;
          }
        }
        playerPosRef.current.set(0, spawnY, 0);
        playerVelRef.current.set(0,0,0);
        
        alert('Saved voxel world restored successfully! 🪵');
      } catch (err) {
        alert('Error parsing custom stored world configuration.');
      }
    }
  }));

  // MAIN RUNTIME RENDER TICK LOOP WITH GRAVITY PHYSICS & COLLISIONS
  const animate = () => {
    requestAnimationFrame(animate);

    const camera = cameraRef.current;
    const scene = sceneRef.current;
    const renderer = rendererRef.current;
    const raycaster = pointerRaycasterRef.current;
    const selectionOutline = selectionOutlineRef.current;

    if (!scene || !camera || !renderer) return;

    // ==========================================
    // A. WASD & MOUSE / MOBILE PHYSICS
    // ==========================================
    const moveVector = new THREE.Vector3(0, 0, 0);
    
    // Desktop movement
    if (keysPressedRef.current['w'] || keysPressedRef.current['arrowup']) moveVector.z -= 1.0;
    if (keysPressedRef.current['s'] || keysPressedRef.current['arrowdown']) moveVector.z += 1.0;
    if (keysPressedRef.current['a'] || keysPressedRef.current['arrowleft']) moveVector.x -= 1.0;
    if (keysPressedRef.current['d'] || keysPressedRef.current['arrowright']) moveVector.x += 1.0;

    // Mobile movement merge (Joystick handles dx, dy)
    if (joystickState.moveX !== 0 || joystickState.moveY !== 0) {
      moveVector.x = joystickState.moveX;
      moveVector.z = -joystickState.moveY; // Invert Joystick Y vector
    }

    moveVector.normalize();

    // Flight mode vertical control mapping
    if (isFlying) {
      if (keysPressedRef.current[' '] || keysPressedRef.current['spacebar']) {
        moveVector.y += 0.8;
      }
      if (keysPressedRef.current['shift']) {
        moveVector.y -= 0.8;
      }
    }

    // Adapt direction coordinates into player's horizontal viewing perspective direction
    const direction = new THREE.Vector3();
    const yaw = camera.rotation.y;
    
    direction.x = moveVector.x * Math.cos(yaw) + moveVector.z * Math.sin(yaw);
    direction.y = isFlying ? moveVector.y * 0.12 : 0;
    direction.z = moveVector.z * Math.cos(yaw) - moveVector.x * Math.sin(yaw);

    const walkSpeed = isFlying ? 0.18 : 0.085;
    playerVelRef.current.x = direction.x * walkSpeed;
    playerVelRef.current.z = direction.z * walkSpeed;

    // Vertial gravity controls
    if (!isFlying) {
      playerVelRef.current.y -= 0.012; // Gravity force
      playerVelRef.current.y = Math.max(-0.4, playerVelRef.current.y); // clamp terminal velocity
    } else {
      if (direction.y !== 0) {
        playerVelRef.current.y = direction.y;
      } else {
        playerVelRef.current.y *= 0.82; // drag dampen flight drift
      }
    }

    // ==========================================
    // B. VOXEL BLOCK PLANE COLLISION RESOLUTION
    // ==========================================
    // Bounding Box Dimensions: width: 0.45, height: 1.8 (head top to toes)
    const pw = 0.22; // half-width
    const ph = 1.6;  // exact height

    const pos = playerPosRef.current;
    const vel = playerVelRef.current;

    // Predict Y position collision first
    const nextY = pos.y + vel.y;
    onGroundRef.current = false;

    // Check corners collision to prevent clipping on Y
    let collideY = false;
    const cornersY = [
      { x: pos.x - pw, z: pos.z - pw },
      { x: pos.x + pw, z: pos.z - pw },
      { x: pos.x - pw, z: pos.z + pw },
      { x: pos.x + pw, z: pos.z + pw },
    ];

    if (vel.y < 0) {
      // Floor checking
      for (const edge of cornersY) {
        if (hasBlockAt(edge.x, nextY, edge.z)) {
          collideY = true;
          break;
        }
      }
      if (collideY) {
        pos.y = Math.ceil(nextY); // Align player nicely on block surface
        vel.y = 0;
        onGroundRef.current = true;
      } else {
        pos.y = nextY;
      }
    } else {
      // Ceil ceiling checking
      const headY = nextY + ph;
      for (const edge of cornersY) {
        if (hasBlockAt(edge.x, headY, edge.z)) {
          collideY = true;
          break;
        }
      }
      if (collideY) {
        pos.y = Math.floor(headY) - ph - 0.05;
        vel.y = 0;
      } else {
        pos.y = nextY;
      }
    }

    // Predict X position collision
    const nextX = pos.x + vel.x;
    let collideX = false;
    const testHeights = [0.1, 0.8, 1.5]; // Feet, hip, head check lines

    for (const h of testHeights) {
      if (
        hasBlockAt(nextX - pw, pos.y + h, pos.z - pw) ||
        hasBlockAt(nextX + pw, pos.y + h, pos.z - pw) ||
        hasBlockAt(nextX - pw, pos.y + h, pos.z + pw) ||
        hasBlockAt(nextX + pw, pos.y + h, pos.z + pw)
      ) {
        collideX = true;
        break;
      }
    }

    if (!collideX) {
      pos.x = nextX;
    } else {
      vel.x = 0;
    }

    // Predict Z position collision
    const nextZ = pos.z + vel.z;
    let collideZ = false;

    for (const h of testHeights) {
      if (
        hasBlockAt(pos.x - pw, pos.y + h, nextZ - pw) ||
        hasBlockAt(pos.x + pw, pos.y + h, nextZ - pw) ||
        hasBlockAt(pos.x - pw, pos.y + h, nextZ + pw) ||
        hasBlockAt(pos.x + pw, pos.y + h, nextZ + pw)
      ) {
        collideZ = true;
        break;
      }
    }

    if (!collideZ) {
      pos.z = nextZ;
    } else {
      vel.z = 0;
    }

    // Prevent player from falling into the dark void bottomless abyss
    if (pos.y < -5) {
      pos.set(0, 10, 0);
      vel.set(0, 0, 0);
      if (soundEnabled) playMuffleSound();
    }

    // Track statistics: distance traveled
    if (moveVector.lengthSq() > 0) {
      setStats((prev) => ({ ...prev, distanceTraveled: prev.distanceTraveled + 1 }));
    }

    // Sync camera coordinates directly into player first-person eye position
    camera.position.set(pos.x, pos.y + 1.5, pos.z);

    // Communicate updated coordinates back to HUD safely once sound/UI limits
    setCurrentPos({
      x: Math.round(pos.x),
      y: Math.round(pos.y),
      z: Math.round(pos.z),
    });

    // ==========================================
    // C. ACTIVE BLOCK SELECTION TARGET INDICATOR
    // ==========================================
    if (raycaster) {
      raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
      const meshes = Array.from(blocksMapRef.current.values()).map(v => (v as { type: BlockType; mesh: THREE.Mesh }).mesh);
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        const hit = intersects[0];
        const targetMesh = hit.object;
        
        if (selectionOutline) {
          selectionOutline.position.copy(targetMesh.position);
          selectionOutline.visible = true;
        }
      } else {
        if (selectionOutline) selectionOutline.visible = false;
      }
    }

    // ==========================================
    // D. REFRESH ACTIVE PARTICLES PHYSICS
    // ==========================================
    for (let i = particlesRef.current.length - 1; i >= 0; i--) {
      const p = particlesRef.current[i];
      p.life++;
      
      // Gravity and air drag damp on particles
      p.velocity.y -= 0.005;
      p.mesh.position.add(p.velocity);
      p.mesh.rotation.x += 0.05;
      p.mesh.rotation.y += 0.05;

      const progress = p.life / p.maxLife;
      // Shrink size on death
      const s = 1.0 - progress;
      p.mesh.scale.set(s, s, s);

      if (p.life >= p.maxLife) {
        scene.remove(p.mesh);
        (p.mesh.material as THREE.Material).dispose();
        particlesRef.current.splice(i, 1);
      }
    }

    // ==========================================
    // E. render scene
    // ==========================================
    renderer.render(scene, camera);
  };

  return (
    <div
      id={id || 'game-3d-canvas-wrapper'}
      ref={containerRef}
      className="w-full h-full cursor-crosshair bg-sky-200 select-none overflow-hidden touch-none outline-none"
      onMouseDown={handleCanvasClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    />
  );
});
