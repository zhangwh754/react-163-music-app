import { pushPlaylistAction } from '@/store/features/song'
import { getSizeImage } from '@/utils'
import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { ItemWrapper } from './style'

const ListItem = memo(props => {
  const { playlist, playlistInfo } = props

  const dispatch = useDispatch()

  // 添加到播放列表
  const handleAddTo = (e, item) => {
    e.preventDefault()
    dispatch(pushPlaylistAction(item))
  }

  return (
    <ItemWrapper>
      <div className="item-header">
        <div className="image">
          <img src={getSizeImage(playlistInfo.coverImgUrl, 80)} alt="" />
          <div className="image_cover ">{playlistInfo.name}</div>
        </div>

        <div className="tit">
          <div>
            <h3>{playlistInfo.name}</h3>
          </div>
          <div className="btn">
            <a href="/discover/recommend" className="sprite_02 text-indent play">
              播放
            </a>
            <a href="/discover/recommend" className="sprite_02 text-indent favourite">
              收藏
            </a>
          </div>
        </div>
      </div>
      <div className="item-list">
        {playlist.map((item, index) => (
          <div key={item.id} className="list-item">
            <div className="number">{index + 1}</div>
            <a href="/play" className="song-name text-nowrap">
              {item.name}
            </a>
            <div className="oper">
              <a href="/discover/recommend" className="sprite_02 btn play">
                {item.name}
              </a>
              <a href="/discover/recommend" className="sprite_icon2 btn addto" onClick={e => handleAddTo(e, item)}>
                {item.name}
              </a>
              <a href="/play" className="sprite_02 btn favourite">
                {item.name}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="item-footer">
        <a href="/all" className="show-all">
          查看全部&gt;
        </a>
      </div>
    </ItemWrapper>
  )
})

export default ListItem
