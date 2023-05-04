import React from "react";
const Frebies = () => {
  return (
    <div
      className="container"
      style={{ backgroundColor: "#F9F9F9", padding: "2%" }}
    >
      <div className="row">
        <div className="col-md-5 frebies_card_main">
          <div className="row">
            <div className="frebies_card_image"></div>
            <div className="col-md-12 mt-4">
                <div className="row justify-content-between">
                <div className="col-md-6 fribes_time">
                    <p>April 17, 2022</p>
                    </div>
                    <div className="col-md-4 frebies_tag">
              <p>UI/UX Design </p>
            </div>
                </div>
            </div>
            <div className="col-md-12 mb-3 fribes_caption">
                <p>
                Mobile App UI Kit - Online Course
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frebies;
