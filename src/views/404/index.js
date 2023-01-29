import React, { memo } from 'react'
import { Result, Button } from 'antd'
import { RollbackOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const ErrorPage = memo(() => {
  const navigate = useNavigate()

  const handleGoHomeBack = () => {
    navigate('/')
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="对不起，您访问的页面不存在。"
      extra={
        <Button type="primary" icon={<RollbackOutlined />} onClick={handleGoHomeBack}>
          返回首页
        </Button>
      }
    />
  )
})

export default ErrorPage
