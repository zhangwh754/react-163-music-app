import React, { memo } from 'react'

import { FooterWrapper } from './style'
import { footerBtns, footerLinks } from '@/common/local-data'

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="content">
        <ul className="enter">
          {footerBtns.map(item => (
            <li key={item.title} className="unit">
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.title}
              </a>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>

        <p className="copy">
          {footerLinks.map(item => (
            <a key={item.link} href={item.link} target="_blank" rel="noreferrer">
              {item.title}
            </a>
          ))}
        </p>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter
