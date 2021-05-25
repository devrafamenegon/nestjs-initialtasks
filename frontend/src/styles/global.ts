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
    --dark-gray: #212121;
    --light-gray: #757575;
    --background: #fdfdfd;
    --red: #ff5252;
    --green: #8bc34a;
    --blue: #448aff;
  }

  body {
    background: var(--background);
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