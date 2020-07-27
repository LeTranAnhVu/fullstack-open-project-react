import axios from "axios";
import tokenService from '../Auth/TokenStorageService';
import history from "../helpers/history";
import {getCurrentFullPath} from '../helpers/urlHelpers';

let apiUrl = '/api';

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
    if (error.response && error.response.status === 401) {
        let current_url = getCurrentFullPath();
        history.push('/login?redirect_url=' + current_url);
    }
    return Promise.reject(error);
});

export default api;