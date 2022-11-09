import Image from "next/image";
import styled from "styled-components";
import { imgList } from "../assets/data";

const StackCard = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 16px;
  }
`;

const StackBox = styled.li`
  display: flex;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5px;

  > h6 {
    margin: 0;
    font-size: 14px;

    > span {
      margin-left: 8px;
      font-size: 12px;
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  > p {
    font-size: 12px;
  }
`;

const Stack = () => {
  return (
    <StackCard>
      {imgList.map((img, index) => (
        <StackBox key={index}>
          <ImgBox>
            <Image src={img.src} alt={img.alt} width={36} height={36} />
          </ImgBox>
          <TextBox>
            <h6>
              {img.alt}
              <span>{img.category}</span>
            </h6>
            <p>{img.etc}</p>
          </TextBox>
        </StackBox>
      ))}
    </StackCard>
  );
};

export default Stack;
