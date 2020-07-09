import React from "react";
import SortButton from "../components/SortButton";
import RestaurantList from "../components/RestaurantList";
import {Container} from "reactstrap";


const RestaurantsPage = () => {
    return (
        <Container>
            <SortButton/>
            <RestaurantList/>
        </Container>
    )
};
export default RestaurantsPage;