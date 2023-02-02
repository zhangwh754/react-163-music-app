import { getSongDetail, pushPlaylistAction, setCurrentIndexAction } from '@/store/features/song'
import { getSizeImage } from '@/utils'
import { message } from 'antd'
import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { ItemWrapper } from './style'

const ListItem = memo(props => {
  const { playlist, playlistInfo } = props

  const [messageApi, contextHolder] = message.useMessage()

  // redux hooks
  const { playlist: playlist2 } = useSelector(
    state => ({
      playlist: state.song.playlist
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  // 添加到播放列表
  const handleAddTo = (e, item) => {
    e.preventDefault()
    dispatch(pushPlaylistAction(item))
  }

  // 全部播放，未找到对应接口
  const handlePlayList = e => {
    e.preventDefault()
    messageApi.open({
      type: 'error',
      content: '未找到对应接口，请一首一首播放'
    })
  }

  // 收藏歌单
  const handleStar = e => {
    e.preventDefault()

    messageApi.open({
      type: 'success',
      content: '收藏成功'
    })
  }

  // 单独播放一首歌曲
  const handlePlay = (e, item) => {
    e.preventDefault()

    console.log(item)
    // 先添加到播放列表
    dispatch(pushPlaylistAction(item))
    // 再设置索引
    dispatch(setCurrentIndexAction(playlist2.length))
    // 最后请求歌曲信息
    dispatch(getSongDetail(item.id))
  }

  return (
    <ItemWrapper>
      {contextHolder}
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
            <a href="#/" className="sprite_02 text-indent play" onClick={handlePlayList}>
              播放
            </a>
            <a href="#/" className="sprite_02 text-indent favourite" onClick={handleStar}>
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
              <a href="#/" className="sprite_02 btn play" onClick={e => handlePlay(e, item)}>
                {item.name}
              </a>
              <a href="#/" className="sprite_icon2 btn addto" onClick={e => handleAddTo(e, item)}>
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
