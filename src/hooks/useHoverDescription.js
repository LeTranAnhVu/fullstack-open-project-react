import {useState, useEffect} from 'react';
import useWindowSize from "./useWindowResize";

export default (descEl) => {
    const [descHeight, setDescHeight] = useState(0);
    const [originalDesHeight, setOriginalDesHeight] = useState(null);
    const size = useWindowSize();

    useEffect(() => {
        descEl.current.setAttribute('style', {height: 'auto'});
        setOriginalDesHeight(descEl.current.clientHeight);
        const timeout = setTimeout(() => {
            descEl.current.style.height = 0
        },500);
        return () => {
            return clearTimeout(timeout);
        }
    },[size[0], size[1]]);

    const onHoverOverlay = () => {
        setDescHeight(originalDesHeight);
    };
    const onLeaveOverlay = () => {
        setDescHeight(0);
    };
    return [descHeight, onHoverOverlay, onLeaveOverlay];

}