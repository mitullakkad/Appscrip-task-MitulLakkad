import React, { useState } from "react";
import "./customSelect.css";

const CustomSelect = ({ select, handleChange, selectOptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (id) => {
    handleChange(id);
    setIsOpen(false);
  };

  return (
    <div className="custom-select-container">
      <div
        className="custom-select-trigger"
        onClick={toggleDropdown}
        style={{
          fontFamily: "InterExtraBold",
        }}
      >
        {selectOptions.find((item) => item.id === select)?.label}
        {isOpen ? (
          <i className="fa fa-angle-up" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        )}
      </div>
      <div className={`custom-select-dropdown ${isOpen ? "open" : ""}`}>
        {selectOptions.map((item) => (
          <div
            key={item.id}
            className="custom-select-option"
            onClick={() => handleSelect(item.id)}
            style={{
              fontFamily: "SimplonNorm",
              fontWeight: select === item.id ? 700 : 400,
              display: "flex",
              justifyContent: "end",
            }}
          >
            {select === item.id && (
              <i className="fa fa-check" aria-hidden="true"></i>
            )}
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
