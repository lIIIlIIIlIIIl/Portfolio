import Image from "next/image";
import styled from "styled-components";
import { cardList } from "../assets/data";

const Catainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
`;

const CardContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 16px;
  background-color: white;
  box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px,
    rgb(15 15 15 / 10%) 0px 2px 4px;
  cursor: pointer;
  :hover {
    transition: all 0.2s ease-out;
    transform: scale(1.2);
  }
`;

const ImgWrapper = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
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
    <Catainer>
      {cardList.map((el, index) => (
        <CardContainer key={index}>
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
        </CardContainer>
      ))}
    </Catainer>
  );
};

export default Card;
