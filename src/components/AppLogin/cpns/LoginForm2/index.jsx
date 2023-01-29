// 验证码登录

import React, { memo } from 'react'
import { Button, Form, Input } from 'antd'
import { MobileOutlined, UserOutlined } from '@ant-design/icons'

import { FormWrapper } from './style'

const onFinish = values => {
  console.log('Success:', values)
}

const LoginForm2 = memo(() => (
  <FormWrapper>
    <div className="content">
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off">
        <Form.Item name="username" rules={[{ required: true, message: '请输入手机号!' }]}>
          <Input prefix={<UserOutlined />} placeholder="请输入手机号" />
        </Form.Item>

        <Form.Item
          name="captcha"
          rules={[{ required: true, message: '请输入验证码!' }]}
          style={{ display: 'inline-block', width: 'calc(100% - 130px)' }}
        >
          <Input prefix={<MobileOutlined />} placeholder="请输入验证码" />
        </Form.Item>

        <Form.Item style={{ display: 'inline-block' }}>
          <Button type="primary" danger className="btn">
            获取验证码
          </Button>
        </Form.Item>

        <Form.Item>
          <Button type="primary" danger htmlType="submit" style={{ width: '100%' }}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  </FormWrapper>
))

export default LoginForm2
