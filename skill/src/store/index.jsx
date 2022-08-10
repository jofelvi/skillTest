import { combineReducers } from 'redux'
import utilsReducer from './Utils/reducers'

export default combineReducers({
    utils: utilsReducer
})
