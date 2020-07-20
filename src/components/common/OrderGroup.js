import React, {useEffect, useState} from 'react';
import './OrderGroup.scss';
import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {addToCart, updateToCart, deleteToCart} from "../../actions";
import {useSpring, animated, interpolate} from 'react-spring'


const OrderGroup = ({restaurantId}) => {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    const [isOpenMessage, setIsOpenMessage] = useState(false);
    const [message, setMessage] = useState('');

    // const countStyle = useSpring({scale: 1.2, from: {scale: 1}});
    const [state, toggle] = useState(false);
    const {x} = useSpring({from: {x: 0}, x: state ? 1 : 0, config: {duration: 120}});


    const onAmountChange = (_amount) => {
        setAmount(_amount)
    };
    const startOrder = () => {
        if (amount === 0) {
            dispatch(addToCart({itemId: restaurantId, amount: amount + 1}));
            setAmount(amount + 1);
            toggle(!state);
        }
    };

    const changeAmount = (type) => {
        if (type === '-' && amount > 0) {
            if (amount === 1) {
                dispatch(deleteToCart({itemId: restaurantId}));
            } else {
                dispatch(updateToCart({itemId: restaurantId, amount: amount - 1}));
            }
            setAmount(amount - 1);
        }

        if (type === '+') {
            dispatch(updateToCart({itemId: restaurantId, amount: amount + 1}));
            setAmount(amount + 1);
        }
        toggle(!state);
    };

    useEffect(() => {
        onAmountChange(amount);
    }, [amount]);

    const toggleMessage = () => {
        if (!message) {
            setIsOpenMessage(true);
        }
    };

    const typingMessage = (e) => {
        setMessage(e.target.value);
    };

    const onClose = () => {
        setMessage('');
        setIsOpenMessage(false);
    };

    return (
        <div className="order-group">
            <div className="change-amount-buttons">
                <animated.p
                    style={{
                        transform: x
                            .interpolate({
                                range: [0, 0.8, 1],
                                output: [1, 1.15, 1]
                            })
                            .interpolate(x => `scale(${x})`)
                    }}>Count: {amount}</animated.p>
                {
                    amount <= 0 ? <button onClick={startOrder} className="order-button">Add to order</button>
                        : <div>
                            <button className='amount-button' onClick={() => changeAmount('-')}>-</button>
                            <button className='amount-button' onClick={() => changeAmount('+')}>+</button>
                        </div>
                }
            </div>
            <div className='message-group'>
                <button onClick={toggleMessage}>+ Message</button>
                <div className={`message-content ${!isOpenMessage ? 'flat' : null}`}>
                    <button onClick={onClose} className='close-button'><FontAwesomeIcon icon={["fa", "minus"]}/>
                    </button>
                    <textarea onChange={typingMessage} value={message}
                              name="note" id="" cols="30" rows="5"/>
                </div>

            </div>

        </div>
    );
};

export default OrderGroup;