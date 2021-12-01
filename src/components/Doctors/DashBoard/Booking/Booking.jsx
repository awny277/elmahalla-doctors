import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import ToDay from './PatientAppoinment/ToDay';
import UpComing from './PatientAppoinment/UpComing';
import { NavLink } from 'react-router-dom';
import './index.css';
const BookingDoctor = () => {
  let total = [
    { name: "Total Patient", number: 1500, date: "Till Today", imgUrl: "icon-01.png" },
    { name: "Today Patient", number: 160, date: "06, Nov 2019", imgUrl: "icon-02.png" },
    { name: "Appoinments", number: 85, date: "06, Apr 2019", imgUrl: "icon-03.png" }
  ]
  return (
    <React.Fragment>
      <div className="BookingDoctor">
        <div className="total">
          {total.map((ele, indx) => (
            <div className="total-sections" key={indx} id={`total-sections${indx}`}>
              <div className="img-section" id={`total${indx}`}>
                <img src={`/img/${ele.imgUrl}`} alt="" />
              </div>
              <div className="details">
                <h6>{ele.name}</h6>
                <h3>{ele.number}</h3>
                <p>{ele.date}</p>
              </div>
            </div>
          ))}
        </div>
        <h2>مواعيد الحجوزات</h2>
        <div className="BookingContainer">
          <NavLink to="/dashBoard/bookingDoctor/ToDay" className="todayLink">اليوم</NavLink>
          <NavLink to="/dashBoard/bookingDoctor/UpComing" className="WaitingLink">الأنتظار</NavLink>
          <Switch>
            <Route path="/dashBoard/bookingDoctor/UpComing" component={UpComing} />
            <Route path="/dashBoard/bookingDoctor/ToDay" component={ToDay} />
            <Redirect from="/dashBoard/bookingDoctor/" to="/dashBoard/bookingDoctor/ToDay" />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BookingDoctor;