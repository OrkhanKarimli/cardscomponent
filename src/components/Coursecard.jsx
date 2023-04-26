import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { ReactComponent as Staricon } from "../icons/Star.svg";
import { ReactComponent as Clockicon } from "../icons/Clock.svg";
import { ReactComponent as Stackicon } from "../icons/Stack.svg";
import { ReactComponent as Beginer } from "../icons/Beginer.svg";
const Coursecard = ({
  imgSrc,
  courseTitle,
  courseAuthor,
  coursePrice,
  courseTime,
  courseModules,
  courseLevel
}) => {
  return (
    <div
      className="container"
      style={{ backgroundColor: "#F9F9F9", padding: "2%" }}
    >
      <div className="row">
        <div className="col-md-4 coursecard_main">
          <div className="row">
            <div className="coursecard_image">
              <img src={imgSrc}>
              </img>
            </div>
            <div className="col-md-12">
              <ul>
                <li>
                  <p>{courseTitle}</p>
                </li>
                <li>
                  <p className="course_dot">{courseAuthor}</p>
               
                  <i>
                    <Staricon />
                  </i>
                  <p className="cardcourse_comments">4.8 (122)</p>
                  <h4>{coursePrice}</h4>
                </li>
                <li>
               <label>
              <i><Clockicon/></i>
              <p>{courseTime}</p>
               </label>
               <label>
               <i><Stackicon/></i>
              <p>{courseModules}</p>
               </label>
               <label>
               <i><Beginer/></i>
              <p>{courseModules}</p>
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
