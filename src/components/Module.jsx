import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPlay,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
const Module = () => {
  return (
    <div
      className="container"
      style={{ backgroundColor: "#F9F9F9", padding: "2%" }}
    >
      <div className="row">
        <div className="col-md-5 module_cardmain">
          <div className="row">
            <div className="col-md-12 mb-3">
              <div className="row">
                <div className="col-md-6">
                  <div className="col-md-12 module_cardtitle">
                    <p>UI Design Principles</p>
                  </div>
                  <div className="col-md-12 module_card_information">
                    <ul className="d-flex">
                      <li>58 Min</li>
                      <li></li>
                      <li>6 Curriculum</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                  <div className="module_circle">
                    <p> 30%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12 card_module_state">
                  <div className="row">
                    <div className="col-md-6">
                      <p>UX Introduction</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                      <i>
                        <label>
                          <FontAwesomeIcon className="icon" icon={faCheck} />
                        </label>
                      </i>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 card_module_state">
                  <div className="row">
                    <div className="col-md-6">
                      <p>Jakob’s Law - Other Pages</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                      <i>
                        <label>
                          <FontAwesomeIcon className="icon" icon={faCheck} />
                        </label>
                      </i>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 card_module_state mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <p>Consistency is Key</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                      <label>
                        <FontAwesomeIcon className="icon" icon={faPlay} />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 card_module_button d-flex justify-content-center mb-3">
                  <button>
                    Show More{" "}
                    <i>
                      <FontAwesomeIcon className="icon" icon={faChevronDown} />
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module;
