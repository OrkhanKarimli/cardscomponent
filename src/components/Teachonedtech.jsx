import React from "react";
import { ReactComponent as Searchicon } from "../icons/Search.svg";
import { ReactComponent as Caretdown } from "../icons/CaretDown.svg";
import { ReactComponent as Logoicon } from "../icons/Logo.svg";
import {ReactComponent as Pattern} from "../icons/Patern.svg"
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
const Teachonedtech = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = (e) => {
    setActive(!isActive);
  };
  return (
    <div className="container-fluid teachonedtech_main">
       <i>
        <Pattern/>
       </i>
      <div className="row justify-content-center">
      <div className="col-md-10 landingnav">
          <div className="row ">
            <div className="col-md-7">
              <ul>
                <li >
                  <i className="fixingicontech">
                    <Logoicon />
                  </i>
                  <p>EdTech</p>
                </li>
                <li  className={isActive ? "addbottom" : ""} onClick={handleClick}>
                  <p>Browse</p>
                  <i className="fixearrowicedtech">
                    <Caretdown />
                  </i>
                </li>
                <li  className={isActive ? "addbottom" : ""} onClick={handleClick}>
                  <p>Teach on Edtech</p>
                </li>
                <li  className={isActive ? "addbottom" : ""} onClick={handleClick}>
                  <p>About Us</p>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li>
                  <i className="fixedtechnaviconsc">
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
        <div className="col-md-12 techtitle">
            <div className="row">
                <div className="col-md-7">
                 <h1>
                 Earn Money & Teach Millions of Students
                 </h1>
                </div>
                <div className="col-md-4">
                 <p>
                 Become an author and change people's lives, including your own, by converting instructional resources into online courses for our students.
                 </p>
                 <button>
                 Become Author
                 </button>
                </div>
                <div className="col-md-8 edtechcontentimg">

                </div>
                <div className="col-md-4 edtechcontenttext">

                </div>
            </div>
        </div>
      </div>
      
    </div>
 
  );
};

export default Teachonedtech;
