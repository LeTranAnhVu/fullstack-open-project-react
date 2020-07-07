import React from "react";
import "./MainContent.scss";
import {Container} from "reactstrap";
import SearchInput from "./SearchInput";
import RestaurantList from "./RestaurantList";
const MainContent = () => {
    return (
        <section className="main-content">
            <Container>
                <SearchInput/>
                <RestaurantList/>
            </Container>
        </section>

    );
};

export default MainContent;