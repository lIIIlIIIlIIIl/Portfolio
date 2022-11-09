import Image from "next/image";
import styled from "styled-components";
import {
  media_desktop1,
  media_desktop2,
  media_tablet1,
  media_tablet2,
} from "../../../../styles/css-style";
import { aboutList } from "../../../assets/data";

const IconWrapper = styled.div`
  width: 1280px;

  ${media_desktop2}

  ${media_desktop1}

  ${media_tablet2}

  ${media_tablet1}
`;

const IconBoxContainer = styled.ul`
  width: 90%;
  margin: 0 auto;
  padding: 60px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet2}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    grid-gap: 24px;
    padding: 30px 0;
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
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 160px;
    height: 160px;
    > img {
      width: 60px;
      height: 60px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    margin-bottom: 1rem;
  }
`;

interface Props {
  width?: string;
}

const IconBox = (props: Props) => {
  return (
    <IconWrapper>
      <IconBoxContainer>
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
    </IconWrapper>
  );
};

export default IconBox;
