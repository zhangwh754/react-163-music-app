import React, { memo, useState } from 'react'
import { Slider } from 'antd'

import { SlideWrapper } from './style'

const Slide = memo(props => {
  const { setCurrentTime, currentTime, dt, name, author, audioRef } = props

  const [isMouseDown, setIsMouseDown] = useState(false)

  const handleChange = newValue => {
    // 鼠标按下时，即拖动slider时，不触发change
    if (isMouseDown) return
    console.log(isMouseDown)
    audioRef.current.currentTime = (newValue / 1000).toFixed(0)
    setCurrentTime(+newValue)
  }
  const handleAfterChange = newValue => {
    audioRef.current.currentTime = (newValue / 1000).toFixed(0)
    setCurrentTime(+newValue)
    setIsMouseDown(false)
  }

  return (
    <SlideWrapper>
      <Slider
        value={currentTime}
        min={0}
        max={dt}
        tooltip={{ formatter: null }}
        onChange={handleChange}
        onAfterChange={handleAfterChange}
      />
      <div className="info">
        <a className="link" href="#/" title={name}>
          {name}
        </a>
        <a href="#/" className="author text-nowrap" title={author}>
          {author}
        </a>
      </div>
    </SlideWrapper>
  )
})

export default Slide
