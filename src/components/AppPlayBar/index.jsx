import React, { memo, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { BarWrapper, Head, Time } from './style'
import Control from './cpns/Control'
import Slide from './cpns/Slide'
import { formatDate } from '@/utils'
import Control2 from './cpns/Control2'
import { getSongDetail, setCurrentLyricAction } from '@/store/features/song'
import PlayList from './cpns/PlayList'

const AppPlayBar = memo(() => {
  const [isPlaying, setIsPlaying] = useState(false) // 是否正在播放
  const [type] = useState('loop') // 当前播放类型
  const [isPlaylistShow, setIsPlaylistShow] = useState(false)

  const { songInfo, lyricList, currentLyric } = useSelector(
    state => ({
      songInfo: state.song.songInfo,
      lyricList: state.song.lyricList,
      currentLyric: state.song.currentLyric
    }),
    shallowEqual
  )

  const [currentTime, setCurrentTime] = useState(0)

  const dispatch = useDispatch()

  const audioRef = useRef()

  // 组件挂载 请求歌曲信息
  useEffect(() => {
    dispatch(getSongDetail(30780536))
    audioRef.current.volume = 0.3
  }, [dispatch])

  // 组件挂载 初始化audio组件
  useEffect(() => {
    audioRef.current.volume = 0.3
    audioRef.current.src = songInfo.url
  }, [audioRef, songInfo.url])

  // 歌曲播放，滑块更新进度
  const handleUpdate = e => {
    const timeStamp = +(+e.target.currentTime * 1000).toFixed(0)

    ;+e.target.currentTime > 0 && setCurrentTime(timeStamp)

    if (e.target.ended) {
      // 当前一首正常播放完成
      console.log('end')
      switch (type) {
        case 'loop':
          console.log('loop') // 单曲循环
          break
        case 'order':
          console.log('order') // 顺序播放
          break
        case 'list-loop':
          console.log('list-loop') // 列表循环
          break
        case 'random':
          console.log('random') // 随机播放
          break
        default:
          console.log('需要是loop、order、list-loop、random的一种')
          break
      }
      setCurrentTime(0)
      audioRef.current.play()
    }

    // 歌词滚动效果
    if (timeStamp > lyricList[currentLyric].time * 10 && currentLyric + 1 < lyricList.length) {
      let index = currentLyric
      while (timeStamp > lyricList[++index].time * 10) {
        console.log('累加1次')
      }
      dispatch(setCurrentLyricAction(index))
    }
    if (currentLyric !== 0 && timeStamp < lyricList[currentLyric - 1].time * 10) {
      let index = currentLyric
      while (timeStamp < lyricList[--index].time * 10) {
        console.log('累减1次')
      }
      dispatch(setCurrentLyricAction(index))
    }
  }

  return (
    <BarWrapper className="sprite_player">
      <div className="content">
        {/* 左侧按钮 */}
        <Control handlePlayStatus={e => setIsPlaying(!isPlaying)} isPlaying={isPlaying} audioRef={audioRef} />
        {/* 封面 */}
        <Head>
          <NavLink to={'/discover/song'}>
            <img src={songInfo.picUrl} alt={songInfo.name} title={songInfo.name} />
          </NavLink>
        </Head>
        {/* 滑块及歌曲信息 */}
        <Slide {...songInfo} currentTime={currentTime} audioRef={audioRef} setCurrentTime={setCurrentTime} />
        {/* 进度时间 */}
        <Time>
          <span className="now-time">{formatDate(currentTime, 'mm:ss')}</span>
          <span className="total-time"> / {songInfo.dt && formatDate(songInfo.dt, 'mm:ss')}</span>
        </Time>
        {/* 右侧按钮 */}
        <Control2 togglePlaylistShow={e => setIsPlaylistShow(!isPlaylistShow)} />

        {/* 媒体标签 */}
        <audio ref={audioRef} src={songInfo.url} onTimeUpdate={handleUpdate} />

        {/* 底部播放列表 */}
        {isPlaylistShow && <PlayList currentTime={currentTime} togglePlaylistShow={e => setIsPlaylistShow(false)} />}
      </div>
    </BarWrapper>
  )
})

export default AppPlayBar
