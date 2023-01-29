import React, { memo, useEffect, useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { BannerWrapper } from './style'
import useThrottle from '@/hooks/useThrottle'
import IconLast from '@/assets/svg/IconLast'
import IconMore from '@/assets/svg/IconMore'

const RecommendBanner = memo(props => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // 设置轮播图自动切换的定时器
  useEffect(() => {
    const timer = setInterval(() => handleChangeCurrentIndex(true), 5000)

    return () => clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex])

  // 节流控制轮播图切换频率
  const handleChangeCurrentIndex = useThrottle(
    arg => {
      let index
      if (typeof arg === 'boolean') {
        index = arg ? currentIndex + 1 : currentIndex - 1
        if (index > props.banner.length - 1) index = 0
        if (index < 0) index = props.banner.length - 1
      } else {
        index = arg
      }
      setCurrentIndex(index)
    },
    800,
    [currentIndex]
  )

  return (
    <BannerWrapper imageUrl={props.banner[currentIndex].imageUrl}>
      <div className="bg"></div>
      <div className="content">
        <SwitchTransition>
          <CSSTransition key={currentIndex} classNames="switch" timeout={200}>
            <div className="banner">
              <img src={props.banner[currentIndex].imageUrl + '?imageView&quality=89'} alt="" />
            </div>
          </CSSTransition>
        </SwitchTransition>
        <div className="download">
          <a href="https://music.163.com/#/download" target="_blank" rel="noreferrer">
            下载客户端
          </a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>
        <div className="indicator-box">
          <ul className="indicator">
            {props.banner.map((item, index) => (
              <li
                key={index}
                className={classNames('dot', { active: index === currentIndex })}
                onClick={e => handleChangeCurrentIndex(index)}
              />
            ))}
          </ul>
        </div>
        <div className="btns left" onClick={e => handleChangeCurrentIndex(false)}>
          <IconLast width={40} height={40} />
        </div>
        <div className="btns right" onClick={e => handleChangeCurrentIndex(true)}>
          <IconMore width={40} height={40} />
        </div>
      </div>
    </BannerWrapper>
  )
})

RecommendBanner.propTypes = {
  banner: PropTypes.array
}

export default RecommendBanner
