import axios from "axios";

let apiUrl = 'http://localhost:4000';
if (process.env.NODE_ENV === 'production') {
    apiUrl = 'http://54.169.128.14:4000'
}

export default axios.create({
    baseURL: apiUrl
});