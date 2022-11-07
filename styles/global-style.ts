import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
html, body{
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
}

* {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

ol, ul, li{
    list-style: none;
    margin: 0;
    padding: 0;
}

p{
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

@media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
html, body{
min-width: ${({ theme }) => theme.breakPoints.mobile};
}
}
`;

// @media (prefers-color-scheme: dark) {
//     html {
//       color-scheme: dark;
//     }
//     body {
//       color: white;
//       background: black;
//     }
