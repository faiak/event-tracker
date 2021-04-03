import { combineReducers } from 'redux'
import userReducer from './user.reducer'
import eventReducer from './event.reducer'
//insert another reducers here to be combined

const reducers = combineReducers({
  userReducer,
  eventReducer
})

export default reducers
