import styled, { css } from 'styled-components'

import BudgetImg from '../../assets/bannerBudget.png'
import ContactBanner from '../../assets/bannerContact.png'
import HeroImg from '../../assets/hero.png'

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

    a {
      text-decoration: none;
      color: #fff;
    }
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

  background-color: ${({ theme }) => theme.colors.gray_100};

  width: 100%;
  height: 100%;

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
        width: 240px;
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

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray_100};

  padding: 48px 0;

  width: 100%;
  height: 100%;

  .content-contact-form {
    h2 {
      color: ${({ theme }) => theme.colors.gray_800};
      font-size: 2.25rem;
      font-weight: 700;
      margin-bottom: 20px;
      text-align: center;
    }

    p {
      color: ${({ theme }) => theme.colors.gray_800};
      text-align: center;
      font-size: 1.25rem;

      margin-bottom: 62px;
    }

    form {
      display: flex;
      align-items: center;
      flex-direction: column;

      .column-input {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;

        input {
          display: flex;
          width: 280px;
          padding: 10px 8px;
          align-items: center;
          gap: 10px;
          border-radius: 4px;
          border: 1px solid #e0e3eb;
          background: ${({ theme }) => theme.colors.white};

          color: #a3aac2;
          font-size: 1.125rem;
        }
      }

      textarea {
        display: flex;
        width: 592px;
        height: 135px;
        padding: 10px 8px;
        align-items: flex-start;
        gap: 10px;
        resize: none;

        border-radius: 4px;
        border: 1px solid #e0e3eb;
        background: ${({ theme }) => theme.colors.white};

        color: #a3aac2;

        font-size: 1.125rem;

        margin-top: 20px;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 271px;
        padding: 16px 20px;
        gap: 10px;

        background: ${({ theme }) => theme.colors.secondary};

        color: ${({ theme }) => theme.colors.white};
        text-align: center;
        font-size: 1.125rem;
        font-weight: 600;

        margin-top: 48px;
      }
    }
  }

  @media (max-width: 620px) {
    .content-contact-form {
      form {
        textarea {
          width: 280px;
        }

        .column-input {
          grid-template-columns: repeat(1, 1fr);
        }
      }
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
  OurServices,
  Budget,
  ContactForm,
  Container,
  Portfolio,
  Contact,
  AboutUs,
  Header,
  Footer,
  Hero,
}
