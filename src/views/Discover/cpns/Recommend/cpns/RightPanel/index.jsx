import { Button } from 'antd'
import React, { memo } from 'react'
import { PanelWrapper } from './style'

const RightPanel = memo(props => {
  return (
    <PanelWrapper>
      <div className="content">
        <div className="left">
          <a href="">
            <img src={props.userInfo?.avatarUrl + '?param=100y100'} alt="头像" />
          </a>
        </div>
        <div className="right">
          <p>{props.userInfo.nickname}</p>

          <span className="level pointer">Lv.{10}</span>

          <Button type="primary">签到</Button>
        </div>
      </div>
    </PanelWrapper>
  )
})

export default RightPanel
