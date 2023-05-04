import React from "react";
import { ReactComponent as CalendarsvgIcon } from "../icons/CalendarBlank.svg";
const Eventscard = () => {
  return (
    <div
      className="container"
      style={{ backgroundColor: "#F9F9F9", padding: "2%" }}
    >
      
        <div className="col-md-4 eventscard_main">
            <div className="row">
                <div className="events_image"></div>
          <div className="col-md-12">
            <ul>
              <li>
                <p>User Experience Design 
                <label>Basic Essential Principals</label></p>
              </li>
              <li>
                <p>By Sen Janson</p>{" "}
              </li>
              <li>
                <i>
                  <CalendarsvgIcon></CalendarsvgIcon>
                </i>
                <p>27 July 2022</p>
                <h4>
                $128
                </h4>
              </li>
        
            </ul>
          </div>
            </div>
          
        </div>
     
    </div>
  );
};

export default Eventscard;
