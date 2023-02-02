import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { message } from 'antd'

import { fetchLoginStatus, fetch_daily_Sign, getUserDetail } from '@/services/module/account'
import { isEmpty } from '@/utils'

// 获取cookie
const cookie = localStorage.getItem('wy-cookie')

// 获取用户信息
export const getUserInfo = createAsyncThunk('getUserInfo', async (payload, { dispatch }) => {
  const res = await fetchLoginStatus(cookie)

  const res2 = await getUserDetail(cookie)

  console.log(res2, ' @')

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
