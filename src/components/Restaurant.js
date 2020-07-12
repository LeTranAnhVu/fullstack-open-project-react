import React, { useEffect, useRef, useState } from "react";
import "./Restaurant.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, config } from "react-spring";
import Tag from "./Tag";
import BlurhashContainer from "./BlurhashContainer";

//helper
import currencyConverter from "../helpers/currencyConverter";
// hooks
import useHoverDescription from "../hooks/useHoverDescription";

import history from "../helpers/history";

const Restaurant = ({ restaurant }) => {
  const descEl = useRef(null);
  const [descHeight, onHoverOverlay, onLeaveOverlay] = useHoverDescription(
    descEl
  );
  const [isLoadedImage, setIsLoadedImage] = useState(false);
  const [formattedPrice, setFormattedPrice] = useState({
    symbol: "$",
    amount: 0
  });
  const [mainImage, setMainImage] = useState({});

  // animation
  const fadeinAttr = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.gentle
  });

  const onlineStatus = () => {
    if (restaurant.online) {
      return <span className="online-status on" />;
    }
    return <span className="online-status off" />;
  };

  const onLoadedImage = () => {
    setTimeout(() => {
      setIsLoadedImage(true);
    }, 800);
  };

  useEffect(() => {
    if (restaurant) {
      if (restaurant.images.length !== 0) {
        let _mainImage = restaurant.images.filter(image => image.is_main)[0];
        setMainImage(
          _mainImage ? _mainImage.image : restaurant.images[0].image
        );
      }
      const [symbol, amount] = currencyConverter(
        restaurant.currency,
        restaurant.delivery_price
      );
      setFormattedPrice({ symbol, amount });
    }
  }, [restaurant]);

  const goToDetail = () => {
    history.push(`restaurants/${restaurant.id}`);
  };

  return (
    <animated.div className="restaurant" key={restaurant.id} style={fadeinAttr}>
      <div
        onClick={goToDetail}
        onMouseEnter={onHoverOverlay}
        onMouseLeave={onLeaveOverlay}
        className="image-wrapper"
      >
        <img
          onLoad={onLoadedImage}
          className={`image ${isLoadedImage ? null : "disable"}`}
          src={mainImage.url}
          alt=""
        />
        {isLoadedImage ? null : (
          <BlurhashContainer blurhash={mainImage.blurhash} />
        )}
        <div className="overlay">
          <p className="price">
            {formattedPrice.symbol}
            {formattedPrice.amount}
          </p>
          <p
            ref={descEl}
            style={{ height: descHeight !== null ? descHeight : "auto" }}
            className="description"
          >
            <span>{restaurant.description}</span>
          </p>
        </div>
      </div>
      <p className="name">
        {onlineStatus()} {restaurant.name}
      </p>
      <p className="city">
        <FontAwesomeIcon
          className="city-icon"
          icon={["fas", "map-marker-alt"]}
        />
        {restaurant.city}
      </p>
      <Tag tags={restaurant.tags} />
    </animated.div>
  );
};

export default Restaurant;
