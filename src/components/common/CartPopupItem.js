import React, {useEffect} from "react";
import _ from 'lodash';
import {Row, Col} from 'reactstrap';
import SquareImage from "./SquareImage";
import useFormattingCurrency from "../../hooks/useFormattingCurrency";

const CartPopupItem = ({item}) => {
    const [symbol, price, setPrice] = useFormattingCurrency('$', 0);
    useEffect(() => {
        setPrice(item.currency, item.delivery_price);
    }, []);
    return (
        <li className='item'>
            <Row>
                <Col sm="4">
                    <SquareImage
                        url={item.images && item.images[0] && item.images[0].image.url}/>
                </Col>
                <Col sm="8">
                    <Row>
                        <Col>
                            <p className='item-name'>{item.name}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='item-quantity'>{`${item.amount} x ${symbol}${price}`}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </li>
    );
};

export default CartPopupItem;