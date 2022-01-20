import React from "react";

function ImageCard ({image}) {

    return (
        <div className="image-card">
            <h2>{image.title}</h2>
            {image.copyright ? <p>Copyright: {image.copyright}</p> : null}
            <p>Captured on {image.date}</p>
            <img src={image.url} />
            <p>{image.explanation}</p>
            <button>Like</button>
        </div>
    )
}

export default ImageCard;