import { SET_BOARD } from '../actions';

import { getBoardIndexFromCoords } from '../lib/board-utils'

const emptyBoard = Array(64).fill(null)
emptyBoard[getBoardIndexFromCoords(4,4)] = 'x';
emptyBoard[getBoardIndexFromCoords(5,5)] = 'x';
emptyBoard[getBoardIndexFromCoords(4,5)] = 'o';
emptyBoard[getBoardIndexFromCoords(5,4)] = 'o';

export default function (state = emptyBoard, action) {
  switch (action.type) {
    case SET_BOARD:
      return action.payload || state;
    default:
      return state;
  }
}
