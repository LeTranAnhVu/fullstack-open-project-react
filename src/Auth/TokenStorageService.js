class TokenStorageService {
    getToken = () => {
        return localStorage.getItem('access_token');
    };

    setToken = (newToken) => {
        localStorage.setItem('access_token', newToken);
    };

    clearToken = () => {
        localStorage.removeItem('access_token');
    };
}

export default Object.freeze(new TokenStorageService());