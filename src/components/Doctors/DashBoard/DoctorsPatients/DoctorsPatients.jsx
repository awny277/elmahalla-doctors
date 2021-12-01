import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { patient } from '../../patient/patientDetails';
import './index.css'
const DoctorsPatients = () => {
  return (
    <React.Fragment>
      {/* <Container>
        <Row>
          {patient.map((ele, indx) => (
            <Col xs={6} sm={4} md={4} xl={3} key={indx} className="DoctorsPatients text-center">
              <div className="imgCont">
                <img src={`/img/patients/${ele.imgUrl}`} alt="" />
              </div>
              <h6 className="" >{ele.name}</h6>
              <p>رقم المريض : <span>{ele.id}</span></p>
              <div className="location">
                <i className="fas fa-map-marker-alt"></i>
                <span>{ele.location}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <h6>الرقم</h6>
                <span>0123456789+</span>
              </div>
              <div className="d-flex justify-content-between">
                <h6>العمر</h6>
                <span>{ele.Age} سنه</span>
              </div>
              <div className="d-flex justify-content-between">
                <h6>فصيلة الدم</h6>
                <span>+O</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container> */}
      <div className="DoctorsPatientsCont">
        {patient.map((ele, indx) => (
          <div key={indx} className="DoctorsPatients text-center">
            <div className="imgCont">
              <img src={`/img/patients/${ele.imgUrl}`} alt="" />
            </div>
            <h6 className="" >{ele.name}</h6>
            <p>رقم المريض : <span>{ele.id}</span></p>
            <div className="location">
              <i className="fas fa-map-marker-alt"></i>
              <span>{ele.location}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h6>الرقم</h6>
              <span>0123456789+</span>
            </div>
            <div className="d-flex justify-content-between">
              <h6>العمر</h6>
              <span>{ele.Age} سنه</span>
            </div>
            <div className="d-flex justify-content-between">
              <h6>فصيلة الدم</h6>
              <span>+O</span>
            </div>
          </div>
        ))}
      </div>

    </React.Fragment>
  );
}

export default DoctorsPatients;