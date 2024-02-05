import styled, { css } from 'styled-components'

import TalkImg from '../../assets/background-talk.png'
import FooterBanner from '../../assets/banner-footer.png'
import BudgetImg from '../../assets/bannerBudget.png'
import HeroImg from '../../assets/hero.png'
import OurServicesBanner from '../../assets/our-services-banner.png'

interface HamburgerMenuHeaderProps {
  showMenu: boolean
}

const Container = styled.main`
  display: flex;
  align-items: center;
  position: relative;

  flex-direction: column;

  #whatsapp {
    position: fixed;

    bottom: 1.5rem;
    right: 1.5rem;
  }

  @media (max-width: 480px) {
    #whatsapp {
      bottom: 0.8rem;
      right: 0.8rem;

      img {
        width: 79.5px;
        height: 75px;
      }
    }
  }
`

const Header = styled.header<HamburgerMenuHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 5rem;
  padding: 0 2rem;

  margin: 0 48px;

  background-color: #363435;

  .logo {
    display: flex;
  }

  .hamburger-react {
    z-index: 15;
    color: ${({ theme }) => theme.colors.gray_900};

    display: none;

    ${({ showMenu }) =>
      showMenu &&
      css`
        position: fixed;
        right: 28px;
      `}
  }

  .responsive-navbar {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background-color: ${({ theme }) => theme.colors.white};

    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      transition-duration: 0.5s;

      li {
        padding: 1rem 0;

        a {
          font-size: 1.615rem;
          font-weight: medium;
          color: ${({ theme }) => theme.colors.gray_900};
        }
      }
    }
  }

  @media (max-width: 980px) {
    nav {
      display: none;
    }

    .hamburger-react {
      display: block;
    }
  }

  nav {
    ul {
      display: flex;

      list-style-type: none;

      li {
        padding: 0 32px;
        font-size: 1.125rem;

        a {
          color: ${({ theme }) => theme.colors.gray_900};
          color: #fff;

          transition:
            color 0.3s,
            text-shadow 0.3s;

          &:hover {
            color: ${({ theme }) => theme.colors.primary};
            text-shadow: 1px 0 0 ${({ theme }) => theme.colors.primary};
          }
        }
      }
    }
  }

  @media (max-width: 1080px) {
    padding: 0 1rem;

    nav {
      ul {
        li {
          padding: 0 16px;
        }
      }
    }
  }
`

const Hero = styled.section`
  width: 100%;
  display: flex;
  height: calc(100vh - 5rem);

  .background {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    background-image: url(${HeroImg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    .HeroImg {
      display: flex;
      flex-direction: column;
      width: 50%;

      h1 {
        color: ${({ theme }) => theme.colors.gray_800};
        font-size: 4.2rem;
        font-weight: 500;
      }

      p {
        margin: 48px 0;
        color: #7591a3;
        text-align: justify;
        font-size: 20px;
        line-height: 28px;
      }

      a {
        color: #fff;

        button {
          width: 246px;
          height: 74.117px;
          border-radius: 5px;
          background: #573a32;

          color: #fff;
          text-align: center;
          font-size: 20px;
          font-weight: 500;
        }
      }
    }
  }

  .image-background {
    width: 60%;
    height: 100%;
    background-image: url(${HeroImg});
    background-size: cover;
    background-repeat: no-repeat;
  }

  .title-and-subtitle {
    width: 40%;
    height: 100%;
    background: linear-gradient(186deg, #e7e7e9 12.97%, #e0dfe4 92.09%);
    display: flex;
    align-items: center;
    justify-content: center;

    .HeroImg {
      display: flex;
      flex-direction: column;
      width: 50%;

      h1 {
        color: ${({ theme }) => theme.colors.gray_800};
        font-size: 4.5rem;
        font-weight: 500;
      }

      p {
        margin: 48px 0;
        color: #7591a3;
        text-align: justify;
        font-size: 20px;
        line-height: 28px;
      }

      button {
        width: 246px;
        height: 74.117px;
        border-radius: 5px;
        background: #573a32;
        color: #fff;

        text-align: center;
        font-size: 20px;
        font-weight: 500;

        a {
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 640px) {
    .background {
      .HeroImg {
        width: 80%;
      }
    }
  }
`

const AboutUs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #e3ded9;

  h1 {
    margin: 5.375rem 0 1.875rem 0;

    color: #263640;
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    line-height: 64px;
  }

  p {
    width: 50%;

    color: #593c25;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 28px;
  }

  .container-cards {
    display: flex;
    gap: 15px;

    margin: 71px 0 120px 0;

    .card-about-us {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 280px;
      height: 110px;

      border-radius: 5px;
      border: 1px solid #b09a87;
      box-shadow: -40px 40px 70px 0px rgba(25, 25, 25, 0.04);

      p {
        color: #573a32;
        font-size: 1.125rem;
        font-weight: 700;
        letter-spacing: 4.5px;
      }
    }
  }

  @media (max-width: 1260px) {
    p {
      width: 60%;
    }

    .container-cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 720px) {
    p {
      width: 80%;
    }

    .container-cards {
      display: grid;
      grid-template-columns: 1fr;

      .card-about-us {
        width: 290px;
        height: 110px;
      }
    }
  }
`

const Portfolio = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 5.375rem 0 1.875rem 0;

  h2 {
    color: #263640;
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    line-height: 64px;
    margin-bottom: 60px;
  }

  .container-card-portfolio {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 112px;

    .card-portfolio {
      width: 312px;
      margin: 10px 0;

      img {
        width: 100%;
        height: 299px;
      }

      h3 {
        margin: 18px 0;

        color: #263640;
        font-size: 1.5rem;
        font-weight: 600;
      }

      p {
        color: #593c25;
        font-size: 1rem;
        font-weight: 400;
        line-height: 28px;
      }
    }
  }

  @media (max-width: 1260px) {
    .container-card-portfolio {
      gap: 10px;
    }
  }

  @media (max-width: 1260px) {
    .container-card-portfolio {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 720px) {
    .container-card-portfolio {
      grid-template-columns: 1fr;
    }
  }
`

const Budget = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5.375rem 0 1.875rem 0;

  width: 100%;

  h2 {
    color: #263640;
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    line-height: 64px;

    margin-bottom: 22px;
  }

  p {
    color: #263640;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 26px;

    margin-bottom: 52px;
  }

  .banner-budget {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 90%;
    height: 400px;
    background-image: url(${BudgetImg});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }

  button {
    width: 246px;
    height: 74.117px;
    border-radius: 5px;
    background: #573a32;

    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
  }

  @media (max-width: 740px) {
    .banner-budget {
      width: 90%;
      height: 200px;
    }

    button {
      width: 198px;
      height: 59px;
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    .banner-budget {
      width: 90%;
      height: 150px;
    }

    button {
      width: 198px;
      height: 59px;
      font-size: 1rem;
    }
  }
`

const OurServices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  background-image: url(${OurServicesBanner});
  background-size: cover;
  background-repeat: no-repeat;

  h2 {
    margin: 3.1875rem 0 6.4375rem 0;

    color: #ffffff;
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    line-height: 64px;
  }

  .container-cards {
    display: grid;
    gap: 6rem;
    grid-template-columns: 1fr 1fr 1fr;

    margin-bottom: 8.75rem;

    .card-our-service {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      padding: 39px 32px 32px 26px;

      background: rgba(81, 37, 13, 0.75);
      border-radius: 8px;

      .header-card-our-service {
        display: flex;
        align-items: center;
        flex-direction: column;

        img {
          width: 41px;
          height: 41px;

          margin-bottom: 15px;
        }
      }

      h3 {
        color: #f3faff;
        font-size: 1.25rem;
        font-weight: 600;

        width: 150px;
        text-align: center;

        margin-bottom: 8px;
      }

      p {
        width: 150px;
        color: #f3faff;
        font-weight: 300;
        text-align: center;

        font-size: 0.75rem;
      }
    }
  }

  @media (max-width: 1220px) {
    .container-cards {
      width: 90%;
    }
  }

  @media (max-width: 860px) {
    .container-cards {
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
  }

  @media (max-width: 460px) {
    .container-cards {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .card-our-service {
        width: 80%;
      }
    }
  }
`

const GoTalk = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 5.375rem 0 1.875rem 0;

  width: 100%;

  .banner-talk {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 90%;
    height: 400px;
    background-image: url(${TalkImg});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;

    div {
      margin-right: 30%;

      h2 {
        color: #000;
        font-size: 3rem;
        font-weight: 600;

        margin-bottom: 1rem;
      }

      button {
        width: 246px;
        height: 74.117px;
        border-radius: 5px;
        background: #573a32;

        text-align: center;
        color: #fff;

        font-size: 20px;
        font-weight: 500;
      }
    }
  }

  @media (max-width: 740px) {
    .banner-talk {
      width: 90%;
      height: 200px;

      div {
        h2 {
          font-size: 2.2rem;

          margin-bottom: 0.5rem;
        }

        button {
          width: 198px;
          height: 59px;
          font-size: 1rem;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .banner-talk {
      width: 90%;
      height: 150px;

      margin: 0;

      div {
        h2 {
          font-size: 1.6rem;
          margin-bottom: 0.2rem;
        }

        button {
          width: 160.38px;
          height: 47.79px;
          font-size: 1rem;
        }
      }
    }
  }

  @media (max-width: 420px) {
    .banner-talk {
      height: 100px;

      div {
        h2 {
          font-size: 1.2rem;
          margin-bottom: 0.2rem;
        }

        button {
          width: 128.3px;
          height: 38.232px;
          font-size: 0.75rem;
        }
      }
    }
  }

  @media (max-width: 360px) {
    .banner-talk {
      div {
        h2 {
          font-size: 1rem;
        }

        button {
          width: 115.47px;
          height: 34.41px;
        }
      }
    }
  }
`

const Footer = styled.footer`
  width: 100%;
  height: 100%;

  background-image: url(${FooterBanner});
  background-size: cover;
  background-repeat: no-repeat;

  .content-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100%;
    margin: 4rem 8rem;

    .contact-newsletter-and-social {
      a {
        & + a {
          margin-left: 1.25rem;
        }
      }

      h3 {
        color: #fff;
        font-size: 1.25rem;
        font-weight: 500;
        font-variant: all-small-caps;

        margin-bottom: 20px;
      }
    }

    .contact-info {
      width: 50%;

      h3 {
        color: #e0e3eb;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 500;
        font-variant: all-small-caps;

        margin-bottom: 12px;
      }

      .contact-info-item {
        display: flex;

        margin-bottom: 12px;

        p {
          color: #f6f8f7;
          font-size: 1rem;
          line-height: 1.6;
          font-weight: 400;
          text-transform: capitalize;
        }
      }
    }
  }

  .footer {
    display: flex;
    align-items: center;

    width: 100%;
    height: 70px;

    padding-left: 5%;

    background: #363435;

    p {
      color: ${({ theme }) => theme.colors.white};
      font-size: 1rem;
    }
  }

  @media (max-width: 1120px) {
    .content-footer {
      flex-direction: column;

      .contact-info {
        margin: 2rem 0;
      }
    }
  }

  @media (max-width: 1140px) {
    .content-footer {
      margin: 4rem 2rem;

      .contact-newsletter-and-social {
        .input-container {
          input {
            width: 200px;
          }
        }
      }
    }
  }

  @media (max-width: 640px) {
    .content-footer {
      margin: 4rem 2rem;

      .contact-info {
        width: 100%;
      }
    }
  }

  @media (max-width: 420px) {
    .content-footer {
      .contact-newsletter-and-social {
        width: 100%;
      }
    }
  }
`

export default {
  OurServices,
  GoTalk,
  Budget,
  Container,
  Portfolio,
  AboutUs,
  Header,
  Footer,
  Hero,
}
