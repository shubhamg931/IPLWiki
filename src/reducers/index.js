import { combineReducers } from 'redux'
import statsReducer from './statsReducer'
import yearReducer from './yearReducer'
import listReducer from './listReducer'

export default combineReducers({
  stats: statsReducer,
  year: yearReducer,
  list: listReducer,
});
