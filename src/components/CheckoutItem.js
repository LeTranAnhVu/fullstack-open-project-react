import React, {useEffect, useState} from "react";
import SquareImage from "./common/SquareImage";
import useFormattingCurrency from "../hooks/useFormattingCurrency";
import history from "../helpers/history";
import CloseButton from "./common/CloseButton";

const CheckoutItem = ({item, onRemove, index}) => {
    const [mainImageUrl, setMainImageUrl] = useState(null);
    const [symbol, price, setPrice] = useFormattingCurrency('$', 0);
    useEffect(() => {
        console.log(item);
        setPrice(item.currency, item.delivery_price);
    },[]);

    // IMAGES
    useEffect(() => {
        if (item) {
            for (let i = 0; i < item.images.length; i++) {
                if (item.images[i].is_main) {
                    setMainImageUrl(item.images[i].image.url);
                    break;
                }
            }
        }
    }, []);

    return (
        <tr className='checkout-item'>
            <th scope="row">{index}</th>
            <td><SquareImage classes='box-shade' url={mainImageUrl}/></td>
            <td><p onClick={() => history.push(`restaurants/${item.id}`)} className='item-name'>{item.name}</p></td>
            <td>{item.message}</td>
            <td>{item.amount}</td>
            <td>{symbol+price}</td>
            <td>
                <CloseButton/>
            </td>
        </tr>
    )
};

export default CheckoutItem;