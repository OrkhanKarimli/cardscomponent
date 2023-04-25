import React from "react";
import "bootstrap/dist/css/bootstrap.css";
const Courseprogress = () => {
  return (
    <div
      className="container"
      style={{ backgroundColor: "#F9F9F9", padding: "2%" }}
    >
      <div className="col-md-4 course_main">
        <div className="row">
          <div className="course_img"></div>
          <div className="col-md-12">
            <ul>
              <li><p>UX Design Foundations</p></li>
              <li><p>Sen Janson</p></li>
              <li></li>
              <li className="d-flex justify-content-between">
                <p>
                Course progress
                </p>
               <label>50%</label> 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courseprogress;
