import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import './SquareImage.scss';

const SquareImage = ({w = '100%', url = null}) => {
    const divRef = useRef(w);
    const [actuaWidth, setActuaWidth] = useState(w);

    useEffect(() => {
        setActuaWidth(divRef.current.getBoundingClientRect()['width']);
    }, []);

    return (
        <div ref={divRef} style={{width: actuaWidth, height: actuaWidth}} className="square-image">
            <img src={url} alt=""/>
        </div>
    )
};

export default SquareImage;