import {useEffect, useState} from "react";


const useInput = (name, onUpdateValue, givenValue) => {
    const [value, setValue] = useState('');
    const [isDirty, setIsDirty] = useState(false);
    const [isTouched, setIsTouched] = useState(false);

    const updateValue = (e) => {
        setValue(e.target.value);
        onUpdateValue(name, e.target.value);
    };


    useEffect(() => {
        if (givenValue) {
            setValue(givenValue);
        }
    }, [givenValue]);

    useEffect(() => {
        if (value !== '') {
            if (!isDirty) {
                setIsDirty(true)
            }
        } else {
            setIsDirty(false)
        }
    }, [value]);

    return [value, setValue, updateValue, isDirty, setIsDirty, isTouched, setIsTouched];
}

export default useInput;