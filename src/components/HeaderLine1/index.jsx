import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { LineWrapper } from './style'

const HeaderLine1 = memo(props => {
  const { titleSlot = '', rightSlot = '', rightHref = '' } = props

  return (
    <LineWrapper>
      <div className="hot-artist">{titleSlot}</div>
      <NavLink to={rightHref} className="show-all">
        {rightSlot}
      </NavLink>
    </LineWrapper>
  )
})

export default HeaderLine1
