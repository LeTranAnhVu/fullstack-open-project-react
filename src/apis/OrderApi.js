import api from './index';
class OrderApi {
    postOrder = (orderData) => {
        return api.post('/orders', orderData)
    };
}

export default Object.freeze(new OrderApi())