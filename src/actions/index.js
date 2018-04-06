export const SET_TURN = 'SET_TURN';
export const SET_BOARD = 'SET_BOARD';

export const setTurn = turn => dispatch => {
  dispatch({ type: SET_TURN, payload: turn })
};

export const setBoard = board => dispatch => {
  dispatch({ type: SET_BOARD, payload: board })
};
