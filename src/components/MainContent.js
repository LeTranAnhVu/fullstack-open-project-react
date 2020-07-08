import React from "react";
import "./MainContent.scss";
import {Container} from "reactstrap";
import SearchInput from "./SearchInput";
import RestaurantList from "./RestaurantList";
import SortButton from "./SortButton";
const MainContent = () => {
    return (
        <section className="main-content">
            <Container>
                {/*<SearchInput/>*/}
                <SortButton/>
                <RestaurantList/>
            </Container>
        </section>

    );
};

export default MainContent;