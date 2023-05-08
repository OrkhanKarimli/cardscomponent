import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import data from "../json/data.json";
import {ReactComponent as Arrowclockwise} from "../icons/ArrowClockwise.svg";
import { Input } from "@mui/material";
const LandingPageCourses = () => {
  const [checked, setChecked] = React.useState(true);
  const [isActive, setActive] = useState(null);
  const toggle = (i) => {
    if (isActive == i) {
      return setActive(null);
    }
    else if(isActive!=true){
        console.log("salam")
    }
    setActive(i);
  };
// const reset=()=>{
//     setChecked(null)
//     setActive(null)
// }

  return (
    <div className="container-fluid landing-page-courses-main">
      <div className="col-md-2 landing-page-categories">
        {data.map((item, i) => (
          <ul key={i} className="item landing-courses-list">
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => setChecked(!checked)}
            />
            <span className="customcheck"></span>
            <div
              className="landing-toggle-group head"
              onClick={() => toggle(i)}
            >
              <p>{item.head}</p>
              <span className="landing-browse-icon">
                {isActive == i ? "-" : "+"}
              </span>
            </div>
            <Collapse in={isActive == i ? true:false}>
              {item.pages.map((index) => (
                <p>{index.pagename}</p>
              ))}
            </Collapse>
          </ul>
        ))}
        <span className="landing-browse-line"></span>

        <div className="resetelements" >

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
