import type { NextPage } from "next";
import styled from "styled-components";
import AboutMe from "../components/Home/AboutMe";
import ContactBox from "../components/Home/ContactBox";
import Home from "../components/Home/Home";
import ProjectBox from "../components/Home/ProjectBox";

const MainContainer = styled.main`
  width: 100%;
`;

const Main: NextPage = () => {
  return (
    <MainContainer>
      <Home />
      <AboutMe />
      <ProjectBox />
      <ContactBox />
    </MainContainer>
  );
};

export default Main;
