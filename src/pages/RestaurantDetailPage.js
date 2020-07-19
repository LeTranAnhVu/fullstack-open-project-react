import React from "react";
import RestaurantDetail from "../components/RestaurantDetail";
import {Container} from "reactstrap";

const RestaurantDetailPage = ({match}) => {

    return (
        <Container>
            <RestaurantDetail restaurantId={match.params.id}/>
        </Container>
    )
};

export default RestaurantDetailPage;