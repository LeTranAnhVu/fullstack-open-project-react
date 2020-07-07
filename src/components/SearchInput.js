import React from "react";
import "./SearchInput.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SearchInput = () => {
    return (
        <div className="search-input">
            <input className="input-group" type="text" name="keyword"/>
            <FontAwesomeIcon className="search-icon" icon="search" />
        </div>
    );
};

export default SearchInput;