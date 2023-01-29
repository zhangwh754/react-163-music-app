import React, { memo } from 'react'
import { RecommendWrapper } from './style'

const Recommend = memo(() => {
  return (
    <RecommendWrapper>
      <div className="content">
        <h2>Recommend</h2>
      </div>
    </RecommendWrapper>
  )
})

export default Recommend
