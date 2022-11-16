import Link from "next/link";
import styled from "styled-components";
import {
  flexCenter,
  media_desktop1,
  media_desktop2,
  media_tablet1,
  media_tablet2,
} from "../../styles/css-style";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import React, { useEffect, useRef, useState } from "react";

const HeaderWapper = styled.header`
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  transition: 0.5s ease;
  &.hide {
    transform: translateY(-80px);
  }
`;

const HeaderContainer = styled.div`
  width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  ${media_desktop2}

  ${media_desktop1}

  ${media_tablet2}

  ${media_tablet1}
`;

const Logo = styled.div`
  width: 300px;
  padding-top: 10px;

  > a {
    cursor: pointer;
    > img {
      width: 100%;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 250px;
  }
`;

const NavMenu = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet2}) {
    display: block;
    cursor: pointer;
  }
`;

const Menuitem = styled.nav<{ visible: boolean }>`
  ${flexCenter}

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet2}) {
    flex-direction: column;
    text-align: center;
    position: absolute;
    right: 0;
    top: 80px;
    width: 100%;
    z-index: 1;
    background-color: #ffffff;
    box-shadow: rgb(0 0 0 / 4%) 0px 3px 6px 0px,
      rgb(0 0 0 / 4%) 0px -1px 1px 0px inset;
    cursor: pointer;
    @media (max-width: ${({ theme }) => theme.breakPoints.tablet2}) {
      display: ${({ visible }) => (visible ? "block" : "none")};
    }
  }
`;

const NavLink = styled(Link)`
  padding: 8px 16px;
`;

const ChlidA = styled.span`
  font-weight: 700;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.Light_Blue400};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet2}) {
    line-height: 2;
  }
`;

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);
  const layoutRef = useRef<HTMLDivElement>(null);

  let documentRef: React.MutableRefObject<Document>;
  if (typeof document !== "undefined") {
    documentRef = useRef(document);
  }

  const throttle = (callback: () => void, waitTime: number) => {
    let timerId: NodeJS.Timeout | null = null;
    return (e: any) => {
      if (timerId) return;
      timerId = setTimeout(() => {
        callback.call(e);
        timerId = null;
      }, waitTime);
    };
  };

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
    setHide(hide);
    setPageY(pageYOffset);
  };

  const throttleScroll = throttle(handleScroll, 50);

  useEffect(() => {
    documentRef.current.addEventListener("scroll", throttleScroll);
    return () =>
      documentRef.current.removeEventListener("scroll", throttleScroll);
  }, [pageY]);

  const onClickHandler = () => setOpenMenu(!openMenu);

  return (
    <HeaderWapper className={hide ? "hide" : ""} ref={layoutRef}>
      <HeaderContainer>
        <Logo>
          <Link href="/">
            <img src="/Project/02.png" />
          </Link>
        </Logo>
        <NavMenu onClick={onClickHandler}>
          {openMenu ? <MdClose size={20} /> : <FiMenu size={20} />}
        </NavMenu>
        <Menuitem visible={openMenu}>
          <NavLink href="/" onClick={onClickHandler}>
            <ChlidA>HOME</ChlidA>
          </NavLink>
          <NavLink href="/about" onClick={onClickHandler}>
            <ChlidA>ABOUT</ChlidA>
          </NavLink>
          <NavLink href="/project" onClick={onClickHandler}>
            <ChlidA>PROJECT</ChlidA>
          </NavLink>
          <NavLink href="/contact" onClick={onClickHandler}>
            <ChlidA>CONTACT</ChlidA>
          </NavLink>
          <NavLink
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
