import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { ControlWrapper } from './style'
import { getSongDetail, setCurrentIndexAction } from '@/store/features/song'

const Control = memo(props => {
  const { isPlaying, audioRef, handlePlayStatus } = props

  // redux hook
  const { playlist, currentIndex, songInfo } = useSelector(
    state => ({
      songInfo: state.song.songInfo,
      playlist: state.song.playlist,
      currentIndex: state.song.currentIndex
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  // 切换歌曲播放状态
  const handlePlay = () => {
    if (currentIndex === -1) handleDispatchPlay(0)

    if (!songInfo.url) return // 初始化不能播放

    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    handlePlayStatus()
  }

  // 切换上一首下一首，修改redux内的索引
  const handleChangeIndex = (isNext = true) => {
    let index = isNext ? currentIndex + 1 : currentIndex - 1
    if (index >= playlist.length) index = 0
    if (index < 0) index = playlist.length - 1

    handleDispatchPlay(index)
  }

  const handleDispatchPlay = (index = 0) => {
    dispatch(setCurrentIndexAction(index))

    dispatch(getSongDetail(playlist[index].id))
  }

  return (
    <ControlWrapper isPlaying={isPlaying}>
      <button className="sprite_player pre" onClick={e => handleChangeIndex(false)}></button>
      <button className="sprite_player play" onClick={handlePlay}></button>
      <button className="sprite_player next" onClick={e => handleChangeIndex(true)}></button>
    </ControlWrapper>
  )
})

export default Control
