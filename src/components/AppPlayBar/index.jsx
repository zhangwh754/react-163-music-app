import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { BarWrapper, Head, Time } from './style'
import Control from './cpns/Control'
import Slide from './cpns/Slide'
import { formatDate } from '@/utils'
import Control2 from './cpns/Control2'

const AppPlayBar = memo(() => {
  const currentTime = Date.now()
  const duration = Date.now()

  return (
    <BarWrapper className="sprite_player">
      <div className="content">
        {/* 左侧按钮 */}
        <Control />
        {/* 封面 */}
        <Head>
          <NavLink to={'/discover/song'}>
            <img src="" alt="" />
          </NavLink>
        </Head>
        {/* 滑块及歌曲信息 */}
        <Slide />
        {/* 进度时间 */}
        <Time>
          <span className="now-time">{formatDate(currentTime, 'mm:ss')}</span>
          <span className="total-time"> / {duration && formatDate(duration, 'mm:ss')}</span>
        </Time>
        {/* 右侧按钮 */}
        <Control2 />
      </div>
    </BarWrapper>
  )
})

export default AppPlayBar
