import React from 'react';
import './LoadingBar.scss';

const LoadingBar = ({color = '', weight = 0.5, time = '1s'}) => {
    return (
        <div className='loading-bar-wrap'>
            <div className={`loading-bar ${color}`} style={{height: weight, animationDuration: time}}/>
        </div>
    )
};

export default LoadingBar;