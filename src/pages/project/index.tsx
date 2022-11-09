import styled from "styled-components";
import Card from "../../common/Card";

import PageIndex from "../../common/PageIndex";

import {
  media_desktop1,
  media_desktop2,
  media_tablet1,
  media_tablet2,
} from "../../../styles/css-style";

const PageContainer = styled.div`
  padding: 24px 0;
`;

const ContactContainer = styled.div`
  width: 1280px;
  margin: 0 auto;

  ${media_desktop2}

  ${media_desktop1}

  ${media_tablet2}

  ${media_tablet1}
`;

const Title = styled.div`
  padding-bottom: 30px;
  > h2 {
    font-weight: 500;
    line-height: 1.5;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    > h2 {
      font-size: 20px;
    }
  } ;
`;

const Project = () => {
  return (
    <PageContainer>
      <ContactContainer>
        <PageIndex index="프로젝트" />
        <Title>
          <h2>
            프로젝트를 통해서 작은 문제를 해결하고 개선하며
            <br />
            계속 새로운 것에 도전하고 있습니다.
          </h2>
        </Title>
        <Card />
      </ContactContainer>
    </PageContainer>
  );
};

export default Project;
