import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../../styles/global-style";
import { theme } from "../../styles/theme";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
