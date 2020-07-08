import React, {useRef, useState} from "react";
import "./Restaurant.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Blurhash} from "react-blurhash";
// hooks
import useHoverDescription from "../hooks/useHoverDescription";

const Restaurant = ({restaurant}) => {
    const descEl = useRef(null);
    const [descHeight, onHoverOverlay, onLeaveOverlay] = useHoverDescription(descEl);
    const [isLoadedImage, setIsLoadedImage] = useState(false);

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

    const loadingBlurHash = () => {
        return (
            <Blurhash
                className="blurhash"
                hash={restaurant.blurhash}
                width={"100%"}
                height={"100%"}
                resolutionX={32}
                resolutionY={32}
                punch={1}/>)
    };
    const onLoadedImage = () => {
        setTimeout(() => {
            setIsLoadedImage(true);
        }, 1500);
    };

    return (
        <div className="restaurant">
            <div onMouseEnter={onHoverOverlay}
                 onMouseLeave={onLeaveOverlay}
                 className="image-wrapper">
                <img onLoad={onLoadedImage} className={`image ${isLoadedImage ? null : 'disable'}`}
                     src={restaurant.image} alt=""/>
                {isLoadedImage ? null : loadingBlurHash()}
                <div className="overlay">
                    <p className="price">€{restaurant.delivery_price}</p>
                    <p ref={descEl}
                       style={{height: descHeight !== null ? descHeight : "auto"}}
                       className="description">
                        <span>{restaurant.description}</span>
                    </p>
                </div>
            </div>
            <p className="name">{onlineStatus()} {restaurant.name}</p>
            <p className="city">
                <FontAwesomeIcon className="city-icon" icon={['fas', 'map-marker-alt']}/>
                {restaurant.city}</p>
            {tags()}
        </div>
    );
};

export default Restaurant;