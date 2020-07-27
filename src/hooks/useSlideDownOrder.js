import {useState, useEffect} from 'react';
import useWindowSize from "./useWindowResize";

export default (tblEl) => {
    const [elHeight, setElHeight] = useState(0);
    const [originalHeight, setOriginalHeight] = useState(null);
    const [isShow, setIsShow] = useState(false);
    const size = useWindowSize();

    useEffect(() => {
        let timeout = null;
        tblEl.current.setAttribute('style', {height: 'auto'});
        setOriginalHeight(tblEl.current.clientHeight);
        timeout = setTimeout(() => {
            tblEl.current.style.height = 0
        }, 500);
        return () => {
            return clearTimeout(timeout);
        }
    }, [size[0], size[1]]);
    useEffect(() => {
        setElHeight(isShow ? originalHeight : elHeight);
    }, [isShow]);

    const onToggle = () => {
        setIsShow(!isShow);
    };

    return [isShow, elHeight, onToggle];

}