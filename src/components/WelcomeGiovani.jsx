import React from "react";
import LearnerDash from "../components/LearnerDash";
import { ReactComponent as Calendar } from "../icons/CalendarBlankDash.svg";
import { ReactComponent as Arrow } from "../icons/CaretDownDash.svg";
const WelcomeGiovani = () => {
  return (
    <>
      <LearnerDash learnerClass={"col-md-12"} />
      <div className="container-fluid giovani-main">
        <div className="row">
          <div className="col-md-12 greeting">
            <ul>
              <li>
                <h3>Welcome back, Giovani</h3>
                <p>Here's an overview of your study progress this week.</p>
              </li>
              <li>
                <button>
                    <i>
                       <Calendar/> 
                    </i>
                    
                    <p>
                        Weekly
                    </p>
                    <i>
                     <Arrow/>   
                    </i>
                    
                </button>
              </li>
            </ul>
          </div>
          <div className="col-md-12">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeGiovani;
