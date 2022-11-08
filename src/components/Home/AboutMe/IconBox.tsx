import Image from "next/image";
import styled from "styled-components";
import { flexAround } from "../../../../styles/css-style";
import { aboutList } from "../../../assets/data";

interface StyledUlProps {
  width?: string;
}

const IconBoxContainer = styled.ul<StyledUlProps>`
  width: ${({ width }) => (width ? width : "100%")};
  margin: 0 auto;
  padding: 60px 0;
  ${flexAround};
  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 100%;
    padding: 32px 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
    padding: 32px 0;
  }
`;

const Icon = styled.li`
  width: 180px;
  height: 180px;
  padding: 1.5rem;
  border-radius: 100%;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.colors.Light_Blue400};
  > img {
    margin-bottom: 9px;
  }
  > p {
    margin: 0;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.size15};
    color: ${({ theme }) => theme.colors.black800};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 160px;
    height: 160px;
    > img {
      width: 60px;
      height: 60px;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    margin-bottom: 1rem;
  }
`;

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
