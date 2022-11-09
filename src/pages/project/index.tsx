import styled from "styled-components";
import Card from "../../common/Card";

import PageIndex from "../../common/PageIndex";

const PageContainer = styled.div`
  width: 100%;
  padding: 24px 0;
`;

const ContactContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 90%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 90%;
  }
`;

const Title = styled.div`
  padding-bottom: 30px;
  > h2 {
    font-weight: 500;
    line-height: 1.5;
  }
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
