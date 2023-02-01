import request from '../request'

// 请求歌曲详情
export const fetchSongUrl = id => {
  return request.get({
    url: '/song/url',
    params: {
      id
    }
  })
}

// 请求歌曲歌词
export const fetchSongLyric = id => {
  return request.get({
    url: '/lyric',
    params: {
      id
    }
  })
}
