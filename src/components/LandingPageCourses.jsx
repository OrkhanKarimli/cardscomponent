import React from "react";
import {ReactComponent as Arrowclockwise} from "../icons/ArrowClockwise.svg";
import data from "../json/data.json";
import Multi from "../components/MultipleAccordion"
const LandingPageCourses = () => {
  return (
    <div className="container-fluid landing-page-courses-main">
      <div className="col-md-2 landing-page-categories">
<Multi items={data} open={true}/>
        <span className="landing-browse-line"></span>

        <div className="resetelements">

       <Arrowclockwise/> <p>
       Reset Filter
       </p>
        </div>
      </div>

      <div className="col-md-9"></div>
    </div>
  );
};

export default LandingPageCourses;
