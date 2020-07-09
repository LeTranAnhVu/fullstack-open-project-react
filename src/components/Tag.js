import React from "react";

const Tag = ({tags = []}) => {
    return (
        <div>
            {tags.map((tag, index) => (
                <span className="tag" key={index}>#{tag}</span>
            ))}
        </div>
    )
}

export default Tag;