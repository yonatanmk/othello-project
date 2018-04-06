import { PLAYER_X, PLAYER_O } from './players';

export const getBoardIndexFromCoords = (x, y) => {
  return (x - 1) + 8 * (y - 1)
};

export const getStartingBoard = () => {
  const startingBoard = Array(64).fill(null)
  startingBoard[getBoardIndexFromCoords(4,4)] = PLAYER_X;
  startingBoard[getBoardIndexFromCoords(5,5)] = PLAYER_X;
  startingBoard[getBoardIndexFromCoords(4,5)] = PLAYER_O;
  startingBoard[getBoardIndexFromCoords(5,4)] = PLAYER_O;
  return startingBoard;
}
