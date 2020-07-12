import React from "react";

const Tag = ({tags = []}) => {
    return (
        <div>
            {tags.map((tag) => (
                <span className="tag" key={tag.id}>#{tag.name}</span>
            ))}
        </div>
    )
}

export default Tag;