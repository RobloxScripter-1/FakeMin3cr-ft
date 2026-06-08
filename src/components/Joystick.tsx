/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';

interface JoystickProps {
  onChange: (moveX: number, moveY: number) => void;
  id?: string;
}

export default function Joystick({ onChange, id }: JoystickProps) {
  const [touching, setTouching] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const touchIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Make sure we communicate resetting back to zero when release
    if (!touching) {
      setPosition({ x: 0, y: 0 });
      onChange(0, 0);
    }
  }, [touching, onChange]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (touching) return;
    const touch = e.changedTouches[0];
    touchIdRef.current = touch.identifier;
    setTouching(true);
    handleTouchMove(e);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touching || touchIdRef.current === null || !containerRef.current) return;
    
    // Find the correct touch
    let activeTouch: React.Touch | null = null;
    for (let i = 0; i < e.touches.length; i++) {
      if (e.touches[i].identifier === touchIdRef.current) {
        activeTouch = e.touches[i];
        break;
      }
    }
    
    if (!activeTouch) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const dx = activeTouch.clientX - centerX;
    const dy = activeTouch.clientY - centerY;
    
    const maxRadius = rect.width / 2;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    let moveX = 0;
    let moveY = 0;
    
    if (distance === 0) {
      setPosition({ x: 0, y: 0 });
    } else {
      const clampDistance = Math.min(distance, maxRadius);
      const angle = Math.atan2(dy, dx);
      
      const newX = Math.cos(angle) * clampDistance;
      const newY = Math.sin(angle) * clampDistance;
      
      setPosition({ x: newX, y: newY });
      
      // Normalize values to -1 to 1
      moveX = newX / maxRadius;
      moveY = -(newY / maxRadius); // Invert Y for web standards (positive goes forward)
    }
    
    onChange(moveX, moveY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touching) return;
    
    let ended = false;
    for (let i = 0; i < e.changedTouches.length; i++) {
      if (e.changedTouches[i].identifier === touchIdRef.current) {
        ended = true;
        break;
      }
    }
    
    if (ended) {
      setTouching(false);
      touchIdRef.current = null;
    }
  };

  return (
    <div
      id={id || 'virtual-joystick'}
      ref={containerRef}
      className="relative w-32 h-32 rounded-full border-4 border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center select-none active:scale-95 transition-transform duration-100 touch-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      {/* Decorative center marker */}
      <div className="absolute w-2 h-2 rounded-full bg-white/10" />
      
      {/* Dynamic Knob */}
      <div
        className="w-14 h-14 rounded-full bg-neutral-200 border-2 border-white shadow-xl flex items-center justify-center select-none cursor-pointer transition-shadow"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          boxShadow: touching ? '0 10px 20px rgba(0,0,0,0.4)' : '0 4px 6px rgba(0,0,0,0.2)',
        }}
      >
        {/* Analog ridges pattern */}
        <div className="w-10 h-10 rounded-full border border-black/10 bg-neutral-300 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full border border-black/15 bg-neutral-400/80" />
        </div>
      </div>
    </div>
  );
}
