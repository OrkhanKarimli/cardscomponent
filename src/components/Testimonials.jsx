import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faStarHalf } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <div
      className="container"
      style={{ backgroundColor: "#F9F9F9", padding: "2%" }}
    >
      <div className="row">
        <div className="col-md-4 d-flex cardmain">
          <div className="row">
            <div className="col-md-3 avatar"></div>
            <div className="col-md-8">
              <ul>
                <li>Sukran Memis</li>
                <li>Site Reliability Engineer</li>
              </ul>
            </div>
            <div className="col-md-12">
              <p>
                I have always relied on EdTech to help me understand my studies.
                I can always count on him to get me through difficult subjects.
                with edtech my learning is easier without any obstacles.
              </p>
            </div>
            <div className="col-md-12">
              <ul className="d-flex">
                <li>
                  <i>
                    <FontAwesomeIcon className="icon" icon={faStar} />
                  </i>
                </li>
                <li>
                  <i>
                    <FontAwesomeIcon className="icon" icon={faStar} />
                  </i>
                </li>
                <li>
                  <i>
                    <FontAwesomeIcon className="icon" icon={faStar} />
                  </i>
                </li>
                <li>
                  <i>
                    <FontAwesomeIcon className="icon" icon={faStar} />
                  </i>
                </li>
                <li>
                  <i>
                    <FontAwesomeIcon className="icon" icon={faStarHalf} />
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
