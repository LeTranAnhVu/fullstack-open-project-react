import React, {Fragment, useEffect, useRef, useState} from "react";
import _ from 'lodash';
import {Table, Button} from 'reactstrap';
import OrderItem from './OrderItem';
import './Order.scss';
import {calcOrderTotal} from "../helpers/calcTotal";
import './common/colors.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSpring, animated} from "react-spring";
import useSlideDownOrder from "../hooks/useSlideDownOrder";


const Order = ({order = null}) => {
    const [total, setTotal] = useState(0);
    const [currency, setCurrency] = useState('$');
    const tblEl = useRef(null);
    const [isShow, tblHeight, onToggleSlideDown] = useSlideDownOrder(tblEl);

    const {slideAnimation} = useSpring({
        from: {slideAnimation: 0},
        slideAnimation: isShow ? 1 : 0,
        config: {duration: 250}
    });

    const buildList = () => {
        if (order && order.order && order.order.length > 0) {
            return order.order.map((item, index) => {
                return <OrderItem index={index + 1} key={item.id} orderItem={item}/>
            })
        }
        return null;
    };

    useEffect(() => {
        if (!_.isEmpty(order)) {
            const [currency, total] = calcOrderTotal(order.order);
            setCurrency(currency);
            setTotal(total);
        } else {
            setTotal(0)
        }
    }, [order]);

    return (
        <div className={`app-order ${isShow ? 'show' : ''}`}>
            <div className={`order-header`}>
                <div className='title-group'>
                    <FontAwesomeIcon icon={['fa', 'chevron-right']}/>
                    <h4 className={'title'} onClick={() => onToggleSlideDown()}>Order code: {order.code}  </h4>
                </div>
                <p className={'total'}>{`Total : ${currency + total}`}</p>
            </div>
            <animated.div className="table-wrap" style={
                {
                    height: isShow ? slideAnimation.interpolate({
                            range: [0, 1],
                            output: [0, tblHeight]
                        }).interpolate(slideAnimation => `${slideAnimation}px`) :
                        slideAnimation.interpolate({
                            range: [1, 0],
                            output: [tblHeight, 0]
                        }).interpolate(slideAnimation => `${slideAnimation}px`)
                }
            }>
                <Table innerRef={tblEl} striped className='checkout-list order-list'>
                    <thead>
                    <tr>
                        <th className='center'>#</th>
                        <th className='center'>Image</th>
                        <th>Name</th>
                        <th>Message</th>
                        <th className='center'>Quantity</th>
                        <th className='center'>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {buildList()}
                    </tbody>
                </Table>
            </animated.div>
        </div>

    )
};

export default Order;