import React from "react";

import MainContent from "./MainContent";
import NavbarApp from "./NavbarApp";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faMapMarkerAlt);


const App = () => {
    return (
        <div>
            <NavbarApp/>
            <MainContent/>
        </div>
    )
};

export default App;