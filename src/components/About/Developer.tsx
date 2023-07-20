import styled from "styled-components";
import {
  media_desktop2,
  media_desktop1,
  media_tablet2,
  media_tablet1,
} from "../../../styles/css-style";

const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  > h2 {
    margin-top: 0;
  }
  > p {
    line-height: 2;
  }

  ${media_desktop2}

  ${media_desktop1}

  ${media_tablet2}

  ${media_tablet1}
`;

const Developer = () => {
  return (
    <Container>
      <h2>개발자 소개</h2>
      <p>
        웹 브라우저를 통해 사용자와 소통하고 문제를 찾아 해결하는 매력에 빠져 웹
        개발자가 되었습니다.
      </p>
      <p>
        프론트엔드를 전문적으로 개발하고 있으며 사용자 경험을 고려하여
        프로그램을 개발하고 있습니다.
      </p>
      <p>
        부족한 점과 개선점을 찾아 해결하는 과정을 통해 성장하고 있으며, 새로운
        기술에 적극적으로 도전하고 있습니다.
      </p>
      <p>
        코드 리뷰를 통해 코드 작성에 있어서 항상 ‘왜?’ 라는 의문과 사용 목적을
        분명히하고 있습니다.
      </p>
    </Container>
  );
};

export default Developer;
