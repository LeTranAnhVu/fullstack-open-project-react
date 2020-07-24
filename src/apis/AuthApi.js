import api from './index';
import TokenStorageService from "../Auth/TokenStorageService";
class AuthApi {
    loginApi = ({username, password}) => {
        return api.post('/auth/login', {username, password}, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res) => {
            // save token
            if(res.data && res.data.user)
                TokenStorageService.setToken(res.data.user['token']);
            return res.data
        })
    };
    checkLoginApi = () => {
        return api.get('/api/auth/is_login');
    }
}

export default Object.freeze(new AuthApi())