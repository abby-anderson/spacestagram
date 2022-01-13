import React from "react";

function ImageCard ({image}) {

    console.log('in imagecard component!', image)
    console.log('in imagecard component!', image.url)


    return (
        <div className="image-card">
            <h1>ImageCard.js here</h1>
            <img src={image.url} />
        </div>
    )
}

export default ImageCard;