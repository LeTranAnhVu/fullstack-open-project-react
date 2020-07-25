import React, {useEffect, useState} from "react";
import SquareImage from "./common/SquareImage";
import useFormattingCurrency from "../hooks/useFormattingCurrency";
import history from "../helpers/history";
import CloseButton from "./common/CloseButton";

const CheckoutItem = ({item, onRemove, index}) => {
    const [mainImageUrl, setMainImageUrl] = useState(null);
    const [symbol, price, setPrice] = useFormattingCurrency('$', 0);
    useEffect(() => {
        setPrice(item.currency, item.delivery_price);
    }, []);

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
            <th className='center' scope="row">{index}</th>
            <td className='center'><SquareImage classes='box-shade' url={mainImageUrl}/></td>
            <td><p onClick={() => history.push(`restaurants/${item.id}`)} className='item-name'>{item.name}</p></td>
            <td>{item.message.split(/\r\n|\r|\n/g).map((line, index) =>(<p key={index}>{line}</p>))}</td>
            <td className='center'>{item.amount}</td>
            <td className='center'>{symbol + price}</td>
            <td className='center'>
                <CloseButton onAction={onRemove}/>
            </td>
        </tr>
    )
};

export default CheckoutItem;