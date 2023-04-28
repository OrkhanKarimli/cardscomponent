import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ReactComponent as Footerpattern } from "../icons/Paternfooter.svg";
import { ReactComponent as Icon1 } from "../icons/1.svg";
import { ReactComponent as Icon2 } from "../icons/2.svg";
import { ReactComponent as Icon3 } from "../icons/3.svg";
import { ReactComponent as Icon4 } from "../icons/4.svg";
import { ReactComponent as Icon5 } from "../icons/5.svg";
import { ReactComponent as Edfooter } from "../icons/Edfooter.svg";
const Footer = () => {
  return (
    <div className="container-fluid footer_main">
      <i>
        <Footerpattern />
      </i>
      <div className="row">
        <div className="col-md-12 cta">
          <ul>
            <li>
              <h1>
                Ready to Start Your Courses <br /> and Grow Your Career
              </h1>
            </li>
            <li>
              <p>
                Experts teach you everything from the comfort of your own home.
                Improve your career today by <br /> enrolling in excellent
                courses at affordable prices.
              </p>
            </li>
            <li>
              <button>Get Started</button>
            </li>
          </ul>
        </div>
        <div className="col-md-12 logos">
          <ul>
            <li>
              <Icon1 stroke="#E0E0E0" />
            </li>
            <li>
              <Icon2 stroke="#E0E0E0" />
            </li>
            <li>
              <Icon3 stroke="#E0E0E0" />
            </li>
            <li>
              <Icon4 stroke="#E0E0E0" />
            </li>
            <li>
              <Icon5 stroke="#E0E0E0" />
            </li>
          </ul>
        </div>
        <div className="col-md-12 footer_nav">
          <div className="col-md-3">
            <ul>
              <li>
                <i>
                    <Edfooter/>
                </i>
              </li>
              <li>
                <p>
                EdTech is a global online learning platform that offers anyone, anywhere access to online courses
                </p>
              </li>
            </ul>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
