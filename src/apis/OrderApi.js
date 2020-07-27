import api from './index';
class OrderApi {
    postOrder = (orderData) => {
        return api.post('/orders', orderData)
    };

    getOrders = (query) => {
        return api.get('/orders')
    }
}

export default Object.freeze(new OrderApi())