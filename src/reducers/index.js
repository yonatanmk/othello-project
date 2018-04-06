import { combineReducers } from 'redux';
import turnReducer from './turnReducer';
import boardReducer from './boardReducer';

export default combineReducers({
  turn: turnReducer,
  board: boardReducer,
});
