import React, { useEffect, useRef, useState } from "react";
import "./sliderOption.css";

function SliderOptions(props) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (expanded) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [expanded]);

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="accordion-container">
      <div
        className={`accordion-header ${expanded ? "expanded" : ""}`}
        onClick={handleAccordionChange}
      >
        <div className="accordion-header-content">
          <h3 className="accordion-title">{props.title}</h3>
          <p className="accordion-subtitle">{props.subtitle}</p>
        </div>
        <div className="accordion-expand-icon">
          {expanded ? (
            <i className="fa fa-angle-up" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          )}
        </div>
      </div>
      <div className="accordion-details-wrapper" style={{ maxHeight }}>
        <div className="accordion-details" ref={contentRef}>
          <p className="unselect">unselect</p>
          <div className="checkbox-group">
            <label className="custoLabelAlgin">
              <input type="checkbox" />
              <span>
                <span className="accordionCheckLabel">Men</span>
              </span>
            </label>
            <label className="custoLabelAlgin">
              <input type="checkbox" />
              <span>
                <span className="accordionCheckLabel">Women</span>
              </span>
            </label>
            <label className="custoLabelAlgin">
              <input type="checkbox" />
              <span>
                <span className="accordionCheckLabel">Baby & Kids</span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderOptions;
