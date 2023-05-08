import React, { useState } from "react";
import { ReactComponent as Searchicon } from "../icons/Search.svg";
import { ReactComponent as Caretdown } from "../icons/CaretDown.svg";
import { ReactComponent as Logoicon } from "../icons/Logo.svg";
const menu = [
  {
    head: "Browse ",
  },
  {
    head: "Teach on Edtech",
  },
  {
    head: "About Us",
  },
];
const LandingNav = ({ landingClass }) => {
  const [isActive, setActive] = useState(null);
  const toggle = (e) => {
    setActive(e);
  };
  return (
    <div className={`landingnav ${landingClass}`}>
      <div className="row">
        <div className="col-md-7">
          <ul>
            <li>
              <i>
                <Logoicon />
              </i>
              <p>EdTech</p>
            </li>
            {menu.map((item, e) => (
              <li onClick={() => toggle(e)}>
                <p className={isActive == e ? "menustyle" : ""}>{item.head}</p>
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
              <button>Sign In</button>
            </li>
            <li>
              <button>Sign Up</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingNav;
