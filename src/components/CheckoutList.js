import React, {useEffect, useState} from "react";
import _ from 'lodash';
import {Table, Button} from 'reactstrap';
import CheckoutItem from './CheckoutItem';
import {useSelector, useDispatch} from "react-redux";
import {deleteToCart} from "../actions";
import './CheckoutList.scss';
import BubbleButton from './common/BubbleButton';
import calcTotal from "../helpers/calcTotal";
import history from "../helpers/history";

const CheckoutList = () => {
    const {cart} = useSelector((state) => {
        return ({cart: Object.keys(state.cart).map((itemId) => state.cart[itemId])});
    });
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);
    const [currency, setCurrency] = useState('$');

    useEffect(() => {
        if (!_.isEmpty(cart)) {
            const [currency, total] = calcTotal(cart);
            setCurrency(currency);
            setTotal(total);
        }
    }, [cart]);
    const buildList = () => {
        if (cart && cart.length > 0) {
            return cart.map((item, index) => {
                return <CheckoutItem onRemove={() => {
                    dispatch(deleteToCart(item.id))
                }} index={index + 1} key={item.id} item={item}/>
            })
        }
        return <tr>
            <td className='empty-message'>Your cart is empty</td>
        </tr>
    }

    const onCheckout = () => {
        console.log('hahaha');
    };

    return (
        <Table striped className='checkout-list'>
            <thead>
            <tr>
                <th className='center'>#</th>
                <th className='center'>Image</th>
                <th>Name</th>
                <th>Message</th>
                <th className='center'>Quantity</th>
                <th className='center'>Price</th>
                <th className='center'>Remove</th>
            </tr>
            </thead>
            <tbody>
            {buildList()}
            {/*total*/}
            <tr className='checkout-item total'>
                <td align='center'><Button onClick={() => history.push('/restaurants')}
                                           color="link">{`<< More`}</Button></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td align='center' style={{fontSize: '1.2em', color: '#228be6'}}>{`Total : ${currency + total}`}</td>
                <td align='center'><BubbleButton onClick={onCheckout} style={{display: 'block', margin: 'auto', padding: '10px 30px'}}>Order</BubbleButton></td>
            </tr>
            {/*total*/}
            </tbody>
        </Table>
    )
};

export default CheckoutList;