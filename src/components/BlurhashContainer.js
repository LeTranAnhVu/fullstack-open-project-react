import React from 'react';
import {Blurhash} from "react-blurhash";
import { isBlurhashValid } from "blurhash";


const BlurhashContainer = ({blurhash, w, h, rx, ry, p}) => {
    if (!isBlurhashValid(blurhash).result ){
        blurhash = 'UUKJMXv|x]oz0gtRM{V@AHRQwvxZXSs9s;o0'
    }
    return (
        <Blurhash
            className="blurhash"
            hash={blurhash}
            width={w || "100%"}
            height={h || "100%"}
            resolutionX={rx || 32}
            resolutionY={ry || 32}
            punch={p || 1}/>)
}

export default BlurhashContainer;