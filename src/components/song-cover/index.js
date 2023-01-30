import React, { memo } from 'react'
import { getCount, getSizeImage } from '@/utils'
import { SongCoverWrapper } from './style'

// 歌曲封面组件
const SongCover = memo(props => {
  const { songList, width = 140 } = props
  // pic
  const picUrl = (props && (props.picUrl || props.coverImgUrl)) || (songList && songList.coverImgUrl)
  // playCount 播放次数
  const playCount = (props && props.playCount) || (songList && songList.playCount) || 0
  // name
  const name = (props && props.name) || (songList && songList.name)
  // nickname
  const nickname = (props && props.copywriter) || (songList && songList.creator.nickname)
  // id
  const songpropsId = (props && props.id) || (songList && songList.id)

  return (
    <SongCoverWrapper width={width} href={`#/songlist?songlistId=${songpropsId}`}>
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
