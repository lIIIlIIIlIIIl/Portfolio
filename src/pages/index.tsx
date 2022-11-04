import type { NextPage } from "next";
import styled from "styled-components";
import AboutMe from "../components/Home/AboutMe";
import Contact from "../components/Home/Contact";
import Home from "../components/Home/Home";

const MainContainer = styled.main`
  width: 100%;
`;

const Main: NextPage = () => {
  return (
    <MainContainer>
      <Home />
      <AboutMe />
      <Contact />
    </MainContainer>
  );
};

export default Main;
