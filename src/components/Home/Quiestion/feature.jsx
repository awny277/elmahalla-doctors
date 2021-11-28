import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './index.css';
const Feature = () => {
  return (
    <React.Fragment >
      <div className="Feature">
        <h2>ليه المحلة دكتور الاختيار الامثل ليك؟</h2>
        <Container fluid>
          <Row className=" justify-content-around text-center">
            <Col sm={5} md={4}>
              <div className="featureCont">
                <img src={"./img/img-features-03.svg"} alt="" />
                <h4>ابحث بالتخصص والمنطقة</h4>
                <p> اختار التخصص اللي بتدور عليه و المنطقة الأقرب ليك و دوس بحث هتلاقي مجموعة من أشطر الدكاترة تقدر تختار اقرب واحسن دكتور.</p>
              </div>
            </Col>
            <Col sm={5} md={4}>
              <div className="featureCont">
                <img src={"./img/img-features-02.svg"} alt="" />
                <h4>احجز عند اشطر دكتور وادفع فى العيادة</h4>
                <p> قارن بين تقييمات الدكاترة و سعر الكشف المناسب ليك و احجز معادك اونلاين ببلاش وادفع تمن الكشف في العيادة من غير زيادة .</p>
              </div>
            </Col>
            <Col sm={5} md={4}>
              <div className="featureCont">
                <img src={"./img/img-features-01.svg"} alt="" />
                <h4>استلم روشتتك و إحفظها على حسابك</h4>
                <p>الروشتة والعلاج مش هيضيع بعد كدة لأن حسابك على كلينيدو بيخليك تقدر تحفظ كل روشتاتك و فحوصاتك و تشاركها مع
                  دكتورك لضمان افضل تشخيص.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Feature;