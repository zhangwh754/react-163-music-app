import React, { memo, useRef } from 'react'

import { NewAlbumsWrapper } from './style'
import HeaderLine2 from '@/components/HeaderLine2'
import { Carousel } from 'antd'
import AlbumCover from '@/components/album-cover'

const LeftNewAlbums = memo(props => {
  const { topAlbum } = props

  const carouselRef = useRef()

  return (
    <NewAlbumsWrapper>
      <HeaderLine2 title="新碟上架" rightUrl="/discover/ranking/" />
      <div className="box">
        <div className="inner">
          <Carousel ref={carouselRef} dots={false}>
            {[0, 1].map(num => (
              <div key={num} className="page">
                {/* item * 5, (item+1) * 5   第一次遍历0  5  第二次遍历 5  10  */}
                {topAlbum &&
                  topAlbum.slice(num * 5, (num + 1) * 5).map(item => {
                    return (
                      <AlbumCover key={item.id} {...item} size={100} width={118} bgp="-570px">
                        {item.name}
                      </AlbumCover>
                    )
                  })}
              </div>
            ))}
          </Carousel>
        </div>
        <div className="sprite_02 arrow arrow-left" onClick={e => carouselRef.current.prev()}></div>
        <div className="sprite_02 arrow arrow-right" onClick={e => carouselRef.current.next()}></div>
      </div>
    </NewAlbumsWrapper>
  )
})

export default LeftNewAlbums
