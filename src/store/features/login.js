import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoginPanelShow: false
  },
  reducers: {
    setLoginPanelShowAction(state, { payload }) {
      state.isLoginPanelShow = payload
    }
  }
})

export const { setLoginPanelShowAction } = loginSlice.actions

export default loginSlice.reducer
