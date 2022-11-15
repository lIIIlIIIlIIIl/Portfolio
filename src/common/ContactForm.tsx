import styled from "styled-components";
import emailjs from "@emailjs/browser";

import BasicInput from "./BasicInput";
import useInput from "../hooks/useInput";
import useTextarea from "../hooks/useTextarea";
import { useRef } from "react";

const ContactForm = () => {
  const name = useInput("");
  const phone = useInput("");
  const email = useInput("");
  const message = useTextarea("");
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

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
        alert("이메일을 보내주심에 감사합니다. 3일 이내에 회신하겠습니다.");
        name.value = "";
        phone.value = "";
        email.value = "";
        message.value = "";
        nameRef.current!.value = "";
        phoneRef.current!.value = "";
        emailRef.current!.value = "";
        messageRef.current!.value = "";
      });
  };

  return (
    <FormContainer onSubmit={onSubmitHandler}>
      <BasicInput
        useRef={nameRef}
        type="text"
        placeHloder="이름을 입력해주세요"
        onChangeHandler={name.onChange}
        value={name.value}
      />
      <BasicInput
        useRef={phoneRef}
        type="text"
        placeHloder="전화번호를 입력해주세요"
        onChangeHandler={phone.onChange}
        value={phone.value}
      />
      <BasicInput
        useRef={emailRef}
        type="email"
        placeHloder="이메일을 입력해주세요"
        onChangeHandler={email.onChange}
        value={email.value}
      />
      <MessageWrapper>
        <textarea
          ref={messageRef}
          placeholder="메시지를 입력해주세요"
          onChange={message.onChange}
          value={message.value}
        ></textarea>
      </MessageWrapper>
      <ButtonWrapper>
        <button>이메일 전송하기</button>
      </ButtonWrapper>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  width: 40%;
  margin: 0 auto;
  padding: 60px 45px;
  border: 1px solid ${({ theme }) => theme.colors.black500};
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet2}) {
    width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet1}) {
    width: 80%;
    padding: 60px 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 100%;
  }
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
  > textarea:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.Light_Blue400};
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
    background-color: ${({ theme }) => theme.colors.Light_Blue400};
    cursor: pointer;
  }
`;

export default ContactForm;
