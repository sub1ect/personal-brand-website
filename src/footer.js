import React from 'react';
// font awesome imports
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <p className="footer__info">Copyright &copy; Konrad Dźbik</p>
        <div className="footer__socials">
          <a href="https://www.instagram.com/"><FontAwesomeIcon className="footer__socials__icon" icon={faInstagram} size="2x"/></a>
          <a href="https://www.facebook.com/"><FontAwesomeIcon className="footer__socials__icon" icon={faFacebook} size="2x"/></a>
          <a href="https://twitter.com/"><FontAwesomeIcon className="footer__socials__icon" icon={faTwitter} size="2x"/></a>
        </div>
      </div>
    </footer>
  )
};


export default Footer;