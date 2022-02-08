import React from 'react';
import logo from './img/logo.png';
import user from './img/user_Vector.png';

const Header: React.FC = () => {
  return (
    <header>
      <div>
        <button>
          <img src={logo} alt="logo" />
        </button>
      </div>
      <div>
        <button>
          <img src={user} alt="user_img" />
          A가공업체
        </button>
      </div>
    </header>
  );
};

export default Header;
