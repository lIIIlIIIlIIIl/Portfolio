import React from "react";
import styled from "styled-components";

import {
  flexCenter,
  media_desktop1,
  media_desktop2,
  media_tablet1,
  media_tablet2,
} from "../../../../styles/css-style";
import Card from "../../../common/Card";

const Page = styled.section`
  width: 100%;
  padding: 60px 80px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet1}) {
    padding: 28px 0;
  } ;
`;

const ProjectContainer = styled.section`
  width: 1280px;
  margin: 0 auto;

  ${media_desktop2}

  ${media_desktop1}

  ${media_tablet2}

  ${media_tablet1}
`;

const TitleBox = styled.div`
  ${flexCenter}
  > div {
    padding-bottom: 5px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black500};
    font-size: ${({ theme }) => theme.fontSize.size32};
    font-weight: 700;
  }
`;

const ProjectBox = () => {
  return (
    <Page>
      <ProjectContainer>
        <TitleBox>
          <div>Projects</div>
        </TitleBox>
        <Card />
      </ProjectContainer>
    </Page>
  );
};

export default ProjectBox;
