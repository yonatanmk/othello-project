import { INCREMENT_TURN, NEW_GAME } from '../actions';

const initalTurn = 1;

export default function (state = initalTurn, action) {
  switch (action.type) {
    case INCREMENT_TURN:
      return state + 1;
    case NEW_GAME:
      return initalTurn;
    default:
      return state;
  }
}
