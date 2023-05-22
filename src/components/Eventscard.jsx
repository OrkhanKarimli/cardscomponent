import React from "react";
import { ReactComponent as CalendarsvgIcon } from "../icons/CalendarBlank.svg";
const Eventscard = ({
  eventHead,
  className,
  eventLabel,
  eventImg
}) => {
  return (

      
        <div className={`eventscard_main ${className}`}>
            <div className="row">
                <div className="events_image">
                  <img src={eventImg} alt="" />
                </div>
          <div className="col-md-12">
            <ul>
              <li>
                <p>{eventHead} 
                <label>{eventLabel}</label></p>
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
     
  );
};

export default Eventscard;
