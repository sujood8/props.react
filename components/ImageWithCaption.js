import React from "react";

function ImageWithCaption({ src, caption }) {
return (
    <div>
    {src ? <img src={src} alt={caption} /> : <p>Image not available</p>}
    </div>

  );
}

export default ImageWithCaption;