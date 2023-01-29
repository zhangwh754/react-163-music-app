import request from '../request'

export const fetchLogin = (type, payload) => {
  switch (type) {
    // 账密登录，不推荐使用
    case 'password':
      request.post({
        url: '/login/cellphone1',
        payload
      })
      break
    // 手机验证码登录
    case 'captcha':
      request.post({
        url: '/login/cellphone1',
        payload
      })
      break
    default:
      break
  }
}
