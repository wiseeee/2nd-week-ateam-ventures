import React, { useState } from 'react';
import logo from './img/logo.png';
import user from './img/user_Vector.png';
import logoBlue from './img/logo_blue.png';
import {
  HeaderWrap,
  LogoWrap,
  UserWrap,
  Menu,
  UserBackground,
} from '../../style/style';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const showMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <HeaderWrap>
      <LogoWrap>
        <a href="#" onClick={showMenu}>
          <Menu>
            <span></span>
            <span></span>
            <span></span>
          </Menu>
        </a>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </LogoWrap>
      <UserBackground onClick={showMenu} click={menuOpen}></UserBackground>
      <UserWrap click={menuOpen}>
        <img src={logoBlue} alt="logo_color" />
        <li>
          <a href="#">
            <img src={user} alt="user_img" />
            A가공업체
          </a>
        </li>
        <li>
          <a href="#">로그아웃</a>
        </li>
      </UserWrap>
    </HeaderWrap>
  );
};

export default Header;
