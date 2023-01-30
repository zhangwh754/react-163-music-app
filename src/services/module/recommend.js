import request from '../request'

// 获取轮播图数据
export const fetchBannerData = async () => {
  const res = await request.get({
    url: '/banner'
  })

  return res.banners
}

// 获取热门歌手
export const fetchArtistList = async payload => {
  const res = await request.get({
    url: '/artist/list',
    params: {
      limit: payload.limit || 5,
      cat: payload.cat || 5001
    }
  })

  return res.artists
}

// 获取网友精选歌单
export const fetchTopPlaylistData = async payload => {
  const res = await request.get({
    url: '/top/playlist',
    params: {
      limit: payload.limit || 8
    }
  })

  return res.playlists
}

// 获取新碟上架
export const fetchTopAlbumData = async (limit = 10) => {
  const res = await request.get({
    url: '/album/newest',
    params: {
      limit
    }
  })

  return res.albums
}
