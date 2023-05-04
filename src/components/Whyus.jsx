import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ReactComponent as Chats } from "../icons/Chats.svg";
import { ReactComponent as Calendar } from "../icons/Calendar.svg";
import { ReactComponent as Document } from "../icons/Document.svg";
const WhyUs = () => {
  return (
    <div className="container-fluid whyus_main">
      <div className="row">
        <div className="col-md-6 col-left">
          <ul>
            <li>
              <i>
                <Chats />
              </i>
              <h4>Discussion 24/7</h4>
              <p>
                The community always there for you if you have difficult
                learning the course.
              </p>
            </li>
            <li>
            <i>
                <Calendar />
              </i>
              <h4>Schedule with Author</h4>
              <p>
              Choose an order schedule to the author to get in-depth knowledge with 1 on 1 call.
              </p>
            </li>
            <li>
            <i>
                <Document/>
              </i>
              <h4>Practice for Free</h4>
              <p>
              test your skills with practice tests that have been provided on our platform.
              </p>  
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-right">
            <ul>
                <li>
                    <h2>
                    Our Special Features We Build for You
                    </h2>
                </li>
                <li>
                    <p>
                    EdTech is a platform that helps students in advancing their career by providing solutions for simple and flexible online learning, allowing you to study anywhere and anytime at affordable prices.
                    </p>
                </li>
                <li>
                    <div className="col-right-img">
                        
                    </div>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
