import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
    color: #e4e4e4;
    font-family: 'Arodora Pro', sans-serif;
  }

  a {
    text-decoration: none;
  }


  ul {
    list-style: none;
  }

  button {
    border: none;
  }
`