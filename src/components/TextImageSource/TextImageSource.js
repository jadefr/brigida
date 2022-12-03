import React from "react";
import './TextImageSource.css';

function TextImageSource({src}) {
    return (
        <div>
            <div className="text-image-source__container">
                <img src={src}  className="text-image-source__img"/>
            </div>
        </div>
    );
}

export default TextImageSource;