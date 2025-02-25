import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    color: #e4e4e4;
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