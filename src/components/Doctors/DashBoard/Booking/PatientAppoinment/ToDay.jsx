import React from 'react';
import { NavLink } from 'react-router-dom';
import { patient } from '../../../patient/patientDetails';
import "./index.css";

const ToDay = () => {
  return (
    <React.Fragment>
      <div>
        <table>
          <tr className="ordering-table">
            <th>patient name</th>
            <th>appt date</th>
            <th>type</th>
            <th>paid amount</th>
            <th colSpan="3"></th>
          </tr>
          <tr >{patient.map((ele, indx) => (
            <><td>
              <div className="detail-section1">
                <div className="img-sec">
                  <img src={`/img/patients/${ele.imgUrl}`} alt="" />
                </div>
                <div className="par-section">
                  <h6 to="/">{ele.name} </h6>
                  <span>{ele.id}</span>
                </div>
              </div>
            </td>
            <td> <div className="date-section2">
              <h6>{ele.date}</h6>
              <span>{ele.time}</span>
            </div></td>
            <td>  <div className="type-section3">
              <h6>{ele.type}</h6>
            </div></td>
            <td> <div className="paid-section4">
              <h6>{ele.paid}</h6>
            </div></td>
            <td> <div className="button-section5">
            <NavLink to="/"><i class="far fa-eye"></i> view</NavLink>
            <button className="acc-btn"><i class="fas fa-check"></i>accept</button>
            <button className="rej-btn"><i class="fas fa-times"></i>cancel</button>
            
            </div></td>
            </>
            

          ))}</tr>
        </table>
      </div>
    </React.Fragment>
  );
}

export default ToDay;