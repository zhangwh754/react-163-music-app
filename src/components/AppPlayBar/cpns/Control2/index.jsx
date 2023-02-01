import { Tooltip } from 'antd'
import React, { memo } from 'react'

import { ControlWrapper } from './style'

const Control2 = memo(props => {
  const { togglePlaylistShow } = props

  return (
    <ControlWrapper className="sprite_player">
      <Tooltip title="收藏">
        <button className="sprite_player play"></button>
      </Tooltip>
      <button className="sprite_player volume"></button>
      <Tooltip title="循环">
        <button className="sprite_player loop"></button>
      </Tooltip>
      <Tooltip title="播放列表">
        <button className="sprite_player playlist" onClick={togglePlaylistShow}></button>
      </Tooltip>
    </ControlWrapper>
  )
})

export default Control2
