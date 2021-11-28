import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import "./index.css";
class Landing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid className="HomeLanding text-center">
          <div className="HomeLandingcont">
            <Row>
              <Col md={6} >
                <div className="LandingBooking">
                  <h1>محتاج دكتور شاطر؟</h1>
                  <div className="LandingCall">
                    <h2>احجز أونلاين أو احنا نحجزلك</h2>
                    <NavLink to="/" className="btn"><i className="fas fa-phone"></i> اتصل بينا </NavLink>
                  </div>
                  <p>ادفع فى العيادة من غير زيادة</p>
                </div>
              </Col>
              <Col md={6}>
                <div className="SearchCont">
                  <h2>ابحث عن طبيب ، حدد موعد</h2>
                  <p>اكتشف أفضل الأطباء والعيادة والمستشفى في المدينة الأقرب إليك</p>
                  <div className=" SearchContInput">
                    <div className="SearchInput">
                      <i className="fas fa-search"></i>
                      <input type="search" name="" id="" placeholder="Search For a Doctor" />
                    </div>
                    <NavLink to="/" className="btn SearchButton">
                      <i className="fas fa-search "></i>
                      بحث
                    </NavLink>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Landing;