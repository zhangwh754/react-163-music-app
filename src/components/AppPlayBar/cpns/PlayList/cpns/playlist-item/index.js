import React, { memo } from 'react'

import { DownloadOutlined, DeleteOutlined, LikeOutlined } from '@ant-design/icons'

import { PlaylistItemWrapper } from './style'
import { formatDate } from '@/utils'
import { useDispatch } from 'react-redux'
import { getSongDetail, setCurrentIndexAction } from '@/store/features/song'

const PlaylistItem = memo(props => {
  // props/state
  const { name, author, dt, isActive, index, id } = props

  const dispatch = useDispatch()

  const handlePlay = () => {
    dispatch(setCurrentIndexAction(index))

    dispatch(getSongDetail(id))
  }

  return (
    <PlaylistItemWrapper className={isActive} onDoubleClickCapture={e => handlePlay()}>
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
