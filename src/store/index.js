import { configureStore } from '@reduxjs/toolkit'
import authFormReducer from './authFormSlice'

export default configureStore({
  reducer: {
    authForm: authFormReducer,
  },
})
