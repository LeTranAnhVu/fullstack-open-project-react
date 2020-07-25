import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import './OrderGroup.scss';
import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {addToCart, updateToCart, deleteToCart} from "../../actions";
import {useSpring, animated} from 'react-spring'
import BubbleButton from "./BubbleButton";


const OrderGroup = ({restaurant}) => {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    const [isOpenMessage, setIsOpenMessage] = useState(false);
    const [message, setMessage] = useState('');

    const [state, toggle] = useState(false);
    const {x} = useSpring({from: {x: 0}, x: state ? 1 : 0, config: {duration: 120}});

    const previousItem = useSelector((state) => {
        if (state.cart) {
            return state.cart.items[restaurant.id]
        }
        return null;
    });

    useEffect(() => {
        if(previousItem) {
            setAmount(previousItem.amount);
            if(previousItem.message){
                setIsOpenMessage(true);
                setMessage(previousItem.message)
            }
        }
    }, [previousItem]);

    const startOrder = () => {
        if (amount === 0) {
            dispatch(addToCart({...restaurant, amount: amount + 1, message: message}));
            setAmount(amount + 1);
            toggle(!state);
        }
    };

    const changeAmount = (type) => {
        if (type === '-' && amount > 0) {
            if (amount === 1) {
                dispatch(deleteToCart({id: restaurant.id}));
            } else {
                dispatch(updateToCart({...restaurant, amount: amount - 1, message: message}));
            }
            setAmount(amount - 1);
        }

        if (type === '+') {
            dispatch(updateToCart({...restaurant, amount: amount + 1, message: message}));
            setAmount(amount + 1);
        }
        toggle(!state);
    };

    const toggleMessage = () => {
        if (!message) {
            setIsOpenMessage(true);
        }
    };

    const typingMessage = (e) => {
        setMessage(e.target.value);
    };

    // update message
    useEffect(() => {
        let id = null;
        if (amount) {
            id = setTimeout(() => {
                dispatch(updateToCart({...restaurant, amount: amount, message: message}));
            }, 800);
        }
        return () => clearTimeout(id);
    }, [message]);

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
                    amount <= 0 ? <BubbleButton onClick={startOrder}>Add to order</BubbleButton>
                        : <div>
                            <button className='amount-button' onClick={() => changeAmount('-')}>-</button>
                            <button className='amount-button' onClick={() => changeAmount('+')}>+</button>
                        </div>
                }
            </div>
            {
                amount ?
                    <div className='message-group'>
                        <button onClick={toggleMessage}>+ Message</button>
                        <div className={`message-content ${!isOpenMessage ? 'flat' : null}`}>
                            <button onClick={onClose} className='close-button'><FontAwesomeIcon icon={["fa", "minus"]}/>
                            </button>
                            <textarea onChange={typingMessage} value={message}
                                      name="note" id="" cols="30" rows="5"/>
                        </div>

                    </div>
                    : null
            }


        </div>
    );
};

export default OrderGroup;