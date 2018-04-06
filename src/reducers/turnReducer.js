import { SET_TURN } from '../actions';

export default function (state = 1, action) {
  switch (action.type) {
    case SET_TURN:
      return action.payload || state;
    default:
      return state;
  }
}
