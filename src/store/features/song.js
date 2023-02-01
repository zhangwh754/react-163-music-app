import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { fetchSongDetail } from '@/services/module/recommend'
import { fetchSongLyric, fetchSongUrl } from '@/services/module/song'
import { handleLyric } from '@/utils'

export const getSongDetail = createAsyncThunk('getSongDetail', async (payload = 167876, { dispatch }) => {
  // 获取歌曲详情
  const [res] = await fetchSongDetail([payload])

  // 获取歌曲url
  const res2 = await fetchSongUrl(payload)

  const result = {
    id: res.id,
    picUrl: res.al.picUrl,
    name: res.name,
    author: res.ar[0].name,
    dt: +res.dt, // 总时长
    url: res2.data[0].url //播放Url
  }

  dispatch(setSongInfoAction(result))

  // 获取歌曲歌词，并格式化为数组
  const res3 = await fetchSongLyric(payload)

  dispatch(setLyricListAction(handleLyric(res3.lrc.lyric)))

  // 重置歌词索引
  dispatch(setCurrentLyricAction(0))
})

const songSlice = createSlice({
  name: 'login',
  initialState: {
    songInfo: {},
    playlist: JSON.parse(localStorage.getItem('playlist')) || [], // 播放列表
    currentIndex: -1, // 当前播放列表激活的歌曲索引
    lyricList: [], // 当前播放歌曲歌词数组
    currentLyric: 0 // 当前播放歌曲歌词索引
  },
  reducers: {
    setSongInfoAction(state, { payload }) {
      state.songInfo = payload
    },
    // 1、给播放列表推入新的歌曲（id、名字、时长、作者）
    pushPlaylistAction(state, { payload }) {
      const id = payload.id

      // 不存在，就推入
      if (state.playlist.findIndex(item => item.id === id) === -1) {
        state.playlist = state.playlist.concat(payload)
      }

      // 存储到本地
      localStorage.setItem('playlist', JSON.stringify(state.playlist.concat(payload)))
    },
    // 2、设置当前播放歌曲的歌词
    setLyricListAction(state, { payload }) {
      state.lyricList = payload
    },
    // 3、设置歌曲索引
    setCurrentLyricAction(state, { payload }) {
      state.currentLyric = payload
    },
    // 4、设置播放列表当前播放的索引
    setCurrentIndexAction(state, { payload }) {
      state.currentIndex = payload
    }
  }
})

export const {
  setSongInfoAction,
  pushPlaylistAction,
  setLyricListAction,
  setCurrentLyricAction,
  setCurrentIndexAction
} = songSlice.actions

export default songSlice.reducer
