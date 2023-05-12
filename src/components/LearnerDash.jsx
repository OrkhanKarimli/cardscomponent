import React, { useState } from "react";
import { ReactComponent as Searchicon } from "../icons/Search.svg";
import { ReactComponent as Caretdown } from "../icons/CaretDown.svg";
import userimg from "../image/learnerdashuser.png"
import { ReactComponent as Logoicon } from "../icons/Logo.svg";
import {ReactComponent as Bell} from "../icons/BellSimple.svg"
const menu = [
  {
    head: "Dashboard ",
  },
  {
    head: "Browse",
  },
  {
    head: "My Course",
  },
  {
    head: "My Schedule",
  },
  {
    head: "Challenges"
  }
];

const LearnerDash = ({ learnerClass }) => {
  const [isActive, setActive] = useState(null);
  const toggle = (e) => {
    setActive(e);
  };
  return (
    <div className={`learnerdash ${learnerClass} col-md-12`}>
    <div className="row">
      <div className="col-md-7">
        <ul>
          <li>
            <i>
              <Logoicon />
            </i>
            <p className="DashLogoText">EdTech</p>
          </li>
          {menu.map((item, e) => (
            <li onClick={() => toggle(e)} className={isActive == e ? "menustyledash" : ""}>
              <pre>{item.head}</pre>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-md-4">
        <ul>
          <li>
            <i>
              <Searchicon />
            </i>
          </li>
          <li>
           <i>
            <Bell/>
           </i>
          </li>
          <li>
           <div className="dashnavimg">
            <img src={userimg} alt="" />
           </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default LearnerDash