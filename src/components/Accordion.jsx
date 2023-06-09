import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
const data = [
  {
    title: "Plan Your Curriculum",
    content:
      "You begin with your enthusiasm and knowledge. Then, using our Marketplace Insights tool, select a promising topic. It is entirely up to you how you teach and what you bring to the table. We provide a wealth of materials for developing your first course. In addition, our teacher dashboard and curriculum pages help you stay organized.",
  },
  {
    title: "Record Your Video",
    content:
      "You begin with your enthusiasm and knowledge. Then, using our Marketplace Insights tool, select a promising topic. It is entirely up to you how you teach and what you bring to the table. We provide a wealth of materials for developing your first course. In addition, our teacher dashboard and curriculum pages help you stay organized.",
  },
  {
    title: "Launch Your Course",
    content:
      "You begin with your enthusiasm and knowledge. Then, using our Marketplace Insights tool, select a promising topic. It is entirely up to you how you teach and what you bring to the table. We provide a wealth of materials for developing your first course. In addition, our teacher dashboard and curriculum pages help you stay organized.",
  },
];
const Accordion = () => {
  const [isActive, setActive] = useState(null);

  const toggle = (i) => {
    if (isActive == i) {
      return setActive(null);
    }
    setActive(i);
  };

  return (
    <div className="col-md-12 acardion">
      {data.map((item, i) => (
        <div key={i} className="item">
          <div className="title" onClick={() => toggle(i)}>
            <h5>{item.title}</h5>
            <span>{isActive == i ? "-" : "+"}</span>
          </div>
            <Collapse in={isActive == i ? true:false}>
              <p>{item.content}</p>
            </Collapse>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
