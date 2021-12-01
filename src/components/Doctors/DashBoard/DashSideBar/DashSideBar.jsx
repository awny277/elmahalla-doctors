import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css'
const DashSideBar = () => {
  return (
    <React.Fragment>
      <div className="DashSideBar">
        <div className="imgCont">
          <img src={"/img/doctors/doctor-thumb-02.jpg"} alt="" />
        </div>
        <h3 className="text-center">Dr. Darren Elder</h3>
        <p className="text-center">BDS, MDS - Oral & Maxillofacial Surgery</p>
        <NavLink to="/">لوحة التحكم</NavLink>
        <NavLink to="/">المرضي</NavLink>
      </div>
    </React.Fragment>
  );
}

export default DashSideBar;