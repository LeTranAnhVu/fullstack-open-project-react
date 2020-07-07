import React from "react";
import "./RestaurantList.scss"
import {Row, Col} from "reactstrap";
import Restaurant from "./Restaurant";

const RestaurantList = () => {
    return (
        <section className="restaurant-list">
            <Row>
                <Col md="4"><Restaurant/></Col>
            </Row>
        </section>
    );
};

export default RestaurantList;