import styled from "styled-components";
import { flexAround, flexCenter } from "../../../../styles/css-style";
import Icon from "./Icon";

const AboutMeContainer = styled.section`
  width: 100%;
  padding: 4rem 2rem;
`;

const TitleBox = styled.div`
  ${flexCenter}
  margin-bottom: 2.5rem;
  > div {
    font-size: ${({ theme }) => theme.fontSize.size32};
    font-weight: 700;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black400};
  }
`;

const IconBox = styled.ul`
  width: 75%;
  margin: 0 auto;
  padding: 0;
  ${flexAround};
`;

const aboutList = [
  {
    src: "/AboutImg/Img01.png",
    alt: "전문분야",
    p1: "전문분야",
    p2: "프론트엔드",
  },
  {
    src: "/AboutImg/Img02.png",
    alt: "개발자",
    p1: "상대방을 생각하는",
    p2: "개발자",
  },
  {
    src: "/AboutImg/Img03.png",
    alt: "성장",
    p1: "핵심가치",
    p2: "성장",
  },
  {
    src: "/AboutImg/Img04.png",
    alt: "열정",
    p1: "강한",
    p2: "의지﹢열정",
  },
];

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <TitleBox>
        <div>About Me</div>
      </TitleBox>
      <IconBox>
        {aboutList.map(item => (
          <Icon src={item.src} alt={item.alt} p1={item.p1} p2={item.p2} />
        ))}
      </IconBox>
    </AboutMeContainer>
  );
};

export default AboutMe;
