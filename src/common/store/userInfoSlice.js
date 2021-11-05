import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    money: 0,
  },
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    initUserMoney: (state, action) => {
      state.user.money = action.payload
    },

    changeUserMoney: (state, action) => {
      state.user.money += action.payload
    },

    clearUserInfo: state => {
      state = initialState
    },
  },
})

export const { initUserMoney, changeUserMoney } = userInfoSlice.actions

export default userInfoSlice.reducer
