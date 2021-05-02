import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './user'

const rootReducer = combineReducers({
    auth: userReducer,
})

export default rootReducer
