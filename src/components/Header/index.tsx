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
  MoLogoWrap,
} from '../../style/style';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const showMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderWrap>
      <LogoWrap>
        <button onClick={showMenu}>
          <Menu>
            <span></span>
            <span></span>
            <span></span>
          </Menu>
        </button>
        <button>
          <img src={logo} alt="logo" />
        </button>
      </LogoWrap>
      <UserBackground onClick={showMenu} click={menuOpen}></UserBackground>
      <UserWrap click={menuOpen}>
        <MoLogoWrap>
          <img src={logoBlue} alt="logo_color" />
        </MoLogoWrap>
        <li>
          <button>
            <img src={user} alt="user_img" />
            A가공업체
          </button>
        </li>
        <li>
          <button>로그아웃</button>
        </li>
      </UserWrap>
    </HeaderWrap>
  );
};

export default Header;
