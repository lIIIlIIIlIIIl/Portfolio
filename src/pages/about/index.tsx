import styled from "styled-components";
import IconBox from "../../components/Home/AboutMe/IconBox";
import Developer from "../../components/About/Developer";
import PageIndex from "../../common/PageIndex";
import { margin75 } from "../../../styles/css-style";
import Stacks from "../../components/About/Stacks";

const Main = styled.main`
  width: 100%;
  padding: 24px 0;
`;

const PageHead = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;

const MarginContainer = styled.div`
  ${margin75}
  .head-text {
    font-size: ${({ theme }) => theme.fontSize.size24};
    font-weight: 350;
    line-height: 1.5;
  }
  > svg {
    width: 30px;
    height: 30px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 90%;
  }
`;

const IntroduceContainer = styled.div`
  padding: 60px 0;
`;

const About = () => {
  return (
    <Main>
      <PageHead>
        <MarginContainer>
          <PageIndex index="소개" />
          <p className="head-text">프론드엔드 개발자</p>
          <p className="head-text">신동재에 대해 알아보세요!</p>
        </MarginContainer>
      </PageHead>
      <MarginContainer>
        <IconBox width="75%" />
      </MarginContainer>
      <IntroduceContainer>
        <Developer />
      </IntroduceContainer>
      <IntroduceContainer>
        <Stacks />
      </IntroduceContainer>
    </Main>
  );
};

export default About;
