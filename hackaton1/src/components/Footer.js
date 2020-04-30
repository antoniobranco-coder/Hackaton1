import React from 'react';
import './Footer.css';
import linkedin from '../assets/images/linkedin.png';
import facebook from '../assets/images/facebook.png';
import insta from '../assets/images/instagram.png';

const Footer = () => (
  <footer className="containerFooter">
    <div className="footerList">
      Created by
      <a href="https://github.com/Numissa11" target="blank_">
        <span> Aline Sinclaire</span>
      </a>
      <a href="https://github.com/antoniobranco-coder" target="blank_">
        <span>, Antonio Branco</span>
      </a>
      <a href="https://github.com/MargSousa" target="blank_">
        <span> and Margarida Sousa</span>
      </a>
    </div>
    <div className="copyRight">
      <span> Wild Code School 2020</span>
      <span className="copy">
        <a
          href="https://www.facebook.com/wildcodeschoolportugal/"
          target="blank_"
        >
          <img className="icon" src={facebook} alt="icon" />
        </a>
        <a
          href="https://www.instagram.com/wildcodeschoollisbon/"
          target="blank_"
        >
          <img className="icon" src={insta} alt="icon" />
        </a>
        <a
          href="https://www.linkedin.com/school/wild-codes-chool/"
          target="blank_"
        >
          <img className="icon" src={linkedin} alt="icon" />
        </a>
      </span>
    </div>
  </footer>
);
export default Footer;
