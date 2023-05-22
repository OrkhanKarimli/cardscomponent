import React from "react";
export const Author = ({
  imgSrc,
  authorName,
  authorCourses,
  authorPayment,
  authorHourses,
  authorSpeciality,
  authorIcon,
  authorClass,
  authorColor1,
  authorColor,
  
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
                <p className={`${ authorColor1}`}>{authorName}</p>
              </li>
              <li>
                <p className={`${ authorColor}`}>{authorCourses}</p>
              </li>
              <li>
                <h4 className={`${ authorColor1}`}>{authorPayment}</h4>
                <p  className={`${ authorColor1}`}>{`/${authorHourses}`}</p>
              </li>
              <li>
                <i>
                  { authorIcon}
                </i>
                <p >{authorSpeciality}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
   
  );
};

export default Author;
