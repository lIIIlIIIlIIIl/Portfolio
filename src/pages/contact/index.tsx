import styled from "styled-components";

import ContactForm from "../../common/ContactForm";
import PageIndex from "../../common/PageIndex";
import {
  media_desktop1,
  media_desktop2,
  media_tablet1,
  media_tablet2,
} from "../../../styles/css-style";

const PageContainer = styled.div`
  width: 100%;
  padding: 24px 0;
`;

const ContactContainer = styled.div`
  width: 1280px;
  margin: 0 auto;

  ${media_desktop2}

  ${media_desktop1}

  ${media_tablet2}

  ${media_tablet1}
`;

const Name = styled.h1`
  margin: 0;
`;

const WhoContainer = styled.div`
  width: 1280px;
  padding: 0 30px;
  display: flex;
  justify-content: flex-start;

  ${media_desktop2}

  ${media_desktop1}

  ${media_tablet2}

  ${media_tablet1}

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  > img {
    display: block;
    width: 240px;
    height: 290px;
    border-radius: 100%;
  }
`;

const TextContainer = styled.div`
  padding: 60px 40px;
  > h2 {
    margin: 0;
    color: ${({ theme }) => theme.colors.Light_Blue400};
  }
  > div {
    padding: 7px 0 7px 20px;
    display: flex;
    > h3 {
      margin: 0;
    }
    > span,
    a {
      display: block;
      padding-left: 15px;
      font-size: 18px;
    }
    a {
      cursor: pointer;
    }
  }
  .h2_margin {
    margin-top: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding: 30px 0;
  }
`;

const MessageContainer = styled.div`
  padding: 50px 0;
`;

const Contact = () => {
  return (
    <PageContainer>
      <ContactContainer>
        <PageIndex index="연락" />
        <Name>신동재</Name>
        <WhoContainer>
          <ImgWrapper>
            <img src="/me.JPG" alt="user" />
          </ImgWrapper>
          <TextContainer>
            <h2>Contact.·.·</h2>
            <div>
              <h3>Email.</h3>
              <span>sdhsdj6450@gmail.com</span>
            </div>
            <div>
              <h3>Phone.</h3>
              <span>010-9522-7895</span>
            </div>

            <h2 className="h2_margin">Channel.·.·</h2>
            <div>
              <h3>Blog.</h3>
              <a href="https://likelacoste.tistory.com" target="_blank">
                likelacoste.tistory.com
              </a>
            </div>
            <div>
              <h3>Github.</h3>
              <a href="https://github.com/lIIIlIIIlIIIl" target="_blank">
                github.com/lIIIlIIIlIIIl
              </a>
            </div>
          </TextContainer>
        </WhoContainer>
        <MessageContainer>
          <h2>Sending Email</h2>
          <p>
            아래 양식에 맞게 작성하신 후 보내주시면, 3일 이내에 회신하겠습니다.
          </p>
        </MessageContainer>
        <ContactForm />
      </ContactContainer>
    </PageContainer>
  );
};

export default Contact;
