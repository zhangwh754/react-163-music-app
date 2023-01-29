import { useHash } from '@/hooks'
import React, { memo } from 'react'
import SubNav from './cpns/SubNav'
import { NavWrapper } from './style'

const AppNav = memo(() => {
  const { hash } = useHash()

  return (
    <NavWrapper>
      <div className="content">
        <div className="bar"></div>
        {hash === 'discover' && <SubNav />}
      </div>
    </NavWrapper>
  )
})

export default AppNav
