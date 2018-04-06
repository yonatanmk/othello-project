export const SET_TURN = 'SET_TURN';
export const SET_BOARD = 'SET_BOARD';

const actions = {
  setTurn(turn) {
    return dispatch => {
      dispatch({ type: SET_TURN, payload: turn });
    }
  },
  playChip(tileIndex, player) {
    return (dispatch, getState) => {
      const { board } = getState();
      const newBoard = [...board];
      newBoard[tileIndex] = player;

      dispatch({ type: SET_BOARD, payload: newBoard });
    };
  }
}

export default actions;
