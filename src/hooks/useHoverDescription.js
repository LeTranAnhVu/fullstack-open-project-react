import {useState, useEffect} from 'react';

export default (descEl) => {
    const [descHeight, setDescHeight] = useState(null);
    const [originalDesHeight, setOriginalDesHeight] = useState(null);
    useEffect(() => {
        setOriginalDesHeight(descEl.current.offsetHeight);
        setDescHeight(0);
    }, []);

    const onHoverOverlay = () => {
        setDescHeight(originalDesHeight);
    };
    const onLeaveOverlay = () => {
        setDescHeight(0);
    };
    return [descHeight, onHoverOverlay, onLeaveOverlay];

}