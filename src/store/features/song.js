import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { fetchSongDetail } from '@/services/module/recommend'
// import { fetchSongUrl } from '@/services/module/song'

export const getSongDetail = createAsyncThunk('getSongDetail', async (payload = 167876, { dispatch }) => {
  // 获取歌曲详情
  const [res] = await fetchSongDetail([payload])

  // 获取歌曲url
  // const res2 = await fetchSongUrl(payload)
  // console.log(res2, '@')

  const result = {
    id: res.id,
    picUrl: res.al.picUrl,
    name: res.name,
    author: res.ar[0].name,
    dt: +res.dt, // 总时长
    url: `https://music.163.com/song/media/outer/url?id=${res.id}.mp3` //播放Url
    // url: res2.data[0].url //播放Url
  }

  dispatch(setSongInfoAction(result))
})

const songSlice = createSlice({
  name: 'login',
  initialState: {
    songInfo: {}
  },
  reducers: {
    setSongInfoAction(state, { payload }) {
      state.songInfo = payload
    }
  }
})

export const { setSongInfoAction } = songSlice.actions

export default songSlice.reducer
