import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchRestaurant} from "../actions";
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

const RestaurantDetail = ({restaurantId}) => {
    const [mainImage, setMainImage] = useState(null);
    const [subImages, setSubImages] = useState([]);
    const [symbol, formattedPrice, setPrice] = useFormattingCurrency('$', 0);

    const dispatch = useDispatch();
    const restaurant = useSelector((state) => {
        if (state.restaurants) {
            return state.restaurants.data[restaurantId]
        }
        return null;
    });


    useEffect(() => {
        dispatch(fetchRestaurant(restaurantId));
    }, []);

    // PRICE
    useEffect(() => {
        if (restaurant) {
            setPrice(restaurant.currency, restaurant.delivery_price)
        }
    }, [restaurant]);
    // IMAGES
    useEffect(() => {
        if (restaurant) {
            for (let i = 0; i < restaurant.images.length; i++) {
                if (restaurant.images[i].is_main) {
                    setMainImage(restaurant.images[i]);
                    break;
                }
            }
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
                    <div
                        className={`sub-image box-shade add-hover-3d ${imageObject.id === mainImage.id ? 'active-3d active' : ''}`}
                        onClick={() => chooseImage(imageObject)} key={imageObject.id}>
                        <SquareImage url={imageObject.image.url}/>
                    </div>
                )
            })
        }
        return null;
    };

    if (restaurant) {
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
                                <div className="main-image-wrapper box-shade">
                                    <img src={mainImage && mainImage.image.url}
                                         alt={mainImage && mainImage.image.name}/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="4">
                        <div className="information-wrapper box-shade">
                            <div className="price">
                                <h2>Price: {symbol + formattedPrice}</h2>
                            </div>
                            <Divide/>
                            <OrderGroup restaurant={restaurant}/>
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
    } else {
        return null
    }

};

export default RestaurantDetail;