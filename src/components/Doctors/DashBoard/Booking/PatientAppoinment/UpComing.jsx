import React from 'react';
import { NavLink } from 'react-router-dom';
import { patient } from '../../../patient/patientDetails';
import "./index.css";

const UpComing = () => {

  return (
    <React.Fragment>

      <div className="upcoming-table">
        <hr />
        <ul className="ordering-table">
          <li>patient name</li>
          <li>appt date</li>
          <li>type</li>
          <li>paid amount</li>
          <li></li>
        </ul>
        {patient.map((ele, indx) => (
          <div className="list-sections" key={indx}>
            <div className="detail-section1">
              <div className="img-sec">
                <img src={`/img/patients/${ele.imgUrl}`} alt="" />
              </div>
              <div className="par-section">
                <h6 to="/">{ele.name} </h6>
                <span>{ele.id}</span>
              </div>
            </div>
            <div className="date-section2">
              <h6>{ele.date}</h6>
              <span>{ele.time}</span>
            </div>
            <div className="type-section3">
              <h6>{ele.type}</h6>
            </div>
            <div className="paid-section4">
              <h6>{ele.paid}</h6>
            </div>
            <div className="button-section5">
              <NavLink to="/"><i className="far fa-eye"></i> view</NavLink>
              <button className="acc-btn"><i className="fas fa-check"></i>accept</button>
              <button className="rej-btn"><i className="fas fa-times"></i>cancel</button>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default UpComing;