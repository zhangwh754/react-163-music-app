import React, { memo, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { BarWrapper, Head, Time } from './style'
import Control from './cpns/Control'
import Slide from './cpns/Slide'
import { formatDate } from '@/utils'
import Control2 from './cpns/Control2'
import { getSongDetail } from '@/store/features/song'

const AppPlayBar = memo(() => {
  const [isPlaying, setIsPlaying] = useState(false) // 是否正在播放
  const [type, setType] = useState('loop')

  const { songInfo } = useSelector(
    state => ({
      songInfo: state.song.songInfo
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
    ;+e.target.currentTime > 0 && setCurrentTime(+(+e.target.currentTime * 1000).toFixed(0))

    if (e.target.ended) {
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
        <Control2 />

        {/* 媒体标签 */}
        <audio ref={audioRef} src={songInfo.url} onTimeUpdate={handleUpdate} />
      </div>
    </BarWrapper>
  )
})

export default AppPlayBar
