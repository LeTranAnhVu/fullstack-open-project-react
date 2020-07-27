import React, {useEffect, useState} from "react";
import useInput from "../../hooks/useInput";
import './InputGroup.scss';

const InputGroup = ({givenValue, errors = [], onUpdateValue, label, type, id, name, ...attr}) => {
    const [value, setValue, updateValue, isDirty, setIsDirty, isTouched, setIsTouched] = useInput(name, onUpdateValue, givenValue);
    const onBlur = () => {
        if (!isTouched) {
            setIsTouched(true)
        }
    };
    useEffect(() => {
    }, [isDirty, value])


    const showErrors = () => {
        if (errors.length > 0) {
            return errors.map((errorMessage) => <p className='error-message'>* {errorMessage}</p>)
        }
        return null;
    };

    const onFocus = () => {
        // console.log('focus');
    };
    return (
        <div className='input-group'>
            <label htmlFor={name}>{label}</label>
            <div className={`input-wrap ${isDirty || value ? 'active' : ''}`}>
                <input onBlur={onBlur} onFocus={onFocus} value={value} onChange={updateValue} type={type} id={id}
                       name={name} {...attr}/>
            </div>
            {showErrors()}
        </div>
    )
};

export default InputGroup;