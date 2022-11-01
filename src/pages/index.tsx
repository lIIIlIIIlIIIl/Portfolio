import type { NextPage } from "next";
import styled from "styled-components";
import Home from "../components/Home";

const MainContainer = styled.main`
  width: 100%;
`;

const Main: NextPage = () => {
  return (
    <MainContainer>
      <Home />
    </MainContainer>
  );
};

export default Main;
