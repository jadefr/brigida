import React from "react";
import './TestemunhoImageSource.css';

function TestemunhoImageSource({src}) {
    return (
        <div>
            <div className="testemunho-image-source__container">
                <img src={src}  className="testemunho-image-source__img" alt="figura"/>
            </div>
        </div>
    );
}

export default TestemunhoImageSource;
