import { Tooltip } from 'antd'
import React, { memo } from 'react'

import { ControlWrapper } from './style'

const Control2 = memo(props => {
  const { count, togglePlaylistShow, typeIndex, setTypeIndex } = props

  const handleTypeChange = () => {
    let index = typeIndex + 1 === 3 ? 0 : typeIndex + 1

    setTypeIndex(index)
  }

  return (
    <ControlWrapper className="sprite_player" typeIndex={typeIndex}>
      <Tooltip title="收藏">
        <button className="sprite_player play"></button>
      </Tooltip>
      <button className="sprite_player volume"></button>
      <Tooltip title={['顺序播放', '随机播放', '单曲循环'][typeIndex]}>
        <button className="sprite_player loop" onClick={handleTypeChange}></button>
      </Tooltip>
      <Tooltip title="播放列表">
        <button className="sprite_player playlist" onClick={togglePlaylistShow}>
          {count}
        </button>
      </Tooltip>
    </ControlWrapper>
  )
})

export default Control2
