import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import './index.css';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="NextArrow Arrow"
      onClick={onClick}
    >
      <i className="fas fa-chevron-right"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="PrevArrow Arrow"
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </div>
  );
}
export var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SamplePrevArrow />,
  prevArrow: <SampleNextArrow />,
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
