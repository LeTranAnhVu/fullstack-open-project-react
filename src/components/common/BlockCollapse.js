import React, {useState, useEffect, useLayoutEffect, useRef} from 'react';
import './BlockCollapse.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BlockCollapse = ({children, wishHeight = 120}) => {
    const [height, setHeight] = useState('auto');
    const [originHeight, setOriginHeight] = useState('auto');
    const [collapse, setCollapse] = useState(true);
    const [needCollapse, setNeedCollapse] = useState(true);
    const blockRef = useRef(null);
    useEffect(() => {
        let heightOfEl = blockRef.current.getBoundingClientRect()['height'];
        setOriginHeight(heightOfEl);
        if (wishHeight > heightOfEl) {
            setNeedCollapse(false);
            setHeight(heightOfEl);
        } else {
            setHeight(wishHeight);
        }
    }, []);

    const toggle = () => {
        if (needCollapse) {
            if (!collapse) {
                setHeight(wishHeight);
            } else {
                setHeight(originHeight);
            }
            setCollapse(!collapse);
        }

    };

    return (
        <div onClick={toggle} ref={blockRef} style={{height: height}} className="block-collapse">
            {children}
            <div className={`overlay ${collapse ? 'active' : null}`}>
                <FontAwesomeIcon className="icon-down"
                    icon={["fa", "chevron-down"]}
                />
            </div>
        </div>
    )
};

export default BlockCollapse;