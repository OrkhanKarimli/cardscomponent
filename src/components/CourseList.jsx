import React from "react";
import { ReactComponent as Star } from "../icons/Star.svg";
import { ReactComponent as Clock } from "../icons/Clock.svg";
import { ReactComponent as Stack } from "../icons/Stack.svg";
import { ReactComponent as Beginer } from "../icons/Beginer.svg";
const CourseList = ({ cardHead, cardimg ,className }) => {
  return (
        <div className={`course-list-main ${className}`}>

            <div className="col-md-3 course-list-img">
            <img src={cardimg} alt="" />
            </div>
            <div className="col-md-7">              <h5>{cardHead}</h5>
              <div className="course-content-title">

              <p>By Sen Janson</p>
              <i className="course-list-star-icon">
                <Star />
              </i>

              <p className="overall-star">4.8 (122)</p>
              </div>
              <div className="course-author-rating">
             
              </div>
              <div className="course-content-info">
              <ul className="course-list-information">
                <li>
                  <i>
                    <Clock />
                  </i>
                  <p className="info-text">40 Minutes</p>
                </li>
                <li>
                  <i>
                    <Stack />
                  </i>

                  <p className="info-text">21 Modules </p>
                </li>
                <li>
                  <i>
                    <Beginer />
                  </i>

                  <p className="info-text">Beginer Level </p>
                </li>
              </ul>
              </div>
            </div>
            <div className="col-md-3">
            <h4>
              128$
            </h4>
            </div>
           
          </div>




  );
};

export default CourseList;
