import React from "react";
import './TestemunhoMain.css';
import Card from "../../components/Card/Card";
import ImageSource from "../../components/ImageSource/ImageSource";
import {imgLourdes} from "./TestemunhoMainData";

function TestemunhoMain() {
    return (
        <div className="testemunho-main__container">
            <ImageSource className="testemunho-main__img" {...imgLourdes} />
            <div className="testemunho-main__cards">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default TestemunhoMain;
