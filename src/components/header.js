import React, {useState} from 'react';
// font awesome imports
import {faDumbbell} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(true);

  const hamburgerButton = () => {
    hamburgerOpen ? setHamburgerOpen(false) : setHamburgerOpen(true);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Logo />
        <Hamburger hamburgerButton={hamburgerButton} hamburgerOpen={hamburgerOpen}/>
        <Navigation hamburgerOpen={hamburgerOpen}/>
      </div>
    </header>
  );
};

const Logo = () => {
  return (
    <div className="header__logo">
          <FontAwesomeIcon icon={faDumbbell} size="3x"/>
          <p className="text">KD</p>
    </div>
  )
};

const Hamburger = ({hamburgerButton, hamburgerOpen}) => {
  return (
    <div onClick={hamburgerButton} className={hamburgerOpen ? "header__hamburger" : "header__hamburger open"}>
      <div></div>
    </div>
  );
};

const Navigation = ({hamburgerOpen}) => {
  return (
    <nav className={hamburgerOpen ? "header__nav closed" : "header__nav"}>
      <ul>
        <li><a href="home">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="pricing">Pricing</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
    </nav>
  )
};


export default Header;