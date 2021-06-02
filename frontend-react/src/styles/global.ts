import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;
    --black: #000;
    --title: #222;
    --darkgray: #212121;
    --lightgray: #e5e5e5;
    --navyblue: #1E3D58;
    --royalblue: #057DCD;
    --bluegrotto: #43B0F1;
    --redlava: #f14343;
    --simplewhite: #E8EEF1;
  }

  body {
    background: var(--simplewhite);
  }

  body,
  input,
  textarea,
  button {
    font: 400 16px "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h5,
  span {
    font: 400 16px "Roboto", sans-serif;
  }
`;