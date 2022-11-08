import React from "react";
import styled from "styled-components";

import { flexCenter } from "../../../../styles/css-style";
import Card from "../../../common/Card";

const ProjectContainer = styled.section`
  width: 100%;
  padding: 60px 40px;
`;

const TitleBox = styled.div`
  ${flexCenter}
  margin-bottom: 30px;
  > div {
    font-size: ${({ theme }) => theme.fontSize.size32};
    font-weight: 700;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black500};
  }
`;

const ProjectBox = () => {
  return (
    <ProjectContainer>
      <TitleBox>
        <div>Projects</div>
      </TitleBox>
      <Card />
    </ProjectContainer>
  );
};

export default ProjectBox;
