import styled from "styled-components";
import IconBox from "../../components/Home/AboutMe/IconBox";
import Developer from "../../components/About/Developer";
import PageIndex from "../../common/PageIndex";
import Stacks from "../../components/About/Stacks";
import {
  media_desktop1,
  media_desktop2,
  media_tablet1,
  media_tablet2,
} from "../../../styles/css-style";

const Main = styled.main`
  width: 100%;
  padding: 24px 0;
`;

const PageHead = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;

const MarginContainer = styled.div`
  width: 1280px;
  margin: 0 auto;

  .head-text {
    font-size: ${({ theme }) => theme.fontSize.size24};
    font-weight: 350;
    line-height: 1.5;
  }
  > svg {
    width: 30px;
    height: 30px;
  }

  ${media_desktop2}

  ${media_desktop1}

  ${media_tablet2}

  ${media_tablet1}
`;

const IntroduceContainer = styled.div`
  padding: 40px 0;
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
        <IconBox />
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
