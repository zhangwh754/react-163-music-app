// import { daily_Sign } from '@/store/features/account'
import { Button, message } from 'antd'
import React, { memo } from 'react'
// import { useDispatch } from 'react-redux'
import { PanelWrapper } from './style'

const RightPanel = memo(props => {
  // redux hooks
  // const dispatch = useDispatch()

  // 签到逻辑
  const handleDailySign = () => {
    message.error('功能待完成')
    // dispatch(daily_Sign())
  }

  return (
    <PanelWrapper>
      <div className="content">
        <div className="left">
          <a href="#/">
            <img src={props.userInfo?.avatarUrl + '?param=100y100'} alt="头像" />
          </a>
        </div>
        <div className="right">
          <p>{props.userInfo.nickname}</p>

          <span className="level pointer">Lv.{10}</span>

          <Button type="primary" onClick={handleDailySign}>
            签到
          </Button>
        </div>
      </div>
    </PanelWrapper>
  )
})

export default RightPanel
