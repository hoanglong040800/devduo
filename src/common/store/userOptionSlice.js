import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    name: 'profile',
    display: 'Profile',
    active: true,
    link: '/user/profile'
  },
  {
    name: 'plan',
    display: 'Plan service',
    active: false,
    link: '/user/plan'
  },
  {
    name: 'account',
    display: 'Account',
    active: false,
    link: '/user/account'
  },
  {
    name: 'settings',
    display: 'Settings',
    active: false,
    link: '/user/settings'
  },
]

export const userOptionSlice = createSlice({
  name: 'userOption',
  initialState,
  reducers: {
    changeUserOption: (state, action) => {
      state.map((item, i) => {
        state[i].name == action.payload
          ? (state[i].active = true)
          : (state[i].active = false)
      })
    },
  },
})

export const { changeUserOption } = userOptionSlice.actions

export default userOptionSlice.reducer
