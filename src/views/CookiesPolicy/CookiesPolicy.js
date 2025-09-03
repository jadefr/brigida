import React from 'react';
import './CookiesPolicy.css';

function CookiesPolicy() {
    return (
        <div className="cookies-policy">
            <div className="cookies-policy-container">
                <h1 className="cookies-policy-title">Política de Cookies</h1>
                
                <div className="cookies-policy-content">
                    <section className="cookies-policy-section">
                        <h2>O que são cookies?</h2>
                        <p>
                            Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo 
                            quando você visita um site. Eles são amplamente utilizados para fazer os sites 
                            funcionarem de forma mais eficiente, bem como fornecer informações aos 
                            proprietários do site.
                        </p>
                    </section>

                    <section className="cookies-policy-section">
                        <h2>Como utilizamos cookies</h2>
                        <p>
                            Este site utiliza cookies para:
                        </p>
                        <ul>
                            <li>Lembrar suas preferências de navegação</li>
                            <li>Analisar como você utiliza o site para melhorar nossos serviços</li>
                            <li>Fornecer funcionalidades personalizadas</li>
                            <li>Garantir a segurança e funcionamento adequado do site</li>
                        </ul>
                    </section>

                    <section className="cookies-policy-section">
                        <h2>Tipos de cookies que utilizamos</h2>
                        
                        <h3>Cookies essenciais</h3>
                        <p>
                            Estes cookies são necessários para o funcionamento básico do site e não podem 
                            ser desativados. Eles geralmente são definidos apenas em resposta a ações 
                            realizadas por você, como definir preferências de privacidade, fazer login ou 
                            preencher formulários.
                        </p>

                        <h3>Cookies de análise</h3>
                        <p>
                            Estes cookies nos permitem contar visitas e fontes de tráfego para que 
                            possamos medir e melhorar o desempenho do nosso site. Eles nos ajudam a 
                            saber quais páginas são as mais e menos populares e ver como os visitantes 
                            navegam pelo site.
                        </p>

                        <h3>Cookies de funcionalidade</h3>
                        <p>
                            Estes cookies permitem que o site forneça funcionalidades e personalização 
                            aprimoradas. Eles podem ser definidos por nós ou por provedores terceiros 
                            cujos serviços adicionamos às nossas páginas.
                        </p>
                    </section>

                    <section className="cookies-policy-section">
                        <h2>Como gerenciar cookies</h2>
                        <p>
                            Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir 
                            todos os cookies que já estão no seu computador e pode configurar a maioria 
                            dos navegadores para impedir que sejam colocados.
                        </p>
                        <p>
                            Para saber mais sobre como gerenciar cookies, visite 
                            <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">
                                allaboutcookies.org
                            </a>.
                        </p>
                    </section>

                    <section className="cookies-policy-section">
                        <h2>Alterações nesta política</h2>
                        <p>
                            Podemos atualizar nossa Política de Cookies periodicamente. Recomendamos que 
                            você revise esta página regularmente para se manter informado sobre como 
                            utilizamos cookies.
                        </p>
                    </section>

                    <section className="cookies-policy-section">
                        <h2>Contato</h2>
                        <p>
                            Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato 
                            conosco através dos canais disponíveis em nosso site.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default CookiesPolicy;
