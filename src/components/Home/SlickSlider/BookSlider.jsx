import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import './index.css';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className=" PrevArrow Arrow"
      onClick={onClick}
    >
      <span>←</span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className=" NextArrow Arrow"
      onClick={onClick}
    >
      <span>→</span>
    </div>
  );
}

class BookSlider extends React.Component {
  state = {
    Special: [
      { id: 1, name: "Linda Tobin", imgUrl: "doctor-01.Jpg", Special: "MBBS, MD - Dermatology , Venereology & Lepros", Rating: 15, Address: " Newyork, USA", Available: "Fri, 22 Mar", Price: 150, AfterDiscount: 100 },
      { id: 2, name: "Darren Elder", imgUrl: "doctor-02.Jpg", Special: "MBBS, MD - Dermatology , Venereology & Lepros", Rating: 55, Address: " Newyork, USA", Available: "Fri, 22 Mar", Price: 150, AfterDiscount: 100 },
      { id: 3, name: "Deborah Angel", imgUrl: "doctor-03.Jpg", Special: "MBBS, MD - Dermatology , Venereology & Lepros", Rating: 42, Address: " Newyork, USA", Available: "Fri, 22 Mar", Price: 150, AfterDiscount: 100 },
      { id: 4, name: "Sofia Brient", imgUrl: "doctor-04.Jpg", Special: "MBBS, MD - Dermatology , Venereology & Lepros", Rating: 5, Address: " Newyork, USA", Available: "Fri, 22 Mar", Price: 150, AfterDiscount: 100 },
      { id: 5, name: "Marvin Campbell", imgUrl: "doctor-05.Jpg", Special: "MBBS, MD - Dermatology , Venereology & Lepros", Rating: 17, Address: " Newyork, USA", Available: "Fri, 22 Mar", Price: 150, AfterDiscount: 100 },
      { id: 6, name: "Marvin Katharine Berthold", imgUrl: "doctor-06.Jpg", Special: "MBBS, MD - Dermatology , Venereology & Lepros", Rating: 23, Address: " Newyork, USA", Available: "Fri, 22 Mar", Price: 150, AfterDiscount: 100 },
    ]
  }

  render() {
    var settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 1,
      dots: false,
      nextArrow: <SamplePrevArrow />,
      prevArrow: <SampleNextArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          }
        }
      ]
    };

    return (
      <React.Fragment>
        <div className="container-margin">
          <Container fluid className="text-center cont BookSliderCont container-margin">
            <Row >
              <Col lg={4} className="slickHeaderCont">
                <h2 className="slickHeader ">احجز عند الدكاترة المتميزين</h2>
                <p className="slickparg">Lorem Ipsum is simply dummy text</p>
                <p className=" slickparg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facere
                  perspiciatis dolore dignissimos maiores minima cui impedit est sit veniam</p>
                <p className="slickparg">
                  web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
                  uncover many web sites still in their infancy.
                  Various versions have evolved over the years, sometimes
                </p>
                <NavLink to="/" className="btn btn1">read more...</NavLink>
              </Col>
              <Col lg={8}>
                <Slider ref={c => (this.slider = c)} {...settings}>
                  {this.state.Special.map((ele) => {
                    return (
                      <div className="BookSlider" key={ele.id}>
                        <div className="BookimgCont" >
                          <img src={`img/doctors/${ele.imgUrl}`} alt="" />
                          <div className="booking">
                            <i className="far fa-bookmark"></i>
                          </div>
                        </div>
                        <div className="BookSliDocNam">
                          <i className="fas fa-check-circle"></i>
                          <h3>{ele.name}</h3>
                        </div>
                        <p className="Specialization"> {ele.Special}</p>
                        <div className="star-icon ">
                          <span className="reviews">({ele.Rating})</span>
                          <i className="far fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <ul className="BookSliderDocInfo">
                          <li>
                            <span>{ele.Address}</span>
                            <i className="fas fa-map-marker-alt"></i>
                          </li>
                          <li>
                            <span>Available on {ele.Available}</span>
                            <i className="far fa-clock"></i>
                          </li>
                          <li>
                            <span>{ele.AfterDiscount}$ </span>
                            <span>- {ele.Price}$</span>
                            <i className="far fa-money-bill-alt"></i>
                          </li>
                        </ul>
                        <NavLink to="/" className="btn btn1">احجز الأن</NavLink>
                        <NavLink to="/" className="btn btn2">عرض الصفحة الشخصية</NavLink>
                      </div>
                    )
                  })}
                </Slider>
              </Col>
            </Row>
          </Container>
        </div>

      </React.Fragment>
    );
  }

}

export default BookSlider;
