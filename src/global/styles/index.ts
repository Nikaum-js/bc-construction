import styled, { css } from 'styled-components'
import ContactBanner from '../../assets/bannerContact.png'
import HeroImg from '../../assets/hero.jpg'
import LogoBanner from '../../assets/logoBaner.png'

interface HamburgerMenuHeaderProps {
  showMenu: boolean
}

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Header = styled.header<HamburgerMenuHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1440px;
  width: 100%;
  height: 5rem;
  padding: 0 2rem;

  .logo {
    display: flex;

    h2 {
      color: ${({ theme }) => theme.colors.gray_500};
      font-size: 1.372rem;
      font-weight: 700;
    }
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
  height: calc(100vh - 5rem);

  .HeroImg {
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 100%;
    background-image: url(${HeroImg});
    background-size: cover;
    background-repeat: no-repeat;

    h1 {
      width: 30%;
      color: ${({ theme }) => theme.colors.gray_800};
      font-size: 4.5rem;
      font-weight: 600;
    }
  }
`

const Differentials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  h2 {
    margin-top: 60px;
    font-size: 2.25rem;
  }

  .content-card {
    display: flex;
    justify-content: center;
    width: 100%;

    margin-top: 50px;

    .card {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;

      margin: 0 66px;

      width: 292px;
      padding: 20px 20px 40px 20px;
      gap: 18px;

      border-radius: 4px;
      border: 1.4px solid #e0e3eb;

      h2 {
        color: ${({ theme }) => theme.colors.gray_700};
        font-size: 1.25rem;
      }

      p {
        color: ${({ theme }) => theme.colors.gray_400};
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 960px) {
    .content-card {
      align-items: center;
      flex-direction: column;

      .card {
        margin: 24px 0;
      }
    }
  }
`

const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  margin-top: 50px;

  .content-card {
    display: flex;
    justify-content: center;
    width: 100%;

    position: relative;

    .white-card {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      width: 50%;
      height: 669px;
      background: #fefefe;

      .banner-logo {
        width: 60%;
        height: 60%;
        background-image: url(${LogoBanner});
        background-size: cover;
        background-repeat: no-repeat;
      }

      box-shadow:
        0px 8px 8px -4px rgba(17, 24, 39, 0.04),
        0px 20px 24px -4px rgba(17, 24, 39, 0.1);
    }

    .brown-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      position: absolute;
      right: 220px;

      width: 420px;
      height: 523px;

      padding: 50px 40px;

      border-radius: 2px;
      background: ${({ theme }) => theme.colors.secondary};

      .about-us-content {
        h2 {
          margin-bottom: 38px;

          color: ${({ theme }) => theme.colors.white};
          font-size: 2.25rem;
        }

        p {
          color: ${({ theme }) => theme.colors.white};
          font-size: 1.25rem;
        }
      }

      button {
        display: inline-flex;
        justify-content: center;
        align-items: center;

        padding: 16px 20px;
        border-radius: 6px;
        gap: 10px;

        border: 2px solid ${({ theme }) => theme.colors.secondary};
        background: ${({ theme }) => theme.colors.gray_100};

        color: ${({ theme }) => theme.colors.secondary};
        text-align: center;
        font-size: 1.125rem;
        font-weight: 600;
      }
    }
  }

  @media (max-width: 1080px) {
    .content-card {
      .white-card {
        display: none;
      }

      .brown-card {
        position: static;
      }
    }
  }

  @media (max-width: 460px) {
    .content-card {
      .brown-card {
        width: 320px;
        height: 523px;
      }
    }
  }
`

const OurServices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray_100};

  width: 100%;
  height: 100%;

  margin-top: 50px;

  h2 {
    color: ${({ theme }) => theme.colors.gray_800};
    margin-top: 60px;
    font-size: 2.25rem;
  }

  .content-card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    margin-top: 50px;

    .card-brown {
      background: ${({ theme }) => theme.colors.secondary};

      strong {
        color: ${({ theme }) => theme.colors.white};
        text-align: center;
        font-size: 1.25rem;
        font-weight: 600;
      }
    }

    .card-white {
      background: ${({ theme }) => theme.colors.white};

      strong {
        text-align: center;
        color: ${({ theme }) => theme.colors.secondary};
        font-size: 1.25rem;
        font-weight: 600;
      }
    }

    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      margin: 48px 62px;

      width: 271px;
      padding: 20px;
      height: 181px;
      gap: 20px;

      border-radius: 4px;
      box-shadow: 0px 0px 37px -2px rgba(17, 24, 39, 0.05);

      .line {
        width: 60px;
        height: 2px;
        background: #e0e3eb;
      }
    }
  }

  @media (max-width: 1240px) {
    .content-card {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 840px) {
    .content-card {
      grid-template-columns: repeat(1, 1fr);

      .card {
        margin: 16px 62px;
      }
    }
  }
`

const OurClients = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  margin-top: 50px;

  .content-our-clients {
    display: flex;
    width: 100%;
    justify-content: space-around;

    .content-stats {
      display: flex;
      align-items: center;
      flex-direction: column;

      width: 50%;

      .hand {
        width: 280px;
        position: absolute;
        left: 200px;
        bottom: -50px;
        z-index: 2;

        img {
          position: absolute;
          right: -48px;
          top: -30px;
        }
      }

      .notes {
        width: 361px;

        img {
          position: absolute;
          left: -48px;
          top: -30px;
        }
      }

      .trophy {
        width: 300px;
        position: absolute;
        left: 200px;
        bottom: 50px;
        z-index: 2;

        img {
          position: absolute;
          right: -48px;
          top: -30px;
        }
      }

      .plans {
        width: 361px;

        position: absolute;
        left: 10px;
        bottom: 80px;

        img {
          position: absolute;
          right: -48px;
          top: 120px;
        }
      }

      .card-stats {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        position: relative;

        padding: 30px;
        gap: 2px;

        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.white};

        box-shadow:
          0px 4px 6px -2px rgba(17, 24, 39, 0.05),
          0px 12px 16px -4px rgba(17, 24, 39, 0.1);

        strong {
          color: #292e3d;
          font-size: 4.5rem;
          font-weight: 600;
        }

        .footer-card-stats {
          .line-orange {
            position: absolute;

            width: 7px;
            align-self: stretch;
            background: #f9995d;
            height: 28px;
          }

          P {
            margin-left: 14px;
            color: #667299;
            font-size: 1.5rem;
          }
        }
      }
    }

    .know-more {
      height: 100%;
      width: 359px;
      margin-top: 140px;

      h2 {
        margin-bottom: 40px;

        color: ${({ theme }) => theme.colors.secondary};
        font-size: 3.75rem;
        font-weight: 700;
      }

      p {
        color: #525b7a;
        font-size: 1.25rem;

        margin-bottom: 20px;
      }

      button {
        display: flex;
        width: 176px;
        padding: 16px 20px;
        justify-content: center;
        align-items: center;
        gap: 10px;

        border-radius: 2px;
        background: ${({ theme }) => theme.colors.secondary};

        color: ${({ theme }) => theme.colors.white};
        text-align: center;
        font-size: 1.125rem;
        font-weight: 600;
      }
    }
  }

  @media (max-width: 1240px) {
    .content-our-clients {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .know-more {
        margin-top: 20px;
      }
    }
  }

  @media (max-width: 840px) {
    .content-our-clients {
      .content-stats {
        gap: 20px;

        .hand {
          width: 320px;
          position: relative;

          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
        }

        .notes {
          width: 320px;
          position: relative;

          left: 0;
          right: 0;
          bottom: 0;
          top: 0;

          img {
            z-index: 2;
            position: absolute;
            left: 290px;
            top: -30px;
          }
        }

        .trophy {
          width: 320px;
          position: relative;

          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
        }

        .plans {
          width: 320px;
          position: relative;

          left: 0;
          right: 0;
          bottom: 0;
          top: 0;

          img {
            position: absolute;
            right: -48px;
            top: -30px;
          }
        }
      }
    }
  }

  @media (max-width: 460px) {
    .content-our-clients {
      .content-stats {
        .hand {
          width: 260px;
        }

        .notes {
          width: 260px;

          img {
            left: 230px;
            top: -30px;
          }
        }

        .trophy {
          width: 260px;
        }

        .plans {
          width: 260px;
        }
      }
    }
  }
`

const Contact = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 390px;

  margin-top: 50px;

  background-image: url(${ContactBanner});

  .content-contact {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    margin: 0 160px;

    button {
      display: inline-flex;
      padding: 16px 20px;
      justify-content: center;
      align-items: center;
      gap: 10px;

      border-radius: 2px;
      border: 2px solid ${({ theme }) => theme.colors.white};

      color: ${({ theme }) => theme.colors.white};
      font-size: 1.125rem;
      font-weight: 600;
    }

    .info-contact {
      h2 {
        margin-bottom: 30px;

        color: ${({ theme }) => theme.colors.white};
        font-size: 2.25rem;
        font-weight: 700;
      }

      a {
        color: ${({ theme }) => theme.colors.white};
        font-size: 1.5rem;
        text-decoration-line: underline;
      }
    }
  }

  @media (max-width: 1240px) {
    .content-contact {
      align-items: flex-start;
      flex-direction: column;

      margin: 0 60px;

      button {
        margin-top: 30px;
      }
    }
`

const Footer = styled.footer`
  width: 100%;
  height: 100%;

  .content-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100%;
    margin: 4rem 10rem;

    .contact-newsletter-and-social {
      a {
        margin-right: 12px;
      }

      h3 {
        color: ${({ theme }) => theme.colors.secondary};
        font-size: 1.25rem;
        font-weight: 500;
        font-variant: all-small-caps;

        margin-bottom: 19px;
      }

      strong {
        color: ${({ theme }) => theme.colors.secondary};
        font-size: 1.25rem;
        font-weight: 500;
        font-variant: all-small-caps;
      }

      .input-container {
        display: flex;
        margin-top: 18px;
        margin-bottom: 42px;

        input {
          display: flex;
          width: 280px;
          padding: 10px 8px;
          align-items: center;
          gap: 10px;

          color: #a3aac2;
          font-size: 1.125rem;

          border-radius: 4px;
          border: 1px solid #e0e3eb;
          background: #fff;
        }

        button {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 136px;
          height: 41px;
          padding: 16px 20px;
          gap: 10px;

          border-radius: 4px;
          background: ${({ theme }) => theme.colors.primary};

          color: ${({ theme }) => theme.colors.white};
          text-align: center;
          font-size: 1.125rem;
          font-weight: 600;

          margin-left: 8px;
        }
      }
    }

    .contact-info {
      .logo {
        display: flex;

        h2 {
          color: ${({ theme }) => theme.colors.gray_500};
          font-size: 1.372rem;
          font-weight: 700;
        }
      }

      .contact-info-item {
        display: flex;

        &:first-child {
          width: 70%;
        }

        strong {
          color: ${({ theme }) => theme.colors.secondary};
          font-size: 1.25rem;
          font-weight: 500;
          font-variant: all-small-caps;
          margin-right: 12px;
        }

        p {
          color: ${({ theme }) => theme.colors.gray_800};
          font-size: 1.25rem;
          margin-bottom: 32px;
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

    background: ${({ theme }) => theme.colors.secondary};

    p {
      color: ${({ theme }) => theme.colors.white};
      font-size: 1rem;
    }
  }

  @media (max-width: 1140px) {
    .content-footer {
      flex-direction: column;

      .contact-newsletter-and-social {
        margin-top: 32px;
      }
    }
  }

  @media (max-width: 1140px) {
    .content-footer {
      .contact-newsletter-and-social {
        .input-container {
          input {
            width: 200px;
          }
        }
      }
    }
  }
`

export default {
  Differentials,
  OurServices,
  OurClients,
  Container,
  Contact,
  AboutUs,
  Header,
  Footer,
  Hero,
}
