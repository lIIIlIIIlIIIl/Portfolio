import React from "react";
import styled from "styled-components";

import { flexCenter } from "../../../../styles/css-style";
import ContactForm from "../../../common/ContactForm";
import {
  media_desktop1,
  media_desktop2,
  media_tablet1,
  media_tablet2,
} from "../../../../styles/css-style";

const PageContainer = styled.section`
  padding: 60px 40px;
`;

const AboutMeContainer = styled.div`
  width: 1280px;
  margin: 0 auto;

  ${media_desktop2}

  ${media_desktop1}

  ${media_tablet2}

  ${media_tablet1}
`;

const TitleBox = styled.div`
  ${flexCenter}
  margin-bottom: 30px;
  > div {
    padding-bottom: 5px;
    font-size: ${({ theme }) => theme.fontSize.size32};
    font-weight: 700;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black500};
  }
`;

const ContactBox = () => {
  return (
    <PageContainer>
      <AboutMeContainer>
        <TitleBox>
          <div>Contact</div>
        </TitleBox>
        <ContactForm />
      </AboutMeContainer>
    </PageContainer>
  );
};

export default ContactBox;
