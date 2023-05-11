import React, { useState, useEffect } from "react";
import { ReactComponent as Arrowclockwise } from "../icons/ArrowClockwise.svg";
const MultipleAccordion = ({ items, open, className }) => {
  const [acardionItem, setAcardionitem] = useState(null);
  useEffect(() => {
    if (items) {
      setAcardionitem([
        ...items.map((item) => ({
          ...item,
          toggled: false,
        })),
      ]);
    }
  }, [items]);
  function handleAccordionToggle(clickedItem) {
    setAcardionitem([
      ...acardionItem.map((item) => {
        let toggled = item.toggled;
        if (clickedItem.id == item.id) {
          toggled = !item.toggled;
        } else if (!open) {
          toggled = false;
        }
        return {
          ...item,
          toggled,
        };
      }),
    ]);
  }

  return (
    <div className="landing-page-categories">
      {acardionItem?.map((listItem, key) => {
        return (
          <>
            <ul className="item landing-courses-list">
              <input type="checkbox" defaultChecked={false} />
              <span className="customcheck"></span>
              <div
                onClick={() => handleAccordionToggle(listItem)}
                className="landing-toggle-group head "
              >
                <p>{listItem.head}</p>
                <span className="landing-browse-icon">
                  {listItem.toggled ? "-" : "+"}
                </span>
              </div>
              <div
                className={`toggle-content ${
                  listItem.toggled ? "toggled" : ""
                }`}
                key={key}
              >
                {listItem.pages.map((index) => (
                  <p>{index.pagename}</p>
                ))}
              </div>
            </ul>
          </>
        );
      })}
      <span className="landing-browse-line"></span>
    </div>
  );
};

export default MultipleAccordion;
