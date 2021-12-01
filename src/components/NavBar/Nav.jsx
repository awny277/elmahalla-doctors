import React, { useEffect, useState } from 'react';
import { Col, Container, Offcanvas, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./index.css";
// import { useParams } from 'react-router-dom'

function OffCanvasNav({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="offcanButton" variant="" onClick={handleShow} >
        {name}
      </Button>
      <Offcanvas className="offcanvasContainer" show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton className="OffcaHeader">
          <Offcanvas.Title>
            <div className="OffCanImage">
              <img src={"/img/logo.png"} alt="" />
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvasBody">
          <Container>
            <div className="HomeActiveOffcan Heading ">
              <NavLink to="/" className="HomeActiveNav">الرئيسية</NavLink>
            </div>
            <div className="Invoices Heading offcanvasHeader  ">
              <div onClick={() => NavClick()} data-cont=".one" className="offcanvasLinkName active">
                <h3>الدكاتره</h3>
                <i className="fas fa-chevron-left"></i>
              </div>
              <div className=" OffCanLinks one">
                <NavLink to="/dashBoard">لوحة التحكم</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
              </div>
            </div>
            <div className=" Heading offcanvasHeader  ">
              <div onClick={() => NavClick()} data-cont=".two" className="offcanvasLinkName">
                <h3>العيادات</h3>
                <i className="fas fa-chevron-left"></i>
              </div>
              <div className=" OffCanLinks two">
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
              </div>
            </div>
            <div className="Invoices Heading offcanvasHeader ">
              <div onClick={() => NavClick()} data-cont=".three" className="offcanvasLinkName">
                <h3>العيادات</h3>
                <i className="fas fa-chevron-left"></i>
              </div>
              <div className=" OffCanLinks three">
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
              </div>
            </div>
            <div id="test" className=" Invoices Heading offcanvasHeader  ">
              <div onClick={() => NavClick()} data-cont=".four" className="offcanvasLinkName">
                <h3>العيادات</h3>
                <i className="fas fa-chevron-left"></i>
              </div>
              <div className=" OffCanLinks four">
                <NavLink to="/">test</NavLink>
                <NavLink to="/">test</NavLink>
              </div>
            </div>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      <OffCanvasNav placement={'end'} name={
        <ul className="offcanvasbutton">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      } />
    </>
  );
}

const NavClick = () => {
  let offcanvasHeader = document.querySelectorAll(".offcanvasLinkName");
  let OffCanLinks = document.querySelectorAll(".OffCanLinks");
  let ArrayoffcanvasHeader = Array.from(offcanvasHeader);
  let ArrayOffCanLinks = Array.from(OffCanLinks);
  ArrayoffcanvasHeader.forEach((ele) => {
    ele.addEventListener("click", function (e) {
      ArrayoffcanvasHeader.forEach((ele) => {
        ele.classList.remove("active");
      });
      ArrayOffCanLinks.forEach((div) => {
        // div.style.animationName = "hide";
        // div.style.animationIterationCount = 1;
        // div.animationTimingFunction = "ease-in-out";
        // div.animationDuration = "1s";
        div.style.display = "none";
      });
      document.querySelector(e.currentTarget.dataset.cont).style.display = "flex";
      document.querySelector(e.currentTarget.dataset.cont).style.animationName = "Show";
      document.querySelector(e.currentTarget.dataset.cont).style.animationIterationCount = 1;
      document.querySelector(e.currentTarget.dataset.cont).style.animationTimingFunction = "ease-in-out";
      document.querySelector(e.currentTarget.dataset.cont).style.animationDuration = "1s";
    });
  });
}

const Nav = (props) => {
  // const { id } = useParams()

  // useEffect(() => {
  //   console.log(id)
  // }, [id])
  return (
    <React.Fragment>
      <Container fluid className=" NavBar Bgwhite ">
        <Row className="justify-content-between linkCont ">
          <Col xs={4} className=" d-md-block d-lg-none slideNav">
            <Example />
          </Col>
          <Col md={4} lg={2} className="d-none d-md-block  ">
            <div className="NavImage">
              <img src={"/img/logo.png"} alt="" />
            </div>
          </Col>
          <Col md={11} lg={7} className=" d-none d-lg-block ">
            <Container className="paddingZero">
              <Row>
                <Col >
                  <div className=" Heading">
                    <h3 className="HomeActiveNav">الرئيسية</h3>
                  </div>
                </Col>
                <Col >
                  <div className=" Heading">
                    <h3>الدكاترة</h3>
                    <i className="fas fa-chevron-left"></i>
                    <div className="Links">
                      <NavLink to="/dashBoard">لوحه التحكم</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                    </div>
                  </div>
                </Col>
                <Col >
                  <div className=" Heading">
                    <h3>المرضي</h3>
                    <i className="fas fa-chevron-left"></i>
                    <div className="Links">
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                    </div>
                  </div>
                </Col>
                <Col  >
                  <div className=" Heading">
                    <h3>التقارير</h3>
                    <i className="fas fa-chevron-left"></i>
                    <div className="Links">
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                    </div>
                  </div>
                </Col>
                <Col  >
                  <div className="Invoices Heading">
                    <h3>التقارير</h3>
                    <i className="fas fa-chevron-left"></i>
                    <div className="Links">
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                    </div>
                  </div>
                </Col>
                <Col  >
                  <div className=" Heading">
                    <h3>التقارير</h3>
                    <i className="fas fa-chevron-left"></i>
                    <div className="Links">
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                      <NavLink to="/">test</NavLink>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={6} sm={6} md={4} lg={3} className=" d-none d-sm-block MRight">
            <Container className="Admin justify-content-end text-center">
              <Row className="justify-content-end">
                <Col xs={0} md={6} className="d-none d-xl-block">
                  <ul className="contactNav">
                    <li>
                      <i className="far fa-hospital"></i>
                    </li>
                    <li>
                      <p>contact </p>
                      <p>+0123456789</p>
                    </li>
                  </ul>
                </Col>
                <Col xs={6} md={6} className="Login" >
                  <div className=" LoginNav text-center">
                    <button className="btn"> login / signup</button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={6} className=" d-block d-sm-none">
            <div className="NavImage">
              <img src={"/img/logo.png"} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Nav;