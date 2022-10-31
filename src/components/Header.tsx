import styled from "styled-components";
import { flexAround, flexCenter } from "../../styles/css-style";

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  border: 1px solid red;
  ${flexAround}
`;

const Logo = styled.div`
  font-weight: 900;
  font-size: 1.8rem;
`;

const Menuitem = styled.nav`
  ${flexCenter}
  >div {
    font-weight: 700;
    line-height: 2rem;
    padding: 0px 1rem;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>DongJae' Portfolio</Logo>
      <Menuitem>
        <div>Home</div>
        <div>About Me</div>
        <div>Skills</div>
        <div>Projects</div>
        <div>Contact</div>
      </Menuitem>
    </HeaderContainer>
  );
};

export default Header;
