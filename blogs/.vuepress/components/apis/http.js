import axios from 'axios'
import {Loading, Message} from 'element-ui'

let http = axios.create()

http.defaults.baseURL = 'https://gitlab.cae.com/api/v4'
http.defaults.headers.common['PRIVATE-TOKEN'] = 'es_U4rCHsSfQfoHGezTK'
http.defaults.timeout = 2500

let loadingLock

// 添加一个请求拦截器
http.interceptors.request.use(function (config) {
    return config
}, function (error) {
    Message({
        showClose: true,
        message: '请求失败',
        type: 'error'
    })
    return Promise.reject(error)
})

// 添加一个响应拦截器
http.interceptors.response.use(function (res) {
    // loadingLock.close()
    let ret = {}
    ret.data = res.data
    ret.totalPage = res.headers['x-total-pages']

    res.data = ret
    return res
}, function (error) {
    // loadingLock.close()
    if (error.response.status === 405) {
        window.location.href = '/'
        return
    }
    return Promise.reject(error)
})

export {http}
