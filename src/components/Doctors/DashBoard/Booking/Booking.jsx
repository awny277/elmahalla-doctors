import React from 'react';
import './index.css';
const BookingDoctor = () => {
  let total = [
    {name:"Total Patient",number:1500,date:"Till Today",imgUrl:"icon-01.png"},
    {name:"Today Patient",number:160,date:"06, Nov 2019",imgUrl:"icon-02.png" },
    {name:"Appoinments",number:85,date:"06, Apr 2019",imgUrl:"icon-03.png"}
  ]
  return (
    <React.Fragment>
      <div className="total">
        {total.map((ele ,indx)=>(
          <div className="total-sections" key={indx}  id={`total-sections${indx}`}>
            <div className="img-section"  id={`total${indx}`}>
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
    </React.Fragment>
  );
}

export default BookingDoctor;