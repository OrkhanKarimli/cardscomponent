import React from "react";
export const CourseProgress = ({
  cardTitle,
  authorName,
  percent
}
 
) => {
  return (
    <div
      className="container"
      style={{ backgroundColor: "#F9F9F9", padding: "2%" }}
    >
      <div className="col-md-4 course_main">
        <div className="row">
          <div className="course_img"></div>
          <div className="col-md-12">
            <ul>
              <li><p>{cardTitle}</p></li>
              <li><p>{authorName}</p></li>
              <li></li>
              <li className="d-flex justify-content-between">
                <p>
                Course progress
                </p>
               <label>{percent}</label> 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseProgress;
