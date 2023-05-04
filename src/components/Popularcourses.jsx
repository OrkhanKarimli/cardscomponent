import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import courseimg from "../image/courseimage.png";
import courseimg1 from "../image/coursesprogress1.png";
import courseimg2 from "../image/popularcourses.png";
import Coursecard from "./Coursecard";
const PopularCourses = () => {
  return (
    <div className="container-fluid popular-main">
      <div className="row">
        <div className="col-md-6 popular-left">
          <h2>
            More Than 3.2K <br />
            Courses Will Guide You
          </h2>
        </div>
        <div className="col-md-6 popular-right">
          <p>
            We provide a range of categories to help you choose courses <br />{" "}
            that fit your expertise. More than 3.2K courses will guide you from
            basic.
          </p>
        </div>
        <div className="col-md-12 popular_courses_category">
          <ul>
            <li>UI/UX Design</li>
            <li>Graphic Design</li>
            <li>3D & Animation</li>
            <li>Front-End</li>
            <li>Back-End</li>
            <li>IOT</li>
          </ul>
        </div>
        <div className="col-md-12 d-flex coursesform">
          <Coursecard
            imgSrc={courseimg}
            courseTitle={"UX Design Foundations"}
            courseAuthor={"By Ramazan Yenici"}
            courseLevel={"Beginer Level"}
            courseModules={"21 Modules"}
            coursePrice={"128$"}
            courseTime={"40min"}
          />
          <Coursecard
            className="marginadd"
            imgSrc={courseimg1}
            courseTitle={"UI/UX Design Terminology"}
            courseAuthor={"By Ramazan Yenici"}
            courseLevel={"Beginer Level"}
            courseModules={"21 Modules"}
            coursePrice={"128$"}
            courseTime={"40min"}
          />
          <Coursecard
            className="marginadd"
            imgSrc={courseimg2}
            courseTitle={"Common Design Paterns"}
            courseAuthor={"By Ramazan Yenici"}
            courseLevel={"Beginer Level"}
            courseModules={"21 Modules"}
            coursePrice={"128$"}
            courseTime={"40min"}
          />
        </div>
        <div className="col-md-12 courses_button_main">
            <button className="coursesbutton">
            More Courses
            </button>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
