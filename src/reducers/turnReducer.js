import { INCREMENT_TURN } from '../actions';

export default function (state = 1, action) {
  switch (action.type) {
    case INCREMENT_TURN:
      return state + 1;
    default:
      return state;
  }
}
