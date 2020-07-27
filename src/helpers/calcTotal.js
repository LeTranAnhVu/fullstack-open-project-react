import _ from "lodash";
import currencyConverter from "./currencyConverter";

export const calcCartTotal = (cart) => {
    let symbol, total;
    if (!_.isEmpty(cart)) {
        let currency = cart[0].currency;
        let rawTotal = cart.reduce((_total, item) => {
            return _total + item.amount * item.delivery_price;
        }, 0);
        [symbol, total] = currencyConverter(
            currency,
            rawTotal
        );
    }

    return [symbol, total]
};

export const calcOrderTotal = (order) => {
    let symbol, total;
    if (!_.isEmpty(order)) {
        let currency = order[0].item.currency;
        let rawTotal = order.reduce((_total, orderItem) => {
            return _total + orderItem.amount * orderItem.item.delivery_price;
        }, 0);
        [symbol, total] = currencyConverter(
            currency,
            rawTotal
        );
    }

    return [symbol, total]
};