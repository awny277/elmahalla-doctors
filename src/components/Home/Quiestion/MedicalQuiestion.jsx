import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './index.css';

const IntroduceCont = () => {
  return (
    <React.Fragment>
      <Container fluid className="introduceCont">
        <Row className=" justify-content-around">
          <Col lg={5}>
            <div className="introduce">
              <h2> ليه تحجز من عندنا ؟ </h2>
              <ul>
                <li>
                  <i className="fas fa-thumbs-up"></i>
                  <h3>منصة المحلة دكتور هى أسهل وأسرع طريقة لحجز الأطباء</h3>
                </li>
                <li>
                  <i className="fas fa-thumbs-up"></i>
                  <h3>بتوصلك لأشطر الدكاترة فى جميع التخصصات</h3>
                </li>
                <li>
                  <i className="far fa-bookmark"></i>
                  <h3> بتحجز فى  أى وقت وأى مكان</h3>
                </li>
                <li>
                  <i className="fas fa-clock"></i>
                  <h3>خدمة مجانية يعنى بتدفع فى العيادة من غير زيادة</h3>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={5}>
            <div className="imgCont">
              <img src={"./img/information.svg"} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default IntroduceCont;
