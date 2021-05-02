import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './actions/user'

const rootReducer = combineReducers({
    auth: userReducer,
})

export default rootReducer
