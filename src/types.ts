/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type BlockType =
  | 'grass'
  | 'dirt'
  | 'stone'
  | 'wood'
  | 'leaves'
  | 'glass'
  | 'brick'
  | 'tnt'
  | 'bedrock'
  | 'gold';

export interface Block {
  id: string;
  x: number;
  y: number;
  z: number;
  type: BlockType;
}

export interface WorldConfig {
  seed: string;
  type: 'hills' | 'flat' | 'caves' | 'mountains';
  sizeX: number;
  sizeZ: number;
  heightLimit: number;
}

export interface PlayerStats {
  blocksPlaced: number;
  blocksBroken: number;
  tntExploded: number;
  distanceTraveled: number;
}
