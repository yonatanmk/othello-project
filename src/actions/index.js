import { PLAYER_X, PLAYER_O } from '../lib/players';

export const INCREMENT_TURN = 'INCREMENT_TURN';
export const SET_BOARD = 'SET_BOARD';

const actions = {
  playChip(tileIndex) {
    return (dispatch, getState) => {
      const { board, turn } = getState();
      const newBoard = [...board];

      newBoard[tileIndex] = turn % 2 === 1 ? PLAYER_X : PLAYER_O ;

      dispatch(setBoard(newBoard));
      dispatch(incrementTurn());
    };
  },
}

export default actions;

const incrementTurn = () => ({ type: INCREMENT_TURN });
const setBoard = board => ({ type: SET_BOARD, payload: board });
