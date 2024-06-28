import axios from 'axios'
import { AxiosInstance } from 'axios'

export const axiosClient: AxiosInstance = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:5000/',
    headers: {
        'Content-Type': 'application/json',
    }
})