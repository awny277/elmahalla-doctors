import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import './index.css';

class ClinicSlider extends React.Component {
  state = {
    Special: [
      { id: 1, name: "جراحة المسالك البولية", imgUrl: "specialities-01.png" },
      { id: 2, name: " الأعصاب", imgUrl: "specialities-02.png" },
      { id: 3, name: "تقويم العظام", imgUrl: "specialities-03.png" },
      { id: 4, name: " قلب", imgUrl: "specialities-04.png" },
      { id: 5, name: "أسنان", imgUrl: "specialities-05.png" },
      { id: 6, name: "تقويم العظام", imgUrl: "specialities-03.png" },
    ]
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      appendDots: dots => (
        <div
          style={{
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <ul style={{ margin: "50px auto 0", width: "50%" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div className="dots">
        </div>
      ),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <React.Fragment>
        <Container className="text-center cont">
          <h2 className="slickHeader "> العيادات والتخصصات </h2>
          <p className=" slickparg">يوجد لدينا جميع التخصصات والعيادات في المحلة الكبرى </p>
          <Slider {...settings}>
            {this.state.Special.map((ele) => {
              return (
                <div className="MainSlick" key={ele.id}>
                  <div className="imgContainer" >
                    <div className="afterCricle"></div>
                    <img src={`img/specialities/${ele.imgUrl}`} alt="" />
                  </div>
                  <h3>{ele.name}</h3>
                </div>
              )
            })}
          </Slider>
        </Container>
      </React.Fragment>
    );
  }
}

export default ClinicSlider;
