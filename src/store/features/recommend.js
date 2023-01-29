import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { fetchBannerData } from '@/services/module/recommend'

export const getRecommendData = createAsyncThunk('getRecommendData', async (payload, { dispatch }) => {
  // 获取首页-推荐-轮播图数据
  const bannerData = (await fetchBannerData()).map(({ imageUrl, targetId: id }) => ({ imageUrl, id }))
  dispatch(setBannerAction(bannerData))
})

const recommendSlice = createSlice({
  name: 'recommend',
  initialState: {
    banner: []
  },
  reducers: {
    setBannerAction(state, { payload }) {
      state.banner = payload
    }
  }
})

const { setBannerAction } = recommendSlice.actions

export default recommendSlice.reducer
