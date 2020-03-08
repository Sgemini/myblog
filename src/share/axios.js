import axios from 'axios'
import { getCookie } from './methods'

const SERVER_URL = 'http://localhost:4001/'
// const SERVER_URL = 'https://chonghuijia-api.herokuapp.com/'

const fetchApi = async (method, apiPath, params = {}) => {
    let apiInstance = axios.create({
        baseURL: SERVER_URL,
        timeout: 30000,
        headers: {
            auth_token: getCookie('auth_token')
        }
    })

    let body

    if (method === 'GET') {
        body = await apiInstance.get(apiPath, params)
    } else if (method === 'POST') {
        body = await apiInstance.post(apiPath, params)
    }

    return body.data
}

export default fetchApi
