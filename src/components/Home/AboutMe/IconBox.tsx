import Image from "next/image";
import styled from "styled-components";
import { flexAround } from "../../../../styles/css-style";

interface StyledUlProps {
  width?: string;
}

const IconBoxContainer = styled.ul<StyledUlProps>`
  width: ${({ width }) => (width ? width : "100%")};
  margin: 0 auto;
  padding: 60px 0;
  ${flexAround};
`;

const Icon = styled.li`
  width: 170px;
  height: 170px;
  padding: 1.5rem;
  border-radius: 100%;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.black100};
  > img {
    margin-bottom: 9px;
  }
  > p {
    margin: 0;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.size15};
    color: ${({ theme }) => theme.colors.black500};
  }
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

interface Props {
  width?: string;
}

const IconBox = (props: Props) => {
  return (
    <IconBoxContainer width={props.width}>
      {aboutList.map(item => (
        <Icon key={item.src}>
          <Image
            src={item.src}
            alt={item.alt}
            width={80}
            height={80}
            property="true"
          />
          <p>{item.p1}</p>
          <p>{item.p2}</p>
        </Icon>
      ))}
    </IconBoxContainer>
  );
};

export default IconBox;
