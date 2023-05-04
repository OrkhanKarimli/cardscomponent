import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ReactComponent as Donwarrow } from "../icons/Icon.svg";
import { ReactComponent as Searchicon } from "../icons/Search.svg";
import { ReactComponent as Caretdown } from "../icons/CaretDown.svg";
import { ReactComponent as Logoicon } from "../icons/Logo.svg";
import { ReactComponent as Patern } from "../icons/Patern.svg";

const LandingPage = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-11 landingnav">
          <div className="row">
            <div className="col-md-7">
              <ul>
                <li>
                  <i>
                    <Logoicon />
                  </i>
                  <p>EdTech</p>
                </li>
                <li>
                  <p>Browse</p>
                  <i>
                    <Caretdown />
                  </i>
                </li>
                <li>
                  <p>Teach on Edtech</p>
                </li>
                <li>
                  <p>About Us</p>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li>
                  <i>
                    <Searchicon/>
                  </i>
                </li>
                <li>
                  <button>
                    Sign In
                  </button>
                </li>
                <li>
                <button>
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-8 landing-left">
          <i className="patternicon">
            <Patern/>
          </i>
          <ul>
            <li>
              <h1>
                Advance Your Career
                <label>in a Digitalized World.</label>
              </h1>
            </li>
            <li>
              <p>
                We provide you with unrestricted access to the greatest courses
                from the <br /> top specialists, allowing you to learn countless
                of practical lessons in a range <br /> of topics.
              </p>
            </li>
            <li className="searc-form">
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
            </li>
            <li>
              <p>Popular : UI Design, UX Research, Android, C++</p>
            </li>
          </ul>
        </div>
        <div className="col-md-4 landing-right">
          <div className="imagediv"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
