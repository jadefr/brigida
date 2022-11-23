import React from "react";
import './ImageSource.css';

function ImageSource({
                    src,
                    alt,
                    text
                }) {
    return (
        <div>
            <div className="image-source__container">
                <img src={src} alt={alt} className="image-source__img"/>
                {/*<div className="text">{text}</div>*/}
            </div>
        </div>
    );
}

export default ImageSource;