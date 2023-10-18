import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Sling as Hamburger } from 'hamburger-react'
import { GlobalStyle } from './global/styles/global'
import theme from './global/styles/theme'

import Logo from './assets/logo.svg'
import VerifyIcon from './assets/verify.svg'
import SecurityIcon from './assets/security.svg'
import EfficiencyIcon from './assets/efficiency.svg'
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
          <h2>Nossos diferencial</h2>

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
        <Styles.OurServices></Styles.OurServices>
      </Styles.Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}
