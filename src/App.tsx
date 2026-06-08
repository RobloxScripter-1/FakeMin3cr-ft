/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useCallback } from 'react';
import { Gamepad2, Globe, Layers, Sparkles, Wand2, Info, Compass, Terminal } from 'lucide-react';
import GameCanvas, { GameCanvasHandle } from './components/GameCanvas';
import GameControls from './components/GameControls';
import Joystick from './components/Joystick';
import { BlockType, WorldConfig, PlayerStats } from './types';
import { playClickSound } from './utils/audio';

export default function App() {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [selectedBlock, setSelectedBlock] = useState<BlockType>('grass');
  const [isFlying, setIsFlying] = useState<boolean>(false);
  const [lightMode, setLightMode] = useState<'day' | 'sunset' | 'night' | 'sunrise'>('day');
  const [actionMode, setActionMode] = useState<'break' | 'place'>('break');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  
  // Game metrics
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 10, z: 0 });
  const [stats, setStats] = useState<PlayerStats>({
    blocksPlaced: 0,
    blocksBroken: 0,
    tntExploded: 0,
    distanceTraveled: 0,
  });

  // World parameters
  const [worldConfig, setWorldConfig] = useState<WorldConfig>({
    seed: '777',
    type: 'hills',
    sizeX: 15,
    sizeZ: 15,
    heightLimit: 12,
  });

  // Dual stick/joystick controls
  const [joystickState, setJoystickState] = useState({ moveX: 0, moveY: 0 });

  const gameCanvasRef = useRef<GameCanvasHandle>(null);

  // Sync joystick inputs
  const handleJoystickChange = useCallback((x: number, y: number) => {
    setJoystickState({ moveX: x, moveY: y });
  }, []);

  const handleUpdateConfig = useCallback((newConfig: Partial<WorldConfig>) => {
    setWorldConfig((prev) => ({ ...prev, ...newConfig }));
  }, []);

  const handleTriggerJump = useCallback(() => {
    if (gameCanvasRef.current) {
      gameCanvasRef.current.triggerJump();
    }
  }, []);

  const handleClearWorld = useCallback(() => {
    if (gameCanvasRef.current) {
      gameCanvasRef.current.clearWorld();
    }
  }, []);

  const handleSaveWorld = useCallback(() => {
    if (gameCanvasRef.current) {
      gameCanvasRef.current.saveWorld();
    }
  }, []);

  const handleLoadWorld = useCallback(() => {
    if (gameCanvasRef.current) {
      gameCanvasRef.current.loadWorld();
    }
  }, []);

  const launchWorld = () => {
    if (soundEnabled) playClickSound();
    
    // Check if we have previous custom configuration saved to automatically load it
    setGameStarted(true);
  };

  return (
    <div className="w-screen h-screen relative bg-neutral-950 overflow-hidden font-sans select-none flex items-center justify-center">
      {/* ======================= MAIN 3D RENDERING PANEL ======================= */}
      {gameStarted ? (
        <div id="game-active-viewport" className="w-full h-full relative">
          {/* Main 3D WebGL Canvas */}
          <GameCanvas
            ref={gameCanvasRef}
            selectedBlock={selectedBlock}
            isFlying={isFlying}
            lightMode={lightMode}
            worldConfig={worldConfig}
            actionMode={actionMode}
            soundEnabled={soundEnabled}
            setStats={setStats}
            setCurrentPos={setCurrentPos}
            joystickState={joystickState}
            onUpdateConfig={handleUpdateConfig}
          />

          {/* Virtual On-screen Touch Joystick (Bottom Left) */}
          <div className="absolute bottom-6 left-6 pointer-events-auto z-30">
            <Joystick onChange={handleJoystickChange} />
          </div>

          {/* Game Overlay HUD & Buttons */}
          <GameControls
            selectedBlock={selectedBlock}
            setSelectedBlock={setSelectedBlock}
            isFlying={isFlying}
            setIsFlying={setIsFlying}
            lightMode={lightMode}
            setLightMode={setLightMode}
            onClearWorld={handleClearWorld}
            onSaveWorld={handleSaveWorld}
            onLoadWorld={handleLoadWorld}
            onTriggerJump={handleTriggerJump}
            onTriggerAction={(act) => setActionMode(act)}
            actionMode={actionMode}
            setActionMode={setActionMode}
            stats={stats}
            currentPos={currentPos}
            soundEnabled={soundEnabled}
            setSoundEnabled={setSoundEnabled}
            worldConfig={worldConfig}
            onUpdateConfig={handleUpdateConfig}
          />

          {/* Return back home menu buttons */}
          <button
            id="quit-game-to-launcher-btn"
            onClick={() => {
              if (soundEnabled) playClickSound();
              setGameStarted(false);
            }}
            className="absolute top-4 left-44 w-10 h-10 rounded-xl bg-red-950/80 hover:bg-red-900/90 text-red-200 flex items-center justify-center border border-red-800/30 transition shadow-lg pointer-events-auto z-30 hover:scale-105"
            title="Quit back to Launcher"
          >
            ❌
          </button>
        </div>
      ) : (
        /* ======================= MINECRAFT PREGAME LAUNCH PANEL ======================= */
        <div id="launcher-splash-screen" className="relative w-full max-w-4xl min-h-[550px] p-8 md:p-12 mx-4 bg-neutral-900/40 backdrop-blur-3xl border border-white/5 rounded-3xl text-white shadow-2xl flex flex-col justify-between overflow-hidden">
          
          {/* Background decorative atmosphere sparkles wrapper */}
          <div className="absolute inset-0 -z-10 bg-radial-gradient from-emerald-500/10 via-amber-500/5 to-transparent pointer-events-none" />
          
          {/* Top banner and major logo section */}
          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center gap-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest animate-pulse">
              <Sparkles size={11} /> 100% Client-Side WebGL Edition
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-emerald-400 select-all font-display text-center drop-shadow-xl mt-2 pb-1">
              MINECRAFT POCKET
            </h1>
            <p className="text-xs text-neutral-400 text-center font-mono tracking-wider">
              Designed for Mobile Controllers & Laptop Controls. No Installs.
            </p>
          </div>

          {/* Launcher Settings Grid Option */}
          <div id="launcher-modules-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            
            {/* Column 1: Choose World Seed */}
            <div className="bg-neutral-950/40 p-5 rounded-2xl border border-white/5 flex flex-col justify-between gap-4">
              <div>
                <span className="text-[10px] text-green-400 font-extrabold uppercase tracking-widest flex items-center gap-1 mb-2">
                  <Compass size={11} /> 01 / SEED SCANNER
                </span>
                <h3 className="text-sm font-bold text-white mb-1.5">Procedural Seed</h3>
                <p className="text-[11px] text-gray-500 leading-normal">
                  Type custom seed coordinates or random letters. Changes how landscapes shape.
                </p>
              </div>
              <input
                type="text"
                maxLength={10}
                value={worldConfig.seed}
                onChange={(e) => handleUpdateConfig({ seed: e.target.value })}
                placeholder="e.g. 777, 888"
                className="w-full text-xs font-mono p-3 bg-neutral-900 border border-white/10 rounded-xl text-yellow-400 uppercase tracking-widest outline-none focus:border-yellow-500 text-center uppercase"
              />
            </div>

            {/* Column 2: Choose Biome Type */}
            <div className="bg-neutral-950/40 p-5 rounded-2xl border border-white/5 flex flex-col justify-between gap-4">
              <div>
                <span className="text-[10px] text-indigo-400 font-extrabold uppercase tracking-widest flex items-center gap-1 mb-2">
                  <Globe size={11} /> 02 / BIOMES
                </span>
                <h3 className="text-sm font-bold text-white mb-1.5">Voxel Landscapes</h3>
                <p className="text-[11px] text-gray-500 leading-normal">
                  Chose procedural environment patterns, mountains, or flat sands.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-1.5 text-xs font-semibold">
                {(['hills', 'flat', 'caves', 'mountains'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => handleUpdateConfig({ type })}
                    className={`py-2 px-1 rounded-xl border capitalize transition active:scale-95 ${
                      worldConfig.type === type
                        ? 'bg-gradient-to-r from-emerald-600 to-green-600 border-green-400 text-white font-extrabold shadow-lg'
                        : 'bg-neutral-900/60 border-white/5 text-gray-400 hover:text-white hover:bg-neutral-800'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Column 3: Setup Scales */}
            <div className="bg-neutral-950/40 p-5 rounded-2xl border border-white/5 flex flex-col justify-between gap-4">
              <div>
                <span className="text-[10px] text-pink-400 font-extrabold uppercase tracking-widest flex items-center gap-1 mb-2">
                  <Layers size={11} /> 03 / DIMENSION
                </span>
                <h3 className="text-sm font-bold text-white mb-1.5">Boundary Scales</h3>
                <p className="text-[11px] text-gray-500 leading-normal">
                  Expand block render ranges (Bigger worlds might limit framerates on phones).
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-[11px]">
                  <span className="text-gray-400 font-mono">Bound: {worldConfig.sizeX}x{worldConfig.sizeZ}</span>
                  <span className="text-yellow-400">FPS Optimized</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="30"
                  step="5"
                  value={worldConfig.sizeX}
                  onChange={(e) => {
                    const size = parseInt(e.target.value);
                    handleUpdateConfig({ sizeX: size, sizeZ: size });
                  }}
                  className="w-full h-1.5 rounded bg-neutral-900 text-green-500 cursor-pointer accent-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Quick instructions panel details */}
          <div className="p-4 bg-neutral-950/30 border border-white/5 rounded-2xl flex items-start gap-3 mt-1 text-xs">
            <div className="p-2 rounded-lg bg-orange-600/10 text-orange-400 border border-orange-500/10 shrink-0">
              <Info size={14} className="animate-pulse" />
            </div>
            <div className="flex flex-col gap-0.5 leading-normal text-neutral-400">
              <strong className="text-white">Mobile Touch Optimization</strong>
              <span>
                To look around on phone, swipe your finger on empty regions of the scene. Tap on any voxel using <b>DIG ⛏️</b> or <b>BUILD 🧱</b> mode to break or place blocks. Move analog stick on left to crawl.
              </span>
            </div>
          </div>

          {/* Rocket start launch button */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-8 pt-4 border-t border-white/5 w-full">
            <div className="flex gap-4 items-center">
              <label className="flex items-center gap-2 text-xs font-semibold text-gray-400 cursor-pointer hover:text-white transition">
                <input
                  type="checkbox"
                  checked={soundEnabled}
                  onChange={(e) => setSoundEnabled(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-700 bg-neutral-950 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                />
                Enable Retro Audio SFX
              </label>

              <label className="flex items-center gap-2 text-xs font-semibold text-gray-400 cursor-pointer hover:text-white transition">
                <input
                  type="checkbox"
                  checked={isFlying}
                  onChange={(e) => setIsFlying(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-700 bg-neutral-950 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                />
                Spawn In Flight Mode
              </label>
            </div>

            <button
              id="launcher-start-gameloop-btn"
              onClick={launchWorld}
              className="py-4 px-10 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 border border-green-400 hover:from-green-400 hover:to-emerald-500 hover:shadow-2xl hover:shadow-green-500/25 transition duration-150 active:scale-95 font-extrabold text-sm tracking-widest text-shadow uppercase flex items-center gap-3 shadow-lg pointer-events-auto"
            >
              <Gamepad2 size={16} /> LAUNCH MINECRAFT WORLD
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
