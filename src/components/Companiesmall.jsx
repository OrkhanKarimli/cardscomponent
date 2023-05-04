import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ReactComponent as Pattern } from "../icons/Paternsmall.svg";
import { ReactComponent as Icon1 } from "../icons/1.svg";
import { ReactComponent as Icon2 } from "../icons/2.svg";
import { ReactComponent as Icon3 } from "../icons/3.svg";
import { ReactComponent as Icon4 } from "../icons/4.svg";
const CompanieSmall = () => {
  return (
    <div className="container-fluid companies_small_main">
      <i>
        <Pattern />
      </i>
      <ul>
        <li>
          <h5>Collaborate with Top 100+ Universities and Companies.</h5>
        </li>
        <li>
          <Icon1 />
        </li>
        <li>
          <Icon2 />
        </li>
        <li>
          <Icon3 />
        </li>
        <li>
          <Icon4 />
        </li>
      </ul>
    </div>
  );
};

export default CompanieSmall;
