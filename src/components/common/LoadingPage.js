import React from 'react';
import './LoadingPage.scss';

const LoadingPage = ({color = '', weight = 0.5, time = '1s'}) => {
    return (
        <div className='loading-page'>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
};

export default LoadingPage;