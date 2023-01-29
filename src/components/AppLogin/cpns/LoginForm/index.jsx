// 密码登录

import React, { memo } from 'react'
import { Button, Form, Input } from 'antd'

import { FormWrapper } from './style'

const onFinish = values => {
  console.log('Success:', values)
}

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo)
}

const LoginForm = memo(() => (
  <FormWrapper>
    <div className="content">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item name="username" rules={[{ required: true, message: '请输入手机号!' }]}>
          <Input placeholder="请输入手机号" />
        </Form.Item>

        <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
          <Input.Password placeholder="请输入密码" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  </FormWrapper>
))

export default LoginForm
