import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { LoginWrapper } from './style'
import { useModalShow } from '@/hooks'
import AppModal from '@/ui/AppModal'
// import LoginForm from './cpns/LoginForm'
// import LoginForm2 from './cpns/LoginForm2'
import LoginForm3 from './cpns/LoginForm3'

const AppLogin = memo(() => {
  const { isLoginPanelShow } = useSelector(
    state => ({
      isLoginPanelShow: state.login.isLoginPanelShow
    }),
    shallowEqual
  )

  const { handleModalShow } = useModalShow()

  return (
    isLoginPanelShow && (
      <AppModal>
        <LoginWrapper>
          <div className="content">
            <div className="header">
              <div className="left">登录</div>
              <div className="right pointer" onClick={e => handleModalShow(false)}>
                <i>x</i>
              </div>
            </div>
            <div className="main">
              <LoginForm3 />
            </div>
          </div>
        </LoginWrapper>
      </AppModal>
    )
  )
})

export default AppLogin
