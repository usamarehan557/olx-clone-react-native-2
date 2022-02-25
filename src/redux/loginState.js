import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    LoginState: true,
}

export const loginSlice = createSlice({
  name: 'LoginState',
  initialState,
  reducers: {
    login: (state) => {
      state.LoginState = true
    },
    logout: (state) => {
      state.LoginState = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout} = loginSlice.actions

export default loginSlice.reducer