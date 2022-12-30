import React from 'react';
import './Home.css';
import ImageSource from "../../components/ImageSource/ImageSource";
import {imgBrigida} from "./HomeData";

function Home() {
    return (
        <div>
            <div className="home__img_row">
                <ImageSource {...imgBrigida} />
            </div>
            <div className="home__row">
                <p className="text">Brigida Figueira nasceu em Angustura, Minas Gerais, no dia 2 de Janeiro de 1902.</p>
                <p className="text">Passou sua curta existência fazendo o bem. Amou muito a Jesus e a Maria Imaculada.</p>
                <p className="text">Em seu leito mortuário, Brígida sorria e espalhava a calma e a paz. Morreu no dia 24 de Agosto de 1930, aos 28 anos, em odor de santidade. </p>
                <p className="text">Quase cem anos após sua morte, Brígida continua a interceder por Angustura e àqueles que pedem sua ajuda.</p>
                <p className="text">Uma reprodução de seu último retrato (imagem acima) se encontra exposta na sacristia da Igreja Madre de Deus de Angustura.</p>
            </div>
        </div>
    );
}

export default Home;