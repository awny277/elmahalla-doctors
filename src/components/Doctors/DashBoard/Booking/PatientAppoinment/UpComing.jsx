import React from 'react';
import { NavLink } from 'react-router-dom';
import { patient } from '../../../patient/patientDetails';
import "./index.css";

const UpComing = () => {

  return (
    <React.Fragment>
      <div>
        {patient.map((ele, indx) => (
          <p>{ele.name}</p>
        ))}
      </div>
    </React.Fragment>
  );
}

export default UpComing;