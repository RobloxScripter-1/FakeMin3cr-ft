/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as THREE from 'three';

// Generate dynamic pixel-art checkerboard textures for authentic retro style
export function createMinecraftTexture(type: string): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 16;
  canvas.height = 16;
  const ctx = canvas.getContext('2d')!;
  
  // Custom drawing matching retro blocks
  switch (type) {
    case 'grass_top':
      // Vivid forest green with pixel noise
      for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
          const shade = 100 + Math.random() * 45;
          ctx.fillStyle = `rgb(${Math.floor(shade * 0.4)}, ${Math.floor(shade)}, ${Math.floor(shade * 0.3)})`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
      break;

    case 'dirt':
      // Rich earthy brown tones with rocky gravel spots
      for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
          const noise = Math.random() * 30;
          const isRock = Math.random() < 0.15;
          if (isRock) {
            ctx.fillStyle = `rgb(${70 - noise}, ${50 - noise}, ${40 - noise})`;
          } else {
            ctx.fillStyle = `rgb(${110 - noise}, ${75 - noise}, ${50 - noise})`;
          }
          ctx.fillRect(x, y, 1, 1);
        }
      }
      break;

    case 'grass_side':
      // Top dirt brown base
      for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
          const noise = Math.random() * 25;
          ctx.fillStyle = `rgb(${110 - noise}, ${75 - noise}, ${50 - noise})`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
      // Draped grass tassels at the top (irregular height)
      for (let x = 0; x < 16; x++) {
        const grassHeight = 4 + Math.floor(Math.sin(x * 12.0) * 1.5 + Math.random() * 2);
        for (let y = 0; y < grassHeight; y++) {
          const shade = 100 + Math.random() * 40;
          ctx.fillStyle = `rgb(${Math.floor(shade * 0.4)}, ${Math.floor(shade)}, ${Math.floor(shade * 0.3)})`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
      break;

    case 'stone':
      // Natural grey granite and schist texture
      for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
          const val = 110 + Math.floor(Math.random() * 40);
          ctx.fillStyle = `rgb(${val}, ${val}, ${val + 4})`; // slight blue-grey tint
          ctx.fillRect(x, y, 1, 1);
        }
      }
      // Inner veins
      ctx.fillStyle = 'rgba(70,70,70,0.4)';
      ctx.fillRect(2, 3, 4, 1);
      ctx.fillRect(3, 4, 1, 3);
      ctx.fillRect(10, 8, 3, 1);
      ctx.fillRect(11, 9, 1, 4);
      break;

    case 'wood':
      // Oak wood grain textures
      for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
          // Horizontal wood planks
          const row = Math.floor(y / 4);
          const noise = Math.random() * 15;
          ctx.fillStyle = `rgb(${150 - row * 15 - noise}, ${100 - row * 10 - noise}, ${60 - row * 7 - noise})`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
      // Plank lines
      ctx.fillStyle = 'rgba(50,25,10,0.5)';
      ctx.fillRect(0, 3, 16, 1);
      ctx.fillRect(0, 7, 16, 1);
      ctx.fillRect(0, 11, 16, 1);
      ctx.fillRect(0, 15, 16, 1);
      ctx.fillRect(6, 0, 1, 4);
      ctx.fillRect(11, 4, 1, 4);
      ctx.fillRect(4, 8, 1, 4);
      ctx.fillRect(13, 12, 1, 4);
      break;

    case 'leaves':
      // Lush leaf cluster texture
      for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
          const isHole = Math.random() < 0.15;
          if (isHole) {
            ctx.fillStyle = 'rgba(0,0,0,0)'; // transparent leaf holes
            ctx.clearRect(x, y, 1, 1);
          } else {
            const shade = 70 + Math.random() * 50;
            ctx.fillStyle = `rgb(${Math.floor(shade * 0.15)}, ${Math.floor(shade)}, ${Math.floor(shade * 0.2)})`;
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
      break;

    case 'glass':
      // Icey blue outline with window sparkles
      ctx.fillStyle = 'rgba(230, 245, 255, 0.15)';
      ctx.fillRect(0, 0, 16, 16);
      
      ctx.fillStyle = 'rgba(150, 220, 255, 0.6)';
      ctx.strokeRect(0, 0, 16, 16);
      
      // Specular reflections
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.fillRect(3, 3, 4, 1);
      ctx.fillRect(3, 4, 1, 3);
      ctx.fillRect(10, 10, 3, 1);
      break;

    case 'brick':
      // Red mortar brick pattern
      ctx.fillStyle = '#6d757a'; // Mortar light grey
      ctx.fillRect(0, 0, 16, 16);
      
      // Drawing individual bricks
      for (let row = 0; row < 4; row++) {
        const yCoord = row * 4;
        const offset = row % 2 === 0 ? 0 : 4;
        
        ctx.fillStyle = '#b73c24'; // Red brick
        // Draw brick shading
        for (let col = 0; col < 2; col++) {
          let xCoord = col * 8 + offset;
          if (xCoord >= 16) xCoord -= 16;
          
          // Outer brick body
          ctx.fillStyle = `rgb(${155 + Math.random() * 30}, ${40 + Math.random() * 15}, ${20 + Math.random() * 10})`;
          ctx.fillRect(xCoord, yCoord, 7, 3);
          
          // Shadow bevel
          ctx.fillStyle = 'rgba(0,0,0,0.15)';
          ctx.fillRect(xCoord, yCoord + 2, 7, 1);
          ctx.fillRect(xCoord + 6, yCoord, 1, 3);
        }
      }
      break;

    case 'tnt':
      // High details TNT graphics
      for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
          const isStripe = y >= 5 && y <= 10;
          if (isStripe) {
            // White stripe for block naming
            ctx.fillStyle = '#ffffff';
          } else {
            // Red dynamite sticks with fuse shadows
            const xLine = x % 4 === 0;
            const noise = Math.random() * 20;
            ctx.fillStyle = xLine ? `rgb(${140 - noise}, 5, 5)` : `rgb(${210 - noise}, 20, 20)`;
          }
          ctx.fillRect(x, y, 1, 1);
        }
      }
      // Letters "TNT" in black in the center stripe
      ctx.font = 'bold 7px sans-serif';
      ctx.fillStyle = '#000000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('TNT', 8, 8);
      break;

    case 'bedrock':
      // Impenetrable pitch black dark igneous granite
      for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
          const val = 15 + Math.floor(Math.random() * 35);
          ctx.fillStyle = `rgb(${val}, ${val}, ${val})`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
      // Mottled highlights
      ctx.fillStyle = 'rgba(100,100,100,0.3)';
      ctx.fillRect(1, 1, 3, 2);
      ctx.fillRect(8, 7, 2, 3);
      ctx.fillRect(12, 11, 3, 2);
      break;

    case 'gold':
      // Polished rich gold pixel art block
      for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
          const r = 220 + Math.random() * 35;
          const g = 175 + Math.random() * 30;
          ctx.fillStyle = `rgb(${r}, ${g}, 10)`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
      // Border outline shadow
      ctx.fillStyle = 'rgba(130,100,0,0.6)';
      ctx.strokeRect(0, 0, 16, 16);
      
      // High shiny spots
      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      ctx.fillRect(2, 2, 2, 2);
      ctx.fillRect(3, 4, 1, 1);
      ctx.fillRect(10, 11, 2, 2);
      break;

    default:
      ctx.fillStyle = '#ff00ff'; // missing material magenta
      ctx.fillRect(0, 0, 16, 16);
  }

  // Create THREE texture
  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

// Generate the 6 custom materials needed for a cube side
export function getCubeMaterials(type: string): THREE.Material[] {
  // Check if it's a block that has distinct top, side, and bottom
  let topTex: THREE.Texture;
  let sideTex: THREE.Texture;
  let bottomTex: THREE.Texture;

  if (type === 'grass') {
    topTex = createMinecraftTexture('grass_top');
    sideTex = createMinecraftTexture('grass_side');
    bottomTex = createMinecraftTexture('dirt');
  } else {
    // Standard uniform textures for all 6 faces
    const tex = createMinecraftTexture(type);
    topTex = tex;
    sideTex = tex;
    bottomTex = tex;
  }

  const matConfig = (tex: THREE.Texture): THREE.MeshStandardMaterialParameters => ({
    map: tex,
    roughness: type === 'gold' ? 0.2 : 0.8,
    metalness: type === 'gold' ? 0.8 : 0.0,
    transparent: type === 'glass' || type === 'leaves',
    opacity: type === 'glass' ? 0.4 : (type === 'leaves' ? 0.85 : 1.0),
    side: THREE.DoubleSide,
    shadowSide: THREE.DoubleSide,
  });

  return [
    new THREE.MeshStandardMaterial(matConfig(sideTex)),   // right
    new THREE.MeshStandardMaterial(matConfig(sideTex)),   // left
    new THREE.MeshStandardMaterial(matConfig(topTex)),    // top
    new THREE.MeshStandardMaterial(matConfig(bottomTex)), // bottom
    new THREE.MeshStandardMaterial(matConfig(sideTex)),   // front
    new THREE.MeshStandardMaterial(matConfig(sideTex)),   // back
  ];
}
