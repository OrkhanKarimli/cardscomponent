import React from "react";
import { ReactComponent as Cap } from "../icons/GraduationCap.svg";
import {ReactComponent as Dots} from "../icons/DotsThree.svg"
import {ReactComponent as Desktop} from "../icons/Desktop.svg"
import {ReactComponent as Target} from "../icons/Target.svg"
const UpcomingAgenda = () => {
  return (
    <div className="container-fluid upcoming-main">
      <div className="row">
        <h4>Upcoming Agenda</h4>
        <div className="col-md-12 agenda-schedule">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4 agenda-left">
                  <div className="cap-icon">
                    <i>
                      {" "}
                      <Cap />{" "}
                    </i>
                  </div>
                  <ul>
                    <li>
                      <p>UX Design Foundations</p>
                    </li>
                    <li>
                      <p>
                        Sen Janson
                        <span></span>
                        27 July, 7.00-9.00 PM
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 agenda-right">
                  <ul>
                    <li>
                      <p>Progress</p>
                      <span>Lesson 4</span>
                    </li>
                    <li>
                      <p>Duration</p>
                      <span>60 min</span>
                    </li>
                    <li>
                      <p>Activity</p>
                      <span>Course</span>
                    </li>
                    <li>
                      <i>
                        <Dots/>
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4 agenda-left">
                  <div className="cap-icon cap-error">
                    <i>
                      {" "}
                      <Desktop />{" "}
                    </i>
                  </div>
                  <ul>
                    <li>
                      <p>UX Design Foundations</p>
                    </li>
                    <li>
                      <p>
                        Sen Janson
                        <span></span>
                        27 July, 7.00-9.00 PM
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 agenda-right">
                  <ul>
                    <li>
                      <p>Category</p>
                      <span>UI/UX Design</span>
                    </li>
                    <li>
                      <p>Duration</p>
                      <span>60 min</span>
                    </li>
                    <li>
                      <p>Activity</p>
                      <span>Event</span>
                    </li>
                    <li>
                      <i>
                        <Dots/>
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4 agenda-left">
                  <div className="cap-icon cap-info">
                    <i>
                      {" "}
                      <Target />{" "}
                    </i>
                  </div>
                  <ul>
                    <li>
                      <p>UX Design Foundations</p>
                    </li>
                    <li>
                      <p>
                        Sen Janson
                        <span></span>
                        27 July, 7.00-9.00 PM
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 agenda-right">
                  <ul>
                    <li>
                      <p>Category</p>
                      <span>UI/UX Design</span>
                    </li>
                    <li>
                      <p>Duration</p>
                      <span>30 min</span>
                    </li>
                    <li>
                      <p>Activity</p>
                      <span>Challenge</span>
                    </li>
                    <li>
                      <i>
                        <Dots/>
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAgenda;
