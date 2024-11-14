import React from "react";
import "./sideBar.css";
import SliderOptions from "../../commonComponents/sideBarOptionComponent/sliderOptions";
import { sliderOptions } from "../../../utils/constants";

function SideBar() {
  return (
    <div className="sideMainBox">
      <div className="customizbleBox">
        <label className="custoLabelAlgin">
          <input type="checkbox" className="customizeCheckbox" />
          <span>
            <span className="customizeText">CUSTOMIZBLE</span>
          </span>
        </label>
      </div>

      {sliderOptions?.map((option) => {
        return (
          <SliderOptions title={option.title} subtitle={option.subtitle} />
        );
      })}
    </div>
  );
}

export default SideBar;
