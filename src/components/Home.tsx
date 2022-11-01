import styled from "styled-components";
import { flexCenter } from "../../styles/css-style";
import MyAnimation from "./animation";

const HomeContainer = styled.div`
  width: 75%;
  padding-top: 40px;
  ${flexCenter}
  margin: 0 auto;
`;

const TextWrapper = styled.div`
  width: 60%;
  .box-h1 {
    margin-bottom: 2rem;

    > h1 {
      margin: 0;
    }
  }

  .box-p {
    > p {
      margin: 5px 0;
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
          <h1>Learn, Try, Solution, Communication</h1>
        </div>
        <div className="box-p">
          <p>안녕하세요! 프론트엔드 개발자 신동재입니다.</p>
          <p>
            배운 것을 시도하고, 문제 해결하는 것을 즐거워하며 함께 일하는 것을
            좋아합니다.
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
