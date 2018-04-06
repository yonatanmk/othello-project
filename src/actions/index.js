import { PLAYER_X, PLAYER_O } from '../lib/players';
import { willFlip, flipAllTiles } from '../lib/game-utils';

export const INCREMENT_TURN = 'INCREMENT_TURN';
export const SET_BOARD = 'SET_BOARD';

const actions = {
  playChip(tileIndex) {
    return (dispatch, getState) => {
      const { board, turn } = getState();
      const player = turn % 2 === 1 ? PLAYER_X : PLAYER_O;
      const opponent = turn % 2 === 1 ? PLAYER_O : PLAYER_X;
      if (board[tileIndex]) {
        return;
      }
      const possibleFlipDirections = [];
      if (board[tileIndex + 1] === opponent) {
        possibleFlipDirections.push(1)
      }
      if (board[tileIndex - 1] === opponent) {
        possibleFlipDirections.push(-1)
      }
      if (board[tileIndex + 8] === opponent) {
        possibleFlipDirections.push(8)
      }
      if (board[tileIndex - 8] === opponent) {
        possibleFlipDirections.push(-8)
      }

      const trueFlipDirections = possibleFlipDirections.filter(direction => {
        return willFlip(tileIndex, direction, board, player)
      })

      const newBoard = flipAllTiles(tileIndex, tileIndex, trueFlipDirections, board, player);

      if (trueFlipDirections.length === 0) {
        return;
      }
      // const newBoard = [...board];
      //
      // newBoard[tileIndex] = player ;

      dispatch(setBoard(newBoard));
      dispatch(incrementTurn());
    };
  },
}

export default actions;

const incrementTurn = () => ({ type: INCREMENT_TURN });
const setBoard = board => ({ type: SET_BOARD, payload: board });

// Directions
// +1 = ->
// -1 = <-
// +8 = down
// -8 = up
