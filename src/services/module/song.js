import request from '../request'

export const fetchSongUrl = id => {
  return request.get({
    url: '/song/url',
    params: {
      id
    }
  })
}
