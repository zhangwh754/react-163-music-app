import React, { memo } from 'react'

import { DownloadOutlined, DeleteOutlined, LikeOutlined } from '@ant-design/icons'

import { PlaylistItemWrapper } from './style'
import { formatDate } from '@/utils'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSongDetail, setClearPlaylistAction, setCurrentIndexAction } from '@/store/features/song'

const PlaylistItem = memo(props => {
  // props/state
  const { name, artist, dt, isActive, index, id } = props

  // redux hooks
  const { playlist, currentIndex } = useSelector(
    state => ({
      playlist: state.song.playlist,
      currentIndex: state.song.currentIndex
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  // 控制播放
  const handlePlay = () => {
    dispatch(setCurrentIndexAction(index))

    dispatch(getSongDetail(id))
  }

  // 播放列表删除某一项
  const handleRemove = e => {
    e.preventDefault()

    dispatch(setClearPlaylistAction(index))

    /** 如果删除的是当前激活项，执行删除切换激活索引逻辑 */
    if (index === currentIndex) {
      handleChangeIndex()
    }
    // 删除项在上，索引-1，在下，不变
    else if (index < currentIndex) {
      dispatch(setCurrentIndexAction(currentIndex - 1))
    }
  }

  // 切换上一首下一首，修改redux内的索引
  const handleChangeIndex = () => {
    let index = currentIndex + 1
    if (index >= playlist.length) index = 0
    if (index < 0) index = playlist.length - 1

    dispatch(setCurrentIndexAction(index))

    dispatch(getSongDetail(playlist[index].id))
  }

  return (
    <PlaylistItemWrapper className={isActive} onDoubleClickCapture={e => handlePlay()}>
      <div className="song-name">{name}</div>
      <div className="control-and-singer">
        <LikeOutlined />
        <DownloadOutlined />
        <DeleteOutlined onClickCapture={handleRemove} />
        <span>{artist}</span>
      </div>
      <div className="duration">{formatDate(dt, 'mm:ss')}</div>
    </PlaylistItemWrapper>
  )
})

export default PlaylistItem
