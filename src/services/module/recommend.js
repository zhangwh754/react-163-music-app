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
