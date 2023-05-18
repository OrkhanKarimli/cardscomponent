import React from "react";
import LearnerDash from "../components/LearnerDash";
import CourseProgressXs from "./CourseProgressXs";
import img1 from "../image/courseimage.png"
import img2 from "../image/coursesprogress1.png"
import img3 from "../image/popularcourses.png"
import { ReactComponent as Calendar } from "../icons/CalendarBlankDash.svg";
import { ReactComponent as Arrow } from "../icons/CaretDownDash.svg";
import { ReactComponent as Path } from "../icons/Path.svg";
import { ReactComponent as Medal } from "../icons/Medal.svg";
import { ReactComponent as Clock } from "../icons/ClockDash.svg";
import { ReactComponent as CheckSquare } from "../icons/CheckSquare.svg";
import { ReactComponent as Decrease } from "../icons/ArrowLineDownRight.svg";
import { ReactComponent as Increase } from "../icons/ArrowLineUp.svg";
import DashCard from "./DashCard";
const WelcomeGiovani = () => {
  return (
    <>
      <LearnerDash learnerClass={"col-md-12"} />
      <div className="container-fluid giovani-main">
        <div className="row">
          <div className="col-md-12 greeting">
            <ul>
              <li>
                <h3>Welcome back, Giovani</h3>
                <p>Here's an overview of your study progress this week.</p>
              </li>
              <li>
                <button>
                  <i>
                    <Calendar />
                  </i>

                  <p>Weekly</p>
                  <i>
                    <Arrow />
                  </i>
                </button>
              </li>
            </ul>
          </div>
          <div className="col-md-12">
            <div className="row">
              <DashCard
                icon={<Path />}
                titleHead={"4 Courses"}
                titleContent={"In Progress"}
              />
              <DashCard
                icon={<CheckSquare />}
                titleHead={"12 Courses"}
                titleContent={"Completed"}
                className={"color2"}
              />
              <DashCard
                icon={<Medal />}
                titleHead={"8 Challenges"}
                titleContent={"Completed"}
                className={"color3"}
              />
              <DashCard
                icon={<Clock />}
                titleHead={"13h 10m"}
                titleContent={"Time Spent"}
                className={"color4"}
              />
            </div>
          </div>
          <div className="col-md-7 giovani-col-left">
            <div className="row">
              <div className="col-md-12">
                <ul>
                  <li>
                    <h4>Spent Hours</h4>
                  </li>
                  <li>
                    <p className="indicator-left">Learning</p>
                  </li>
                  <li>
                    <p className="indicator-right">Challenge</p>
                  </li>
                </ul>
              </div>{" "}
              <div className="col-md-8">
                <div className="welcome-statistic"></div>
              </div>
              <div className="col-md-3 welcome-statistic-numbers">
                <ul>
                  <li>
                    <h4>140</h4>
                    <span>
                      <Increase />
                      <p>16%</p>
                    </span>
                    <p>Total hours in a week</p>
                  </li>
                  <li>
                    <h4>12</h4>
                    <span>
                      <Decrease />
                      <p className=" statistic-text-danger">2%</p>
                    </span>
                    <p>Average hours in a day</p>
                  </li>
                  <li>
                    <h4>80</h4>
                    <span>
                      <Increase />
                      <p>16%</p>
                    </span>
                    <p>Course hours in a week</p>
                  </li>
                  <li>
                    <h4>140</h4>
                    <span>
                      <Decrease />
                      <p className="statistic-text-danger">4%</p>
                    </span>
                    <p>Challenge hours in a week</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-5 giovani-col-right">
            <h4>
            Recent Courses
            </h4>
            <div className="row">
           <CourseProgressXs img={img1} title={"UX Design Foundations"} author={"Sen Janson"} progress={"Course progress"} percent={"50%"} className={"col-md-12"}/>
           <CourseProgressXs img={img2} title={"UI/UX Design Terminology"} author={"Sen Janson"} progress={"Course progress"} percent={"50%"} className={"col-md-12"}/>
           <CourseProgressXs img={img3} title={"Common Design Paterns"} author={"Sen Janson"} progress={"Course progress"} percent={"50%"} className={"col-md-12"}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeGiovani;
