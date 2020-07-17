import React from "react";
// import SortButton from "../components/SortButton";
import RestaurantList from "../components/RestaurantList";
import {Container} from "reactstrap";
import SearchInput from "../components/SearchInput";


const RestaurantsPage = () => {
    return (
        <Container>
            {/*<SortButton/>*/}
            <SearchInput style={{margin : '10px 0'}}/>
            <RestaurantList/>
        </Container>
    )
};
export default RestaurantsPage;