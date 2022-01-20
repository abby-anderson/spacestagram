import React from "react";
import ImageCard from './ImageCard';


function ImagePage ({images}) {

    function renderImageCards() {
        return (
            images.map(image => {
                return (
                    <ImageCard image={image} key={image.title} />
                )
            })
        )
    }

    return (
        <div className="image-container">
            {renderImageCards()}
        </div>
    )
}

export default ImagePage;