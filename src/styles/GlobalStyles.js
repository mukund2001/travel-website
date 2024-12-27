import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #f0f8ff;
    color: #333;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }
  p {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
