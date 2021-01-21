import Axios from 'axios'
import Cookies from 'js-cookie'

const axios = Axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : '',
  timeout: process.env.NODE_ENV === 'development' ? 60 * 1000 : 10 * 1000
})

// 请求拦截器
axios.interceptors.request.use((config) => {
  if (config.url !== 'login') {
    // 创建token
    Cookies.set('token', 'aaaaaaaaaaaaaaaaaaaa')
    config.headers.token = Cookies.get('token') // 获取token
    // 删除token
    Cookies.remove('token')
  }
  // 必须返回 config
  return config
})

// 响应拦截器
axios.interceptors.response.use((res) => {
  console.log(res)
  // 处理所有响应
  return res.data
}, (err) => {
  console.log(err)
})

export default axios
