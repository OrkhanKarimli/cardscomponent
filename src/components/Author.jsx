import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
const Author = () => {
  return (
    <div
      className="container"
      style={{ backgroundColor: "#F9F9F9", padding: "2%" }}
    >
      <div className="col-md-3 author_main text-center">
        <div className="row justify-content-center">
          <div className="col-md-12 author_image "></div>
          <div className="col-md-12 author_information">
            <ul>
              <li>
                <p>Ahmet Cetin</p>
              </li>
              <li>
                <p>16 Courses</p>
              </li>
              <li>
                <h4>$100</h4>
                <p>/hours</p>
              </li>
              <li>
                <i>
                  <FontAwesomeIcon className="icon" icon={faCube} />
                </i>
                <p>3D Design</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
