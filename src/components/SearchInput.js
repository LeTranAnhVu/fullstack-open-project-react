import React, {useState, useEffect} from "react";
import "./SearchInput.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fetchRestaurants} from "../actions";
import {useDispatch} from "react-redux";

const SearchInput = ({style}) => {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState('');
    const [prevKeyword, setPrevKeyword] = useState('');
    const [isEnter, setIsEnter] = useState(false);

    useEffect(() => {
        let timeoutId = null;
        if (keyword !== prevKeyword) {
            if (isEnter) {
                dispatch(fetchRestaurants({keyword, perPage: 10}));
                setPrevKeyword(keyword);
                setIsEnter(false)
            } else {
                //debounce auto fetch
                timeoutId = setTimeout(() => {
                    dispatch(fetchRestaurants({keyword, perPage: 10}));
                    setPrevKeyword(keyword)
                }, 5000);
                return () => clearTimeout(timeoutId);
            }
        }
        return () => timeoutId ? clearTimeout(timeoutId) : null;

    }, [keyword, isEnter]);

    const forceSearch = (e) => {

        if (e.keyCode === 13) {
            setIsEnter(true);
        }
    };

    const searchHandler = (e) => {
        setKeyword(e.target.value);
    };

    return (
        <div style={style} className="search-input">
            <input value={keyword} onChange={searchHandler} onKeyDown={forceSearch} className="input-group" type="text"
                   name="keyword"/>
            <FontAwesomeIcon className="search-icon" icon="search"/>
        </div>
    );
};

export default SearchInput;