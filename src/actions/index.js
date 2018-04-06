import { PLAYER_X, PLAYER_O } from '../lib/players';

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
      const hasNeighboringOpponent = board[tileIndex + 1] === opponent ||
        board[tileIndex - 1] === opponent ||
        board[tileIndex + 8] === opponent ||
        board[tileIndex - 8] === opponent

      if (!hasNeighboringOpponent) {
        return;
      }
      const newBoard = [...board];

      newBoard[tileIndex] = player ;

      dispatch(setBoard(newBoard));
      dispatch(incrementTurn());
    };
  },
}

export default actions;

const incrementTurn = () => ({ type: INCREMENT_TURN });
const setBoard = board => ({ type: SET_BOARD, payload: board });

// +1 = ->
// -1 = <-
// +8 = down
// -8 = up
