import React, { useState } from 'react';
import logo from './img/logo.png';
import user from './img/user_Vector.png';
import logoBlue from './img/logo_blue.png';
import * as S from '../../style/style';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const showMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <S.HeaderWrap>
      <S.LogoWrap>
        <button onClick={showMenu}>
          <S.Menu>
            <span></span>
            <span></span>
            <span></span>
          </S.Menu>
        </button>
        <button>
          <img src={logo} alt="logo" />
        </button>
      </S.LogoWrap>
      <S.UserBackground onClick={showMenu} click={menuOpen}></S.UserBackground>
      <S.UserWrap click={menuOpen}>
        <S.MoLogoWrap>
          <img src={logoBlue} alt="logo_color" />
        </S.MoLogoWrap>
        <li>
          <button>
            <img src={user} alt="user_img" />
            A가공업체
          </button>
        </li>
        <li>
          <button>로그아웃</button>
        </li>
      </S.UserWrap>
    </S.HeaderWrap>
  );
};

export default Header;
