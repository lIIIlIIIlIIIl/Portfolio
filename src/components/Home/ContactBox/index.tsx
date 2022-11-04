import React from "react";
import styled from "styled-components";

import { flexCenter } from "../../../../styles/css-style";
import ContactForm from "../../../common/ContactForm";

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
    border-bottom: 2px solid ${({ theme }) => theme.colors.black500};
  }
`;

const ContactBox = () => {
  return (
    <AboutMeContainer>
      <TitleBox>
        <div>Contact</div>
      </TitleBox>
      <ContactForm />
    </AboutMeContainer>
  );
};

export default ContactBox;
