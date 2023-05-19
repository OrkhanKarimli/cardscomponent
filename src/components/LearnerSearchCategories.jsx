import React from "react";
import Category from "./Category";
import { ReactComponent as Donwarrow } from "../icons/Icon.svg";
import { ReactComponent as Searchicon } from "../icons/Search.svg";
import { ReactComponent as LayOut } from "../icons/LayoutCourses.svg";
import { ReactComponent as Controller } from "../icons/GameControllerCourses.svg";
import { ReactComponent as Fork } from "../icons/GitForkCourses.svg";
import { ReactComponent as PenNib } from "../icons/PenNibCourses.svg";
import { ReactComponent as Database } from "../icons/DatabaseCourses.svg";
import { ReactComponent as Chart } from "../icons/ChartPieSlice.svg";
import { ReactComponent as Cube } from "../icons/CubeCourses.svg";
import { ReactComponent as Cpu } from "../icons/CpuCourses.svg";
import LearnerDashNav from "./LearnerDashNav";
const LearnerSearchCategories = () => {
  return (
    <>
      <LearnerDashNav learnerClass={"col-md-12"} />
      <div className="container-fluid landing-search-main">
        <div className="row justify-content-center">
          <div className="col-md-12 landing_search_header">
            <h1>Browse in EdTech</h1>
            <p>
              Browse learning content designed to help your business or career.
              You can learn by <br /> choosing a course, event or dive right in
              on a 1 on 1 call with the author.
            </p>
          </div>
          <div className="col-md-12 landing_browse_search_categories">
            <div className="landing-categories-searh-form">
              <input
                type="text"
                id="search"
                placeholder="Search course, event or author"
              ></input>
              <select>
                <option value="courses">
                  Courses
                  <i>
                    <Donwarrow />
                  </i>
                </option>
              </select>
              <button>
                <i>
                  <Searchicon />
                </i>
              </button>
            </div>
            <p>Popular : UI Design, UX Research, Android, C++</p>
          </div>
          <h4>Categories</h4>
          <div className="col-md-12 search-categories-learner">
            <ul className="row">
              <li className="col-md-3">
                <Category icon={<LayOut/>} title={"UI/UX Design"} />
              </li>
              <li className="col-md-3">
                <Category icon={<PenNib/>} title={"Graphic Design"} />
              </li>
              <li className="col-md-3">
                <Category icon={<Cube/>} title={"3D & Animation"} />
              </li>
              <li className="col-md-3">
               
                <Category icon={<Controller/>} title={"Game Design"} />
              </li>
              <li className="col-md-3">
               
                <Category icon={<Cpu/>} title={"Front-End "} />
              </li>
              <li className="col-md-3">
                <Category icon={<Database/>} title={"Back-End "} />
              </li>
              <li className="col-md-3">
                <Category icon={<Chart/>} title={"Data Science"} />
              </li>
              <li className="col-md-3">
                <Category icon={<Fork/>} title={"IOT"} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnerSearchCategories;
