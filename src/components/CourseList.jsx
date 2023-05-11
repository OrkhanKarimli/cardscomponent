import React from "react";
import { ReactComponent as Star } from "../icons/Star.svg";
import { ReactComponent as Clock } from "../icons/Clock.svg";
import { ReactComponent as Stack } from "../icons/Stack.svg";
import { ReactComponent as Beginer } from "../icons/Beginer.svg";
const CourseList = ({
    cardHead,
    cardimg
}) => {
  return (
        <div className="col-md-12 course-list-main">
          <ul>
            <li className="course-list-img">
              <img src={cardimg} alt="" />
            </li>
            <li className="course-list-content">
              <h5>{cardHead}</h5>
              <p>By Sen Janson</p>
              <span></span>
              <i className="course-list-star-icon">
                <Star />
              </i>

              <p className="overall-star">4.8 (122)</p>

              <ul className="course-list-information">
                <li>
                  <i>
                    <Clock />
                  </i>
                  <pre className="info-text">40 Minutes</pre>
                </li>
                <li>
                  <i>
                    <Stack />
                  </i>

                  <pre className="info-text">21 Modules </pre>
                </li>
                <li>
                  <i>
                    <Beginer />
                  </i>

                  <pre className="info-text">Beginer Level </pre>
                </li>
              </ul>
              
            </li>
          </ul>
          <h4>
               $128
              </h4>
        </div>

  );
};

export default CourseList;
