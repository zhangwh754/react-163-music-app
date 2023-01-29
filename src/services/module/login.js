import request from '../request'

// 1、获取二维码生成key
export const fetchQrKey = () => {
  return request.get({
    url: '/login/qr/key',
    params: {
      timerstamp: Date.now()
    }
  })
}

// 2、生成二维码
export const fetchQrImg = payload => {
  return request.get({
    url: '/login/qr/create',
    params: {
      key: payload,
      timerstamp: Date.now()
    }
  })
}

// 3、获取二维码扫描状态
export const fetchQrStatus = payload => {
  return request.get({
    url: '/login/qr/check',
    params: {
      key: payload,
      timerstamp: Date.now()
    }
  })
}

// 4、获取登录信息
export const fetchLoginStatus = (payload = '') => {
  return request.post({
    url: '/login/status',
    params: {
      timerstamp: Date.now()
    },
    data: {
      cookie: payload
    }
  })
}

// 获取验证码
// export const fetchCaptcha = payload => {
//   request.get({
//     url: '/captcha/sent',
//     params: {
//       phone: payload,
//       timerstamp: Date.now()
//     }
//   })
// }

// 登录接口[手机号密码、手机号验证码]
// export const fetchLogin = (type, payload) => {
//   switch (type) {
//     // 账密登录，不推荐使用
//     case 'password':
//       return request.post({
//         url: '/login/cellphone',
//         payload
//       })
//     // 手机验证码登录
//     case 'captcha':
//       return request.get({
//         url: '/login/cellphone',
//         params: {
//           phone: payload.phone,
//           captcha: payload.captcha
//         }
//       })
//     default:
//       break
//   }
// }
