import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";

import { flexCenter } from "../../styles/css-style";

const FooterContainer = styled.footer`
  background-color: #222222;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0;
  > a {
    display: block;
    margin-bottom: 1rem;
  }
  > div {
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <a href="https://github.com/lIIIlIIIlIIIl" target="_blank">
        <VscGithub size="3rem" color="white" />
      </a>
      <div>© 2022. Shin Dong Jae. All rights reserved.</div>
    </FooterContainer>
  );
};

export default Footer;
