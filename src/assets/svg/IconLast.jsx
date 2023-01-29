import React, { memo } from 'react'
import css2obj from './utils/css2obj'

const IconLast = memo(props => {
  const { width = 12, height = 12 } = props

  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="上一张"
      role="img"
      focusable="false"
      style={css2obj(
        `display: block; fill: none; height: ${height}px; width: ${width}px; stroke: currentcolor; strokeWidth: 4; overflow: visible;`
      )}
    >
      <g fill="none">
        <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
      </g>
    </svg>
  )
})

export default IconLast
