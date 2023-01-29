import React, { memo } from 'react'
import { RankingWrapper } from './style'

const Ranking = memo(() => {
  return (
    <RankingWrapper>
      <div className="content">
        <h2>Ranking</h2>
      </div>
    </RankingWrapper>
  )
})

export default Ranking
