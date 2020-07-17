import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

// actions
import {fetchRestaurants} from "../actions";
import "./RestaurantList.scss"
// components
import {Row, Col, Alert} from "reactstrap";
import {Spinner} from 'reactstrap';
import Restaurant from "./Restaurant";
import AppPagination from "./common/AppPaginagtion";


const RestaurantList = () => {
    const [page, setPage] = useState(null);
    const [totalPage, setTotalPage] = useState(null);

    const dispatch = useDispatch();
    const restaurantsData = useSelector(state => {
        return state.restaurants;
    });

    useEffect(() => {
        dispatch(fetchRestaurants());
    }, []);

    useEffect(() => {
        if (restaurantsData) {
            setPage(restaurantsData.current_page);
            setTotalPage(restaurantsData.pages);
        }
    }, [restaurantsData]);

    const buildPagination = () => {
        if (page && totalPage) {
            return <AppPagination page={page} totalPage={totalPage} position='center'/>
        }
        return null
    };

    const buildList = () => {
        if (restaurantsData) {
            if (restaurantsData.data && restaurantsData.data.length > 0) {
                return restaurantsData.data.map((restaurant) => {
                    return (<Col key={restaurant.id} md="4">
                        <Restaurant restaurant={restaurant}/>
                    </Col>);
                });
            } else {
                return (
                    <Col md="12">
                        <div style={{textAlign: 'center'}}>
                            <Alert color="light">
                                There is no restaurant matched to your searching
                            </Alert>
                        </div>
                    </Col>
                )
            }
        }

        return (
            <div className="loading-group">
                <Spinner type="grow" color="primary"/>
                <Spinner type="grow" color="success"/>
                <Spinner type="grow" color="danger"/>
                <Spinner type="grow" color="warning"/>
                <p>Loading . . . </p>
            </div>
        )

    };
    return (
        <section className="restaurant-list">
            <Row>
                {buildList()}
            </Row>
            {buildPagination()}
        </section>
    );
};

export default RestaurantList;