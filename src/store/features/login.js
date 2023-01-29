import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { fetchLoginStatus } from '@/services/module/login'
import { isEmpty } from '@/utils'

export const getUserInfo = createAsyncThunk('getUserInfo', async (payload, { dispatch }) => {
  const cookie = localStorage.getItem('wy-cookie')

  const res = await fetchLoginStatus(cookie)

  dispatch(setUserInfoAction(res.data.profile))

  // 登录状态置为true
  if (!isEmpty(res.data.profile)) {
    dispatch(setIsLoginAction(true))
  }
})

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoginPanelShow: false,
    isLogin: false,
    userInfo: {}
  },
  reducers: {
    setLoginPanelShowAction(state, { payload }) {
      state.isLoginPanelShow = payload
    },
    setUserInfoAction(state, { payload }) {
      state.userInfo = payload
    },
    setIsLoginAction(state, { payload }) {
      state.isLogin = payload
    }
  }
})

export const { setLoginPanelShowAction, setUserInfoAction, setIsLoginAction } = loginSlice.actions

export default loginSlice.reducer
