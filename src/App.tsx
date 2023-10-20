import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Sling as Hamburger } from 'hamburger-react'
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

import Styles from './global/styles'

export function App() {
  const [showMenu, setShowMenu] = useState(false)

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
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Sobre Nós</a>
              </li>
              <li>
                <a href="">Nossos Serviços</a>
              </li>
              <li>
                <a href="">Portfólio</a>
              </li>
              <li>
                <a href="">Contato</a>
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
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Sobre Nós</a>
                </li>
                <li>
                  <a href="">Nossos Serviços</a>
                </li>
                <li>
                  <a href="">Portfólio</a>
                </li>
                <li>
                  <a href="">Contato</a>
                </li>
              </ul>
            </nav>
          )}
        </Styles.Header>
        <Styles.Hero>
          <div className="HeroImg">
            <h1>Seu sonho, nossa missão</h1>

            <div />
          </div>
        </Styles.Hero>
        <Styles.Differentials>
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
        <Styles.AboutUs>
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
        <Styles.OurServices>
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
        <Styles.Contact></Styles.Contact>
      </Styles.Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}
