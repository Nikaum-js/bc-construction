import { Sling as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Alvenaria from './assets/alvenaria.svg'
import ContrucaoEReformas from './assets/construcao-e-reformas.svg'
import Economic from './assets/economic.svg'
import Efficiency from './assets/efficiency.svg'
import Eletrica from './assets/eletrica.svg'
import GestaoDeObras from './assets/gestao-de-obras.png'
import ICF from './assets/ICF.svg'
import InstaIcon from './assets/instagram.svg'
import LinkedinIcon from './assets/linkedin.svg'
import LogoWhite from './assets/logo-white.svg'
import Logo from './assets/logo.svg'
import Project1 from './assets/project-1.png'
import Project2 from './assets/project-2.jpg'
import Project3 from './assets/project-3.jpg'
import Quality from './assets/quality.png'
import Speed from './assets/speed.svg'
import StellFrame from './assets/stellFrame.svg'
import Whatsapp from './assets/whatsapp.png'
import WhatsappIcon from './assets/whatsapp.svg'
import Styles from './global/styles'
import { GlobalStyle } from './global/styles/global'
import theme from './global/styles/theme'

export function App() {
  const [showMenu, setShowMenu] = useState(false)
  const hideBackground = window.innerWidth < 1260

  return (
    <ThemeProvider theme={theme}>
      <Styles.Container>
        <button id="whatsapp">
          <a
            href="https://wa.me/5511919368011"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Whatsapp} alt="botão para redirecionar para o whatsapp" />
          </a>
        </button>
        <Styles.Header showMenu={showMenu}>
          <div className="logo">
            <img src={Logo} alt="Logo da BC construction" />
          </div>

          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#differentials">Sobre Nós</a>
              </li>
              <li>
                <a href="#about-us">Nossos Serviços</a>
              </li>
              <li>
                <a href="#portfolio">Portfólio</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </nav>

          <Hamburger
            rounded
            color="#fff"
            toggled={showMenu}
            toggle={setShowMenu}
            duration={0.8}
          />

          {showMenu && (
            <nav className="responsive-navbar">
              <ul>
                <li>
                  <a href="#home" onClick={() => setShowMenu(false)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about-us" onClick={() => setShowMenu(false)}>
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#our-services" onClick={() => setShowMenu(false)}>
                    Nossos Serviços
                  </a>
                </li>
                <li>
                  <a href="#portfolio" onClick={() => setShowMenu(false)}>
                    Portfólio
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setShowMenu(false)}>
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </Styles.Header>
        <Styles.Hero id="home">
          {hideBackground ? (
            <div className="background">
              <div className="HeroImg">
                <h1>Construção & Reforma</h1>

                <p>
                  Bem-vindos à BC Construction. Sua escolha para construções e
                  reformas. Entregamos soluções de qualidade, de forma eficiente
                  e pontualmente.
                </p>
                <a
                  href="https://forms.gle/QC1DPm73Xc9cFo5QA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>iniciar Orçamento</button>
                </a>
              </div>
            </div>
          ) : (
            <>
              <div className="title-and-subtitle">
                <div className="HeroImg">
                  <h1>Construção & Reforma</h1>

                  <p>
                    Bem-vindos à BC Construction. Sua escolha para construções e
                    reformas. Entregamos soluções de qualidade, de forma
                    eficiente e pontualmente.
                  </p>
                  <a
                    href="https://forms.gle/QC1DPm73Xc9cFo5QA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>iniciar Orçamento</button>
                  </a>
                </div>
              </div>
              <div className="image-background"></div>
            </>
          )}
        </Styles.Hero>
        <Styles.AboutUs id="about-us">
          <h1>Sobre nós</h1>

          <p>
            Somos uma empresa de engenharia, especializada em execução de
            construções e reformas. Trabalhamos nos segmentos residencial e
            comercial, executando projetos arquitetônicos e elaborando projetos
            com qualidade, segurança e pontualidade atendendo as necessidades
            dos nossos clientes.
          </p>

          <div className="container-cards">
            <div className="card-about-us">
              <img src={Efficiency} alt="" />

              <p>Eficiência</p>
            </div>
            <div className="card-about-us">
              <img src={Speed} alt="" />

              <p>Rapidez</p>
            </div>
            <div className="card-about-us">
              <img src={Economic} alt="" />

              <p>Economia</p>
            </div>
            <div className="card-about-us">
              <img src={Quality} alt="" />

              <p>Qualidade</p>
            </div>
          </div>
        </Styles.AboutUs>
        <Styles.Portfolio id="portfolio">
          <h2>Portfólio</h2>

          <div className="container-card-portfolio">
            <div className="card-portfolio">
              <img src={Project1} alt="" />

              <h3>MC Donalds’- Reforma Refeitoório</h3>

              <p>
                Reforma elaborada na cozinha do refeitorio da Universidade do Mc
                Donalds
              </p>
            </div>

            <div className="card-portfolio">
              <img src={Project2} alt="" />

              <h3>MC Donalds’ - Reforma Horta Comunitária</h3>

              <p>
                Reforma da horta comunitária localizada dentro do Mc
                Donalds’University em Alphaville
              </p>
            </div>

            <div className="card-portfolio">
              <img src={Project3} alt="" />

              <h3>FAAMA - Monumento de praças</h3>

              <p>
                Contrução do monumento de praças projetado na Faculdade
                Adventista da Amazônia
              </p>
            </div>
          </div>
        </Styles.Portfolio>
        <Styles.Budget>
          <h2>Cuidamos de Tudo para voce</h2>

          <p>
            Nos comprometmos em executar de forma eficiente o seu projeto, com
            qualidade e pontualidade
          </p>

          <div className="banner-budget">
            <a
              href="https://forms.gle/QC1DPm73Xc9cFo5QA"
              target="_blank"
              rel="noreferrer"
            >
              <button>iniciar Orçamento</button>
            </a>
          </div>
        </Styles.Budget>
        <Styles.OurServices id="our-services">
          <h2>Nossos Serviços</h2>

          <div className="container-cards">
            <div className="card-our-service">
              <div className="header-card-our-service">
                <img src={Alvenaria} alt="" />

                <h3>Alvenaria</h3>
              </div>

              <p>Serviço sólido de alvenaria para construções duráveis</p>
            </div>

            <div className="card-our-service">
              <div className="header-card-our-service">
                <img src={GestaoDeObras} alt="" />

                <h3>Gestão de Obras</h3>
              </div>

              <p>Gestão de obras eficiente e qualificada</p>
            </div>

            <div className="card-our-service">
              <div className="header-card-our-service">
                <img src={ICF} alt="" />

                <h3>ICF</h3>
              </div>

              <p>Construção ideal para isolamento térmico</p>
            </div>

            <div className="card-our-service">
              <div className="header-card-our-service">
                <img src={ContrucaoEReformas} alt="" />

                <h3>Construção e Reformas</h3>
              </div>

              <p>Serviço completos de construção e reformas</p>
            </div>

            <div className="card-our-service">
              <div className="header-card-our-service">
                <img src={Eletrica} alt="" />

                <h3>Elétrica</h3>
              </div>

              <p>Instalação e manutenção elétrica profissional</p>
            </div>

            <div className="card-our-service">
              <div className="header-card-our-service">
                <img src={StellFrame} alt="" />

                <h3>Steel Frame & Drywall</h3>
              </div>

              <p>Soluções inovadoras em steel frame e drywall</p>
            </div>
          </div>
        </Styles.OurServices>
        <Styles.GoTalk>
          <div className="banner-talk">
            <div>
              <h2>Vamos conversar</h2>
              <a
                href="https://forms.gle/QC1DPm73Xc9cFo5QA"
                target="_blank"
                rel="noreferrer"
              >
                <button>iniciar Orçamento</button>
              </a>
            </div>
          </div>
        </Styles.GoTalk>
        <Styles.Footer id="contact">
          <div className="content-footer">
            <div className="logo">
              <img src={LogoWhite} alt="Logo da BC construction" />
            </div>

            <div className="contact-info">
              <h3>Contato</h3>

              <div className="contact-info-item">
                <p>
                  Alameda Rio Negro, n° 1030 – Escritório 2304 Alphaville,
                  Barueri - CEP 06454-000
                </p>
              </div>

              <div className="contact-info-item">
                <p>(11) 91936-8011</p>
              </div>

              <div className="contact-info-item">
                <p>bcconstruction.lda@gmail.com</p>
              </div>
            </div>

            <div className="contact-newsletter-and-social">
              <h3>Fique por dentro:</h3>

              <a>
                <img
                  src={InstaIcon}
                  alt="Botão para levar para o instagram da bc construction"
                />
              </a>

              <a>
                <img
                  src={LinkedinIcon}
                  alt="Botão para levar para o linkedin da bc construction"
                />
              </a>

              <a>
                <img
                  src={WhatsappIcon}
                  alt="Botão para levar para o whatsapp da bc construction"
                />
              </a>
            </div>
          </div>
          <div className="footer">
            <p>BC Construction © 2023. Todos direitos reservados</p>
          </div>
        </Styles.Footer>
      </Styles.Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}
