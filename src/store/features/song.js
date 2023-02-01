import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { fetchSongDetail } from '@/services/module/recommend'
import { fetchSongLyric, fetchSongUrl } from '@/services/module/song'
import { handleLyric } from '@/utils'

export const getSongDetail = createAsyncThunk('getSongDetail', async (payload = 167876, { dispatch }) => {
  // 获取歌曲详情
  const [res] = await fetchSongDetail([payload])

  // 获取歌曲url
  const res2 = await fetchSongUrl(payload)

  // 获取歌曲歌词
  const res3 = await fetchSongLyric(payload)

  const result = {
    id: res.id,
    picUrl: res.al.picUrl,
    name: res.name,
    author: res.ar[0].name,
    dt: +res.dt, // 总时长
    url: res2.data[0].url //播放Url
    // lyric: res3.lrc.lyric
  }

  dispatch(setLyricListAction(handleLyric(res3.lrc.lyric)))

  dispatch(setSongInfoAction(result))
})

const songSlice = createSlice({
  name: 'login',
  initialState: {
    songInfo: {},
    playlist: [
      {
        id: 30780536,
        name: '星屑の砂時計',
        author: 'yu-yu',
        dt: 346733
      }
    ], // 播放列表
    currentIndex: 0, // 当前播放列表激活的歌曲索引
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
    },
    // 2、设置当前播放歌曲的歌词
    setLyricListAction(state, { payload }) {
      state.lyricList = payload
    },
    // 3、设置索引
    setCurrentLyricAction(state, { payload }) {
      state.currentLyric = payload
    }
  }
})

export const { setSongInfoAction, pushPlaylistAction, setLyricListAction, setCurrentLyricAction } = songSlice.actions

export default songSlice.reducer
