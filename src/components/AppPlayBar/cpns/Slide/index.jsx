import React, { memo } from 'react'
import { Slider, Tooltip } from 'antd'

import { SlideWrapper } from './style'

const Slide = memo(props => {
  const handleChange = newValue => {
    console.log(newValue, '实时变化')
  }
  const handleAfterChange = newValue => {
    console.log(newValue, '鼠标抬起')
  }

  return (
    <SlideWrapper>
      <Slider
        defaultValue={0}
        max={99.9}
        tooltip={{ formatter: null }}
        onChange={handleChange}
        onAfterChange={handleAfterChange}
      />
      <div className="info">
        <a className="link" href="#/" title={'きっと彼女は'}>
          きっと彼女は
        </a>
        <a href="#/" className="author text-nowrap" title={'石濱翔'}>
          石濱翔
        </a>
      </div>
    </SlideWrapper>
  )
})

export default Slide
