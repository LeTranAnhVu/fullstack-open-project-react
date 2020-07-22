import React, {useEffect, useState} from "react";
import _ from 'lodash';
import {Table} from 'reactstrap';
import CheckoutItem from './CheckoutItem';
import {useSelector, useDispatch} from "react-redux";
import {deleteToCart} from "../actions";
import './CheckoutList.scss';
import history from "../helpers/history";
import calcTotal from "../helpers/calcTotal";

const CheckoutList = () => {
    const {cart} = useSelector((state) => {
        return ({cart: Object.keys(state.cart).map((itemId) => state.cart[itemId])});
    });
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);
    const [currency, setCurrency] = useState('$');

    useEffect(() => {
        if(!_.isEmpty(cart)){
            const [currency, total] = calcTotal(cart);
            setCurrency(currency);
            setTotal(total);
        }
    }, [cart]);
    const buildList = () => {
        if (cart && cart.length > 0) {
            return cart.map((item, index) => {
                return <CheckoutItem onRemove={() => {console.log('eee');dispatch(deleteToCart(item.id))}} index={index+1} key={item.id} item={item}/>
            })
        }
        return <tr>
            <td className='empty-message'>Your cart is empty</td>
        </tr>
    }

    return (
        <Table striped className='checkout-list'>
            <thead>
            <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Message</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Remove</th>
            </tr>
            </thead>
            <tbody>
            {buildList()}
            {/*total*/}
            <tr className='checkout-item'>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{`Total : ${currency+total}`}</td>
                <td></td>
            </tr>
            {/*total*/}
            </tbody>
        </Table>
    )
};

export default CheckoutList;