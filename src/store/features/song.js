import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { fetchSongDetail } from '@/services/module/recommend'
import { fetchSongLyric, fetchSongUrl } from '@/services/module/song'
import { handleLyric } from '@/utils'

export const getSongDetail = createAsyncThunk('getSongDetail', async (payload, { dispatch }) => {
  if (!payload) return

  // 获取歌曲详情
  const [res] = await fetchSongDetail([payload])

  // 获取歌曲url
  const res2 = await fetchSongUrl(payload)

  const result = {
    id: res.id,
    picUrl: res.al.picUrl,
    name: res.name,
    artist: res.ar[0].name,
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
    playlist: JSON.parse(localStorage.getItem('playlist')) || [
      { id: 30780536, name: '星屑の砂時計', artist: 'yu-yu', dt: 346733 },
      { id: 610735, name: '深爱', artist: '水樹奈々', dt: 296440 }
    ], // 播放列表
    currentIndex: -1, // 当前播放列表激活的歌曲索引
    lyricList: [], // 当前播放歌曲歌词数组
    currentLyric: 0 // 当前播放歌曲歌词索引
  },
  reducers: {
    setSongInfoAction(state, { payload }) {
      state.songInfo = payload
    },
    // 1、给播放列表推入新的歌曲（id、name、dt、artist）
    pushPlaylistAction(state, { payload }) {
      // 不存在，就推入
      if (state.playlist.findIndex(item => item.id === payload.id) === -1) {
        const arr2 = state.playlist.concat([payload])

        state.playlist = arr2
        // 存储到本地
        localStorage.setItem('playlist', JSON.stringify(arr2))
      }
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
    },
    // 5、删除播放列表
    setClearPlaylistAction(state, { payload }) {
      let newPlayList
      // 清空播放列表
      if (typeof payload !== 'number') {
        newPlayList = []
      }
      // 删除某一项
      else {
        newPlayList = state.playlist.filter((_, index) => payload !== index)
      }

      state.playlist = newPlayList
      localStorage.setItem('playlist', JSON.stringify(newPlayList))
    }
  }
})

export const {
  setSongInfoAction,
  pushPlaylistAction,
  setLyricListAction,
  setCurrentLyricAction,
  setCurrentIndexAction,
  setClearPlaylistAction
} = songSlice.actions

export default songSlice.reducer
