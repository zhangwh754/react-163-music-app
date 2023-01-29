import request from '../request'

// 获取轮播图数据
export const fetchBannerData = async () => {
  const res = await request.get({
    url: '/banner'
  })

  return res.banners
}
