import styled from "styled-components";
import { margin75 } from "../../../styles/css-style";
import Stack from "../../common/Stack";

const Container = styled.div`
  ${margin75}
  > p {
    color: #64748b;
    line-height: 1.6;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 90%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 90%;
    > p {
      margin-bottom: 10px;
    }
  }
`;

const StackContainer = styled.div`
  padding-top: 2rem;
`;

const Stacks = () => {
  return (
    <Container>
      <h2>개발스택 소개</h2>
      <p>프로젝트를 통해 사용해본 경험이 있는 기술스택입니다.</p>
      <p>
        언급된 기술은 결과물을 도출해본 경험이 있으며 개발된 소스코드를 이해할
        수 있습니다.
      </p>
      <StackContainer>
        <Stack />
      </StackContainer>
    </Container>
  );
};

export default Stacks;
