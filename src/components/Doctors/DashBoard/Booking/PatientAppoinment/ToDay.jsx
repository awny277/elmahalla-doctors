import React from "react";
import { NavLink } from "react-router-dom";
import { patient } from "../../../patient/patientDetails";
import "./index.css";

const ToDay = () => {
  return (
    <React.Fragment>
      <div className="ToDay">
        <table className="table-responsive  ">
          <thead>
            <tr>
              <th>اسم المريض</th>
              <th>معاد الكشف</th>
              <th>المبلغ المدفوع</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {patient.map((ele, indx) => (
              <tr key={indx}>
                <td>
                  <div className="ToDayimgCont">
                    <img src={`/img/patients/${ele.imgUrl}`} alt="" />
                  </div>
                  <div className="patient-info">
                    <h4>{ele.name} </h4>
                    <span>iD : {ele.id}</span>
                  </div>
                </td>
                <td className="text-center">
                  <h5> {ele.date}</h5>
                  <span>{ele.time}</span>
                </td>
                <td className="text-center">{ele.paid}</td>
                <td>
                  <NavLink to="/" className="btn btn-outline-info view-btn">
                    <i className="far fa-eye"></i> view
                  </NavLink>
                  <button className="btn btn-outline-success Accept-btn">
                    <i className="fas fa-check"></i> Accept
                  </button>
                  <button className="btn btn-outline-danger">
                    <i className="fas fa-times "></i> Cancel{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div></div>
      </div>
    </React.Fragment>
  );
};

export default ToDay;
