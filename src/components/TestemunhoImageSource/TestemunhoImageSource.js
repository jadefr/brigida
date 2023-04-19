import React from "react";
import './TestemunhoImageSource.css';

function TestemunhoImageSource({src}) {
    return (
        <div>
            <div className="testemunho-image-source__container">
                <img src={src}  className="testemunho-image-source__desktop" alt="Imagem de Nossa Senhora de Lourdes"/>
                {/*<img src={src}  className="testemunho-image-source__mobile" alt="Imagem de Nossa Senhora de Lourdes"/>*/}
            </div>
        </div>
    );
}

export default TestemunhoImageSource;
