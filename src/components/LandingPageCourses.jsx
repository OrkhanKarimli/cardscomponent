import React,{useState} from "react";
import { ReactComponent as Arrowclockwise } from "../icons/ArrowClockwise.svg";
import data from "../json/data.json";
import Multi from "../components/MultipleAccordion";
import Cardimg1 from "../image/courseimage.png";
import Cardimg2 from "../image/eventsimage.png";
import Cardimg3 from "../image/coursesprogress1.png"
import Cardimg4 from "../image/image1118.png"
import Cardimg5 from "../image/image120.png"
import Cardimg6 from "../image/image120.png"
import Cardimg7 from "../image/image1118.png"
import CourseList from "./CourseList";

const menu = [
  {
    head: "Courses ",
  },
  {
    head: "Events (160)",
  },
  {
    head: "Authors (160)",
  },
];

const LandingPageCourses = () => {
  const [isActive, setActive] = useState(null);
  const toggle = (e) => {
    setActive(e);
  };
  return (
    <div className="container-fluid landing-page-courses-main">
      <div className="row">
              <div className="col-md-2 landing-page-categories">
        <Multi items={data} open={true} />

        <div className="resetelements">
          <Arrowclockwise /> <p>Reset Filter</p>
        </div>
      </div>

      <div className="col-md-9 course-list-right">
        <div className="row">
          <div className={`col-md-12 landing-courses-tabs `}>
           <ul>
           {menu.map((item, e) => (
              <li className={isActive == e ? "menustyle" : ""} onClick={() => toggle(e)}>
                <p>{item.head}</p>
              </li>
            ))}
           </ul>
          </div>
          <h2>
          Showing 160 results
          </h2>
          <CourseList cardimg={Cardimg1} cardHead={"UX Design Foundations"}/>
          <CourseList cardimg={Cardimg2} cardHead={"UX Design Terminology"}/>
          <CourseList cardimg={Cardimg3} cardHead={"Common Design Paterns"}/>
          <CourseList cardimg={Cardimg4} cardHead={"UI/UX Design Accessibility"}/>
          <CourseList cardimg={Cardimg5} cardHead={"UX Design Composition"}/>
          <CourseList cardimg={Cardimg6} cardHead={"13 Principles of Dark Mode Design"}/>
          <CourseList cardimg={Cardimg4} cardHead={"UI/UX Color Psychology"}/>
          
        </div>
      </div>
      </div>

    </div>
  );
};

export default LandingPageCourses;
