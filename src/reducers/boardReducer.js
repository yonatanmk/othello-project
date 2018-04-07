import { SET_BOARD, NEW_GAME } from '../actions';

import { getStartingBoard } from '../lib/board-utils';

const startingBoard = getStartingBoard();

export default function (state = startingBoard, action) {
  switch (action.type) {
    case SET_BOARD:
      return action.payload || state;
    case NEW_GAME:
      return startingBoard;
    default:
      return state;
  }
}
