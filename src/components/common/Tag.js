import React from "react";
import './Tag.scss';

const Tag = ({tags = [], isInline = false}) => {
    return (
        <div style={{display: isInline ? 'inline-block': 'block'}}>
            {tags.map((tag) => (
                <span className="tag" key={tag.id}>#{tag.name}</span>
            ))}
        </div>
    )
};

export default Tag;