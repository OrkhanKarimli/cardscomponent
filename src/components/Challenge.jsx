import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faClock, faSignal } from "@fortawesome/free-solid-svg-icons";
const Challenge = () => {
  return (
    <div
      className="container"
      style={{ backgroundColor: "#F9F9F9", padding: "2%" }}
    >
      <div className="row">
        <div className="col-md-4 cardmain">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 iconbrain">
              <FontAwesomeIcon className="icon" icon={faBrain} />
            </div>
            <div className="col-md-6 cardtext">
              <p>UI/UX Design</p>
            </div>
            <div className="col-md-12">
              <p>UX Design Psychology </p>
            </div>
            <div className="col-md-12">
              <ul className="d-flex">
                <li>
                  <FontAwesomeIcon icon={faClock} />
                </li>
                <li>
                  <p>10Min</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faSignal} />
                </li>
                <li>
                  <p>Beginer Level</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
