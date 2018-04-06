import { PLAYER_1, PLAYER_2 } from './player-utils';

export const getBoardIndexFromCoords = (x, y) => {
  return (x - 1) + 8 * (y - 1);
};

export const getStartingBoard = () => {
  const startingBoard = Array(64).fill(null)
  startingBoard[getBoardIndexFromCoords(4,4)] = PLAYER_1;
  startingBoard[getBoardIndexFromCoords(5,5)] = PLAYER_1;
  startingBoard[getBoardIndexFromCoords(4,5)] = PLAYER_2;
  startingBoard[getBoardIndexFromCoords(5,4)] = PLAYER_2;
  return startingBoard;
}
