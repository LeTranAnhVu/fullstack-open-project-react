import React, {useEffect, useState} from "react";
import SquareImage from "./common/SquareImage";
import useFormattingCurrency from "../hooks/useFormattingCurrency";
import history from "../helpers/history";
import CloseButton from "./common/CloseButton";

const OrderItem = ({orderItem, index}) => {
    const [mainImageUrl, setMainImageUrl] = useState(null);
    const [symbol, price, setPrice] = useFormattingCurrency('$', 0);
    useEffect(() => {
        if(orderItem && orderItem.item)
        setPrice(orderItem.item.currency, orderItem.item.delivery_price);
    }, [orderItem]);

    // IMAGES
    useEffect(() => {
        if (orderItem && orderItem.item) {
            let item = orderItem.item;
            for (let i = 0; i < item.images.length; i++) {
                if (item.images[i].is_main) {
                    setMainImageUrl(item.images[i].image.url);
                    break;
                }
            }
        }
    }, []);

    if (orderItem && orderItem.item) {
        return (
            <tr className='checkout-item'>
                <th className='center' scope="row">{index}</th>
                <td className='center'><SquareImage classes='box-shade' url={mainImageUrl}/></td>
                <td><p onClick={() => history.push(`restaurants/${orderItem.item.id}`)}
                       className='item-name'>{orderItem.item.name}</p></td>
                <td>{orderItem.note.split(/\r\n|\r|\n/g).map((line, index) => (<p key={index}>{line}</p>))}</td>
                <td className='center'>{orderItem.amount}</td>
                <td className='center'>{symbol + price}</td>
            </tr>
        )
    }else {
        return null
    }


};

export default OrderItem;