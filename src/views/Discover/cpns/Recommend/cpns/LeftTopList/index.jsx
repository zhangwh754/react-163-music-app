import React, { memo } from 'react'

import { RankingWrapper, TopListWrapper } from './style'
import HeaderLine2 from '@/components/HeaderLine2'
import ListItem from '@/components/list-item'

const LeftTopList = memo(props => {
  const { playlist, playlistInfo } = props

  return (
    <TopListWrapper>
      <HeaderLine2 title="榜单" rightUrl="/discover/ranking/" />

      <RankingWrapper>
        {[0, 1, 2].map(index => (
          <ListItem key={index} playlist={playlist[index]} playlistInfo={playlistInfo[index]} />
        ))}
      </RankingWrapper>
    </TopListWrapper>
  )
})

export default LeftTopList
