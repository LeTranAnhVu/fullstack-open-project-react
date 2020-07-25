import React, {useEffect, useState} from "react";
import './InputGroup.scss';
import useInput from "../../hooks/useInput";

const TextareaGroup = ({givenValue, onUpdateValue, label, id, name, height = 120, ...attr}) => {
    const [value, setValue, updateValue, isDirty, setIsDirty, isTouched, setIsTouched] = useInput(name, onUpdateValue, givenValue);

    const onBlur = () => {
        if (!isTouched) {
            setIsTouched(true)
        }
    };

    const onFocus = () => {
        // console.log('focus');
    };


    return (
        <div className='input-group'>
            <label htmlFor={name}>{label}</label>
            <div className={`textarea-wrap ${isDirty || value ? 'active' : ''}`}>
                <textarea onBlur={onBlur} onFocus={onFocus} value={value} onChange={updateValue} id={id}
                          name={name} style={{height: height}} {...attr}/>
            </div>
        </div>
    )
};

export default TextareaGroup;