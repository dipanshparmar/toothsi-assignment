import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.fontFamily};
  }

  a {
    text-decoration: none;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  @media screen and (max-width: 1024px) {
    html {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 768px) {
    html {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 425px) {
    html {
      font-size: 10px;
    }
  }
`;

export default GlobalStyles;
