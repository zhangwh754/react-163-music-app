import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { ArtistWrapper } from './style'

const RightArtist = memo(() => {
  const { artist } = useSelector(state => ({
    artist: state.recommend.artist
  }))

  return (
    <ArtistWrapper>
      {artist.map(item => (
        <li key={item.id}>
          <a className="item" href={`/user/home?id=${item.id}`} target="_blank" rel="noreferrer">
            <img src={item.img1v1Url + '?param=62y62'} alt={item.name} />
            <div className="desc">
              <p className="name">{item.name}</p>
              <span className="alias">歌手：{item.alias[0]}</span>
            </div>
          </a>
        </li>
      ))}
    </ArtistWrapper>
  )
})

export default RightArtist
