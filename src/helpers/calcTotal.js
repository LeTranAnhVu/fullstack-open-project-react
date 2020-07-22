import _ from "lodash";
import currencyConverter from "./currencyConverter";

const calcTotal = (cart) => {
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
export default calcTotal;