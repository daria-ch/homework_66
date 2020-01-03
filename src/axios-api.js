import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://daria-ch-app.firebaseio.com/'
});

axiosApi.interceptors.request.use(req => {
    console.log('[In request interceptor]', req);
    return req
});

axiosApi.interceptors.response.use(res => {
    console.log('[In response interceptor]', res);
    return res;
}, err => {
    console.log('[In error response interceptor]');
    throw err;
});

export default axiosApi;