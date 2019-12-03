import axios from 'axios'
import { getOSAMToken } from './cookie'
// import router from '../router'
import store from '@/store'
import { Loading } from 'element-ui'
import Vue from 'vue'
let loading
let loadingNum = 0
let loadingSpinner = ''
let loadingBackground = ''

const _startLoading = () => {
  if (store.state.currUser.iruser) {
    loadingSpinner = 'el-icon-loading'
    loadingBackground = 'rgba(225,225,225,0.9)'
  } else {
    loadingSpinner = 'osam-loading-spinner'
    loadingBackground = 'rgba(225,225,225,0.1)'
  }
  if (loadingNum === 0) {
    loading = Loading.service({
      // target: '.loading-page, .loading-area',
      target: '#nav',
      fullscreen: false, // 遮罩全屏
      // text: 'loading...',
      spinner: loadingSpinner,
      background: loadingBackground
    })
  }
  loadingNum++
}

const _endLoading = () => {
  // 请求数量减1
  loadingNum--
  if (loadingNum <= 0) {
    loading.close()
  }
}

const _axios = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000
})

_axios.interceptors.request.use((orginConfig) => {
  const reqConfig = { ...orginConfig }
  // step:容错处理
  _startLoading()
  if (!reqConfig.url) {
    console.error('request need url')
    throw new Error({
      sourece: 'axiosInterceptors',
      message: 'request need url'

    })
  }

  // 默认get请求
  if (!reqConfig.method) {
    reqConfig.method = 'get'
  }

  // 大小写容错
  reqConfig.method = reqConfig.method.toLowerCase()

  // 参数容错
  if (reqConfig.method === 'get') {
    if (!reqConfig.params) { // 防止字段用错
      reqConfig.params = reqConfig.data || {}
    }
  } else if (reqConfig.method === 'post') {
    if (!reqConfig.data) { // 防止字段用错
      reqConfig.data = reqConfig.params || {}
    }
  } else {
    // TODO: 其他类型请求数据格式处理
    console.warn(`其他请求类型: ${reqConfig.method}, 暂无自动处理`)
  }

  // step 2 添加token
  const cooike = getOSAMToken('cookie') ||
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsInNjb3BlIjoyLCJpYXQiOjE1NjMyMDMyNjcsImV4cCI6MTU2NTc5NTI2N30.wkUz0iYEKkv-Efnatqk3tzPD99WTrhhxXLooOVbi5G8'
  console.log('1.Get token', cooike)
  if (cooike) {
    reqConfig.headers['X-XSRF-TOKEN'] = cooike
  }
  return reqConfig
}, (error) => {
  Promise.reject(error)
})

_axios.interceptors.response.use(async (res) => {
  _endLoading()
  console.log('请求res', res)
  switch (res.status) {
    case 200:
      return res.data
    case 500:
      window.location.href = 'https://tdyfraiost101.sl.bluecloud.ibm.com/500'
      break
    case 403:
      window.location.href = process.env.VUE_APP_403_URL
      break
    case 404:
      window.location.href = process.env.VUE_APP_404_URL
      break
    default:
      Vue.prototype.$message({
        showClose: true,
        message: res.msg || 'internal error!',
        type: 'error'
      })
      throw new Error({
        message: 'unkown error'
      })
      // break
  }
  // 判断返回状态是否以2开头
  // if (res.status.toString() === '200') {
  //   return res.data
  // } else if (res.status.toString() === '500') {
  //   // redict到申请页面
  //   window.location.href = 'https://tdyfraiost101.sl.bluecloud.ibm.com/500'
  // } else if (res.status.toString() === '403') {
  //   window.location.href = process.env.VUE_APP_403_URL
  // } else if (res.status.toString() === '404') {
  //   window.location.href = process.env.VUE_APP_404_URL
  // } else {
  //   return res
  // }
}, (error) => {
  console.log(error)
  return Promise.reject(error)
})
// 导出常用函数

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function post (url, data = {}, params = {}) {
  return _axios({
    method: 'post',
    url: process.env.VUE_APP_BASE_URL + url,
    data,
    params
  })
}

/**
 * @param {string} url
 * @param {object} params
 */
export function get (url, params = {}) {
  return _axios({
    method: 'get',
    url: process.env.VUE_APP_BASE_URL + url,
    params
  })
}

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function put (url, data = {}, params = {}) {
  return _axios({
    method: 'put',
    url: process.env.VUE_APP_BASE_URL + url,
    params,
    data
  })
}

/**
 * @param {string} url
 * @param {object} params
 */
export function _delete (url, params = {}) {
  return _axios({
    method: 'delete',
    url: process.env.VUE_APP_BASE_URL + url,
    params
  })
}
