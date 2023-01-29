import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { fetchArtistList, fetchBannerData } from '@/services/module/recommend'
import { pick } from '@/utils'

export const getRecommendData = createAsyncThunk('getRecommendData', async (payload, { dispatch }) => {
  // 获取推荐-轮播图数据
  const bannerData = (await fetchBannerData()).map(({ imageUrl, targetId: id }) => ({ imageUrl, id }))
  dispatch(setBannerAction(bannerData))

  // 获取推荐-入驻歌手前五条数据
  const artistData = (await fetchArtistList({ limit: 5 })).map(item => {
    return pick(item, ['id', 'name', 'img1v1Url', 'alias'])
  })
  dispatch(setArtistAction(artistData))
})

const recommendSlice = createSlice({
  name: 'recommend',
  initialState: {
    banner: [],
    artist: []
  },
  reducers: {
    setBannerAction(state, { payload }) {
      state.banner = payload
    },
    setArtistAction(state, { payload }) {
      state.artist = payload
    }
  }
})

const { setBannerAction, setArtistAction } = recommendSlice.actions

export default recommendSlice.reducer
