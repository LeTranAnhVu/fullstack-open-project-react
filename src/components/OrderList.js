import React, {Fragment, useEffect, useState} from "react";
import {Button} from 'reactstrap';
import OrderItem from './OrderItem';
import Divide from "./common/Divide";
import {useDispatch} from "react-redux";
import './CheckoutList.scss';
import history from "../helpers/history";
import OrderApi from "../apis/OrderApi";
import LoadingPage from "./common/LoadingPage";
import Order from "./Order";
import './common/colors.scss';


const OrderList = () => {
    const [orders, setOrders] = useState([]);

    const [isLoadingPage, setIsloadingPage] = useState(false);

    const buildList = () => {
        if (orders.length > 0) {
            return orders.map((order, index) => {
                return <Fragment key={index}>
                    <Order order={order}/>
                    <Divide/>
                </Fragment>
            })
        } else {
            return <p className='empty-message' style={{textAlign: 'center'}}>You have no order, go shopping more</p>
        }

    };
    useEffect(() => {
        OrderApi.getOrders()
            .then(res => {
                if (res.data && res.data.orders) {
                    setOrders(res.data.orders);
                }
            })
            .catch(err => {
                console.error(err.response.data)
            })
    }, []);

    return (
        <div>
            {
                isLoadingPage ? <LoadingPage/> : null
            }
            <Button style={{color: '#228be6'}} onClick={() => history.push('/restaurants')}
                    color="link">{`<< Shopping more`}</Button>
            <h1>Orders:</h1>
            <Divide color={'blue'}/>
            <div style={{marginTop: '40px'}}>
                {buildList()}
            </div>
        </div>
    )
};

export default OrderList;