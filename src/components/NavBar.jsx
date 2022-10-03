import React from 'react';
import HeaderLogo from '../assets/logo.svg';
import { FiMenu } from 'react-icons/fi';

const NavBar = () => {
  return (
    <header>
      <nav className="nav-bar">
        <div className="brand-logo">
          <img src={HeaderLogo} alt="my team logo"></img>
        </div>
        <button className="menu-btn">
          <FiMenu />
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
