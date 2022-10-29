import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from '../assets/logo.svg';
import { ReactComponent as FbLogo } from '../assets/icon-facebook.svg';
import { ReactComponent as PintLogo } from '../assets/icon-pinterest.svg';
import { ReactComponent as TwitterLogo } from '../assets/icon-twitter.svg';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <img src={FooterLogo} alt="my team logo"></img>
          <div className="footer-links">
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
          </div>
        </div>
        <div className="footer-contact">
          <p>987 Hillcrest Lane</p>
          <p>Irvine, CA</p>
          <p>California 92714</p>
          <p>Call Us: 949-833-7432</p>
        </div>
        <div className="social-links">
          <a href="">
            <FbLogo />
          </a>
          <a href="">
            <PintLogo />
          </a>
          <a href="">
            <TwitterLogo />
          </a>
        </div>
      </div>
      <p className="p-small copyright">Copyright 2020. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
