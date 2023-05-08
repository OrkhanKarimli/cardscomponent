import React from "react";
const LandingPageCourses = () => {
    const [checked, setChecked] = React.useState(true);
  return (
    <div className="container-fluid landing-page-courses-main">
      <div className="col-md-2 landing-page-categories">
        <ul className="landing-courses-list">
          <h5>Categories</h5>
          <li>
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => setChecked(!checked)}
            />
            <span className="customcheck"></span>
            <span  className="listinfo">
            UI/UX Design (160)
            </span>
          </li>
          <li>
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => setChecked(!checked)}
            />
            <span className="customcheck"></span>
            <span  className="listinfo">
            Graphic Design (94)
            </span>
          </li>
          <li>
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => setChecked(!checked)}
            />
            <span className="customcheck"></span>
            <span className="listinfo">
            3D & Animation (21)
            </span>
          </li>
        </ul>
      </div>
      <div className="col-md-9"></div>
    </div>
  );
};

export default LandingPageCourses;
