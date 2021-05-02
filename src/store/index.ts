import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import rootMiddleware from './rootMiddleware'
import rootReducer from './rootReducer'

export type ApplicationState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const useReduxSelector: TypedUseSelectorHook<ApplicationState> = useSelector
export default store
