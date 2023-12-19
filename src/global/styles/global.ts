import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
  }

  :focus {
    outline: transparent;
  }

  html {
    scroll-behavior: smooth;
  }

  body { 
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray_900};
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  a, u {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }
`
