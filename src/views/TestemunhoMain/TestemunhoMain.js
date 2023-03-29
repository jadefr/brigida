import React from "react";
import './TestemunhoMain.css';
import Card from "../../components/Card/Card";
import {imgLourdes, historias, cura} from "./TestemunhoMainData";
import TestemunhoImageSource from "../../components/TestemunhoImageSource/TestemunhoImageSource";

function TestemunhoMain() {
    return (
        <div className="testemunho-main__container">
            <TestemunhoImageSource className="testemunho-image-source__img" {...imgLourdes} />
            <div className="testemunho-main__cards">
                <Card {...cura} />
                <Card {...historias} />
            </div>
        </div>
    )
}

export default TestemunhoMain;
