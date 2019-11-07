import { combineReducers } from 'redux'
import authReducer from './authReducer'
import gameReducer from './gameReducer'
import playerReducer from './playerReducer'

export default combineReducers({
  authReducer,
  gameReducer,
  playerReducer
});
