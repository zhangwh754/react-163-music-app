import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { fetchArtistList, fetchBannerData, fetchTopAlbumData, fetchTopPlaylistData } from '@/services/module/recommend'
import { pick } from '@/utils'

export const getRecommendData = createAsyncThunk('getRecommendData', async (payload, { dispatch }) => {
  // 获取推荐-轮播图数据
  const bannerData = (await fetchBannerData()).map(({ imageUrl, targetId: id }) => ({ imageUrl, id }))
  dispatch(setBannerAction(bannerData))

  // 获取推荐-入驻歌手前五条数据
  const artistData = (await fetchArtistList({ limit: 5 })).map(item => pick(item, ['id', 'name', 'img1v1Url', 'alias']))
  dispatch(setArtistAction(artistData))

  // 获取首页-推荐-热门推荐数据（前8条）
  const hotRecommendData = (await fetchTopPlaylistData({ limit: 8 })).map(item =>
    pick(item, ['id', 'name', 'coverImgUrl', 'playCount'])
  )
  dispatch(setHotRecommendAction(hotRecommendData))

  // 获取首页-推荐-新碟上架（前十条）
  const topAlbumData = (await fetchTopAlbumData())
    .slice(0, 10)
    .map(item => Object.assign(pick(item, ['id', 'name', 'picUrl']), { artist: item.artist.name }))
  dispatch(setTopAlbumAction(topAlbumData))
})

const recommendSlice = createSlice({
  name: 'recommend',
  initialState: {
    banner: [],
    artist: [],
    hotRecommend: [],
    topAlbum: []
  },
  reducers: {
    setBannerAction(state, { payload }) {
      state.banner = payload
    },
    setArtistAction(state, { payload }) {
      state.artist = payload
    },
    setHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload
    },
    setTopAlbumAction(state, { payload }) {
      state.topAlbum = payload
    }
  }
})

const { setBannerAction, setArtistAction, setHotRecommendAction, setTopAlbumAction } = recommendSlice.actions

export default recommendSlice.reducer
