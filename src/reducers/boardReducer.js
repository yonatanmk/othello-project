import { SET_BOARD } from '../actions';

import { getStartingBoard } from '../lib/board-utils';

const startingBoard = getStartingBoard();

export default function (state = startingBoard, action) {
  switch (action.type) {
    case SET_BOARD:
      return action.payload || state;
    default:
      return state;
  }
}
