import React from 'react';
import './Gruta.css';
import {imgPlaca, imgAltar, imgFront, imgCruz, imgNoite, imgRosa, imgTumulo} from "./GrutaData";
import ImageSource from "../../components/ImageSource/ImageSource";

function Gruta() {
    return (
        <div>
            <div className="gruta__row">
                <p className="text">Em seu leito de morte, Brígida pediu a seu pai que construísse uma gruta, dedicada a
                    Nossa Senhora de Lourdes, ao lado da igreja Matriz Madre de Deus de Angustura.</p>
                <p className="text">A gruta apresenta uma imagem, em mármore, de Nossa Senhora de Lourdes e um letreiro
                    com a seguinte inscrição:</p>
                <p className="text gruta__placa-text">"A Gruta de Lourdes que marca, como o ponteiro do grande relógio
                    do tempo, o prestígio da crença na successão dos séculos. 1935"</p>
            </div>
            <div className="gruta__row">
                <p className="text">Veja abaixo imagens da Gruta de Lourdes, da igreja Madre de Deus de Angustura e do
                    túmulo da Brígida, localizado no cemitério de Angustura.</p>
            </div>
            <div className="gruta__row gruta__img-row">
                <ImageSource  className="gruta__image" {...imgRosa} />
            </div>
            <div className="gruta__row gruta__img-row">
                <ImageSource {...imgNoite} />
            </div>
            <div className="gruta__row gruta__img-row">
                <ImageSource {...imgPlaca} />
            </div>
            <div className="gruta__row gruta__img-row">
                <ImageSource {...imgFront} />
            </div>
            <div className="gruta__row gruta__img-row">
                <ImageSource {...imgAltar} />
            </div>
            <div className="gruta__row gruta__img-row">
                <ImageSource {...imgCruz} />
            </div>
            <div className="gruta__row gruta__img-row">
                <ImageSource {...imgTumulo} />
            </div>

        </div>
    );
}

export default Gruta;