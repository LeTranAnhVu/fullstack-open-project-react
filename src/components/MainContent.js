import React from "react";
import "./MainContent.scss";
import {Route, Switch} from "react-router-dom";
import {Redirect} from 'react-router'
import RestaurantsPage from "../pages/RestaurantsPage";
import RestaurantDetailPage from "../pages/RestaurantDetailPage";
import CheckoutPage from "../pages/CheckoutPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const MainContent = () => {
    return (
        <section className="main-content">
            <Switch>
                <Route path="/login" component={LoginPage}/>
                <Route path="/register" component={RegisterPage}/>
                <Route path="/checkout" component={CheckoutPage}/>
                <Route path="/restaurants/:id" component={RestaurantDetailPage}/>
                <Route path="/restaurants" component={RestaurantsPage}/>
                <Redirect exact from="/" to="/restaurants"/>
            </Switch>
        </section>

    );
};

export default MainContent;