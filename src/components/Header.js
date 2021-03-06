import React, {useState} from 'react';
// font awesome imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDumbbell} from "@fortawesome/free-solid-svg-icons";



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
        <Navigation hamburgerButton={hamburgerButton} hamburgerOpen={hamburgerOpen}/>
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

const Navigation = ({hamburgerButton, hamburgerOpen}) => {

  const linkHandle = (e) => {
    if(!e.target.parentElement.parentElement.parentElement.className.includes("closed")) {
      hamburgerButton();
    }
  }; 

  return (
    <nav className={hamburgerOpen ? "header__nav closed" : "header__nav"}>
      <ul>
        <li><a onClick={e => linkHandle(e)} href="#">Home</a></li>
        <li><a onClick={e => linkHandle(e)} href="#about">About</a></li>
        <li><a onClick={e => linkHandle(e)} href="#pricing">Pricing</a></li>
        <li><a onClick={e => linkHandle(e)} href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
};


export default Header;