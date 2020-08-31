import { createGlobalStyle, keyframes } from 'styled-components';

import githubBackground from '../assets/githubbackground.svg';

const move = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(2);
  }
`;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;

    -webkit-font-smoothing: antialiased;
  }

  svg {
    animation: ${move} 2s infinite alternate;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;
