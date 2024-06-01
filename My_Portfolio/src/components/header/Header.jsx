import React from 'react';
import CTA from './CTA';
import './header.css';
import HeaderSocials from './HeaderSocials';
import img from "../../assets/me22.jpg";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
      <div className="header__image">
            <img src={img} alt="Ashwin" />
          </div>
        <h2>Hello I'm</h2>
        <h1 className="name-highlight">Venugopalan Ashwin</h1>
        <h3>BICT(Hons) - Specializing in software systems technology</h3>
        <CTA />
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
