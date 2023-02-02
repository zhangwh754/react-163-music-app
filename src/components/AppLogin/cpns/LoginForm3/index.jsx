/* eslint-disable jsx-a11y/alt-text */
// 扫码登录

import React, { memo, useEffect, useRef } from 'react'

import { FormWrapper } from './style'
import { message } from 'antd'
import { fetchQrImg, fetchQrKey, fetchQrStatus } from '@/services/module/account'
import { getUserInfo } from '@/store/features/account'

const LoginForm3 = memo(() => {
  const [messageApi, contextHolder] = message.useMessage()

  const imgRef = useRef()

  useEffect(() => {
    let key, timer

    fetchQrKey()
      .then(res => {
        key = res.data.unikey
      })
      .then(() => {
        return fetchQrImg(key)
      })
      .then(({ data: res }) => {
        imgRef.current.src = res.qrimg
      })
      .then(() => {
        timer = setInterval(async () => {
          const res = await fetchQrStatus(key)
          if (res.code === 800) {
            messageApi.open({
              type: 'error',
              content: '二维码已过期,请重新获取'
            })
            clearInterval(timer)
          }
          if (res.code === 803) {
            // 这一步会返回cookie
            clearInterval(timer)
            messageApi.open({
              type: 'success',
              content: '授权登录成功'
            })
            localStorage.setItem('wy-cookie', res.cookie)
            getUserInfo()
          }
        }, 5000)
      })

    return () => {
      timer && clearInterval(timer)
    }
  }, [messageApi])

  return (
    <FormWrapper>
      {contextHolder}
      <div className="content">
        <div className="login_bg">
          <img src={require('@/assets/img/login.png')} alt="" />
        </div>
        <img ref={imgRef} id="qrImg" alt="登录扫码" />
      </div>
    </FormWrapper>
  )
})

export default LoginForm3
