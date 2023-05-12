import React from "react";
import LearnerDash from "../components/LearnerDash";
import { ReactComponent as Calendar } from "../icons/CalendarBlankDash.svg";
import { ReactComponent as Arrow } from "../icons/CaretDownDash.svg";
import { ReactComponent as Path } from "../icons/Path.svg";
import { ReactComponent as Medal } from "../icons/Medal.svg";
import { ReactComponent as Clock } from "../icons/ClockDash.svg";
import { ReactComponent as CheckSquare } from "../icons/CheckSquare.svg";
import DashCard from "./DashCard";
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
             <div className="row">
              <DashCard icon={<Path/>} titleHead={"4 Courses"} titleContent={"In Progress"}/>
              <DashCard
               icon={<CheckSquare/>} titleHead={"12 Courses"} titleContent={"Completed"} className={"color2"}/>
              <DashCard icon={<Medal/>} titleHead={"8 Challenges"} titleContent={"Completed"} className={"color3"}/>
              <DashCard icon={<Clock/>} titleHead={"13h 10m"} titleContent={"Time Spent"} className={"color4"}/>
              
              
             </div>
          </div>
          <div className="col-md-6">
            
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </>
  );
};

export default WelcomeGiovani;
