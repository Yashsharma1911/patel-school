import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html, body {
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: Black;
}
*{
    box-sizing: border-box;
    margin: 0;
    a{
        text-decoration: none;
    }
}
`;

export default GlobalStyles;
