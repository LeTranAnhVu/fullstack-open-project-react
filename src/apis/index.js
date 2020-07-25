import axios from "axios";
import tokenService from '../Auth/TokenStorageService';
import history from "../helpers/history";

let apiUrl = 'http://localhost:5000/api';
// let apiUrl = 'http://192.168.0.200:5000/api';
if (process.env.NODE_ENV === 'production') {
    apiUrl = 'http://54.169.128.14:4000'
}

const api = axios.create({
    baseURL: apiUrl
});

// interceptors
api.interceptors.request.use((config) => {
    const token = tokenService.getToken();
    if (token) {
        config.headers['token'] = 'Bearer ' + token;
        config.headers['Access-Control-Allow-Origin'] = '*';
    }
    return config;
});

api.interceptors.response.use((response) => {
    return Promise.resolve(response);
}, (error) => {
    if (error.response.status === 401) {
        history.push('/login');
    }
    return Promise.reject(error);
});

export default api;