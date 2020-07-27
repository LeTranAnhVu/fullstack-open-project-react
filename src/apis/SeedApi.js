import api from './index';
import TokenStorageService from "../Auth/TokenStorageService";

class SeedApi {
    user = () => {
        return api.get('/seed/users').then((res) => {
            return res.data
        })
    };
    restaurants = () => {
        return api.get('/seed/restaurants').then((res) => {
            return res.data
        })
    };
    restaurantImages = () => {
        return api.get('/seed/image_for_restaurant').then((res) => {
            return res.data
        })
    };

}

export default Object.freeze(new SeedApi())