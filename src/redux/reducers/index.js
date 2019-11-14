import { combineReducers } from 'redux'
import authReducer from './authReducer'
import gameReducer from './gameReducer'
import modalReducer from './modalReducer'
import playerReducer from './playerReducer'

export default combineReducers({
  authReducer,
  gameReducer,
  modalReducer,
  playerReducer
});
