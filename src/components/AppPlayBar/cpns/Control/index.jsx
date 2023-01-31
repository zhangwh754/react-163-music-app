import React, { memo } from 'react'

import { ControlWrapper } from './style'

const Control = memo(() => {
  return (
    <ControlWrapper>
      <button className="sprite_player pre"></button>
      <button className="sprite_player play"></button>
      <button className="sprite_player next"></button>
    </ControlWrapper>
  )
})

export default Control
