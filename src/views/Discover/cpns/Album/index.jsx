import React, { memo } from 'react'
import { AlbumWrapper } from './style'

const Album = memo(() => {
  return (
    <AlbumWrapper>
      <div className="content">
        <h2>Album</h2>
      </div>
    </AlbumWrapper>
  )
})

export default Album
