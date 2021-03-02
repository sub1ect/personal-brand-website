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
    <nav className="header__nav" style={hamburgerOpen ? {display: "none"} : {display: "flex"}}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
};


export default Header;