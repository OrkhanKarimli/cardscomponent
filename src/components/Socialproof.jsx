import React from "react";
import {ReactComponent as Icon1} from "../icons/1.svg";
import {ReactComponent as Icon2} from "../icons/2.svg";
import {ReactComponent as Icon3} from "../icons/3.svg";
import {ReactComponent as Icon4} from "../icons/4.svg";
import {ReactComponent as Icon5} from "../icons/5.svg"
const SocialProof = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-11 social_proof_main">
            <p>
                <label> We collaborate with</label>
            250+ leading universities and companies.
            </p>
            <div className="logos">
                <ul>
                    <li>
                        <Icon1/>
                    </li>
                    <li>
                    <Icon2/>
                    </li>
                    <li>
                    <Icon3/>
                    </li>
                    <li>
                    <Icon4/>
                    </li>
                    <li>
                    <Icon5/>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
