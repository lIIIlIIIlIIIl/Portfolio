import styled from "styled-components";

import Image from "next/image";
import { flexAround, flexCenter } from "../../../styles/css-style";
import ContactForm from "../../common/ContactForm";

const PageContainer = styled.div`
  width: 100%;
  padding: 45px 0;
`;

const ContactContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const Name = styled.h1`
  margin: 0;
`;

const WhoContainer = styled.div`
  width: 100%;
  ${flexAround}
`;

const ImgWrapper = styled.div`
  ${flexCenter}
  padding: 30px 0;
  > img {
    border-radius: 100%;
  }
`;

const TextContainer = styled.div`
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
`;

const MessageContainer = styled.div`
  padding: 50px 0;
`;

const Contact = () => {
  return (
    <PageContainer>
      <ContactContainer>
        <Name>신동재</Name>
        <WhoContainer>
          <ImgWrapper>
            <Image src="/me.JPG" alt="user" width={240} height={290} />
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
            아래 양식에 맞게 작성하신 후 보내주시면, 3일 이내에 회신하겠습니다
          </p>
        </MessageContainer>
      </ContactContainer>

      <ContactForm />
    </PageContainer>
  );
};

export default Contact;
