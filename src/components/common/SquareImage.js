import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import './SquareImage.scss';

const SquareImage = ({w = '100%', url = null}) => {
    const divRef = useRef(w);
    const [actuaWidth, setActuaWidth] = useState(w);

    useLayoutEffect(() => {
        setActuaWidth(divRef.current.getBoundingClientRect()['width']);
    }, [actuaWidth]);

    return (
        <div ref={divRef} style={{width: actuaWidth, height: actuaWidth}} className="square-image shadow">
            <img src={url} alt=""/>
        </div>
    )
};

export default SquareImage;