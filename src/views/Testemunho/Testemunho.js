import React from 'react';
import './Testemunho.css';

function Testemunho() {
    return (
        <div>
            <div className="testemunho__row testemunho__text-row">
                <p className="text">A Senhora Malvina Zanconato, conhecida por Dona Malvina, nasceu em --- e faleceu em
                    --- . Conviveu com os pais de <span className="testemunho__span-italics">Brigida</span></p>
                <p className="text">Dona Malvina concedeu-nos uma entrevista pouco tempo antes de seu
                    falecimento.</p>
                <p className="text">Leia a entrevista a seguir.</p>
            </div>
            <div className="testemunho__row testemunho__text-row">
                <p className="testemunho__title text">Como a senhora conheceu a <span
                    className="testemunho__span-italics">Brígida?</span></p>
                <p className="text">Não tive a oportunidade de conviver com ela mas sim com seus pais. Seu Chiquinho
                    tinha verdadeira paixão pela filha, sofreram muito quando ela morreu mas sabiam que ela estava do
                    lado de Deus.</p>
            </div>
            <div className="testemunho__row testemunho__text-row">
                <p className="testemunho__title text">A senhora sabe alguma história referente à infância dela?</p>
                <p className="text">Sim, os pais contavam com orgulho suas atitudes. Por vezes ela ainda bem pequena
                    pegava seu almoço ou jantar e ia escondida dividir com os filhos dos colonos da fazenda pois sabia
                    que não faltava alimento para eles mas como na sua casa sempre tinha variedades podia partilhar com
                    eles.</p>
                <p className="text">Sempre foi de muita oração, tanto que na adolescência foi catequista e ajudou na
                    formação de muitos dos colonos da fazenda onde morava quanto da região. Era uma pessoa que desde
                    criança só se ocupava em fazer o bem.</p>
            </div>
            <div className="testemunho__row testemunho__text-row">
                <p className="testemunho__title text">Conhece bem sobre a gruta de Nossa Senhora de Lourdes?</p>
                <p className="text">Sim, foi construída por seus pais, foi um pedido dela antes de morrer pois era devota de Nossa Senhora de Lourdes. Eles contavam que ainda criança ela dizia que tinha uma visão de uma gruta com uma "janela" onde estava a Virgem Santíssima e que um dia queria que fizessem uma casinha igual a essa pra que as pessoas pudessem passar e ver a Mãezinha na "janela". E assim quando adulta antes de sua morte renovou esse pedido.</p>
            </div>
            <div className="testemunho__row testemunho__text-row">
                <p className="testemunho__title text">É verdade que as pessoas vinham rezar na gruta?</p>
                <p className="text">Eram muitas pessoas, assim que ela morreu e a gruta foi construída as pessoas da região, aqueles que ela evangelizou ou conheciam sua história, faziam verdadeiras peregrinações para cá. Vinham participar da Santa Missa, rezar o terço, pegar água para beber e passar nas enfermidades. Era ela muito conhecida na região.</p>
            </div>
            <div className="testemunho__row testemunho__text-row">
                <p className="testemunho__title text">Sabe se tem algum testemunho daqueles que vinham nessas peregrinações?</p>
                <p className="text">Testemunho ouvi muitos (sic), não era como hoje que se grava tudo, pude guardar tudo no coração. Tiveram (sic) muitas curas de enfermidades mas acho que o maior testemunho é o amor a Deus que despertava no coração das pessoas.</p>
            </div>
            <div className="testemunho__row testemunho__text-row">
                <p className="testemunho__title text">Que lindo, quero agradecer a senhora por todo carinho e atenção.</p>
                <p className="text">Eu que agradeço meu filho, obrigada pela oportunidade de falar da <span className="testemunho__span-italics"> Bidinha</span>. Gostava muito dos pais dela e sempre admirei sua história. Ela intercede por nós no céu.</p>
            </div>
        </div>
    );
}

export default Testemunho;