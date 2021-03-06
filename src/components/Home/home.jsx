import React from 'react';
import ClinicSlider from './SlickSlider/Clinic';
import BookSlider from './SlickSlider/BookSlider';
import './index.css';
import IntroduceCont from './Quiestion/MedicalQuiestion';
import Feature from './Quiestion/feature';
import Landing from './Landing/Landing';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* start Landing */}
        <Landing />
        {/* start ClinicSlider */}
        <ClinicSlider />
        {/* start BookSlider */}
        <BookSlider />
        {/* start medical questions */}
        <IntroduceCont />
        {/* start Feature */}
        <Feature />
      </React.Fragment>
    );
  }
}

export default Home;
