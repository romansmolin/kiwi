import axios from 'axios'

export const axiosClient = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:5000/',
    headers: {
        'Content-Type': 'application/json',
    }
})