import { configureStore } from '@reduxjs/toolkit'
import authFormReducer from './authFormSlice'
import userOptionReducer from './userOptionSlice'

export default configureStore({
  reducer: {
    authForm: authFormReducer,
    userOption: userOptionReducer,
  },
})
