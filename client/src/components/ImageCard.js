import React, { useState } from "react";

function ImageCard ({image}) {
    const [liked, setLiked] = useState(false)

    function toggleLike () {
        setLiked(!liked)
    }

    return (
        <div className="image-card">
            
            <h2 id="image-title">{image.title}</h2>
            {image.copyright ? <p>Copyright: {image.copyright}</p> : null}
            <p>Captured on {image.date}</p>
            
            <img src={image.url} />
            <p id="image-description">{image.explanation}</p>
            {liked === false ? <button onClick={toggleLike}>🖤 Like!</button> : <button onClick={toggleLike}>💖 You liked this!</button>}
            

        </div>
    )
}

export default ImageCard;