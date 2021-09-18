import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
  isLogin: false,
}

export const authFormSlice = createSlice({
  name: 'authForm',
  initialState,
  reducers: {
    openLoginForm: state => {
      state.open = true
      state.isLogin = true
    },

    openSignupForm: state => {
      state.open = true
      state.isLogin = false
    },

    closeAuthForm: state => {
      state.open = false
    },
  },
})

export const { openLoginForm, openSignupForm, toggleAuthForm, closeAuthForm } =
  authFormSlice.actions

export default authFormSlice.reducer
