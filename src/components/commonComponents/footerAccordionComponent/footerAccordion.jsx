import React, { Fragment, useEffect, useRef, useState } from "react";

function FooterAccordion(props) {
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
    <div className="ft-accordion-container">
      <div
        className={`ft-accordion-header ${expanded ? "expanded" : ""}`}
        onClick={handleAccordionChange}
      >
        <div className="ft-accordion-header-content">
          <p className="ft-commonMainTitle">{props.title}</p>
        </div>
        <div className="ft-accordion-expand-icon">
          {expanded ? (
            <i className="fa fa-angle-up" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          )}
        </div>
      </div>
      <div className="ft-accordion-details-wrapper" style={{ maxHeight }}>
        <div className="ft-accordion-details" ref={contentRef}>
          {props.subtitle.map((item) => {
            return (
              <Fragment key={item.id}>
                {item.icon ? (
                  <img
                    src={require(`../../../assets/icons/${item.icon}`)}
                    style={{
                      width: "30px",
                      marginLeft: "10px",
                    }}
                    alt={item.alt}
                  />
                ) : (
                  <p className="ft-commonSubText">{item.label}</p>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FooterAccordion;
