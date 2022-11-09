import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { cardList } from "../assets/data";
import {
  flexCenter,
  media_desktop1,
  media_desktop2,
  media_tablet1,
  media_tablet2,
} from "../../styles/css-style";

const Container = styled.div`
  width: 1280px;
  margin: 0 auto;

  ${media_desktop2}

  ${media_desktop1}

  ${media_tablet2}

  ${media_tablet1}
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
  width: calc(33.333% - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 16px;
  background-color: white;
  margin: 20px;
  box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px,
    rgb(15 15 15 / 10%) 0px 2px 4px;
  cursor: pointer;
  :hover {
    transition: all 0.2s ease-out;
    transform: scale(1.2);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.desktop1}) {
    width: calc(50% - 60px);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet1}) {
    width: 100%;
  }
`;

const ImgWrapper = styled.div`
  padding: 10px;
  > img {
    width: 100%;
    height: 100%;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  padding: 15px;
`;

const Title = styled.h2`
  margin: 5px 0;
`;

const Explanation = styled.div`
  margin-bottom: 15px;
`;

const Stacks = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const StacksLi = styled.li<{ background: string }>`
  margin-right: 15px;
  margin-bottom: 7px;
  font-size: 14px;
  padding: 3px 6px;
  background-color: ${({ background }) => background};
  border-radius: 9px;
`;

const Card = () => {
  return (
    <Container>
      <CardWrapper>
        {cardList.map((el, index) => (
          <CardContainer key={index}>
            <Link href={`/project/${el.name}`}>
              <ImgWrapper>
                <img src={el.src}></img>
              </ImgWrapper>
              <TextContainer>
                <Title>{el.title}</Title>
                <Explanation>{el.explanation}</Explanation>
                <Stacks>
                  {el.stack.map((el, index) => (
                    <StacksLi background={el.color} key={index}>
                      {el.name}
                    </StacksLi>
                  ))}
                </Stacks>
              </TextContainer>
            </Link>
          </CardContainer>
        ))}
      </CardWrapper>
    </Container>
  );
};

export default Card;
