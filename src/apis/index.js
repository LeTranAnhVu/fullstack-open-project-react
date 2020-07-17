import axios from "axios";

// let apiUrl = 'http://localhost:5000/api';
let apiUrl = 'http://192.168.0.200:5000/api';
if (process.env.NODE_ENV === 'production') {
    apiUrl = 'http://54.169.128.14:4000'
}

export default axios.create({
    baseURL: apiUrl
});