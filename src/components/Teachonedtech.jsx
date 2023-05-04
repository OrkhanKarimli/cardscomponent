import React from "react";
import { ReactComponent as Searchicon } from "../icons/Search.svg";
import { ReactComponent as Caretdown } from "../icons/CaretDown.svg";
import { ReactComponent as Logoicon } from "../icons/Logo.svg";
import { ReactComponent as Pattern } from "../icons/Patern.svg";
import {ReactComponent as Arrowline} from "../icons/ArrowLineUpRight.svg"
import { useState } from "react";
const TeachOnedTech = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = (e) => {
    setActive(!isActive);
  };
  return (
    <div className="container-fluid TeachOnedTech_main">
      <i>
        <Pattern />
      </i>
      <div className="row justify-content-center">
        <div className="col-md-10 landingnav">
          <div className="row ">
            <div className="col-md-7">
              <ul>
                <li>
                  <i className="fixingicontech">
                    <Logoicon />
                  </i>
                  <p>EdTech</p>
                </li>
                <li>
                  <p>Browse</p>
                  <i className="fixearrowicedtech">
                    <Caretdown />
                  </i>
                </li>
                <li>
                  <p
                    className={isActive ? "addbottom" : ""}
                    onClick={handleClick}
                  >
                    Teach on Edtech
                  </p>
                </li>
                <li>
                  <p>About Us</p>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li>
                  <i className="fixedtechnaviconsc">
                    <Searchicon />
                  </i>
                </li>
                <li>
                  <button>Sign In</button>
                </li>
                <li>
                  <button>Sign Up</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-12 techtitle">
          <div className="row">
            <div className="col-md-7">
              <h1>Earn Money & Teach Millions of Students</h1>
            </div>
            <div className="col-md-4">
              <p>
                Become an author and change people's lives, including your own,
                by converting instructional resources into online courses for
                our students.
              </p>
              <button>Become Author</button>
            </div>
            <div className="col-md-8 edtechcontentimg">

            </div>
            <div className="col-md-4 edtechcontenttext">
              <div className="row">
                <div className="col-md-12">
                <ul>
                <li>
                  <p>
                  2022 Enrolled Growth
                  </p>
                </li>
                <li>
                  <h1>
                  5.4M
                  </h1>
                  <p className="edtechpercent">
                  +16% <Arrowline/>
                  </p>
                </li>
                <li>
                  <p >
                  Active Student Enrolled
                  </p>
                
                </li>
               <li className="edtechborder">

               </li>
              </ul>
                </div>
                <div className="col-md-12 edtechcontentbottom">
                <ul>
                <li>
                  <h1>
                  180+
                  </h1>
                  <p className="edtechpercent">
                  +8 <Arrowline/>
                  </p>
                </li>
                <li>
                <p >
                Countries Around the World
                </p>
                </li>

              </ul>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachOnedTech;
