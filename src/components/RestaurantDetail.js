import React, {useState, useEffect} from 'react';

import {Row, Col} from 'reactstrap';
import './RestaurantDetail.scss';

import OrderGroup from './common/OrderGroup';

const restaurant = {
    "city": "Helsinki",
    "created_at": "Tue, 24 Mar 2020 13:09:18 GMT",
    "currency": "EUR",
    "delivery_price": 190.0,
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "id": 51,
    "images": [
        {
            "id": 1,
            "image": {
                "blurhash": "L5S$lnV?IAoz00-;M{%M9G.8IVs:",
                "created_at": "Tue, 24 Mar 2020 13:09:06 GMT",
                "id": 1,
                "name": "projects-mini-particle.png",
                "updated_at": null,
                "url": "http://192.168.0.200:5000/api/static/images/projects-mini-particle.png"
            },
            "is_main": true
        },
        {
            "id": 2,
            "image": {
                "blurhash": "L$Op+Ba$j?of01RkoeWBImj?aza{",
                "created_at": "Tue, 24 Mar 2020 13:09:06 GMT",
                "id": 2,
                "name": "Screen_Shot_2020-03-16_at_10.29.43_PM.png",
                "updated_at": null,
                "url": "http://192.168.0.200:5000/api/static/images/Screen_Shot_2020-03-16_at_10.29.43_PM.png"
            },
            "is_main": false
        }
    ],
    "name": "Tram food",
    "online": true,
    "tags": [
        {
            "id": 10,
            "name": "Hawaii"
        },
        {
            "id": 12,
            "name": "burrito"
        }
    ],
    "updated_at": null
};

const RestaurantDetail = ({restaurantId}) => {
    const [mainImage, setMainImage] = useState(null);
    // const [subImages, setSubImages] = useState([]);

    useEffect(() => {
        if (restaurant) {
            restaurant.images.forEach((image) => {
                if (image.is_main) {
                    setMainImage(image);
                }
            })
        }

    }, []);


    return (
        <div className="restaurant-detail">
            {cartList ? cartList.itemId : 's'}
            <Row>
                <Col>
                    <h1>
                        {restaurant.name}
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col md="8">
                    <div className="main-image-wrapper shadow">
                        <img src={mainImage && mainImage.image.url} alt={mainImage && mainImage.image.name}/>
                    </div>
                    <div className="images">

                    </div>
                </Col>
                <Col md="4">
                    <div className="information-wrapper shadow">
                        <div className="price">
                            <h2>Price: {restaurant.delivery_price}</h2>
                        </div>
                        <div className="description">
                            {restaurant.description}
                        </div>

                        <OrderGroup restaurantId={restaurantId}/>

                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default RestaurantDetail;