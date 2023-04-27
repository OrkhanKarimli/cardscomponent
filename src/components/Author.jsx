import React from "react";
import "bootstrap/dist/css/bootstrap.css";
export const Author = ({
  imgSrc,
  authorName,
  authorCourses,
  authorPayment,
  authorHourses,
  authorSpeciality,
  authorIcon,
  authorClass
}) => {
  return (
 
      <div className={`col-md-3 author_main text-center ${authorClass}`}>
        <div className="row justify-content-center">
          <div className="col-md-12 author_image ">
            <img src={imgSrc}>
            </img>
          </div>
          <div className="col-md-12 author_information">
            <ul>
              <li>
                <p>{authorName}</p>
              </li>
              <li>
                <p>{authorCourses}</p>
              </li>
              <li>
                <h4>{authorPayment}</h4>
                <p>{`/${authorHourses}`}</p>
              </li>
              <li>
                <i>
                  { authorIcon}
                </i>
                <p>{authorSpeciality}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
   
  );
};

export default Author;
