import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 15px;

  > label {
    display: block;
  }

  > input {
    width: 100%;
    border: none;
    padding: 11px 70px 8px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black500};
    font-size: ${({ theme }) => theme.fontSize.size15};
    cursor: pointer;
  }
  > input:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.Light_Blue400};
  }
`;

interface Props {
  placeHloder: string;
  type: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  useRef: React.ForwardedRef<HTMLInputElement>;
}

const BasicInput = (props: Props) => {
  return (
    <InputContainer>
      <input
        ref={props.useRef}
        placeholder={props.placeHloder}
        type={props.type}
        onChange={props.onChangeHandler}
        value={props.value}
      />
    </InputContainer>
  );
};

export default BasicInput;
