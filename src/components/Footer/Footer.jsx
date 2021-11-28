import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./index.css";
const Footer = () => {
  return (
    <React.Fragment>
      <Container fluid className="Footer">
        <Row>
          <Col md={4} className="FooterLogo">
            <div className="imgCont">
              <img src={"./img/footer-logo.png"} alt="" />
            </div>
            <p>المحلة دكتور لحجز الدكاترة وتضم أكبر عيادات و صيدليات نغطي جميع المناطق بالمحلة الكبري.</p>
            <div className="FooterIconLink">
              <NavLink to="/"><i className="fab fa-whatsapp"></i></NavLink>
              <NavLink to="/"><i className="fab fa-facebook"></i></NavLink>
              <NavLink to="/"><i className="fab fa-twitter"></i></NavLink>
              <NavLink to="/"><i className="fab fa-instagram"></i></NavLink>
            </div>
          </Col>
          <Col md={2} className="FooterLinks">
            <h4>For Patients</h4>
            <ul>
              <li>
                <i className="fas fa-angle-double-left"></i>
                <NavLink to="/">test</NavLink>
              </li>
              <li>
                <i className="fas fa-angle-double-left"></i>
                <NavLink to="/">test</NavLink>
              </li>
              <li>
                <i className="fas fa-angle-double-left"></i>
                <NavLink to="/">test</NavLink>
              </li>
              <li>
                <i className="fas fa-angle-double-left"></i>
                <NavLink to="/">test</NavLink>
              </li>
              <li>
                <i className="fas fa-angle-double-left"></i>
                <NavLink to="/">test</NavLink>
              </li>
            </ul>
          </Col>
          <Col md={2} className="FooterLinks">
            <h4>For Doctors</h4>
            <ul>
              <li>
                <i className="fas fa-angle-double-left"></i>
                <NavLink to="/">test</NavLink>
              </li>
              <li>
                <i className="fas fa-angle-double-left"></i>
                <NavLink to="/">test</NavLink>
              </li>
              <li>
                <i className="fas fa-angle-double-left"></i>
                <NavLink to="/">test</NavLink>
              </li>
              <li>
                <i className="fas fa-angle-double-left"></i>
                <NavLink to="/">test</NavLink>
              </li>
              <li>
                <i className="fas fa-angle-double-left"></i>
                <NavLink to="/">test</NavLink>
              </li>
            </ul>
          </Col>
          <Col md={4} className="FooterContact">
            <h2>Contact Us</h2>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <p>3556 Beech Street, San Francisco,California, CA 94108</p>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <p>+0123456789</p>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <p>doccure@example.com</p>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <div className="rights ">
          <div className="allRights">
            <p>Doccure. All rights reserved. 2020 <span>&copy;</span> </p>
          </div>
          <div className="FotterPolicy">
            <NavLink to="/">Policy</NavLink>
            <NavLink to="/">Terms and Conditions</NavLink>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Footer;