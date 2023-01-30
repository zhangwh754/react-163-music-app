import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {
  fetchPlayListDetail,
  fetchArtistList,
  fetchBannerData,
  fetchTopAlbumData,
  fetchTopPlaylistData,
  fetchSongDetail
} from '@/services/module/recommend'
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

  // 获取首页-推荐-三个榜单前十条歌曲的id
  const playListDetail = await Promise.all(['19723756', '3779629', '2884035'].map(id => fetchPlayListDetail(id)))
  dispatch(setPlaylistInfoAction(playListDetail.map(item => pick(item, ['id', 'name', 'coverImgUrl']))))
  const idsArr = playListDetail.map(list => list.trackIds.slice(0, 10).map(item => item.id))
  // 根据id拿取歌曲的名字
  let playlistData = []
  for (let i = 0; i < idsArr.length; i++) {
    playlistData[i] = (await fetchSongDetail(idsArr[i])).map(item => pick(item, ['id', 'name']))
  }
  dispatch(setPlaylistAction(playlistData))
})

const recommendSlice = createSlice({
  name: 'recommend',
  initialState: {
    banner: [],
    artist: [],
    hotRecommend: [],
    topAlbum: [],
    playlist: [],
    playlistInfo: []
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
    },
    setPlaylistAction(state, { payload }) {
      state.playlist = payload
    },
    setPlaylistInfoAction(state, { payload }) {
      state.playlistInfo = payload
    }
  }
})

const {
  setBannerAction,
  setArtistAction,
  setHotRecommendAction,
  setTopAlbumAction,
  setPlaylistAction,
  setPlaylistInfoAction
} = recommendSlice.actions

export default recommendSlice.reducer
