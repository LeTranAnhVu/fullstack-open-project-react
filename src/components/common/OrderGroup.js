import React, {useEffect, useState} from 'react';
import './OrderGroup.scss';
import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {addToCart, updateToCart, deleteToCart} from "../../actions";

const OrderGroup = ({restaurantId}) => {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);

    const [isOpenMessage, setIsOpenMessage] = useState(false);
    const [message, setMessage] = useState('');

    const onAmountChange = (_amount) => {
        setAmount(_amount)
    };
    const orderHandler = () => {
        if (amount === 0) {
            dispatch(addToCart({itemId: restaurantId, amount: amount + 1}));
            setAmount(amount + 1);
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
                <p>Count: {amount}</p>
                {
                    amount <= 0 ? <button onClick={orderHandler} className="order-button">Add to order</button>
                        : <div>
                            <button className='amount-button' onClick={() => changeAmount('-')}>-</button>
                            <button className='amount-button' onClick={() => changeAmount('+')}>+</button>
                        </div>
                }
            </div>
            <div className='message-group'>
                <button onClick={toggleMessage}>+ Message</button>
                <div className={`message-content ${!isOpenMessage ? 'flat' : null}`}>
                    <button onClick={onClose} className='close-button'><FontAwesomeIcon icon={["fa", "minus"]}/></button>
                    <textarea onChange={typingMessage} value={message}
                              name="note" id="" cols="30" rows="3"/>
                </div>

            </div>

        </div>
    );
};

export default OrderGroup;