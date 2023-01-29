import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { RecommendWrapper } from './style'
import { getRecommendData } from '@/store/features/recommend'
import { isEmpty } from '@/utils'
import RecommendBanner from '@/components/RecommendBanner'
import UserLogin from './cpns/RightLogin'
import RightPanel from './cpns/RightPanel'

const Recommend = memo(() => {
  const { banner, isLogin, userInfo } = useSelector(
    state => ({
      banner: state.recommend.banner,
      isLogin: state.login.isLogin,
      userInfo: state.login.userInfo
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
          <div className="main-left">left</div>
          <div className="main-right">
            {/* 登录面板和用户面板 */}
            {isLogin ? <RightPanel userInfo={userInfo} /> : <UserLogin />}
          </div>
        </div>
      </div>
    </RecommendWrapper>
  )
})

export default Recommend
