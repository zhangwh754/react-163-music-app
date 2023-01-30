import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import HeaderLine2 from '@/components/HeaderLine2'
import SongCover from '@/components/song-cover'
import { CoversWrapper } from './style'

const LeftCovers = memo(props => {
  const { hotRecommend } = props

  const navigate = useNavigate()

  const handleKeyWordClick = item => {
    navigate(`/discover/songs?albumName=${item}`)
  }

  return (
    <>
      <HeaderLine2
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        rightUrl="/discover/ranking/"
        keywordsClick={item => handleKeyWordClick(item)}
      />
      <CoversWrapper>
        {hotRecommend.map(item => (
          <SongCover key={item.id} {...item} />
        ))}
      </CoversWrapper>
    </>
  )
})

export default LeftCovers
