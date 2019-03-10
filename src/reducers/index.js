import { combineReducers } from 'redux'
import sports from './sports'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  sports,
  visibilityFilter
})
