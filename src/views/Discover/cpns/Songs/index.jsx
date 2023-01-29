import React, { memo } from 'react'
import { SongsWrapper } from './style'

const Songs = memo(() => {
  return (
    <SongsWrapper>
      <div className="content">
        <h2>Songs</h2>
      </div>
    </SongsWrapper>
  )
})

export default Songs
