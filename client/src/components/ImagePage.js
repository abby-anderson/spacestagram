import React from "react";
import ImageCard from './ImageCard';


function ImagePage ({image}) {

    return (
        <div>
            <h1>ImagePage.js here</h1>
            <ImageCard image={image} />

        </div>
    )
}

export default ImagePage;