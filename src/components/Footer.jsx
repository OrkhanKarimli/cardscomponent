import React from "react";
import { ReactComponent as Footerpattern } from "../icons/Paternfooter.svg";
import { ReactComponent as Facebook } from "../icons/FacebookLogo.svg";
import { ReactComponent as Twitter } from "../icons/TwitterLogo.svg";
import { ReactComponent as Linkedin } from "../icons/LinkedinLogo.svg";
import { ReactComponent as Insragram } from "../icons/InstagramLogo.svg";
import { ReactComponent as Icon1 } from "../icons/1.svg";
import { ReactComponent as Icon2 } from "../icons/2.svg";
import { ReactComponent as Icon3 } from "../icons/3.svg";
import { ReactComponent as Icon4 } from "../icons/4.svg";
import { ReactComponent as Icon5 } from "../icons/5.svg";
const Footer = () => {
  return (
    <div className="container-fluid footer_main">
      <i>
        <Footerpattern />
      </i>
      <div className="row justify-content-center">
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
          <div className="row">
            <div className="col-md-5">
              <ul>
                <li>
                  <div></div>
                  <p>EdTech</p>
                </li>

                <li>
                  <p>
                    EdTech is a global online learning platform that <br />{" "}
                    offers anyone, anywhere access to online courses
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul>
                <li className="footer_nav_head">Pages</li>
                <li>
                  <p>Home</p>
                </li>
                <li>
                  <p>Courses</p>
                </li>
                <li>
                  <p>Events</p>
                </li>
                <li>
                  <p>Authors</p>
                </li>
                <li>
                  <p>About Us</p>
                </li>
                <li>
                  <p>Teach on Edtech</p>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul>
                <li className="footer_nav_head">Company</li>
                <li>
                  <p>Terms Conditions</p>
                </li>
                <li>
                  <p>Privacy Policy</p>
                </li>
                <li>
                  <p>Cookies</p>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul>
                <li className="footer_nav_head">Community</li>
                <li>
                  <p>Help Center</p>
                </li>
                <li>
                  <p>FAQ</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-4 copyright">
              <p>©2022 EdTech. All rights reserved</p>
            </div>
            <div className="col-md-2 right-logos-footer">
              <ul>
                <li>
                  
                    <Facebook/>
                  
                </li>
                <li>
                  
                    <Insragram/>
                  
                </li>
                <li>
                  
                    <Twitter/>
                  
                </li>
                <li>
                  
                  <Linkedin/>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
