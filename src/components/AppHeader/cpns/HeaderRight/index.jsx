import React, { memo, useEffect, useRef, useState } from 'react'
import { Input } from 'antd'
// import { CustomerServiceOutlined, ExportOutlined, SearchOutlined } from '@ant-design/icons'
import { SearchOutlined } from '@ant-design/icons'

import { RightWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '@/store/features/login'
// import KeyBoard from '@/assets/svg/KeyBoard'

const HeaderRight = memo(() => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const { isLogin, userInfo } = useSelector(
    state => ({
      isLogin: state.login.isLogin,
      userInfo: state.login.userInfo
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getUserInfo())
  }, [dispatch])

  const inputRef = useRef()

  // 头像
  const profileImg = <img src={userInfo?.avatarUrl + '?param=30y30'} alt="" className="profile-img" />

  return (
    <RightWrapper>
      <div className="content">
        <div className="search-wrapper">
          <Input
            ref={inputRef}
            className="search "
            placeholder="音乐/歌手"
            size="large"
            prefix={<SearchOutlined />}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </div>

        <div className="center">创作者中心</div>

        {isLogin ? (
          profileImg
        ) : (
          <a href="/#" onClick={e => e.preventDefault} className="login">
            登录
          </a>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
