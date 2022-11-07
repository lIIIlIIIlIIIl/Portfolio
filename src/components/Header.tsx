import Link from "next/link";
import styled from "styled-components";
import { flexAround, flexCenter } from "../../styles/css-style";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const HeaderWapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
`;

const HeaderContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 90%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 90%;
  }
`;

const Logo = styled.div`
  font-weight: 900;
  font-size: 1.8rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    font-size: 1.3rem;
  }
`;

const NavMenu = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    display: block;
  }
`;

const Menuitem = styled.nav`
  ${flexCenter}

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 60px;
    width: 100%;
    z-index: 1;
    background-color: #ffffff;
    box-shadow: rgb(0 0 0 / 4%) 0px 3px 6px 0px,
      rgb(0 0 0 / 4%) 0px -1px 1px 0px inset;
  }
`;

const NavLink = styled(Link)<{ display: boolean }>`
  @media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    display: ${({ display }) => (display ? "block" : "none")};
  }
`;

const ChlidA = styled.span`
  font-weight: 700;
  padding: 0 1rem;
  cursor: pointer;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 0 0.5rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    line-height: 1.6;
  }
`;

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const onClickHandler = () => setOpenMenu(!openMenu);

  return (
    <HeaderWapper>
      <HeaderContainer>
        <Link href="/">
          <Logo>DongJae's Portfolio</Logo>
        </Link>
        <NavMenu onClick={onClickHandler}>
          {openMenu ? <MdClose size={20} /> : <FiMenu size={20} />}
        </NavMenu>
        <Menuitem>
          <NavLink display={openMenu} href="/" onClick={onClickHandler}>
            <ChlidA>HOME</ChlidA>
          </NavLink>
          <NavLink display={openMenu} href="/about" onClick={onClickHandler}>
            <ChlidA>ABOUT</ChlidA>
          </NavLink>
          <NavLink display={openMenu} href="/projects" onClick={onClickHandler}>
            <ChlidA>PROJECT</ChlidA>
          </NavLink>
          <NavLink display={openMenu} href="/contact" onClick={onClickHandler}>
            <ChlidA>CONTACT</ChlidA>
          </NavLink>
          <NavLink
            display={openMenu}
            href="https://github.com/lIIIlIIIlIIIl"
            target="_blank"
            onClick={onClickHandler}
          >
            <ChlidA>GITHUB</ChlidA>
          </NavLink>
        </Menuitem>
      </HeaderContainer>
    </HeaderWapper>
  );
};

export default Header;
