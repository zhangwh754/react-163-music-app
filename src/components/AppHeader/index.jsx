import React, { memo } from 'react'

import { HeaderWrapper } from './style'
import HeaderLeft from './cpns/HeaderLeft'
import HeaderRight from './cpns/HeaderRight'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <div className="content">
        <div className="wrap">
          <HeaderLeft />
          <HeaderRight />
        </div>
      </div>
    </HeaderWrapper>
  )
})

export default AppHeader
