import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'

class My_Request {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.request.use(req => ({
      ...req,
      withCredentials: true
    }))

    this.instance.interceptors.response.use(
      res => {
        return res.data
      },
      err => err
    )
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: 'get' })
  }

  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

const request = new My_Request(BASE_URL, TIMEOUT)

export default request
