import styled from "styled-components";
import { flexCenter } from "../../../styles/css-style";
import MyAnimation from "./Animation";

const HomeContainer = styled.div`
  width: 75%;
  padding-top: 40px;
  ${flexCenter}
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const TextWrapper = styled.div`
  width: 60%;
  .box-h1 {
    margin-bottom: 2rem;

    > h1 {
      margin: 0;
      line-height: 1.5;
    }
  }

  .box-p {
    > p {
      margin: 5px 0;
      line-height: 1.6;
    }
    .box-p-strong {
      font-size: 22px;
      font-weight: 600;
    }
    .box-p-color {
      color: #64748b;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 40%;
`;

const Home = () => {
  return (
    <HomeContainer>
      <TextWrapper>
        <div className="box-h1">
          <h1>Make me happy</h1>
          <h1>Learn, Solution, Communication</h1>
        </div>
        <div className="box-p">
          <p>
            안녕하세요!{" "}
            <span className="box-p-strong">프론트엔드 개발자 신동재</span>
            입니다.
          </p>
          <p className="box-p-color">
            배운 것을 시도하고, 문제 해결하는 것이 즐겁습니다.
          </p>
          <p className="box-p-color">
            사람들과 소통하는 것을 중요하게 생각하며, 함께 일하는 것을
            좋아합니다
          </p>
          <p className="box-p-color">
            더 좋은 개발자가 되기 위해 계속해서 공부하고 있습니다.
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
