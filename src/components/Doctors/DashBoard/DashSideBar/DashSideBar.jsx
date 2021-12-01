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
        <ul>
          <li>
            <i className="fas fa-chart-line"></i>
            <NavLink to="/dashBoard/bookingDoctor">لوحة التحكم</NavLink>
          </li>
          <li>
            <i className="fas fa-calendar-check"></i>
            <NavLink to="/dashBoard/doctorsPatients">الحجز اليومي</NavLink>
          </li>
          <li>
            <i className="fas fa-hospital-user"></i>
            <NavLink to="/">المرضي</NavLink>
          </li>
          <li>
            <i className="fas fa-clock"></i>
            <NavLink to="/">جدول المواعيد</NavLink>
          </li>
          <li>
            <i className="fas fa-file-invoice-dollar"></i>
            <NavLink to="/">الفواتير</NavLink>
          </li>
          <li>
            <i className="fas fa-user-cog"></i>
            <NavLink to="/">اعدادات الملف الشخصي</NavLink>
          </li>
          <li>
            <i className="fas fa-share-alt"></i>
            <NavLink to="/">وسائل التواصل الاجتماعي</NavLink>
          </li>
          <li>
            <i className="fas fa-sign-in-alt"></i>
            <NavLink to="/">تسجيل الخروج</NavLink>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default DashSideBar;