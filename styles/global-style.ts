import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
html, body{
    margin: 0;
    padding: 50px 0 0 0;
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
  display: block;
  color: inherit;
  text-decoration: none;
}

@media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
html, body{
min-width: ${({ theme }) => theme.breakPoints.mobile};
}
}
`;
