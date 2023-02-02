import React, { memo, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { BarWrapper, Head, Time } from './style'
import Control from './cpns/Control'
import Slide from './cpns/Slide'
import { formatDate, isEmpty, getNotRepeatedInteger } from '@/utils'
import Control2 from './cpns/Control2'
import { getSongDetail, setCurrentIndexAction, setCurrentLyricAction } from '@/store/features/song'
import PlayList from './cpns/PlayList'
import defaultImg from '@/assets/img/default_album.jpg'

const AppPlayBar = memo(() => {
  const [isPlaying, setIsPlaying] = useState(false) // 是否正在播放
  const [isPlaylistShow, setIsPlaylistShow] = useState(false) // 是否显示播放列表
  const [currentTime, setCurrentTime] = useState(0) // 当前播放时间
  const [typeIndex, setTypeIndex] = useState(0) // 当前播放类型

  // redux hooks
  const { songInfo, lyricList, currentLyric, playlist, currentIndex } = useSelector(
    state => ({
      songInfo: state.song.songInfo,
      lyricList: state.song.lyricList,
      currentLyric: state.song.currentLyric,
      playlist: state.song.playlist,
      currentIndex: state.song.currentIndex
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  const audioRef = useRef()

  // 组件挂载 初始化audio组件
  useEffect(() => {
    audioRef.current.volume = 0.3
  }, [])

  // 切换歌曲（即触发了getSongDetail事件）
  useEffect(() => {
    if (!songInfo.url) return // 初始化不能播放
    audioRef.current.src = songInfo.url
    audioRef.current.currentTime = 0
    setCurrentTime(0)

    audioRef.current.load()

    setTimeout(function () {
      audioRef.current.play()
    }, 200)

    setIsPlaying(true)
  }, [songInfo.url])

  // 歌曲播放，滑块更新进度
  const handleUpdate = e => {
    const timeStamp = +(+e.target.currentTime * 1000).toFixed(0)

    ;+e.target.currentTime > 0 && setCurrentTime(timeStamp)

    // 当前一首正常播放完成,进入下一首
    if (e.target.ended) {
      setIsPlaying(false)

      let index
      // eslint-disable-next-line default-case
      switch (typeIndex) {
        case 0:
          console.log('顺序播放') // 顺序播放
          index = currentIndex + 1
          if (index >= playlist.length) index = 0
          if (index < 0) index = playlist.length - 1
          break
        case 1:
          console.log('随机播放') // 随机播放
          index = getNotRepeatedInteger(0, playlist.length - 1)
          break
        case 2:
          console.log('单曲循环') // 单曲循环
          break
      }

      dispatch(setCurrentIndexAction(index))

      typeIndex !== 2 && dispatch(getSongDetail(playlist[index].id))

      setCurrentTime(0)
      audioRef.current.play()
    }

    // 歌词滚动效果，比对当前和存储的歌词时间表
    if (isEmpty(lyricList)) return

    if (timeStamp > lyricList[currentLyric].time * 10 && currentLyric + 1 < lyricList.length) {
      let index = currentLyric
      while (lyricList?.[index + 1]?.time && timeStamp > lyricList[index].time * 10) {
        console.log('累加1次')
        index++
      }
      dispatch(setCurrentLyricAction(index))
    }
    if (currentLyric !== 0 && timeStamp < lyricList[currentLyric - 1].time * 10) {
      let index = currentLyric
      while (lyricList?.[index - 1]?.time && timeStamp < lyricList[index].time * 10) {
        console.log('累减1次')
        index--
      }
      dispatch(setCurrentLyricAction(index))
    }
  }

  return (
    <BarWrapper className="sprite_player">
      <div className="content">
        {/* 左侧按钮 */}
        <Control
          typeIndex={typeIndex}
          isPlaying={isPlaying}
          audioRef={audioRef}
          handlePlayStatus={e => setIsPlaying(!isPlaying)}
        />
        {/* 封面 */}
        <Head>
          <NavLink to={'/discover/song'}>
            <img src={songInfo.picUrl || defaultImg} alt={songInfo.name} title={songInfo.name} />
            <div className="image_cover">{songInfo.name}</div>
          </NavLink>
        </Head>
        {/* 滑块及歌曲信息 */}
        <Slide {...songInfo} currentTime={currentTime} audioRef={audioRef} setCurrentTime={setCurrentTime} />
        {/* 进度时间 */}
        <Time style={{ visibility: isEmpty(songInfo) && 'hidden' }}>
          <span className="now-time">{formatDate(currentTime, 'mm:ss')}</span>
          <span className="total-time"> / {songInfo.dt && formatDate(songInfo.dt, 'mm:ss')}</span>
        </Time>
        {/* 右侧按钮 */}
        <Control2
          count={playlist.length}
          typeIndex={typeIndex}
          setTypeIndex={setTypeIndex}
          togglePlaylistShow={e => setIsPlaylistShow(!isPlaylistShow)}
        />

        {/* 媒体标签 */}
        <audio ref={audioRef} src={songInfo.url} onTimeUpdate={handleUpdate} />

        {/* 底部播放列表 */}
        {isPlaylistShow && <PlayList currentTime={currentTime} togglePlaylistShow={e => setIsPlaylistShow(false)} />}
      </div>
    </BarWrapper>
  )
})

export default AppPlayBar
