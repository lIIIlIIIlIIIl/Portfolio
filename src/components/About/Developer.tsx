import styled from "styled-components";
import { margin75 } from "../../../styles/css-style";

const Container = styled.div`
  width: 100%;
  ${margin75}
  > h2 {
    margin-top: 0;
  }
  > p {
    line-height: 2;
  }
`;

const Developer = () => {
  return (
    <Container>
      <h2>개발자 소개</h2>
      <p>안녕하세요, 최선의 길을 찾아 성장하는 개발자 신동재입니다.</p>
      <br />
      <p>
        웹 브라우저를 통해 누군가와 소통하고 문제를 찾아 해결하는 매력에 빠져 웹
        개발자가 되었습니다.
      </p>
      <p>
        프론트엔드를 전문적으로 개발하고 있으며 사용자의 편의성을 고려하며
        프로그램을 개발하고 있습니다.
      </p>
      <p>
        부족한 점과 개선점을 찾아 해결하는 과정을 통해 성장하고 있으며, 새로운
        기술에 적극적으로 도전하고 있습니다.
      </p>
    </Container>
  );
};

export default Developer;
