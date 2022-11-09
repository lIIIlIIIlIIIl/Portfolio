import styled from "styled-components";
import {
  media_desktop1,
  media_desktop2,
  media_tablet1,
  media_tablet2,
} from "../../../styles/css-style";
import Stack from "../../common/Stack";

const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  > p {
    color: #64748b;
    line-height: 1.6;
  }

  ${media_desktop2}

  ${media_desktop1} 

  ${media_tablet2}

  ${media_tablet1}
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
