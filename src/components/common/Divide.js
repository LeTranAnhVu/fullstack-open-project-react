import React from 'react';
import './Divide.scss';

const Divide = ({color = '', weight = 0.5}) => {
    return (
        <hr className={`app-divide ${color}`} style={{borderWidth: weight}}/>
    )
};

export default Divide;