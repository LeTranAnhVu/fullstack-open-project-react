import React, {useState, useEffect, useRef} from 'react';
import './SquareImage.scss';

const SquareImage = ({w = '100%', url = null, style, classes}) => {
    const divRef = useRef(w);
    const [actuaWidth, setActuaWidth] = useState(w);

    useEffect(() => {
        setActuaWidth(divRef.current.getBoundingClientRect()['width']);
    }, []);

    return (
        <div ref={divRef} style={{width: actuaWidth, height: actuaWidth, ...style}}
             className={`square-image ${classes}`}>
            <img src={url} alt=""/>
        </div>
    )
};

export default SquareImage;