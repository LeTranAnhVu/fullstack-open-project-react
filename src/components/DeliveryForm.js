import React, {Fragment, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import InputGroup from "./common/InputGroup";
import TextareaGroup from "./common/TextareaGroup";
import {Row, Col} from 'reactstrap';
import {updateAddressToCart} from "../actions";
import LoadingBar from "./common/LoadingBar";


const DeliveryForm = ({savedAddress, onHasAddress}) => {
    const separator = '&;&';
    const dispatch = useDispatch();
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [address, setAddress] = useState('');
    const [isSavingAddress, setIsSavingAddress] = useState(true);

    const makeMessage = () => {
        return `From: ${from}\n${separator}To: ${to}\n${separator}Address: ${address}`;
    };

    const parseMessage = () => {
        if (savedAddress) {
            const [_from, _to, _address] = savedAddress.split(separator);
            setFrom(_from.substring('From: '.length).trim());
            setTo(_to.substring('To: '.length).trim());
            setAddress(_address.substring('Address: '.length).trim());
        } else {
            setFrom('');
            setTo('');
            setAddress('');
        }
    };

    useEffect(() => {
        parseMessage();
    }, []);

    useEffect(() => {
        let timeoutId = null;
        setIsSavingAddress(true);
        timeoutId = setTimeout(() => {
            let message = null;
            if (from || to || address) {
                message = makeMessage();
            }

            dispatch(updateAddressToCart(message));
            onHasAddress(!!address);
            setIsSavingAddress(false);
        }, 1000);

        return () => {
            setIsSavingAddress(false);
            clearTimeout(timeoutId)
        };
    }, [from, to, address]);

    const onUpdateValue = (type, value) => {
        switch (type) {
            case 'from': {
                setFrom(value);
                break;
            }
            case 'to': {
                setTo(value);
                break;
            }
            case 'address': {
                setAddress(value);
                break;
            }
            default: {
                break;
            }
        }
    };
    return (
        <div>
            <Row>
                <Col sm={6} md={3}>
                    <InputGroup givenValue={from} onUpdateValue={onUpdateValue} label={'From'} type={'text'} id={'from'}
                                name={'from'} placeholder={'From the guy want to give'}/>
                </Col>
                <Col sm={6} md={3}>
                    <InputGroup givenValue={to} onUpdateValue={onUpdateValue} label={'To'} type={'text'} id={'to'}
                                name={'to'} placeholder={'To someone you wish'}/>
                </Col>
                <Col md={6}>
                    <TextareaGroup givenValue={address} onUpdateValue={onUpdateValue} label={'Address'} id={'address'}
                                   name={'address'} placeholder={'Where to delivery ...'}/>
                </Col>
            </Row>
            {
                isSavingAddress ? <LoadingBar time='1s'/> : null
            }
        </div>
    )
};

export default DeliveryForm;