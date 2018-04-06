import { SET_TURN } from '../actions';

export default function (state = null, action) {
  switch (action.type) {
    case SET_TURN:
      return action.payload || null;
    default:
      return state;
  }
}
