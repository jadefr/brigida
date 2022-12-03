import React from 'react';
import './Livro.css'
import {imgHr1} from "./LivroData";
import ImageSource from "../../components/ImageSource/ImageSource";
import TextImageSource from "../../components/TextImageSource/TextImageSource";
import {TfiAngleDoubleLeft, TfiAngleDoubleRight, TfiLineDashed} from "react-icons/tfi";
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
                <br/>
                <p className="livro__text">Pe. Oscar Figueira de Aquino</p>
                <br/>
                <p className="livro__text">Caraça, 2-11-33.</p>
                <TextImageSource {...imgHr1} />
            </div>
            <div className="separator">
                <hr></hr>
            </div>
            <div className="livro__row text livro_first-rows">
                <p className="livro__text">À memória da Bidinha</p>
                <p className="livro__text"><span className="livro__span-italics">Consummatus in brevi, explevit tempora multa</span>.
                </p>
                <p className="livro__text">(Liv da sabedoria)</p>
                <br/>
                <p className="livro__text"><span className="livro__span-italics">Adormecida na flôr da idade, sua vida foi longa em atos de virtudes</span>.
                </p>
            </div>
            <div className="separator">
                <hr></hr>
            </div>
            <div className="livro__row text">
                <div className="livro__chapter-title">
                    <p className="livro__text livro__span-bold">PREFÁCIO</p>
                    <GiIronCross className="livro__icon"/>
                    <p className="livro__text livro__span-bold">Um Paralelo</p>
                </div>
                <p className="livro__text">Santa Teresinha do Menino Jesus nasceu na cidade de Alençon (França), no dia
                    2 de Janeiro de 1873.</p>
                <p className="livro__text">Amou muito a Jesus e a Maria Imaculada.<TfiAngleDoubleLeft
                    className="livro__icon"/>Meu Jesus, eu Vos amo e a Vós me consagro<TfiAngleDoubleRight
                    className="livro__icon"/>.</p>
                <p className="livro__text"><TfiAngleDoubleLeft className="livro__icon"/>Quero fazer o bem sobre a
                    terra<TfiAngleDoubleRight className="livro__icon"/>.</p>
                <p className="livro__text">Morreu no dia 30 de Setembro de 1897 — na idade de 24 anos</p>
                <p className="livro__text">Foram seus pais o Snr. e Snra. Martin.</p>
                <p className="livro__text">Sta. Teresinha, no seu leito de morte, parecia sorrir e ver, de olhos
                    cerrados, as rosas que, do Paraíso, faria chover sobre a terra, especialmente sobre as alminhas que
                    iriam cantar os louvores de Deus, depois de aqui imitarem suas virtudes.</p>
                <p className="livro__text"><span className="livro__span-italics">BRÍGIDA</span>, outra Teresinha
                    brasileira, nasceu na Fazenda do <TfiAngleDoubleLeft
                        className="livro__icon"/>Desengano<TfiAngleDoubleRight className="livro__icon"/>, perto da
                    de <TfiAngleDoubleLeft className="livro__icon"/>Sta. Cruz<TfiAngleDoubleRight
                        className="livro__icon"/>, freguesia de Angustura, (Minas), no dia 2 de Janeiro de 1902.</p>
                <p className="livro__text">Foram seus pais Francisco Gomes Figueira e Lydia Figueira.</p>
                <p className="livro__text">Passou sua curta existência, fazendo o bem. Amou muito a Jesus e a Maria
                    Imaculada.</p>
                <p className="livro__text">Morreu no dia 24 de Agosto, com 28 anos, em 1930.</p>
                <p className="livro__text"><span className="livro__span-italics">BRÍGIDA</span>, no seu leito mortuário,
                    também sorria e espalhava a <TfiAngleDoubleLeft className="livro__icon"/>calma e a
                    paz<TfiAngleDoubleRight className="livro__icon"/>.</p>
                <p className="livro__text">Imitadora de Santa Teresinha, há de estar, agora, ao seu lado, no céu, assim
                    esperamos.</p>
                <p className="livro__text">Caraça, 2 de Nov. 1933.</p>
                <div className="separator">
                    <hr></hr>
                </div>
            </div>
            <div className="livro__row text">
                <div className="livro__chapter-title">
                    <p className="livro__text livro__span-bold">BRÍGIDA FIGUEIRA</p>
                    <p className="livro__text">(1902 - 1930)</p>
                    <p className="livro__text livro__span-bold">I</p>
                </div>
                <p className="livro__text">Levou para o céu a messe já bela do seu apostolado, outra aluna do
                    Colégio <TfiAngleDoubleLeft className="livro__icon"/>Sacré-Coer<TfiAngleDoubleRight
                        className="livro__icon"/> da Tijuca (Rio), <span
                        className="livro__span-italics">Brígida Figueira</span>.</p>
                <p className="livro__text">Passou, em companhia dos pais, os seus 12 primeiros anos, na Fazenda
                    de <TfiAngleDoubleLeft className="livro__icon"/>Sta. Cruz<TfiAngleDoubleRight
                        className="livro__icon"/>.</p>
                <p className="livro__text">Aprendeu, na escola de sua mãe terna, as primeiras letras e, ao mesmo tempo,
                    a conhecer e a amar a Nosso Senhor.</p>
            </div>
            <div className="livro__row text">
                <div className="livro__chapter-title">
                    <p className="livro__text livro__span-bold">II</p>
                    <p className="livro__text livro__span-bold">No Colégio</p>
                </div>
                <p className="livro__text"><span className="livro__span-italics">Brígida</span> matriculou-se aos 12 anos no colégio <TfiAngleDoubleLeft className="livro__icon"/>Sacré-Coer<TfiAngleDoubleRight
                    className="livro__icon"/>, Tijuca, (Rio); revelou-se, logo, aplicada ao trabalho, fiel ao dever quotidiano que, apesar de insignificante, tem o dom de aperfeiçoar as almas.</p>
                <p className="livro__text">Continuou, assim, até o fim de sua educação, brilhantemente coroada com o tão ambicionado prêmio de honra — <TfiAngleDoubleLeft className="livro__icon"/>primeiro-medalhão<TfiAngleDoubleRight
                    className="livro__icon"/>.</p>
                <p className="livro__text">Falava, com elegância, o português, o francês e o inglês; deliciava-se em leituras sérias, nestas três línguas.</p>
                <p className="livro__text">O tesouro de suas ardentes convicções trazia-lhe os olhos erguidos para os belos horizontes da caridade; só pensava em distribuir as riquezas do generoso coração.</p>
                <p className="livro__text">O zelo, a modéstia, o amor dos pobres, a devoção ao Sagrado Coração de Jesus e à Virgem Imaculada embelezaram sua curta passagem pelo mundo.</p>
                <p className="livro__text"><span className="livro__span-italics">Brígida</span>, antes de ingressar na associação das <TfiAngleDoubleLeft className="livro__icon"/>Filhas de Maria<TfiAngleDoubleRight
                    className="livro__icon"/>, exercitava-se ao Apostolado, auxiliando suas mestras, no ensino do Catecismo aos pobres.</p>
                <p className="livro__text">Ao aproximar-se a última preparação dos pequenos comungantes, tudo fazia para não faltar às suas lições quotidianas; sabia adiantar um trabalho de aula, medir, com economia, os instantes livres, que lhe deixava o regulamento e, assim, seus estudos jamais sofriam com este acréscimo voluntário de ocupações.</p>
                <p className="livro__text">Era tocante surpreendê-la, radiante de fé e simplicidade, no meio de seus negrinhos, por ela, certamente, considerados — <TfiAngleDoubleLeft className="livro__icon"/>brancos-Tabernáculos<TfiAngleDoubleRight
                    className="livro__icon"/> — do dia seguinte.</p>
                <p className="livro__text">Havia-lhe, no zelo, mais que fantasia de criança. Perceberam-no suas mestras, e, na certeza de um grande contentamento, ofereceram-lhe um Catecismo ilustrado, seu melhor auxiliar de sempre</p>
                <TfiLineDashed className="livro__icon-dash"/>
                <p className="livro__text"><span className="livro__span-italics">Brígida</span> passava as férias na longíqua Fazenda de seus pais.</p>
                <p className="livro__text">Ora, nada mais próprio para excitar ao Apostolado que as propriedades brasileiras, de extensões imensas e com numerosos empregados e colonos, sob o regime patriarcal, que se adota, facilmente, quando o dono se presta.</p>
                <TfiLineDashed className="livro__icon-dash"/>
                <p className="livro__text">A <TfiAngleDoubleLeft className="livro__icon"/>Fazenda de Santa Cruz<TfiAngleDoubleRight
                    className="livro__icon"/> não tinha padre, nem igreja, só a capela doméstica, onde raramente, se ouvia a Santa Missa.</p>
                <p className="livro__text">Os filhos dos colonos eram necessariamente ignorantes. <span className="livro__span-italics">Brígida</span> abre uma aula de Catecismo e inicia a obra de evangelização, durante as férias. Obrigada a tornar ao Colégio, deixava aos cuidados de sua mãe os neófitos, que mal sabiam as orações.</p>
            </div>
            <div className="livro__row text">
                <div className="livro__chapter-title">
                    <p className="livro__text livro__span-bold">III</p>
                    <p className="livro__text">Dezembro de 1918</p>
                </div>
                <p className="livro__text livro__span-bold">1. Sua volta definitiva para <TfiAngleDoubleLeft className="livro__icon"/>Santa Cruz<TfiAngleDoubleRight
                    className="livro__icon"/>. Realização de seus sonhos generosos.</p>
                <p className="livro__text">Filha única, acostumar-se-ia à vida triste e monótona da Fazenda? Sua devoção de piedosa Colegial suportaria a privação dos Sacramentos, sobretudo da Penitência e Eucaristia?</p>
                <p className="livro__text"><span className="livro__span-italics">Brígida</span> era prudente e forte, possuía o verdadeiro espírito da fé cristã; julgava que dedicar-se à prática do bem e fazer a felicidade dos outros, seria assegurar a sua própria. Pôs mão à obra!</p>
                <p className="livro__text">Organizou, sem demora, um plano de Catecismo para os empregados da Fazenda, colonos e vizinhos.</p>
                <p className="livro__text">Sucediam-se os grupos: hoje as crianças que se preparavam para a primeira Comunhão; no dia seguinte, os que já comungavam; outro dia, com indústria apostólica reunia as criancinhas... para que as mamães comparecessem também.</p>
                <p className="livro__text">A habilidosa Catequista ensina-lhes, assim, o que não sabiam ou tinham, já, olvidado.</p>
                <p className="livro__text">Preparado, suficientemente, um grupo para a recepção dos Sacramentos, esforçava-se por hospedar um padre, três ou quatro dias, na Fazenda.</p>
                <p className="livro__text">Que alegria, se esta a permanência se prolongasse por uma ou duas semanas!...</p>
                <p className="livro__text">Transforma-se <TfiAngleDoubleLeft className="livro__icon"/>Santa Cruz<TfiAngleDoubleRight
                    className="livro__icon"/> em Paróquia; a Capelinha era ornada com gosto para a Sta. Missa.</p>
                <TfiLineDashed className="livro__icon-dash"/>
            </div>
            <div className="livro__row text">
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