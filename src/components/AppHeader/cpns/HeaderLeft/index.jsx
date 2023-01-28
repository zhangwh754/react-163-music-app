import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import { LeftWrapper } from './style'
import { headerLinks } from '@/common/local-data'

const HeaderLeft = memo(() => {
  // Header左侧导航按钮
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink
          key={item.title}
          to={item.link}
          className={({ isActive }) => classNames('header-item', { 'link-active': isActive })}
        >
          <em>{item.title}</em>
          <i className="icon"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} key={item.title} className="header-item">
          {item.title}
        </a>
      )
    }
  }

  return (
    <LeftWrapper>
      <div className="content">
        <h1>
          <a href="#/" className="logo sprite_01">
            网易云音乐
          </a>
        </h1>
        <div className="header-group">
          {headerLinks.map((item, index) => {
            return showSelectItem(item, index)
          })}
        </div>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft
