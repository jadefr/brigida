import React from "react";
import './TestemunhoImageSource.css';

function TestemunhoImageSource({src, linkTo}) {
    return (
        <div>
            <div className="testemunho-image-source__container">
                <a href={linkTo}>
                    <img src={src}  className="testemunho-image-source__img" alt="Imagem de Nossa Senhora de Lourdes"/>
                </a>
            </div>
        </div>
    );
}

export default TestemunhoImageSource;
