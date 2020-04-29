import React from 'react';
import './Footer.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import twitter from './logos/twitter.png';
import facebook from './logos/facebook.png';
import insta from './logos/insta.png';
const Footer = () => (
  <Row lg={1}>
    <Col sm={12} lg={12}>
      <footer className="containerFooter">
        <ul className="footerList">
          <a href="https://github.com/MargSousa">Margarida Sousa</a>
          <a href="https://www.https://github.com/Numissa11">Aline Sinclaire</a>
          <a href="https://github.com/antoniobranco-coder">Antonio Branco </a>
        </ul>
        <ul className="footerList3">
          <img
            style={{
              marginLeft: '8px',
              marginTop: '15px',
              marginBottom: '13px',
            }}
            className="tw"
            src={twitter}
            alt="twitter logo"
          />
          <img className="fb" src={facebook} alt="facebook logo" />
          <img className="fb" src={insta} alt="facebook instagramme" />
        </ul>
        <ul className="copyRight">
          <p> &copy; Copyright 2020 </p>
        </ul>
      </footer>
    </Col>
  </Row>
);
export default Footer;
