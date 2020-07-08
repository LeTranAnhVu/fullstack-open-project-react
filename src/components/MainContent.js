import React from "react";
import "./MainContent.scss";
import {Route, Switch} from "react-router-dom";
import {Redirect} from 'react-router'
import RestaurantsPage from "../pages/RestaurantsPage";
import SortButton from "./SortButton";

const MainContent = () => {
    return (
        <section className="main-content">
            <Switch>
                <Route path="/restaurants" component={RestaurantsPage}/>
                <Redirect exact from="/" to="/restaurants"/>
            </Switch>

        </section>

    );
};

export default MainContent;