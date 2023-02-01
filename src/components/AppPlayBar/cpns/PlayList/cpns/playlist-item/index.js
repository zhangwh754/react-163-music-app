import React, { memo } from 'react'

import { DownloadOutlined, DeleteOutlined, LikeOutlined } from '@ant-design/icons'

import { PlaylistItemWrapper } from './style'
import { formatDate } from '@/utils'

const PlaylistItem = memo(props => {
  // props/state
  const { name, author, dt, isActive } = props

  return (
    <PlaylistItemWrapper className={isActive}>
      <div className="song-name">{name}</div>
      <div className="control-and-singer">
        <LikeOutlined />
        <DownloadOutlined />
        <DeleteOutlined />
        <span>{author}</span>
      </div>
      <div className="duration">{formatDate(dt, 'mm:ss')}</div>
    </PlaylistItemWrapper>
  )
})

export default PlaylistItem
