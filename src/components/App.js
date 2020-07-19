import React from "react";
import {Router} from "react-router-dom";
import history from "../helpers/history";
import MainContent from "./MainContent";
import NavbarApp from "./NavbarApp";

import "./App.scss";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faMapMarkerAlt, faSort, faSortUp, faSortDown, faChevronDown} from '@fortawesome/free-solid-svg-icons';


library.add(faSearch, faMapMarkerAlt, faSort, faSortUp, faSortDown, faChevronDown);


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