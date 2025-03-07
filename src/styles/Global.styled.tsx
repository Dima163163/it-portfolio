import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    color: ${theme.colors.fontColorFirst};
    font-family: 'Arodora Pro', sans-serif;
    min-width: 375px;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.fontColorFirst};
    cursor: pointer;
  }


  ul {
    list-style: none;
  }

  button {
    border: none;
    background-color: unset;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    a::after,
    a::before {
      animation: none !important;
    }
  }
`;
