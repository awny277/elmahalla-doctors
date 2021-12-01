import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Switch } from 'react-router';
import BookingDoctor from './Booking/Booking';
import DashSideBar from './DashSideBar/DashSideBar';
import DoctorsPatients from './DoctorsPatients/DoctorsPatients';
import './index.css';
const DashBoard = () => {
  return (
    <React.Fragment>
      <div className="Dashpath">
        <p>الرئيسية / لوحة التحكم</p>
        <h2>لوحة التحكم</h2>
      </div>
      <Container fluid className="justify-content-around DashBoard">
        <Row>
          <Col lg={3}><DashSideBar /></Col>
          <Col lg={8}>
            <Switch>
              <Route path="/dashBoard/bookingDoctor" component={BookingDoctor} />
              <Route path="/dashBoard/doctorsPatients" component={DoctorsPatients} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default DashBoard;