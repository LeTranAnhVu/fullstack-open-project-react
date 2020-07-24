import React, {useEffect, useState} from "react";
import './InputGroup.scss';

const InputGroup = ({onUpdateValue, label, type, id, name, ...style}) => {
    const [value, setValue] = useState('');
    const [isDirty, setIsDirty] = useState(false);
    const [isTouched, setIsTouched] = useState(false);
    const updateValue = (e) => {
        setValue(e.target.value)
        onUpdateValue(name, e.target.value)
    };

    const onBlur = () => {
        if (!isTouched) {
            setIsTouched(true)
        }
    };

    const onFocus = () => {
        // console.log('focus');
    };

    useEffect(() => {
        if (value !== '') {
            if (!isDirty) {
                setIsDirty(true)
            }
        } else {
            setIsDirty(false)
        }
    }, [value]);
    return (
        <div className='input-group'>
            <label htmlFor="username">{label}</label>
            <div className={`input-wrap ${isDirty ? 'active' : ''}`}>
                <input onBlur={onBlur} onFocus={onFocus} value={value} onChange={updateValue} type={type} id={id}
                       name={name} {...style}/>
            </div>
        </div>
    )
};

export default InputGroup;