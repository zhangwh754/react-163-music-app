import React, { memo } from 'react'
import { getCount, getSizeImage } from '@/utils'
import { SongCoverWrapper } from './style'
import { useNavigate } from 'react-router-dom'

// 歌曲封面组件
const SongCover = memo(props => {
  const { width = 140 } = props
  // pic
  const picUrl = props && (props.picUrl || props.coverImgUrl)
  // playCount 播放次数
  const playCount = props && props.playCount
  // name
  const name = props && props.name
  // nickname
  const nickname = props && props.copywriter
  // id
  const playlistId = props && props.id

  const navigate = useNavigate()

  return (
    <SongCoverWrapper width={width} onClick={e => navigate(`/playlist?id=${playlistId}`)}>
      <div className="cover-wrapper">
        <img src={getSizeImage(picUrl, 140)} alt="" />
        <div className="cover-mask sprite_cover">
          <div className="bottom-bar sprite_cover">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-title">{name}</div>
      {nickname && <div className="cover-source">{nickname}</div>}
    </SongCoverWrapper>
  )
})

export default SongCover
