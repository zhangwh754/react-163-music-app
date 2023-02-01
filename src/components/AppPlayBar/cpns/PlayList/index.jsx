import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'

import { isEmpty } from '@/utils'
import PlaylistItem from './cpns/playlist-item'

import { Content, Header, LyricMain, PlaylistMain, PlayListWrapper } from './style'

const AppPlayList = memo(props => {
  const { togglePlaylistShow } = props

  const { playlist, currentIndex, currentLyric, lyricList } = useSelector(
    state => ({
      playlist: state.song.playlist,
      currentIndex: state.song.currentIndex,
      lyricList: state.song.lyricList,
      currentLyric: state.song.currentLyric
    }),
    shallowEqual
  )

  const lyricRef = useRef()

  useEffect(() => {
    if (currentLyric > 0 && currentLyric < 3) return
    lyricRef.current.scrollTo({
      top: (currentLyric - 3) * 32,
      behavior: 'smooth'
    })
  }, [currentLyric])

  return (
    <PlayListWrapper>
      <Header className=" play_list_bg">
        <div className="left">
          <h4 className="title">播放列表({playlist.length})</h4>
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
          <span>{playlist?.[currentIndex]?.name || ''}</span>
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
        <LyricMain ref={lyricRef} className="right nice_scroll">
          {lyricList.map((item, index) => (
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
