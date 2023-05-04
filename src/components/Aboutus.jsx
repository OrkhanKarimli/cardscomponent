import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
 const AboutUs = () => {
  return (
   <div className="container-fluid aboutus_main">
    <div className="row">
        <div className="col-md-6">
          <ul>
            <li>
                <h2>
                We Help Grow Student Careers
                </h2>
            </li>
            <li>
                <p>
                We've been doing this for over a decade since we always want to give learning services that aren't taught in schools.
                </p>
            </li>
          </ul>
          <button>
          Read More
          </button>
        </div>
        <div className="col-md-3">
            <div className="about-us-img">

            </div>
        </div>
        <div className="col-md-3">
            <ul>
                <li>
                    <h4>
                    54M
                    </h4>
                    <p>
                    Students already enroll for using it.
                    </p>
                </li>
                <li>
                    <h4>
                    3.2K+
                    </h4>
                    <p>
                    courses are available with various categories.
                    </p>
                </li>
                <li>
                    <h4>
                    600
                    </h4>
                    <p>
                    Experienced author who will teach you.
                    </p>
                </li>
               
            </ul>
        </div>
    </div>
   </div>
  )
}

export default AboutUs;