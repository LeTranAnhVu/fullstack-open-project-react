import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useSpring, animated} from "react-spring";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// actions
import {sortRestaurants} from "../actions";
import {Button} from "reactstrap";

const SortButton = () => {
    const dispatch = useDispatch();
    const [status, setStatus] = useState(0);

    useEffect(() => {
        dispatch(sortRestaurants(status));
    }, [status]);

    const onChangeSortStatus = () => {
        setStatus(status === 2 ? 1 : (status + 1));
    };
    const style = useSpring({from: {opacity: 0}, to: {opacity: 1}});
    const renderIcon = () => {
        let icon = "sort";
        if(status === 1) {
            // asc
            icon="sort-up";
        }else if(status === 2) {
            // desc
            icon="sort-down";
        }
        return <FontAwesomeIcon style={{marginLeft: '5px'}} className="search-icon" icon={icon} />
    };
    return (
        <animated.div style={{marginTop: "20px", ...style}}>
            <Button onClick={onChangeSortStatus} color="secondary"> Sort {renderIcon()}</Button>
        </animated.div>

    )
};

export default SortButton;