import styled from "styled-components";
import {
  flexAround,
  media_desktop1,
  media_desktop2,
  media_tablet1,
  media_tablet2,
} from "../../../styles/css-style";
import MyAnimation from "./Animation";

const HomeContainer = styled.div`
  width: 1280px;
  ${flexAround}
  margin: 0 auto;

  ${media_desktop2}

  ${media_desktop1}

  ${media_tablet2}

  ${media_tablet1}
`;

const TextWrapper = styled.div`
  .box-h1 {
    margin-bottom: 2rem;

    > h1 {
      margin: 0;
      font-weight: 600;
      line-height: 1.5;
    }
  }

  .box-p {
    > p {
      line-height: 1.8;
    }
    .box-p-strong {
      font-size: 22px;
      font-weight: 600;
      padding-left: 8px;
    }
  }

  @media screen and (max-width: 890px) {
    width: 100%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    .box-h1 {
      > :last-child {
        font-size: 24px;
      }
    }

    .box-p-strong {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 480px;
  height: 480px;
  @media screen and (max-width: ${({ theme }) => theme.breakPoints.desktop1}) {
    width: 400px;
    height: 400px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoints.desktop2}) {
    width: 320px;
    height: 320px;
  }
  @media screen and (max-width: 890px) {
    display: none;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <TextWrapper>
        <div className="box-h1">
          <h1>Makes me happy</h1>
          <h1>Solution, Learing, Communication</h1>
        </div>
        <div className="box-p">
          <p>
            안녕하세요!
            <span className="box-p-strong">프론트엔드 개발자 신동재</span>
            입니다.
          </p>
          <p>
            코드를 작성하는데 있어서 항상 '왜?' 라는 의문을 가지고 사용 목적을
            분명히하고 있습니다.
          </p>
          <p>
            클라이언트와 서버 사이의 상호작용과 데이터 흐름을 이해하고 있습니다.
          </p>
          <p>
            다른 사람과의 코드 리뷰를 통해 더 나은 코드를 작성하고자 합니다.
          </p>
        </div>
      </TextWrapper>
      <ImageWrapper>
        <MyAnimation />
      </ImageWrapper>
    </HomeContainer>
  );
};

export default Home;
