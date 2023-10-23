import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Sling as Hamburger } from 'hamburger-react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { GlobalStyle } from './global/styles/global'
import theme from './global/styles/theme'

import Logo from './assets/logo.svg'
import VerifyIcon from './assets/verify.svg'
import SecurityIcon from './assets/security.svg'
import EfficiencyIcon from './assets/efficiency.svg'
import MasonryIcon from './assets/masonry.svg'
import DrywallIcon from './assets/drywall.svg'
import ReformIcon from './assets/reform.svg'
import ConstructionsIcon from './assets/constructions.svg'
import ProjectIcon from './assets/project.svg'
import ElectricIcon from './assets/electric.svg'
import HandIcon from './assets/hand.png'
import NotesIcon from './assets/notes.png'
import TrophyIcon from './assets/trophy.png'
import PlansIcon from './assets/plans.png'
import InstaIcon from './assets/instagram.svg'
import LinkedinIcon from './assets/linkedin.svg'
import WhatsappIcon from './assets/whatsapp.svg'
import Project1 from './assets/project-image-1.png'
import Project2 from './assets/project-image-2.png'
import Project3 from './assets/project-image-3.png'
import Project4 from './assets/project-image-4.png'

import Styles from './global/styles'

export function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [carroseltype, setCarroseltype] = useState('Todos')

  // function handlePaginationChange(event, value) {}

  return (
    <ThemeProvider theme={theme}>
      <Styles.Container>
        <Styles.Header showMenu={showMenu}>
          <div className="logo">
            <img src={Logo} alt="Logo da BC construction" />

            <h2>BC Construction</h2>
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
          <div className="HeroImg">
            <h1>Seu sonho, nossa missão</h1>

            <div />
          </div>
        </Styles.Hero>
        <Styles.Differentials id="differentials">
          <h2>Nossos diferenciais</h2>

          <div className="content-card">
            <div className="card">
              <img src={VerifyIcon} alt="" />

              <strong>Qualidade</strong>

              <p>Lorem ipsum</p>
            </div>

            <div className="card">
              <img src={SecurityIcon} alt="" />

              <strong>Segurança</strong>

              <p>Lorem ipsum</p>
            </div>

            <div className="card">
              <img src={EfficiencyIcon} alt="" />

              <strong>Eficiência</strong>

              <p>Lorem ipsum</p>
            </div>
          </div>
        </Styles.Differentials>
        <Styles.AboutUs id="about-us">
          <div className="content-card">
            <div className="white-card">
              <div className="banner-logo"></div>
            </div>
            <div className="brown-card">
              <div className="about-us-content">
                <h2>Sobre Nós</h2>

                <p>
                  Prezamos por essa proximidade, o cliente acaba se tornando um
                  amigo, pois a relação de confiança precisa existir para
                  tornarmos juntos seu sonho uma realidade seja ele para sua
                  casa, escritório ou negócio!!!
                </p>
              </div>

              <button>Saiba mais</button>
            </div>
          </div>
        </Styles.AboutUs>
        <Styles.OurServices id="our-services">
          <h2>Nossos Serviços</h2>

          <div className="content-card card-white">
            <div className="card">
              <img src={MasonryIcon} alt="" />
              <div className="line"></div>

              <strong>Alvenaria</strong>
            </div>

            <div className="card card-brown">
              <img src={DrywallIcon} alt="" />
              <div className="line"></div>

              <strong>Steel frame & Drywall</strong>
            </div>

            <div className="card card-white">
              <img src={ReformIcon} alt="" />
              <div className="line"></div>

              <strong>Construções & Reforma</strong>
            </div>

            <div className="card card-brown">
              <img src={ConstructionsIcon} alt="" />
              <div className="line"></div>

              <strong>Gestão de obras</strong>
            </div>

            <div className="card card-white">
              <img src={ProjectIcon} alt="" />
              <div className="line"></div>

              <strong>Projetos</strong>
            </div>

            <div className="card card-brown">
              <img src={ElectricIcon} alt="" />
              <div className="line"></div>

              <strong>Instalações eletricas</strong>
            </div>
          </div>
        </Styles.OurServices>
        <Styles.OurClients>
          <div className="content-our-clients">
            <div className="content-stats">
              <div className="card-stats hand">
                <strong>##</strong>
                <img src={HandIcon} alt="" />
                <div className="footer-card-stats">
                  <div className="line-orange" />
                  <p>Clientes</p>
                </div>
              </div>

              <div className="card-stats notes">
                <strong>##</strong>
                <img src={NotesIcon} alt="" />
                <div className="footer-card-stats">
                  <div className="line-orange" />
                  <p>Projetos</p>
                </div>
              </div>

              <div className="card-stats trophy">
                <strong>##</strong>
                <img src={TrophyIcon} alt="" />
                <div className="footer-card-stats">
                  <div className="line-orange" />
                  <p>Metros quadrados</p>
                </div>
              </div>

              <div className="card-stats plans">
                <strong>##</strong>
                <img src={PlansIcon} alt="" />
                <div className="footer-card-stats">
                  <div className="line-orange" />
                  <p>Cidades</p>
                </div>
              </div>
            </div>

            <div className="know-more">
              <h2>Nossos Clientes</h2>

              <p>
                Lorem ipsum dolor sit amet. A voluptate facere qui voluptatem
                aperiam in quia itaque est assumenda enim ut pariatur ratione.
              </p>

              <button>Saiba mais</button>
            </div>
          </div>
        </Styles.OurClients>
        <Styles.Contact id="contact">
          <div className="content-contact">
            <div className="info-contact">
              <h2>Consultoria de projetos com qualidade</h2>

              <a
                href="https://wa.me/5511919368011"
                target="_blank"
                rel="noreferrer"
              >
                Contato: +11 91936-8011
              </a>
            </div>

            <button>Entre em contato</button>
          </div>
        </Styles.Contact>
        <Styles.Portfolio id="portfolio">
          <div className="content-portfolio">
            <div className="nav-links">
              <h2>Portfólio</h2>

              <ul>
                <li
                  className={carroseltype === 'Todos' ? 'active' : ''}
                  onClick={() => setCarroseltype('Todos')}
                >
                  Todos
                </li>
                <li
                  className={carroseltype === 'Comercial' ? 'active' : ''}
                  onClick={() => setCarroseltype('Comercial')}
                >
                  Comercial
                </li>
                <li
                  className={carroseltype === 'Residencial' ? 'active' : ''}
                  onClick={() => setCarroseltype('Residencial')}
                >
                  Residencial
                </li>
                <li
                  className={carroseltype === 'Outros' ? 'active' : ''}
                  onClick={() => setCarroseltype('Outros')}
                >
                  Outros
                </li>
              </ul>
            </div>
            <div className="container-projects">
              <div className="content-projects">
                <div className="project-item">
                  <img src={Project1} alt="" />

                  <div className="project-item-footer">
                    <strong>Nome da obra</strong>
                    <p>Endereço</p>
                  </div>
                </div>

                <div className="project-item">
                  <img src={Project2} alt="" />

                  <div className="project-item-footer">
                    <strong>Nome da obra</strong>
                    <p>Endereço</p>
                  </div>
                </div>

                <div className="project-item">
                  <img src={Project3} alt="" />

                  <div className="project-item-footer">
                    <strong>Nome da obra</strong>
                    <p>Endereço</p>
                  </div>
                </div>

                <div className="project-item">
                  <img src={Project4} alt="" />

                  <div className="project-item-footer">
                    <strong>Nome da obra</strong>
                    <p>Endereço</p>
                  </div>
                </div>
              </div>
              <Stack marginY={4}>
                <Pagination count={4} size="large" color="standard" />
              </Stack>
            </div>
          </div>
        </Styles.Portfolio>
        <Styles.ContactForm>
          <div className="content-contact-form">
            <h2>Entre em contato, orçe ja!</h2>

            <p>Entre em contato conosco, nossos time especializado</p>

            <form action="">
              <div className="column-input">
                <input type="text" placeholder="Nome *" />

                <input type="text" placeholder="Email *" />

                <input type="text" placeholder="Motivo para contato *" />

                <input type="text" placeholder="Telefone" />
              </div>

              <textarea placeholder="Mensagem *" />

              <button type="submit">Enviar</button>
            </form>
          </div>
        </Styles.ContactForm>
        <Styles.Footer>
          <div className="content-footer">
            <div className="contact-info">
              <div className="contact-info-item">
                <strong>Endereço:</strong>
                <p>
                  Alameda Rio Negro, n° 1030 – Escritório 2304 Alphaville,
                  Barueri - CEP 06454-000
                </p>
              </div>

              <div className="contact-info-item">
                <strong>telefone:</strong>
                <p>(11) 91936-8011</p>
              </div>

              <div className="contact-info-item">
                <strong>Email:</strong>
                <p>bcconstruction.lda@gmail.com</p>
              </div>

              <div className="logo">
                <img src={Logo} alt="Logo da BC construction" />

                <h2>BC Construction</h2>
              </div>
            </div>

            <div className="contact-newsletter-and-social">
              <strong>Newsletter:</strong>
              <div className="input-container">
                <input type="email" placeholder="Email" />

                <button>Subscrição</button>
              </div>

              <h3>Social:</h3>

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
            <p>BC Construction © 2023. All Rights Reserved</p>
          </div>
        </Styles.Footer>
      </Styles.Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}
