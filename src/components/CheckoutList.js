import React, {Fragment, useEffect, useState} from "react";
import _ from 'lodash';
import {Table, Button} from 'reactstrap';
import CheckoutItem from './CheckoutItem';
import Divide from "./common/Divide";
import DeliveryForm from "./DeliveryForm";
import {useSelector, useDispatch} from "react-redux";
import {deleteToCart, updateAddressToCart, removeCart} from "../actions";
import './CheckoutList.scss';
import BubbleButton from './common/BubbleButton';
import calcTotal from "../helpers/calcTotal";
import history from "../helpers/history";
import OrderApi from "../apis/OrderApi";
import LoadingPage from "./common/LoadingPage";


const CheckoutList = () => {
    const {cartItems, savedAddress} = useSelector((state) => {
        if (state.cart) {
            return ({
                cartItems: Object.keys(state.cart.items).map((itemId) => state.cart.items[itemId]),
                savedAddress: state.cart.address
            });
        }
        return {cartItems: null, savedAddress: null}
    });
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);
    const [currency, setCurrency] = useState('$');

    const [isShowDeliveryForm, setIsShowDeliveryForm] = useState(false);
    const [hasAddress, setHasAddress] = useState(false);

    const [isLoadingPage, setIsloadingPage] = useState(false);

    const buildList = () => {
        if (cartItems && cartItems.length > 0) {
            return cartItems.map((item, index) => {
                return <CheckoutItem onRemove={() => {
                    dispatch(deleteToCart(item.id))
                }} index={index + 1} key={item.id} item={item}/>
            })
        }
        return <tr>
            <td className='empty-message' style={{textAlign: 'center'}} colSpan={7}>Your cart is empty</td>
        </tr>
    };

    const formatedOrderData = () => {
        let data = {};
        data['order_place'] = savedAddress;
        data['orders'] = cartItems.map((item) => {
            return {
                item_id: item.id,
                amount: item.amount,
                note: item.message
            }
        });
        return data;
    }

    const onCheckout = () => {
        if (!hasAddress) {
            setIsShowDeliveryForm(true)
        } else {
            let postData = formatedOrderData();
            if (postData) {
                setIsloadingPage(true);
                OrderApi.postOrder(postData).then((res) => {
                    dispatch(removeCart());
                    setIsloadingPage(false);
                    setHasAddress(false);
                }).catch((err) => {
                    setIsloadingPage(false);
                    console.log('ERROR', err.response)
                })
            }

            console.log(savedAddress);
        }

    };

    useEffect(() => {
        if (!_.isEmpty(cartItems)) {
            const [currency, total] = calcTotal(cartItems);
            setCurrency(currency);
            setTotal(total);
        } else {
            setTotal(0)
        }
    }, [cartItems]);

    useEffect(() => {
        if (savedAddress) {
            setIsShowDeliveryForm(true)
        } else {
            setIsShowDeliveryForm(false)
        }
    }, [savedAddress]);


    return (
        <div>
            {
                isLoadingPage ? <LoadingPage/> : null
            }
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
                                               color="link">{`<< Shopping more`}</Button></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td align='center'
                        style={{fontSize: '1.2em', color: '#228be6'}}>{`Total : ${currency + total}`}</td>
                    <td align='center'>{
                        !_.isEmpty(cartItems) ?
                            <BubbleButton onClick={onCheckout}
                                          style={{
                                              display: 'block',
                                              margin: 'auto',
                                              padding: '10px 30px'
                                          }}
                            >{hasAddress ? 'Order' : 'Add Information'}
                            </BubbleButton>
                            : null
                    }

                    </td>
                </tr>
                {/*total*/}
                </tbody>
            </Table>

            {
                isShowDeliveryForm ?
                    <Fragment>
                        <Divide/>
                        <DeliveryForm savedAddress={savedAddress} onHasAddress={(value) => {
                            setHasAddress(value)
                        }}/>


                    </Fragment>
                    : null
            }

        </div>

    )
};

export default CheckoutList;