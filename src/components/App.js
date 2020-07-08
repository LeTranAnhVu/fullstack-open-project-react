import React from "react";
import {BrowserRouter} from "react-router-dom";
import MainContent from "./MainContent";
import NavbarApp from "./NavbarApp";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faMapMarkerAlt, faSort, faSortUp, faSortDown} from '@fortawesome/free-solid-svg-icons';


library.add(faSearch, faMapMarkerAlt, faSort, faSortUp, faSortDown);


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavbarApp/>
                <MainContent/>
            </BrowserRouter>
        </div>
    )
};

export default App;