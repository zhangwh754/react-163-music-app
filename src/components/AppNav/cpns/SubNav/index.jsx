import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { NavWrapper } from './style'
import { discoverMenu } from '@/common/local-data'
import classNames from 'classnames'

const list = discoverMenu.map(item => (
  <li key={item.title}>
    <NavLink key={item.title} to={item.link} className={({ isActive }) => classNames('nav-item', { active: isActive })}>
      {item.title}
    </NavLink>
  </li>
))

const SubNav = memo(() => {
  return (
    <NavWrapper>
      <div className="content">
        <ul>{list}</ul>
      </div>
    </NavWrapper>
  )
})

export default SubNav
