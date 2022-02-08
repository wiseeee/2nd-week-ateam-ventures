import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle` 
  ${reset};
  html { 
    height: 100%;

    body {
      display: flex; 
      flex-direction: column; 
      height: 100%; 
      margin: 0; 
      font-family: sans-serif;
      color: #323D45;
      font-size: 16px;
    }
`;
