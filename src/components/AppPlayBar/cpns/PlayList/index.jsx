import { isEmpty } from '@/utils'
import { handleLyric } from '@/utils/format-utils'
import classNames from 'classnames'
import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import PlaylistItem from './cpns/playlist-item'

import { Content, Header, LyricMain, PlaylistMain, PlayListWrapper } from './style'

const AppPlayList = memo(props => {
  const { togglePlaylistShow } = props

  const [currentLyric, setCurrentLyric] = useState(0)

  const { playlist, currentIndex, songInfo } = useSelector(state => ({
    playlist: state.song.playlist,
    currentIndex: state.song.currentIndex,
    songInfo: state.song.songInfo
  }))

  return (
    <PlayListWrapper>
      <Header className=" play_list_bg">
        <div className="left">
          <h4 className="title">播放列表({1})</h4>
          <div className="icons">
            <a href="#/">
              <span className="sprite_player play"></span>
              <span>收藏全部</span>
            </a>
            <a href="#/">
              <span className="play_list_bg2 del"></span>
              <span>清除</span>
            </a>
          </div>
        </div>
        <div className="right">
          <span>我不曾忘记</span>
          <span className="close-window play_list_bg2" onClick={togglePlaylistShow}></span>
        </div>
      </Header>

      <Content>
        <PlaylistMain className="left w528">
          <div className="main-playlist nice_scroll">
            {!isEmpty(playlist) ? (
              playlist.map((item, index) => (
                <PlaylistItem key={item.id} isActive={currentIndex === index ? 'active' : ''} {...item} />
              ))
            ) : (
              <h2 className="null">当前播放列表为空~</h2>
            )}
          </div>
        </PlaylistMain>
        <LyricMain className="right nice_scroll">
          {handleLyric(songInfo.lyric).map((item, index) => (
            <p key={index} className={classNames({ active: currentLyric === index })}>
              {item.text}
            </p>
          ))}
        </LyricMain>
      </Content>
    </PlayListWrapper>
  )
})

export default AppPlayList
