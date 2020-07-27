import api from './index';
import TokenStorageService from "../Auth/TokenStorageService";

class AuthApi {
    register = ({username, password, confirmPassword}) => {
        return api.post('/auth/register', {username, password, confirm_password: confirmPassword}).then((res) => {
            return res.data
        })
    };
    login = ({username, password}) => {
        return api.post('/auth/login', {username, password}).then((res) => {
            // save token
            if (res.data && res.data.user)
                TokenStorageService.setToken(res.data.user['token']);
            return res.data
        })
    };
    checkLogin = () => {
        return api.get('/api/auth/is_login');
    };
    logoutApi = () => {
        return new Promise((resolve => {
            TokenStorageService.clearToken();
            return resolve({'message': 'logout success'})
        }), (reject => {
            return reject({'message': 'logout fail'})
        }))
    }
}

export default Object.freeze(new AuthApi())