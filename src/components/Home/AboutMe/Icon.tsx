import Image from "next/image";
import styled from "styled-components";

const IconBoxContainer = styled.li`
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

interface Props {
  src: string;
  alt: string;
  p1: string;
  p2: string;
}

const Icon = (props: Props) => {
  return (
    <IconBoxContainer>
      <Image src={props.src} alt={props.alt} width={80} height={80} />
      <p>{props.p1}</p>
      <p>{props.p2}</p>
    </IconBoxContainer>
  );
};

export default Icon;
