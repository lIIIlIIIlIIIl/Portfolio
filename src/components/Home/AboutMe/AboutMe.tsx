import styled from "styled-components";
import { flexCenter } from "../../../../styles/css-style";
import IconBox from "./IconBox";

const AboutMeContainer = styled.section`
  width: 100%;
  padding: 4rem 2rem;
`;

const TitleBox = styled.div`
  ${flexCenter}
  > div {
    font-size: ${({ theme }) => theme.fontSize.size32};
    font-weight: 700;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black400};
  }
`;

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <TitleBox>
        <div>About Me</div>
      </TitleBox>
      <IconBox width="75%" />
    </AboutMeContainer>
  );
};

export default AboutMe;
