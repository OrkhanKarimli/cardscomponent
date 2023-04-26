import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ReactComponent as Staricon } from "../icons/Star.svg";
import { ReactComponent as Clockicon } from "../icons/Clock.svg";
import { ReactComponent as Stackicon } from "../icons/Stack.svg";
import { ReactComponent as Beginer } from "../icons/Beginer.svg";
const Coursecard = () => {
  return (
    <div
      className="container"
      style={{ backgroundColor: "#F9F9F9", padding: "2%" }}
    >
      <div className="row">
        <div className="col-md-4 coursecard_main">
          <div className="row">
            <div className="coursecard_image">
              
            </div>
            <div className="col-md-12">
              <ul>
                <li>
                  <p>UX Design Foundations</p>
                </li>
                <li>
                  <p className="course_dot">By Ramazan Yenici</p>
               
                  <i>
                    <Staricon />
                  </i>
                  <p className="cardcourse_comments">4.8 (122)</p>
                  <h4>$128</h4>
                </li>
                <li>
               <label>
              <i><Clockicon/></i>
              <p>40min</p>
               </label>
               <label>
               <i><Stackicon/></i>
              <p>21 Modules</p>
               </label>
               <label>
               <i><Beginer/></i>
              <p>Beginer Level</p>
               </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursecard;
