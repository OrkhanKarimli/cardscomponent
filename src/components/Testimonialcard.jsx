import React from "react";
import { ReactComponent as Quote } from "../icons/Quote.svg";
const TestimonialCard = ({
avatarImg,
cardContent,
authorName,
authorPosition,
className
}) => {
  return (
      
        <div className={` ${className} test_mon_xs_main  d-flex`}>
          <div className="row">
            <div className="col-md-2 avatar">
              <img src={avatarImg}/>
            </div>
            <div className="col-md-6">
              <ul>
                <li>{authorName}</li>
                <li>{authorPosition}</li>
              </ul>
            </div>
            <div className="col-md-4">
              <i>
                <Quote/>
              </i>
            </div>
            <div className="col-md-12">
              <p>
                {cardContent}
              </p>
            </div>
          </div>
        </div>
  

  );
};

export default TestimonialCard;
