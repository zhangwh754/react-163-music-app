import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { RecommendWrapper } from './style'
import { getRecommendData } from '@/store/features/recommend'
import { isEmpty } from '@/utils'
import RecommendBanner from '@/components/RecommendBanner'
import UserLogin from './cpns/RightLogin'
import RightPanel from './cpns/RightPanel'
import HeaderLine1 from '@/components/HeaderLine1'
import RightArtist from './cpns/RightArtist'
import RightRadios from './cpns/RightRadios'
import LeftCovers from './cpns/LeftCovers'

const Recommend = memo(() => {
  const { banner, isLogin, userInfo, hotRecommend } = useSelector(
    state => ({
      banner: state.recommend.banner,
      isLogin: state.login.isLogin,
      userInfo: state.login.userInfo,
      hotRecommend: state.recommend.hotRecommend
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecommendData())
  }, [dispatch])

  return (
    <RecommendWrapper>
      <div className="content">
        <div className="banner">{!isEmpty(banner) && <RecommendBanner banner={banner} />}</div>
        <div className="main">
          <div className="main-left">
            {!isEmpty(hotRecommend) && <LeftCovers hotRecommend={hotRecommend} />}
          </div>
          <div className="main-right">
            {/* 登录面板和用户面板 */}
            {isLogin ? <RightPanel userInfo={userInfo} /> : <UserLogin />}
            {/* 入驻歌手部分 */}
            <HeaderLine1 titleSlot="入驻歌手" rightSlot="查看全部" rightHref="/discover/songs" />
            <RightArtist />
            {/* 热门主播部分 */}
            <HeaderLine1 titleSlot="热门主播" />
            <RightRadios />
          </div>
        </div>
      </div>
    </RecommendWrapper>
  )
})

export default Recommend
