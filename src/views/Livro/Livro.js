import React from 'react';
import './Livro.css'
import {imgHr1} from "./LivroData";
import ImageSource from "../../components/ImageSource/ImageSource";
import TextImageSource from "../../components/TextImageSource/TextImageSource";
import {TfiAngleDoubleLeft, TfiAngleDoubleRight} from "react-icons/tfi";
import {GiIronCross} from "react-icons/gi";

function Livro() {
    return (
        <div className="livro__container">
            <div className="livro__row">
                <h1 className="livro__title">Pequena Biografia de Brígida Figueira</h1>
                <h2 className="livro__subtitle">Traduzida do Francês pelo Padre Oscar Figueira de Aquino</h2>
            </div>
            <div className="livro__row text livro_first-rows">
                {/*<ImageSource {...imgHr2} />*/}
                <p className="livro__text">Aos bondosos Tios</p>
                <p className="livro__text">Chiquinho e Nhánhá</p>
                <p className="livro__text">oferece o grato sobrinho</p>
                <p className="livro__text">Pe. Oscar Figueira de Aquino</p>
                <p className="livro__text">Caraça, 2-11-33.</p>
                <TextImageSource {...imgHr1} />
            </div>
            <div className="separator">
                <hr></hr>
            </div>
            <div className="livro__row text livro_first-rows">
                <p className="livro__text">À memória de Bidinha</p>
                <p className="livro__text">Consummatus in brevi, explevit tempora multa.</p>
                <p className="livro__text">(Liv da sabedoria)</p>
                <p className="livro__text">Adormecida na flôr da idade, sua vida foi longa em atos de virtudes.</p>
            </div>
            <div className="separator">
                <hr></hr>
            </div>
            <div className="livro__row text">
                <p className="livro__text">PREFÁCIO</p>
                <GiIronCross/>
                <p className="livro__text">Um Paralelo</p>
                <br/>
                <p className="livro__text">Santa Teresinha do Menino Jesus nasceu na cidade de Alençon (França), no dia
                    2 de Janeiro de 1873.</p>
                <p className="livro__text">Amou muito a Jesus e a Maria Imaculada.<TfiAngleDoubleLeft/>Meu Jesus, eu Vos amo e a Vós me consagro<TfiAngleDoubleRight/>.</p>
                <p className="livro__text"><TfiAngleDoubleLeft/>Quero fazer o bem sobre a terra<TfiAngleDoubleRight/>.</p>
                <p className="livro__text">Morreu no dia 30 de Setembro de 1897 — na idade de 24 anos</p>
                <p className="livro__text">Foram seus pais o Snr. e Snra. Martin.</p>
                <p className="livro__text">Sta. Teresinha, no seu leito de morte, parecia sorrir e ver, de olhos cerrados, as rosas que, do Paraíso, faria chover sobre a terra, especialmente sobre as alminhas que iriam cantar os louvores de Deus, depois de aqui imitarem suas virtudes.</p>
                <p className="livro__text">BRÍGIDA, outra Teresinha brasileira, nasceu na Fazenda do <TfiAngleDoubleLeft/>Desengano<TfiAngleDoubleRight/>, perto da de <TfiAngleDoubleLeft/>Sta. Cruz<TfiAngleDoubleRight/>, freguesia de Angustura, (Minas), no dia 2 de Janeiro de 1902.</p>
                <p className="livro__text">Foram seus pais Francisco Gomes Figueira e Lydia Figueira.</p>
                <p className="livro__text">Passou sua curta existência, fazendo o bem. Amou muito a Jesus e a Maria Imaculada.</p>
                <p className="livro__text">Morreu no dia 24 de Agosto, com 28 anos, em 1930.</p>
                <p className="livro__text">BRÍGIDA, no seu leito mortuário, também sorria e espalhava a <TfiAngleDoubleLeft/>calma e a paz<TfiAngleDoubleRight/>.</p>
                <p className="livro__text">Imitadora de Santa Teresinha, há de estar, agora, ao seu lado, no céu, assim esperamos.</p>
                <p className="livro__text">Caraça, 2 de Nov. 1933.</p>
                <div className="separator">
                    <hr></hr>
                </div>
            </div>
            <div className="livro__row text">
                <p className="livro__text">BRÍGIDA FIGUEIRA</p>
                <p className="livro__text">(1902 - 1930)</p>
                <p className="livro__text">I</p>
                <br/>
                <p className="livro__text">Levou para o céu a messe já bela do seu apostolado, outra aluna do Colégio <TfiAngleDoubleLeft/>Sacré-Coer<TfiAngleDoubleRight/> da Tijuca (Rio), <span className="livro__span-italics">Brígida Figueira</span>.</p>
                <p className="livro__text"></p>
                <p className="livro__text"></p>
            </div>
            <div className="livro__row">
                <p className="livro__subsubtitle">Tipografia "Vozes de Petrópolis",</p>
                <p className="livro__subsubtitle">Petrópolis</p>
            </div>
        </div>
    );
}

export default Livro;