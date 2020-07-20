import React, {useState, useEffect} from 'react';

import {Row, Col} from 'reactstrap';
import './RestaurantDetail.scss';

import OrderGroup from './common/OrderGroup';
import SquareImage from './common/SquareImage';
import Divide from "./common/Divide";
import Tag from './common/Tag';
import BlockCollapse from "./common/BlockCollapse";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// hook
import useFormattingCurrency from "../hooks/useFormattingCurrency";

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
    const [subImages, setSubImages] = useState([]);
    const [symbol, formattedPrice, setPrice] = useFormattingCurrency('$', 0);

    // PRICE
    useEffect(() => {
        if (restaurant) {
            setPrice(restaurant.currency, restaurant.delivery_price)
        }
    }, []);
    // IMAGES
    useEffect(() => {
        if (restaurant) {
            restaurant.images.forEach((imageObject) => {
                if (imageObject.is_main) {
                    setMainImage(imageObject);
                }
            });
            setSubImages(restaurant.images);
        }
    }, []);

    const chooseImage = (imageObject) => {
        setMainImage(imageObject)
    };

    const buildImageList = () => {
        if (subImages) {
            return subImages.map((imageObject) => {
                return (
                    <div className={`sub-image ${imageObject.id === mainImage.id ? 'active' : null}`}
                         onClick={() => chooseImage(imageObject)} key={imageObject.id} style={{marginBottom: 10}}>
                        <SquareImage url={imageObject.image.url}/>
                    </div>
                )
            })
        }
        return null;
    };
    return (
        <div className="restaurant-detail">
            <Row>
                <Col>
                    <h1>
                        {restaurant.name}
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col md="8">
                    <Row>
                        <Col md="2">
                            <div className="sub-image-wrapper">
                                {buildImageList()}
                            </div>
                        </Col>
                        <Col md="10">
                            <div className="main-image-wrapper shadow">
                                <img src={mainImage && mainImage.image.url} alt={mainImage && mainImage.image.name}/>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md="4">
                    <div className="information-wrapper shadow">
                        <div className="price">
                            <h2>Price: {formattedPrice + ' ' + symbol}</h2>
                        </div>
                        <Divide/>
                        <OrderGroup restaurantId={restaurantId}/>
                        <Divide/>
                        <div>
                            Description:
                            <BlockCollapse>{restaurant.description}</BlockCollapse>
                        </div>
                        <Divide/>
                        <div className="location"><p><FontAwesomeIcon
                            className="city-icon"
                            icon={["fas", "map-marker-alt"]}
                        /> City: {restaurant.city}</p></div>
                        <Divide/>
                        <div>Tags: <Tag isInline={true} tags={restaurant.tags}/></div>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default RestaurantDetail;