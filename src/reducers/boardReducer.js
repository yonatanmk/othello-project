import { SET_BOARD } from '../actions';

import { getBoardIndexFromCoords } from '../lib/board-utils';
import { PLAYER_X, PLAYER_O } from '../lib/players';

const emptyBoard = Array(64).fill(null)
emptyBoard[getBoardIndexFromCoords(4,4)] = PLAYER_X;
emptyBoard[getBoardIndexFromCoords(5,5)] = PLAYER_X;
emptyBoard[getBoardIndexFromCoords(4,5)] = PLAYER_O;
emptyBoard[getBoardIndexFromCoords(5,4)] = PLAYER_O;

export default function (state = emptyBoard, action) {
  switch (action.type) {
    case SET_BOARD:
      console.log('PAYLOAD')
      console.log(action.payload)
      return action.payload || state;
    default:
      return state;
  }
}
