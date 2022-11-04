import Link from "next/link";
import styled from "styled-components";
import { flexAround, flexCenter } from "../../styles/css-style";

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  ${flexAround}
`;

const Logo = styled.div`
  font-weight: 900;
  font-size: 1.8rem;
`;

const Menuitem = styled.nav`
  ${flexCenter}
`;

const ChlidA = styled.span`
  font-weight: 700;
  line-height: 2rem;
  padding: 0px 1rem;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <Logo>DongJae' Portfolio</Logo>
      </Link>
      <Menuitem>
        <Link href="/">
          <ChlidA>HOME</ChlidA>
        </Link>
        <Link href="/about">
          <ChlidA>ABOUT</ChlidA>
        </Link>
        <Link href="/projects">
          <ChlidA>PROJECT</ChlidA>
        </Link>
        <Link href="/contact">
          <ChlidA>CONTACT</ChlidA>
        </Link>
        <Link href="https://github.com/lIIIlIIIlIIIl" target="_blank">
          <ChlidA>GITHUB</ChlidA>
        </Link>
      </Menuitem>
    </HeaderContainer>
  );
};

export default Header;
