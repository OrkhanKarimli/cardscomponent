import React from "react";
import CourseList from "./CourseList";
import img from "../image/image1118.png";
import img1 from "../image/image118.png";
import img2 from "../image/image119.png";
const SimilarCourses = () => {
  return (
    <div className="container-fluid similar-course-main">
        <h5>
            Similar Courses
        </h5>
      <div className="row">
        <div className="col-md-9 ">
          <CourseList
            cardimg={img}
            cardHead={"UX Design Foundations"}
            className={"col-md-12 similar-courses-fix"}
          />
          <CourseList
            cardimg={img1}
            cardHead={"UX Design Terminology"}
            className={"col-md-12 similar-courses-fix"}
          />
          <CourseList
            cardimg={img2}
            cardHead={"Common Design Paterns"}
            className={"col-md-12 similar-courses-fix"}
          />
        </div>
      </div>
    </div>
  );
};

export default SimilarCourses;
