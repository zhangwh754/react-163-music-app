import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { LineWrapper } from './style'
import { NavLink } from 'react-router-dom'

const HeaderLine2 = memo(props => {
  const { title, keywords, showIcon, right, rightUrl, keywordsClick } = props

  const handleLinkClick = (e, item) => {
    e.preventDefault()
    keywordsClick(item)
  }

  return (
    <LineWrapper showIcon={showIcon}>
      <div className="left">
        <h2 className="hot-title">
          <a href="/discover/recommend" className="no-link hot-text">
            {title}
          </a>
        </h2>
        <ul className="keywords">
          {keywords.map(item => (
            <li className="item" key={item}>
              <a href="/" onClick={e => handleLinkClick(e, item)}>
                {item}
              </a>
              <span className="line">|</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="right">
        {rightUrl && (
          <NavLink to={rightUrl}>
            <span>{right}</span>
            {showIcon && <i className="icon" />}
          </NavLink>
        )}
      </div>
    </LineWrapper>
  )
})

HeaderLine2.propTypes = {
  // title属性必填
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
  showIcon: PropTypes.bool,
  right: PropTypes.any,
  rightUrl: PropTypes.string,
  keywordsClick: PropTypes.func
}

HeaderLine2.defaultProps = {
  keywords: [],
  showIcon: true,
  right: '更多'
}

export default HeaderLine2
