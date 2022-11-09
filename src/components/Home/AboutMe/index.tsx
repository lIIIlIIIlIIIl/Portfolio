import styled from "styled-components";
import {
  flexCenter,
  media_desktop1,
  media_desktop2,
  media_tablet1,
  media_tablet2,
} from "../../../../styles/css-style";
import IconBox from "./IconBox";

const Page = styled.section`
  width: 100%;
  padding: 28px 80px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet2}) {
    padding: 28px 0;
  } ;
`;

const AboutMeContainer = styled.div`
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
    font-size: ${({ theme }) => theme.fontSize.size32};
    font-weight: 700;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black500};
  }
`;

const AboutMe = () => {
  return (
    <Page>
      <AboutMeContainer>
        <TitleBox>
          <div>About Me</div>
        </TitleBox>
        <IconBox />
      </AboutMeContainer>
    </Page>
  );
};

export default AboutMe;
