import { hotRadios } from '@/common/local-data'
import React, { memo } from 'react'
import { RadiosWrapper } from './style'

const RightRadios = memo(() => {
  return (
    <RadiosWrapper>
      {hotRadios.map(item => (
        <li key={item.name}>
          <a href={item.url} className="item">
            <img src={item.picUrl + '?param=62y62'} alt={item.name} />
            <div className="desc">
              <p className="name">{item.name}</p>
              <span className="position">{item.position}</span>
            </div>
          </a>
        </li>
      ))}
    </RadiosWrapper>
  )
})

export default RightRadios
