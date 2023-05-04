import React from "react";

const Authorxs = () => {
  return (
    <div
      className="container"
      style={{ backgroundColor: "#F9F9F9", padding: "2%" }}
    >
      <div className="row">
        <div className="col-md-8 authorxs_main">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-2">
                  <div className="authorxs_img"></div>
                </div>
                <div className="col-md-8">
                  <ul>
                    <li><p>
                    Sen Janson
                        </p></li>
                    <li>
                        <p>
                        Design Lead Shopedia
                        </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
                <button> View Profile</button>
                <button>
                Message
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorxs;
