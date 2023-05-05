import React from "react";
import Carousel from "./Carousel";
import {ReactComponent as Logo1} from "../icons/1.svg"
import {ReactComponent as Logo2} from "../icons/2.svg"
import {ReactComponent as Logo3} from "../icons/3.svg"
import {ReactComponent as Logo4} from "../icons/4.svg"
const TestimonialsAuthor = () => {
  return (
    <div className="container testimonials-author-main">
      <div className="row justify-content-center">
        <div className="col-md-12 testimonials-header">
          <h2>
            Over 100+ Professionals <br />
            Trust Us
          </h2>
        </div>
        <div className="col-md-12 testimonilas-author-quote">
            <p>
            “Teaching on EdTech has provided me with two important elements: the opportunity to reach more learners than I ever <br /> would be able to on my own and a steady stream of extra income.”
            </p>
        </div>
     <Carousel/>
     <div className="testimonials-author-logos">
        <ul>
            <li>
                <Logo1/>
            </li>
            <li>
            <Logo2/>
            </li>
            <li>
            <Logo3/>
            </li>
            <li>
            <Logo4/>
            </li>
        </ul>
     </div>
      </div>
    </div>
  );
};
export default TestimonialsAuthor;
