import Axios from 'axios'

export const axios = Axios.create({
  baseURL: 'http://localhost:3000/'
})

export const get = (url) => axios.get(url).then(res => res.data)
export const post = (url, data) => axios.post(url, data).then(res => res.data)
export const put = (url, data) => axios.put(url, data).then(res => res.data)