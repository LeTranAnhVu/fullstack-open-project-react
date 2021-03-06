import React from "react";
import {Router} from "react-router-dom";
import history from "../helpers/history";
import MainContent from "./MainContent";
import NavbarApp from "./NavbarApp";

import "./App.scss";

import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faSearch,
    faMapMarkerAlt,
    faSort,
    faSortUp,
    faSortDown,
    faChevronLeft,
    faChevronRight,
    faChevronDown,
    faTimes,
    faMinus,
    faCartPlus,
    faUser,
    faCog,
    faSignOutAlt,
    faShoppingBag
} from '@fortawesome/free-solid-svg-icons';


library.add(faSearch, faMapMarkerAlt, faSort, faSortUp, faSortDown, faChevronDown, faChevronLeft, faChevronRight, faTimes, faMinus, faCartPlus, faUser, faCog, faSignOutAlt, faShoppingBag);


const App = () => {
    return (
        <div>
            <Router history={history}>
                <NavbarApp/>
                <MainContent/>
            </Router>
        </div>
    )
};

export default App;