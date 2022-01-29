import React, { useState } from "react";

function ImageCard ({image}) {
    const [liked, setLiked] = useState(false)

    function toggleLike () {
        setLiked(!liked)
    }

    function showURL () {
        console.log(image.url)
        window.confirm(`Here's the image URL: \n${image.url}`)
    }

    return (
        <div className="image-card">
            
            <h2 id="image-title">{image.title}</h2>
            {image.copyright ? <p>Copyright: {image.copyright}</p> : null}
            <p>Captured on {image.date}</p>
            
            <img src={image.url} />
            <p id="image-description">{image.explanation}</p>

            <div id="button-zone">
                <button className="link-button" onClick={showURL}>Get image URL</button>
                {liked === false ? <button className="like-button" onClick={toggleLike}>🖤 Like!</button> : <button className="like-button" onClick={toggleLike}>💖 You liked this!</button>}
            </div>

        </div>
    )
}

export default ImageCard;