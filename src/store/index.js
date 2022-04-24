import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from '../slices/auth'
import uiReducer from '../slices/ui'

const Reducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
})

export default configureStore({
  reducer: Reducer,
  devTools: true,
})
