import React from 'react';
import './Livro.css'
import { imgHr1 } from "./LivroData";
import TextImageSource from "../../components/TextImageSource/TextImageSource";
import { TfiAngleDoubleLeft, TfiAngleDoubleRight } from "react-icons/tfi";
import { GiIronCross } from "react-icons/gi";

function Livro() {
    return (
        <div className="livro__container">
            <div className="livro__row">
                <h1 className="livro__title">Pequena Biografia de Brígida Figueira</h1>
                <h2 className="livro__subtitle">Traduzida do Francês pelo Padre Oscar Figueira de Aquino</h2>
            </div>
            <div className="livro__row text livro_first-rows">
                <p className="livro__text">Aos bondosos Tios Chiquinho e Nhánhá;</p>
                <p className="livro__signature">oferece o grato sobrinho,</p>
                <br></br>
                <p className="livro__signature">Pe. Oscar Figueira de Aquino</p>
                <p className="livro__signature">Caraça, 2-11-33.</p>
                <div className="separator">
                    <hr></hr>
                </div>
            </div>
            <div className="livro__row text livro_first-rows">
                <p className="livro__text">À memória da Bidinha</p>
                <p className="livro__text"><span className="livro__span-italics">Consummatus in brevi, explevit tempora multa</span>.
                </p>
                <p className="livro__text">(Liv da sabedoria)</p>
                <br></br>
                <p className="livro__text"><span className="livro__span-italics">Adormecida na flôr da idade, sua vida foi longa em atos de virtudes</span>.
                </p>
                <div className="separator">
                    <hr></hr>
                </div>
            </div>
            <div className="livro__row text">
                <div className="livro__chapter-title">
                    <p className="livro__text livro__span-bold">PREFÁCIO</p>
                    <GiIronCross className="livro__icon"/>
                    <p className="livro__text livro__span-bold">Um Paralelo</p>
                </div>
                <p className="livro__text">Santa Teresinha do Menino Jesus nasceu na cidade de Alençon (França), no dia
                    2 de Janeiro de 1873.</p>
                <p className="livro__text">Amou muito a Jesus e a Maria Imaculada.<br></br><TfiAngleDoubleLeft
                    className="livro__icon"/>Meu Jesus, eu Vos amo e a Vós me consagro<TfiAngleDoubleRight className="livro__icon"/>.</p>
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
                <p className="livro__text"><span className="livro__span-italics">Brígida</span> matriculou-se aos 12
                    anos no colégio <TfiAngleDoubleLeft className="livro__icon"/>Sacré-Coer<TfiAngleDoubleRight
                        className="livro__icon"/>, Tijuca, (Rio); revelou-se, logo, aplicada ao trabalho, fiel ao dever
                    quotidiano que, apesar de insignificante, tem o dom de aperfeiçoar as almas.</p>
                <p className="livro__text">Continuou, assim, até o fim de sua educação, brilhantemente coroada com o tão
                    ambicionado prêmio de honra — <TfiAngleDoubleLeft
                        className="livro__icon"/>primeiro-medalhão<TfiAngleDoubleRight className="livro__icon"/>.</p>
                <p className="livro__text">Falava, com elegância, o português, o francês e o inglês; deliciava-se em
                    leituras sérias, nestas três línguas.</p>
                <p className="livro__text">O tesouro de suas ardentes convicções trazia-lhe os olhos erguidos para os
                    belos horizontes da caridade; só pensava em distribuir as riquezas do generoso coração.</p>
                <p className="livro__text">O zelo, a modéstia, o amor dos pobres, a devoção ao Sagrado Coração de Jesus
                    e à Virgem Imaculada embelezaram sua curta passagem pelo mundo.</p>
                <p className="livro__text"><span className="livro__span-italics">Brígida</span>, antes de ingressar na
                    associação das <TfiAngleDoubleLeft className="livro__icon"/>Filhas de Maria<TfiAngleDoubleRight
                        className="livro__icon"/>, exercitava-se ao Apostolado, auxiliando suas mestras, no ensino do
                    Catecismo aos pobres.</p>
                <p className="livro__text">Ao aproximar-se a última preparação dos pequenos comungantes, tudo fazia para
                    não faltar às suas lições quotidianas; sabia adiantar um trabalho de aula, medir, com economia, os
                    instantes livres, que lhe deixava o regulamento e, assim, seus estudos jamais sofriam com este
                    acréscimo voluntário de ocupações.</p>
                <p className="livro__text">Era tocante surpreendê-la, radiante de fé e simplicidade, no meio de seus
                    negrinhos, por ela, certamente, considerados — <TfiAngleDoubleLeft className="livro__icon"/>brancos-Tabernáculos<TfiAngleDoubleRight
                        className="livro__icon"/> — do dia seguinte.</p>
                <p className="livro__text">Havia-lhe, no zelo, mais que fantasia de criança. Perceberam-no suas mestras,
                    e, na certeza de um grande contentamento, ofereceram-lhe um Catecismo ilustrado, seu melhor auxiliar
                    de sempre</p>

                <div className="separator-space"></div>

                <p className="livro__text"><span className="livro__span-italics">Brígida</span> passava as férias na
                    longíqua Fazenda de seus pais.</p>
                <p className="livro__text">Ora, nada mais próprio para excitar ao Apostolado que as propriedades
                    brasileiras, de extensões imensas e com numerosos empregados e colonos, sob o regime patriarcal, que
                    se adota, facilmente, quando o dono se presta.</p>

                <div className="separator-space"></div>

                <p className="livro__text">A <TfiAngleDoubleLeft className="livro__icon"/>Fazenda de Santa
                    Cruz<TfiAngleDoubleRight className="livro__icon"/> não tinha padre, nem igreja, só a capela
                    doméstica, onde raramente, se ouvia a Santa Missa.</p>
                <p className="livro__text">Os filhos dos colonos eram necessariamente ignorantes. <span
                    className="livro__span-italics">Brígida</span> abre uma aula de Catecismo e inicia a obra de
                    evangelização, durante as férias. Obrigada a tornar ao Colégio, deixava aos cuidados de sua mãe os
                    neófitos, que mal sabiam as orações.</p>
            </div>
            <div className="livro__row text">
                <div className="livro__chapter-title">
                    <p className="livro__text livro__span-bold">III</p>
                    <p className="livro__text">Dezembro de 1918</p>
                    <p className="livro__text livro__span-bold">1. Sua volta definitiva para <TfiAngleDoubleLeft
                        className="livro__icon"/>Santa Cruz<TfiAngleDoubleRight className="livro__icon"/>. Realização de
                        seus sonhos generosos.</p>
                </div>
                <p className="livro__text">Filha única, acostumar-se-ia à vida triste e monótona da Fazenda? Sua devoção
                    de piedosa Colegial suportaria a privação dos Sacramentos, sobretudo da Penitência e Eucaristia?</p>
                <p className="livro__text"><span className="livro__span-italics">Brígida</span> era prudente e forte,
                    possuía o verdadeiro espírito da fé cristã; julgava que dedicar-se à prática do bem e fazer a
                    felicidade dos outros, seria assegurar a sua própria. Pôs mão à obra!</p>
                <p className="livro__text">Organizou, sem demora, um plano de Catecismo para os empregados da Fazenda,
                    colonos e vizinhos.</p>
                <p className="livro__text">Sucediam-se os grupos: hoje as crianças que se preparavam para a primeira
                    Comunhão; no dia seguinte, os que já comungavam; outro dia, com indústria apostólica reunia as
                    criancinhas... para que as mamães comparecessem também.</p>
                <p className="livro__text">A habilidosa Catequista ensina-lhes, assim, o que não sabiam ou tinham, já,
                    olvidado.</p>
                <p className="livro__text">Preparado, suficientemente, um grupo para a recepção dos Sacramentos,
                    esforçava-se por hospedar um padre, três ou quatro dias, na Fazenda.</p>
                <p className="livro__text">Que alegria, se esta a permanência se prolongasse por uma ou duas
                    semanas!...</p>
                <p className="livro__text">Transforma-se <TfiAngleDoubleLeft className="livro__icon"/>Santa
                    Cruz<TfiAngleDoubleRight className="livro__icon"/> em Paróquia; a Capelinha era ornada com gosto
                    para a Sta. Missa.</p>

                <div className="livro__chapter-title">
                    <p className="livro__text livro__span-bold">2. Festa Célebres nos Anais de <TfiAngleDoubleLeft
                    className="livro__icon"/>Santa Cruz<TfiAngleDoubleRight className="livro__icon"/>. — D. Justino
                    visita a Fazenda</p>
                </div>
                <p className="livro__text"><span className="livro__span-italics">Brígida</span> preparara crianças e
                    adultos para o Sacramento da Confirmação. O Exmo. Snr. D. Justino, Bispo de Juiz de Fora, chegara,
                    de véspera, acompanhado de um Sacerdote e, verdadeiros missionários, ouviram as confissões dos que
                    se apresentaram, à tardinha; e houve <span className="livro__span-italics">duas</span> Missas, no
                    dia seguinte.</p>
                <p className="livro__text"><span className="livro__span-italics">Brígida</span>, radiante, tudo
                    providenciava: última preparação dos primeiros comungantes, transformação do salão e corredores em
                    igreja para suprirem a pequenez da Capela, então, insuficiente para conter o povo; repetição de
                    cânticos e cerimônias, etc... Sua bela voz, mais que nunca, ouvida, com prazer, nesse dia.</p>
                <p className="livro__text">A piedosa solenidade tocou, profundamente, os assistentes.</p>
                <p className="livro__text">O Snr. Bispo, de passagem pelo Colégio <TfiAngleDoubleLeft
                    className="livro__icon"/>Sacré-Coer<TfiAngleDoubleRight className="livro__icon"/>, teceu
                    elogios <TfiAngleDoubleLeft className="livro__icon"/>a essa filha de Maria exemplar, verdadeiro
                    apóstolo e tesouro de sua diocese<TfiAngleDoubleRight className="livro__icon"/>.</p>

                <div className="livro__chapter-title">
                    <p className="livro__text livro__span-bold">3. Mês de Maio</p>
                </div>
                <p className="livro__text">O mês de Maria era celebrado, pomposamente, todos os anos.</p>
                <p className="livro__text">Tocava-se os sino da Fazenda, à tarde, depois dos trabalhos. Todos acorriam
                    e, de joelhos, ante a Imagem iluminada da Virgem, cantavam hinos e rezavam o terço.</p>
                <p className="livro__text">A piedosa organizadora de tudo, lia o <TfiAngleDoubleLeft
                    className="livro__icon"/>Mês de Maio<TfiAngleDoubleRight className="livro__icon"/>, em voz alta,
                    fazendo notar a prática para o dia seguinte.</p>
                <p className="livro__text">Os visitantes, de passagem por <TfiAngleDoubleLeft className="livro__icon"/>Santa
                    Cruz<TfiAngleDoubleRight className="livro__icon"/>, reuniam-se à família e aos colonos, para a
                    recitação das preces da tarde. Todos guardam, até hoje, imorredoura lembrança de tudo.</p>

                <div className="livro__chapter-title">
                    <p className="livro__text livro__span-bold">4. Seu afeto para com os pais — Dona de casa</p>
                </div>
                <p className="livro__text"><span className="livro__span-italics">Brígida</span> não era só apóstolo, mas
                    espirituosa e alegre, consagrava aos seus pais o melhor do seu espírito vivo e do seu coração.</p>
                <p className="livro__text">Era dona de casa perfeita e atraente. Recebia, no estio, sobretudo, as
                    visitas numerosas, com ar simples e gracioso.</p>
                <p className="livro__text">Esquecida de si, parecia ocupada só da felicidade alheia, em reuniões
                    familiares, jeitosamente preparadas.</p>
                <p className="livro__text">Formar criadas diligentes, tomar conta da casa, presidir uma excursão, era,
                    de direito, partilha sua.</p>
                <p className="livro__text">Sentia-se magoada, quando alguém aludia à sua atividade ou canseira. Semear a
                    alegria na hospitaleira vivenda de seus pais, eis o ideal de <span
                        className="livro__span-italics">Brígida</span>.</p>

                <div className="livro__chapter-title">
                    <p className="livro__text livro__span-bold">5. Anjo Consolador e Enfermeira Universal</p>
                </div>
                <p className="livro__text">Jesus quis, também, visitar a Fazenda... para provar a fidelidade de sua
                    serva.</p>
                <p className="livro__text">Adoeceu um dos tios de <span
                    className="livro__span-italics">Brígida</span> e, após longos meses de tortura, teve morte cristã,
                    graças aos esforços e zelo da desvelada sobrinha.</p>
                <p className="livro__text">A ação benéfica de <span
                    className="livro__span-italics">Brígida</span> ultrapassou, de muito, os limites
                    de <TfiAngleDoubleLeft className="livro__icon"/>Santa Cruz<TfiAngleDoubleRight
                        className="livro__icon"/>, de que era a alma.</p>
                <p className="livro__text">Os pobres, da Fazenda e circunvizinhança, recorriam a ela, feita já
                    — <TfiAngleDoubleLeft className="livro__icon"/>Enfermeira-universal<TfiAngleDoubleRight
                        className="livro__icon"/>, — por sua lhaneza e habilidade.</p>
                <p className="livro__text">Acontecia algum infortúnio em casa de um vizinho? Adoecia, subitamente, o
                    filho de um colono? Um moribundo tinha necessidade de cuidados ou palavras de consolação? Recorriam
                    a <span className="livro__span-italics">Dona Brígida</span>.</p>
                <p className="livro__text">E, a despeito da hora adiantada da noite, <span
                    className="livro__span-italics">Dona Brígida</span> partia, imediatamente, acompanhada de seu pai e
                    munida de sua pequena farmácia. Voltava, somente, depois de ter medicado, consolado e exortado o
                    doente.</p>

                <div className="livro__chapter-title">
                    <p className="livro__text livro__span-bold">6. Sua vida particular</p>
                </div>
                <p className="livro__text">Esta vida de completo esquecimento de si mesma não dera à piedosa jovem nada
                    de austero ou afetado: era simples no modo de trajar, sempre de bom-gosto, como em sua reserva
                    modesta, no seu acolhimento risonho.</p>
                <p className="livro__text">Organizava, no círculo das pessoas íntimas: jogos, concertos, e piqueniques;
                    eclipsava-se, apenas para ir fiscalizar as empregadas, conforme exigia seu ofício de dona de
                    casa.</p>
                <p className="livro__text">O isolamento espiritual foi-lhe, sempre um enorme sacrifício. Sentia,
                    vivamente, a privação dos sacramentos e da presença real de Jesus na Eucaristia.</p>
                <p className="livro__text">Fazia incidir, pois, suas viagens à cidade mais próxima, com um Domingo ou
                    dia santa, para ter a dita de ouvir a Santa Missa, confessar-se e comungar.</p>
                <p className="livro__text">Reunia-se a outras <TfiAngleDoubleLeft className="livro__icon"/>Filhas de
                    Maria<TfiAngleDoubleRight className="livro__icon"/>, vindas de fazendas vizinhas e juntas entoavam
                    belos cânticos e recitavam o <TfiAngleDoubleLeft className="livro__icon"/>Ofício de Nossa
                    Senhora<TfiAngleDoubleRight className="livro__icon"/>.</p>
                <p className="livro__text">Descobrira, nesse meio fervoroso, o elemento próprio para formar um
                    centro <TfiAngleDoubleLeft className="livro__icon"/>Noelista<TfiAngleDoubleRight
                        className="livro__icon"/> e para unir melhor suas forças para o bem.</p>
                <p className="livro__text">Empregara, nesta obra, as últimas reservas de sua alma ardente.</p>
                <p className="livro__text">Uma semana antes de morrer, participou, com suas companheiras, numa procissão
                    da Assunção, depois de ter feito, cedinho, sua última Comunhão, sem sequer pressentir o seu fim
                    próximo.</p>

                <div className="livro__chapter-title">
                    <p className="livro__text livro__span-bold">7. Sua morte</p>
                </div>
                <p className="livro__text"><span className="livro__span-italics">Jesus</span>, cobiçoso dessa alma, veio
                    buscá-la, não imprevistamente, mas tão depressa, que três dias bastaram a transplantar esse lírio
                    para os jardins do <span
                        className="livro__span-italics">Paraíso</span>.</p>
                <p className="livro__text">Um sacerdote lhe administrou a Extrema-Unção.</p>
                <p className="livro__text">Não é esta a recompensa prometida aos misericordiosos?...</p>
                <p className="livro__text">A notícia de sua morte foi recebida com pesar geral.</p>
                <p className="livro__text">Todos os que ela havia socorrido, amado ou alegrado lhe deram a paga de seus
                    fervorosos sufrágios e preces.</p>
                <p className="livro__text">Seu leito mortuário, cercado de flores, espalhava a calma e a paz.</p>
                <p className="livro__text"><span className="livro__span-italics">Brígida</span>, depois de morta,
                    continua caridosa.</p>
                <p className="livro__text">Seus pais foram os primeiros beneficiados, pois, na aspereza de sua mágoa,
                    tinham a força de repetir heroicamente: <TfiAngleDoubleLeft className="livro__icon"/>Sagrado Coração
                    de Jesus, nós vos confiamos nossa filha<TfiAngleDoubleRight className="livro__icon"/>.</p>
                <p className="livro__text">O longo cortejo, que acompanhou seu corpo inerte à sepultura, desenrolou-se
                    silencioso, como o teria desejado <span className="livro__span-italics">Brígida</span>.</p>

                <div className="livro__chapter-title">
                    <p className="livro__text livro__span-bold">Caro leitor</p>
                </div>
                <p className="livro__text">Esta biografia não confirma bem o título de — Anjo e Apóstolo — atribuído
                    à <span className="livro__span-italics">Brígida</span>?</p>
            </div>

            <div className="livro__row text">
                <div className="livro__chapter-title">
                    <p className="livro__text livro__span-bold">EPÍLOGO</p>
                    <p className="livro__text">(Do tradutor)</p>
                    <p className="livro__text livro__span-bold">I</p>
                </div>
                <p className="livro__text">Esta singela biografia nos mostra como <span className="livro__span-italics">Brígida</span> amou a Jesus e soube com Ele viver, escondida no Coração de Deus — a própria Caridade — <TfiAngleDoubleLeft className="livro__icon"/>Deus caritas est<TfiAngleDoubleRight className="livro__icon"/>.</p>
                <p className="livro__text">Está agora, esperamos, na bem-aventurança, desdobrando a auriflama de suas virtudes, intercedendo por nós, os que lutamos neste vale de lágrimas, e convidando-nos a irmos participar, também, de sua ventura imensa entre os eleitos do Senhor.</p>

                <div className="livro__chapter-title">
                    <p className="livro__text livro__span-bold">II</p>
                </div>
                <p className="livro__text">Quem passa, hoje, por <TfiAngleDoubleLeft className="livro__icon"/>Santa Cruz<TfiAngleDoubleRight className="livro__icon"/>, tem a impressão de que as árvores da Fazenda se transformaram em ciprestes...</p>
                <p className="livro__text">Povoam-na fundos silêncios... Pairam tristezas e saudades, em derredor, sobretudo, depois que os pais de <span className="livro__span-italics">Brígida</span> se transferiram para Além Paraíba.</p>
                <p className="livro__text">A plangência do sabiá, nos laranjais daquele ermo, melancoliza os dias...</p>
                <p className="livro__text">E cria as noites de gemidos, o piar dos mochos...</p>
                <p className="livro__text">A aragem mansa segreda mil soluços no beiral do telhado, entoando nênias saudosas, para não despertar o sono de <span className="livro__span-italics">Brígida</span>... Mas <span className="livro__span-italics">Brígida</span> não mais repousa em seu delicado leito, e sim, no Cemitério de Angustura, em simples, porém artístico mausoléu, tributo de piedade e gratidão de seus pais.</p>
                <br></br>
                <p className="livro__signature">Caraça, 2-11-33</p>
            </div>
            <div className="livro__row">
                <p className="livro__subsubtitle">Tipografia "Vozes de Petrópolis",</p>
                <p className="livro__subsubtitle">Petrópolis</p>
            </div>
            <div className="livro__row text livro_first-rows">
                <div className="separator-space"></div>
                <TextImageSource {...imgHr1} />
            </div>
        </div>
    );
}

export default Livro;