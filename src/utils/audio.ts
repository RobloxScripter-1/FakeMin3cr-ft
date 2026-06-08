/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    // Standard cross-browser AudioContext initialization
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playMuffleSound() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(120, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.15);
    
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.16);
  } catch (err) {
    console.warn('Audio play failed', err);
  }
}

export function playBreakSound(blockType: string) {
  try {
    const ctx = getAudioContext();
    
    // Create random noise for breaking gravel/stone/dirt
    const bufferSize = ctx.sampleRate * 0.12; // 0.12 seconds
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noiseNode = ctx.createBufferSource();
    noiseNode.buffer = buffer;
    
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    
    // Vary filter frequency by block type
    if (blockType === 'wood' || blockType === 'leaves') {
      filter.frequency.setValueAtTime(400, ctx.currentTime);
    } else if (blockType === 'glass') {
      filter.frequency.setValueAtTime(2500, ctx.currentTime);
    } else {
      filter.frequency.setValueAtTime(180, ctx.currentTime);
    }
    
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(blockType === 'glass' ? 0.15 : 0.4, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);
    
    noiseNode.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    noiseNode.start();
    
    // Add an extra little tone for glass break
    if (blockType === 'glass') {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(4000, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(2000, ctx.currentTime + 0.1);
      oscGain.gain.setValueAtTime(0.1, ctx.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.connect(oscGain);
      oscGain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.11);
    }
  } catch (err) {
    console.warn('Audio play failed', err);
  }
}

export function playPlaceSound() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(280, ctx.currentTime + 0.08);
    
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.09);
  } catch (err) {
    console.warn('Audio play failed', err);
  }
}

export function playJumpSound() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(80, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.15);
    
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.16);
  } catch (err) {
    console.warn('Audio play failed', err);
  }
}

export function playExplosionSound() {
  try {
    const ctx = getAudioContext();
    const bufferSize = ctx.sampleRate * 0.8; // 0.8 seconds explosion
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noiseNode = ctx.createBufferSource();
    noiseNode.buffer = buffer;
    
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.7);
    
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.8, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.2);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);
    
    noiseNode.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    noiseNode.start();
    
    // Add sub-bass boom
    const subOsc = ctx.createOscillator();
    const subGain = ctx.createGain();
    subOsc.type = 'sawtooth';
    subOsc.frequency.setValueAtTime(80, ctx.currentTime);
    subOsc.frequency.exponentialRampToValueAtTime(20, ctx.currentTime + 0.4);
    
    subGain.gain.setValueAtTime(0.6, ctx.currentTime);
    subGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    
    subOsc.connect(subGain);
    subGain.connect(ctx.destination);
    
    subOsc.start();
    subOsc.stop(ctx.currentTime + 0.45);
  } catch (err) {
    console.warn('Audio play failed', err);
  }
}

export function playClickSound() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.setValueAtTime(1200, ctx.currentTime + 0.03);
    
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.09);
  } catch (err) {
    console.warn('Audio play failed', err);
  }
}
