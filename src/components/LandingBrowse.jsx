import React from "react";
import LandingNav from "./LandingNav";
import { ReactComponent as Pattern } from "../icons/PaternBrowse.svg";
import { ReactComponent as Donwarrow } from "../icons/Icon.svg";
import { ReactComponent as Searchicon } from "../icons/Search.svg";
const LandingBrowse = () => {
  return (
    <div className="container-fluid landing-browse-main">
      <Pattern className="navpospattern" />
      <div className="row justify-content-center">
        <LandingNav landingClass={"col-md-11 navpos"} />
        <div className="col-md-12 landing_browse_header">
          <h1>Browse in EdTech</h1>
          <p>
            Browse learning content designed to help your business or career.
            You can learn by <br /> choosing a course, event or dive right in on
            a 1 on 1 call with the author.
          </p>
        </div>
        <div className="col-md-12 landing_browse_search">
          <div className="landing-browse-searh-form">
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
      </div>
    </div>
  );
};

export default LandingBrowse;
