import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  src: local(''),
       url('/fonts/poppins-v15-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */

}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/poppins-v15-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('/fonts/poppins-v15-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}

* {
  margin: 0;
  pad: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}


body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

html, body, #__next {
  height: 100%;
}
`;

export default GlobalStyles;
