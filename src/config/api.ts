import { getToken } from '@/utils/token';
import axios, { AxiosResponse } from 'axios';

export const AUTHENTICATION_API = import.meta.env.VITE_AUTHENTICATION_API
export const USER_API = import.meta.env.VITE_USER_API;

export const api = axios.create()
api.interceptors.response.use((res: AxiosResponse) => {
    return res.data
})

api.interceptors.request.use((config) => {
    const token = getToken();

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
})