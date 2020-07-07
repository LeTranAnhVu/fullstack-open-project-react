import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

// actions
import {fetchRestaurants} from "../actions";
import "./RestaurantList.scss"
// components
import {Row, Col} from "reactstrap";
import { Spinner } from 'reactstrap';
import Restaurant from "./Restaurant";


const RestaurantList = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(state => {
        return state.restaurants;
    });

    useEffect(() => {
        dispatch(fetchRestaurants());
    }, []);

    const buildList = () => {
        if(restaurants && restaurants.length > 0) {
            return restaurants.map((restaurant, index) => {
                return <Col key={index} md="4"><Restaurant restaurant={restaurant}/></Col>;
            });
        }
        return (
            <div className="loading-group">
                <Spinner type="grow" color="primary" />
                <Spinner type="grow" color="success" />
                <Spinner type="grow" color="danger" />
                <Spinner type="grow" color="warning" />
            </div>
        )

    };

    return (
        <section className="restaurant-list">
            <Row>
                {buildList()}
            </Row>
        </section>
    );
};

export default RestaurantList;