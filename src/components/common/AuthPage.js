import React from "react";
import './AuthPage.scss';
import {animated, useSpring} from "react-spring";

const AuthPage = ({children, ring}) => {
    const {ringAnimation} = useSpring({
        from: {ringAnimation: 0},
        ringAnimation: ring ? 1 : 0,
        config: {duration: 150}
    });

    return (
        <div className='auth-page'>
            <animated.div className='auth-form-wrapper'
                          style={ring ? {
                              transform: ringAnimation.interpolate({
                                  range: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                                  output: [0, -15, -20, -25, -10, 0, 10, 15, 20, 4, 0]
                              }).interpolate(ringAnimation => `translateX(${ringAnimation}px)`)
                          } : null}>
                {children}
            </animated.div>
        </div>
    )
};

export default AuthPage;