import React from 'react';

const Divide = ({color = '#c1bcbc', weight = 0.5}) => {
    return (
        <hr style={{border: `${color} ${weight}px solid`, margin: '5px 0'}}/>
    )
};

export default Divide;