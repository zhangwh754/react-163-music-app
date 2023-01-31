import React, { memo } from 'react'

import { ControlWrapper } from './style'

const Control = memo(props => {
  const { isPlaying, audioRef, handlePlayStatus } = props

  const handlePlay = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    handlePlayStatus()
  }

  return (
    <ControlWrapper isPlaying={isPlaying}>
      <button className="sprite_player pre"></button>
      <button className="sprite_player play" onClick={handlePlay}></button>
      <button className="sprite_player next"></button>
    </ControlWrapper>
  )
})

export default Control
