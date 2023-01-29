import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import { DiscoverWrapper } from './style'

const Discover = memo(() => {
  return (
    <DiscoverWrapper>
      <div className="content">
        <Outlet />
        {/* <h2>Discover</h2> */}
      </div>
    </DiscoverWrapper>
  )
})

export default Discover
