import { getPlayerFromTurn, getOpponentFromTurn } from '../lib/player-utils';
import { willFlip, flipAllTiles, getPossibleFlipDirections } from '../lib/game-utils';

export const INCREMENT_TURN = 'INCREMENT_TURN';
export const SET_BOARD = 'SET_BOARD';
export const NEW_GAME = 'NEW_GAME';

const actions = {
  playChip(tileIndex) {
    return (dispatch, getState) => {
      const { board, turn } = getState();
      const player = getPlayerFromTurn(turn);
      const opponent = getOpponentFromTurn(turn);
      if (board[tileIndex]) {
        return;
      }
      const possibleFlipDirections = getPossibleFlipDirections(tileIndex, board, opponent);

      const trueFlipDirections = possibleFlipDirections.filter(direction => {
        return willFlip(tileIndex, direction, board, player)
      })

      if (trueFlipDirections.length === 0) {
        return;
      }

      const newBoard = flipAllTiles(tileIndex, tileIndex, trueFlipDirections, board, player);

      dispatch(setBoardAction(newBoard));
      dispatch(incrementTurnAction());
    };
  },
  incrementTurn() {
    return incrementTurnAction();
  },
  newGame() {
    return newGameAction();
  }
}

export default actions;

const incrementTurnAction = () => ({ type: INCREMENT_TURN });
const setBoardAction = board => ({ type: SET_BOARD, payload: board });
const newGameAction = board => ({ type: NEW_GAME, payload: board });

// Directions
// +1 = ->
// -1 = <-
// +8 = down
// -8 = up
// -9 = nw
// -7 = ne
// +9 = se
// +7 = sw
