import { createGlobalStyle } from "styled-components";
import LatoRegular from "../assets/fonts/LatoRegular.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: url(${LatoRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    font-family: 'Lato';
    background-color: #fafafa;
    color: #333;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyles;
