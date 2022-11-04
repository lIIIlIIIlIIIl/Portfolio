import React from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

import { flexCenter } from "../../../../styles/css-style";
import BasicInput from "../../../common/BasicInput";
import useInput from "../../../hooks/useInput";
import useTextarea from "../../../hooks/useTextarea";

const AboutMeContainer = styled.section`
  width: 100%;
  padding: 60px 40px;
`;

const TitleBox = styled.div`
  ${flexCenter}
  margin-bottom: 30px;
  > div {
    font-size: ${({ theme }) => theme.fontSize.size32};
    font-weight: 700;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black400};
  }
`;

const FormContainer = styled.form`
  width: 40%;
  margin: 0 auto;
  padding: 40px 50px;
  border: 1px solid ${({ theme }) => theme.colors.black500};
  border-radius: 5px;
`;

const MessageWrapper = styled.div`
  width: 100%;
  margin: 40px 0 20px;

  > textarea {
    width: 100%;
    height: 100px;
    resize: none;
    border: 1px solid ${({ theme }) => theme.colors.black500};
    border-radius: 5px;
    padding: 8px;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;

  > button {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.fontSize.size15};
    color: white;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.teal700};
    cursor: pointer;
  }
`;

const Contact = () => {
  const name = useInput("");
  const phone = useInput("");
  const email = useInput("");
  const message = useTextarea("");
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = {
      name: name.value,
      phone: phone.value,
      email: email.value,
      message: message.value,
    };
    emailjs
      .send("service_0y46jwb", "template_wto205k", body, PUBLIC_KEY)
      .then(res => {
        console.log("성공");
      });
    name.value = "";
    phone.value = "";
    email.value = "";
    message.value = "";
  };

  return (
    <AboutMeContainer>
      <TitleBox>
        <div>Contact</div>
      </TitleBox>
      <FormContainer onSubmit={onSubmitHandler}>
        <BasicInput
          type="text"
          placeHloder="이름을 입력해주세요"
          onChangeHandler={name.onChange}
          value={name.value}
        />
        <BasicInput
          type="text"
          placeHloder="전화번호를 입력해주세요"
          onChangeHandler={phone.onChange}
          value={phone.value}
        />
        <BasicInput
          type="email"
          placeHloder="이메일을 입력해주세요"
          onChangeHandler={email.onChange}
          value={email.value}
        />
        <MessageWrapper>
          <textarea
            placeholder="메시지를 입력해주세요"
            onChange={message.onChange}
            value={message.value}
          ></textarea>
        </MessageWrapper>
        <ButtonWrapper>
          <button>이메일 전송하기</button>
        </ButtonWrapper>
      </FormContainer>
    </AboutMeContainer>
  );
};

export default Contact;
