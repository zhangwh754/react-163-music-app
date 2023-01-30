import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { getSizeImage } from '@/utils'
import { AlbumCoverWrapper } from './style'

const AlbumCover = memo(props => {
  const { size = 130, width = 153, bgp = '-845px' } = props

  const picUrl = props && (props.picUrl || props.coverImgUrl)
  const name = props && props.name
  const id = props && props.id
  const artist = props && props.artist

  const navigate = useNavigate()

  return (
    <AlbumCoverWrapper width={width} bgp={bgp} size={size} onClick={e => navigate(`/album?id=${id}`)}>
      <div className="album-image pointer">
        <img src={getSizeImage(picUrl, size)} alt={name} />
        <a href="/discover/recommend" className="no-link image_cover cover">
          {name}
        </a>
      </div>
      <div className="album-name text-nowrap">{name}</div>
      <div className="artist text-nowrap">{artist}</div>
    </AlbumCoverWrapper>
  )
})

export default AlbumCover
