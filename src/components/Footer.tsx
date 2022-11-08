import styled from "styled-components";
import { VscGithub } from "react-icons/vsc";

const FooterContainer = styled.footer`
  margin-top: auto;
  background-color: #222222;
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
