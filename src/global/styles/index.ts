import styled, { css } from 'styled-components'
import HeroImg from '../../assets/hero.jpg'

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
        position: fixed !important;
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
  height: 433px;

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

export default {
  Differentials,
  Container,
  Header,
  Hero,
}
