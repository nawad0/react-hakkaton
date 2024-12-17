import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost/api',
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
        config.headers.Authorization = `${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const testReq = async () => {
    const response = await apiClient.post('/lucky/random');
    return response.data;
};