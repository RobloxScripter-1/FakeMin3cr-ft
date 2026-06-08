/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Settings, Save, RotateCcw, Footprints, Feather, 
  Sun, Moon, Volume2, VolumeX, Trash2, HelpCircle, 
  X, Sparkles, Flame, ShieldAlert, Zap
} from 'lucide-react';
import { BlockType, WorldConfig, PlayerStats } from '../types';
import { playClickSound } from '../utils/audio';

interface GameControlsProps {
  selectedBlock: BlockType;
  setSelectedBlock: (block: BlockType) => void;
  isFlying: boolean;
  setIsFlying: (flying: boolean) => void;
  lightMode: 'day' | 'sunset' | 'night' | 'sunrise';
  setLightMode: (mode: 'day' | 'sunset' | 'night' | 'sunrise') => void;
  onClearWorld: () => void;
  onSaveWorld: () => void;
  onLoadWorld: () => void;
  onTriggerJump: () => void;
  onTriggerAction: (actionType: 'break' | 'place') => void;
  actionMode: 'break' | 'place';
  setActionMode: (mode: 'break' | 'place') => void;
  stats: PlayerStats;
  currentPos: { x: number; y: number; z: number };
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  worldConfig: WorldConfig;
  onUpdateConfig: (newConfig: Partial<WorldConfig>) => void;
  id?: string;
}

const BLOCKS_LIST: { type: BlockType; label: string; icon: string; desc: string; color: string }[] = [
  { type: 'grass', label: 'Grass Block', icon: '🟢', desc: 'Lush top soil', color: 'bg-emerald-600' },
  { type: 'dirt', label: 'Dirt', icon: '🟫', desc: 'Standard earth', color: 'bg-amber-800' },
  { type: 'stone', label: 'Stone', icon: '🪨', desc: 'Sturdy granite', color: 'bg-neutral-500' },
  { type: 'wood', label: 'Wood Trunk', icon: '🪵', desc: 'Natural forest logs', color: 'bg-orange-800' },
  { type: 'leaves', label: 'Leaves', icon: '🍃', desc: 'Translucent bush', color: 'bg-green-700/80 hover:bg-green-700' },
  { type: 'glass', label: 'Glass', icon: '💎', desc: 'See-through crystal', color: 'bg-cyan-200/40 hover:bg-cyan-200' },
  { type: 'brick', label: 'Bricks', icon: '🧱', desc: 'Neat masonry', color: 'bg-red-600' },
  { type: 'tnt', label: 'TNT Box', icon: '💥', desc: 'Explosive block', color: 'bg-red-500 animate-pulse' },
  { type: 'bedrock', label: 'Bedrock', icon: '⬛', desc: 'Indestructible coal', color: 'bg-stone-900' },
  { type: 'gold', label: 'Gold Ore', icon: '👑', desc: 'Golden metal', color: 'bg-yellow-400 text-yellow-950 font-bold' },
];

export default function GameControls({
  selectedBlock,
  setSelectedBlock,
  isFlying,
  setIsFlying,
  lightMode,
  setLightMode,
  onClearWorld,
  onSaveWorld,
  onLoadWorld,
  onTriggerJump,
  onTriggerAction,
  actionMode,
  setActionMode,
  stats,
  currentPos,
  soundEnabled,
  setSoundEnabled,
  worldConfig,
  onUpdateConfig,
  id,
}: GameControlsProps) {
  const [showSettings, setShowSettings] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  const handleClick = (callback: () => void) => {
    if (soundEnabled) {
      playClickSound();
    }
    callback();
  };

  const handleBlockSelect = (type: BlockType) => {
    handleClick(() => setSelectedBlock(type));
  };

  return (
    <div id={id || 'game-ui-overlay'} className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 font-sans select-none overflow-hidden z-20">
      
      {/* ===================== TOP HEADER OVERLAY ===================== */}
      <div className="flex justify-between items-start w-full pointer-events-auto">
        {/* Profile & Live Coordinates */}
        <div id="stats-hud" className="bg-black/50 backdrop-blur-md text-white p-3 rounded-xl border border-white/10 flex flex-col gap-1 text-xs max-w-sm">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-semibold tracking-wider text-green-400">MINECRAFT VIRTUAL</span>
            <span className="bg-yellow-500 text-black font-extrabold px-1 rounded text-[9px] animate-pulse">MOBILE POCKET</span>
          </div>
          <div className="font-mono text-gray-300 flex flex-col gap-0.5">
            <div>📍 Pos: <span className="text-white font-semibold">X: {currentPos.x}, Y: {currentPos.y}, Z: {currentPos.z}</span></div>
            <div className="flex gap-2 text-[10px] text-gray-400 mt-1">
              <span>⛏️ Broke: {stats.blocksBroken}</span>
              <span>🧱 Placed: {stats.blocksPlaced}</span>
              <span>💣 TNT: {stats.tntExploded}</span>
            </div>
          </div>
          {/* HP Bar Simulation */}
          <div className="flex gap-1 mt-1.5 pt-1 border-t border-white/5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-[11px] text-red-500 animate-pulse">❤️</span>
            ))}
          </div>
        </div>

        {/* Action Button Row */}
        <div id="top-bar-buttons" className="flex gap-2">
          {/* Help Tutorial */}
          <button
            id="tutorials-btn"
            onClick={() => handleClick(() => setShowTutorial(true))}
            className="w-10 h-10 rounded-xl bg-black/50 hover:bg-black/75 text-white flex items-center justify-center border border-white/10 transition active:scale-95 shadow-lg pointer-events-auto"
            title="How to Play"
          >
            <HelpCircle size={18} />
          </button>

          {/* Sound Toggle */}
          <button
            id="audio-toggle-btn"
            onClick={() => handleClick(() => setSoundEnabled(!soundEnabled))}
            className="w-10 h-10 rounded-xl bg-black/50 hover:bg-black/75 text-white flex items-center justify-center border border-white/10 transition active:scale-95 shadow-lg pointer-events-auto"
            title="Toggle SFX"
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          {/* Flight Toggle */}
          <button
            id="flying-toggle-btn"
            onClick={() => handleClick(() => setIsFlying(!isFlying))}
            className={`w-10 h-10 rounded-xl flex items-center justify-center border transition active:scale-95 shadow-lg pointer-events-auto ${
              isFlying 
                ? 'bg-blue-600 border-blue-400 text-white animate-bounce' 
                : 'bg-black/50 border-white/10 text-white hover:bg-black/75'
            }`}
            title="Toggle Fly Mode"
          >
            <Feather size={18} />
          </button>

          {/* Day Night selector cycle Button */}
          <button
            id="time-of-day-btn"
            onClick={() => {
              handleClick(() => {
                const CycleMap: Record<'day' | 'sunset' | 'night' | 'sunrise', 'day' | 'sunset' | 'night' | 'sunrise'> = {
                  day: 'sunset',
                  sunset: 'night',
                  night: 'sunrise',
                  sunrise: 'day'
                };
                setLightMode(CycleMap[lightMode]);
              });
            }}
            className="w-10 h-10 rounded-xl bg-black/50 hover:bg-black/75 text-white flex items-center justify-center border border-white/10 transition active:scale-95 shadow-lg pointer-events-auto"
            title="Cycle Time"
          >
            {lightMode === 'day' && <Sun size={18} className="text-amber-400" />}
            {lightMode === 'sunset' && <Sun size={18} className="text-orange-500 animate-pulse" />}
            {lightMode === 'night' && <Moon size={18} className="text-sky-300" />}
            {lightMode === 'sunrise' && <Sun size={18} className="text-pink-400" />}
          </button>

          {/* Quick Settings Drawer trigger */}
          <button
            id="settings-trigger-btn"
            onClick={() => handleClick(() => setShowSettings(!showSettings))}
            className="w-10 h-10 rounded-xl bg-black/50 hover:bg-black/75 text-white flex items-center justify-center border border-white/10 transition active:scale-95 shadow-lg pointer-events-auto"
            title="Settings Panel"
          >
            <Settings size={18} />
          </button>
        </div>
      </div>

      {/* ===================== SIDE SETTINGS DRAWER ===================== */}
      {showSettings && (
        <div id="side-settings-card" className="absolute top-16 right-4 max-h-[80%] w-72 bg-neutral-900/95 backdrop-blur-md rounded-2xl border border-white/10 text-white shadow-2xl p-5 pointer-events-auto flex flex-col gap-4 overflow-y-auto">
          <div className="flex justify-between items-center pb-2 border-b border-white/10">
            <h3 className="text-sm font-bold tracking-wider text-yellow-500 flex items-center gap-1.5">
              <Settings size={16} /> GAME SETTINGS
            </h3>
            <button
              id="close-settings-btn"
              onClick={() => handleClick(() => setShowSettings(false))}
              className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex flex-col gap-3 text-xs">
            {/* World Presets */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 font-medium">World Generation Type</label>
              <div className="grid grid-cols-2 gap-1.5">
                {(['hills', 'flat', 'caves', 'mountains'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => handleClick(() => onUpdateConfig({ type }))}
                    className={`p-2 rounded-lg border capitalize font-semibold tracking-wide transition ${
                      worldConfig.type === type
                        ? 'bg-green-600 border-green-500 text-white'
                        : 'bg-black/35 border-white/5 text-gray-300 hover:bg-black/50'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="flex flex-col gap-1 pt-1">
              <div className="flex justify-between text-gray-400">
                <span>World Scale:</span>
                <span className="text-white font-mono font-bold">{worldConfig.sizeX}x{worldConfig.sizeZ}</span>
              </div>
              <input
                type="range"
                min="10"
                max="30"
                step="5"
                value={worldConfig.sizeX}
                onChange={(e) => {
                  const size = parseInt(e.target.value);
                  onUpdateConfig({ sizeX: size, sizeZ: size });
                }}
                className="w-full accent-green-500 cursor-pointer text-green-500 bg-neutral-800"
              />
            </div>

            {/* Custom Seed */}
            <div className="flex flex-col gap-1">
              <label className="text-gray-400">Custom Seed:</label>
              <input
                type="text"
                maxLength={12}
                value={worldConfig.seed}
                onChange={(e) => onUpdateConfig({ seed: e.target.value })}
                className="p-2 rounded-lg bg-black/40 border border-white/10 text-white font-mono placeholder-gray-500 outline-none focus:border-green-500"
                placeholder="e.g. 123456"
              />
            </div>

            {/* Save / Reset Block */}
            <div className="flex flex-col gap-2 mt-2 pt-3 border-t border-white/5">
              <button
                id="save-world-btn"
                onClick={() => handleClick(onSaveWorld)}
                className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-2 border border-blue-400 font-bold tracking-wide shadow-md"
              >
                <Save size={14} /> Save World State
              </button>
              
              <button
                id="load-world-btn"
                onClick={() => handleClick(onLoadWorld)}
                className="p-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center gap-2 border border-slate-500 font-bold tracking-wide shadow-md"
              >
                <RotateCcw size={14} /> Restore Previous Save
              </button>

              <button
                id="reset-world-btn"
                onClick={() => {
                  if (confirm('Rebuild entire world with active seed? Custom blocks will be reset.')) {
                    handleClick(onClearWorld);
                  }
                }}
                className="p-2.5 rounded-xl bg-red-800 hover:bg-red-700 text-white flex items-center justify-center gap-2 border border-red-500 font-bold tracking-wide shadow-md"
              >
                <Trash2 size={14} /> Rebuild Voxel World
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===================== TUTORIAL POPUP ===================== */}
      {showTutorial && (
        <div id="tutorial-overlay" className="absolute inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center font-sans p-4 pointer-events-auto z-40">
          <div id="tutorial-card" className="bg-neutral-900 border border-white/15 text-white max-w-lg w-full rounded-2xl p-6 flex flex-col gap-4 shadow-2xl relative">
            <button
              id="close-tutorial-top-btn"
              onClick={() => handleClick(() => setShowTutorial(false))}
              className="absolute top-4 right-4 text-gray-400 hover:text-white hover:bg-white/5 p-1 rounded-lg"
            >
              <X size={18} />
            </button>

            <h2 className="text-lg font-extrabold text-yellow-500 tracking-wider flex items-center gap-1.5">
              <Sparkles className="animate-bounce" size={20} /> HOW TO CONTROLS
            </h2>

            <div className="flex flex-col gap-3.5 text-xs text-gray-300 leading-relaxed overflow-y-auto max-h-[70vh]">
              {/* Controls Split Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                  <h4 className="font-bold text-white mb-2 pb-1 border-b border-white/10">📱 MOBILE CONTROLS</h4>
                  <ul className="flex flex-col gap-1.5">
                    <li>🕹️ <span className="font-semibold text-white">Left Joystick</span>: Slide to go Forward/Back/Left/Right.</li>
                    <li>👆 <span className="font-semibold text-white">Swipe Right Side</span>: Drag with finger on screen to aim / look around.</li>
                    <li>⛏️/🧱 <span className="font-semibold text-white">Action Toggle</span>: Choose <span className="text-yellow-500 font-bold">DIG</span> or <span className="text-yellow-500 font-bold">BUILD</span> mode, then TAP directly on any block in the center cursor to destroy or build!</li>
                    <li>🏃‍♀️ <span className="font-semibold text-white">On-Screen HUD Buttons</span>: Use Jump, fly, or action triggers on the right side.</li>
                  </ul>
                </div>

                <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                  <h4 className="font-bold text-white mb-2 pb-1 border-b border-white/10">💻 DESKTOP CONTROLS</h4>
                  <ul className="flex flex-col gap-1.5">
                    <li>⌨️ <span className="font-semibold text-white">WASD Keys</span>: Walk and navigate the landscape.</li>
                    <li>🐭 <span className="font-semibold text-white">Mouse Drag / Locked Eye</span>: Swing around for direction.</li>
                    <li>🖱️ <span className="font-semibold text-white">Left Click</span>: Mine / Break highlighted block.</li>
                    <li>🖱️ <span className="font-semibold text-white">Right Click</span>: Place selected Block style.</li>
                    <li>⌨️ <span className="font-semibold text-white">Spacebar</span>: Tap to jump up.</li>
                    <li>⌨️ <span className="font-semibold text-white">Keys [1-9]</span>: Quick Hotbar slot selector.</li>
                  </ul>
                </div>
              </div>

              {/* Special mechanics */}
              <div className="bg-amber-950/30 p-3 rounded-xl border border-amber-900/30 text-amber-200">
                <h4 className="font-bold mb-1 flex items-center gap-1"><Flame size={12} /> SPECIAL BLOCK: TNT BOX</h4>
                <p>Equip and place <span className="font-semibold">TNT</span>. Under <b>⛏️ DIG MODE</b>, clicking on an existing TNT block will arm it. The TNT flashes 5 times with warning clicks before detonating in a powerful sonic dust blast, shattering all surrounding structures! Try it!</p>
              </div>

              <div className="bg-blue-950/20 p-3 rounded-xl border border-blue-900/20 text-blue-200">
                <h4 className="font-bold mb-1 flex items-center gap-1 pt-0.5"><Zap size={11} /> DESKTOP LOOK DRAG</h4>
                <p className="text-[11px]">To look around on PC, click and drag on the screen, or just turn your camera. Mobile players can drag anywhere in the upper half of the window.</p>
              </div>
            </div>

            <button
              id="confirm-tutorial-btn"
              onClick={() => handleClick(() => setShowTutorial(false))}
              className="bg-green-600 hover:bg-green-500 py-3.5 rounded-xl font-extrabold text-xs text-white uppercase tracking-wider transition hover:shadow-lg shadow-green-900/20"
            >
              Start Minining & Building!
            </button>
          </div>
        </div>
      )}

      {/* ===================== CENTER SCREEN TARGET POINTER ===================== */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[18px] h-[18px] relative flex items-center justify-center">
          {/* Classic micro plus crosshair */}
          <div className="absolute w-[18px] h-[2px] bg-white opacity-80 mix-blend-difference" />
          <div className="absolute w-[2px] h-[18px] bg-white opacity-80 mix-blend-difference" />
        </div>
      </div>

      {/* ===================== BOTTOM MAIN ROW OVERLAYS ===================== */}
      <div id="bottom-ui-hud-panel" className="flex justify-between items-end w-full">
        {/* Spacer for Left Virtual Joystick overlay */}
        <div className="w-36 h-36 flex items-center justify-center pointer-events-auto">
          {/* Will render the Joystick.tsx absolutely beside this empty structure or inside. Let the outer App layout align it */}
        </div>

        {/* BOTTOM CENTER: HOTBAR */}
        <div id="hotbar" className="flex flex-col gap-2 items-center bg-black/40 backdrop-blur-md p-2 rounded-2xl border border-white/10 pointer-events-auto mb-1 max-w-[50vw] sm:max-w-none">
          {/* Block details indicator */}
          <span className="text-[11px] font-bold text-yellow-400 bg-neutral-900/40 px-2 py-0.5 rounded-full border border-yellow-500/10 shadow-sm animate-pulse">
            Active: {BLOCKS_LIST.find(b => b.type === selectedBlock)?.label}
          </span>
          
          <div className="flex gap-1.5 overflow-x-auto pb-1 max-w-[80vw] no-scrollbar">
            {BLOCKS_LIST.map((block) => (
              <button
                key={block.type}
                id={`hotbar-slot-${block.type}`}
                onClick={() => handleBlockSelect(block.type)}
                className={`w-11 h-11 flex flex-col items-center justify-center rounded-xl transition cursor-pointer relative ${
                  selectedBlock === block.type
                    ? 'bg-yellow-500 shadow-lg border-2 border-white scale-110 -translate-y-1'
                    : 'bg-black/40 border border-white/5 text-gray-300 hover:bg-black/60 hover:-translate-y-0.5'
                }`}
                title={`${block.label} - ${block.desc}`}
              >
                <span className="text-xl leading-none">{block.icon}</span>
                {selectedBlock === block.type && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border border-white" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* BOTTOM RIGHT: ON-SCREEN TRIGGERS FOR MOBILE */}
        <div id="mobile-right-triggers" className="flex gap-3 pointer-events-auto items-end mb-1">
          {/* Break vs Place toggles */}
          <div className="flex flex-col gap-2">
            <button
              id="mobile-action-mode-dig-btn"
              onClick={() => handleClick(() => setActionMode('break'))}
              className={`w-14 h-14 rounded-full flex flex-col items-center justify-center font-bold text-xs transition active:scale-90 border shadow-lg ${
                actionMode === 'break'
                  ? 'bg-red-600 border-red-400 text-white font-extrabold animate-pulse'
                  : 'bg-neutral-800/80 border-white/15 text-gray-300 hover:bg-neutral-800'
              }`}
            >
              <span className="text-lg">⛏️</span>
              <span className="text-[9px] uppercase tracking-tighter mt-0.5 leading-none">Dig</span>
            </button>
            <button
              id="mobile-action-mode-build-btn"
              onClick={() => handleClick(() => setActionMode('place'))}
              className={`w-14 h-14 rounded-full flex flex-col items-center justify-center font-bold text-xs transition active:scale-90 border shadow-lg ${
                actionMode === 'place'
                  ? 'bg-green-600 border-green-500 text-white font-extrabold animate-pulse'
                  : 'bg-neutral-800/80 border-white/15 text-gray-300 hover:bg-neutral-800'
              }`}
            >
              <span className="text-lg">🧱</span>
              <span className="text-[9px] uppercase tracking-tighter mt-0.5 leading-none">Build</span>
            </button>
          </div>

          {/* Jump Button */}
          <button
            id="mobile-jump-btn"
            onClick={() => onTriggerJump()}
            className="w-18 h-18 rounded-full bg-blue-600/90 active:bg-blue-500 active:scale-90 hover:bg-blue-500 border border-blue-400 text-white flex flex-col items-center justify-center select-none cursor-pointer font-bold shadow-2xl"
          >
            <span className="text-2xl">🦘</span>
            <span className="text-[9px] uppercase tracking-widest text-blue-200 mt-1">Jump</span>
          </button>
        </div>
      </div>
    </div>
  );
}
