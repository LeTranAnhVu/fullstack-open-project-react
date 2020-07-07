import React from "react";
import "./Restaurant.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Restaurant = () => {
    const restaurant = {
        "city": "Helsinki",
        "currency": "EUR",
        "delivery_price": 390,
        "description": "Japanilaista ramenia parhaimmillaan",
        "image": "https://prod-wolt-venue-images-cdn.wolt.com/5d108aa82e757db3f4946ca9/d88ebd36611a5e56bfc6a60264fe3f81",
        "location": [
            24.941786527633663,
            60.169934599421396
        ],
        "name": "Momotoko Citycenter",
        "online": true,
        "tags": [
            "ramen",
            "risotto"
        ],
        "blurhash": "j2DUFG8jbu8AXuLIT5Tt0B01R2;;",
    };

    const tags = () => {
        return (
            <div>
                {restaurant.tags.map((tag, index) => (
                    <span className="tag" key={index}>#{tag}</span>
                ))}
            </div>
        )
    };

    const onlineStatus = () => {
        if (restaurant.online) {
            return <span className="online-status on"/>
        }
        return <span className="online-status off"/>
    };
    return (
        <div className="restaurant">
            <div className="image-wrapper">
                <img className="image" src={restaurant.image} alt=""/>
                <div className="overlay">
                    <p className="price">€{restaurant.delivery_price}</p>
                    <p className="description">{restaurant.description}</p>
                </div>
            </div>
            <p className="name">{restaurant.name}{onlineStatus()}</p>
            <p className="city">
                <FontAwesomeIcon className="city-icon" icon={['fas', 'map-marker-alt']}/>
                {restaurant.city}</p>
            {tags()}


        </div>
    );
};

export default Restaurant;