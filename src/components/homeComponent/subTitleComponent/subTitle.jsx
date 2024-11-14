import React, { useState } from "react";
import "./subTitle.css";
import CustomSelect from "../../commonComponents/customSelectComponent/customSelect";
import { selectOptions } from "../../../utils/constants";

function SubTitle(props) {
  const [select, setSelect] = useState("");
  const tablet = window.matchMedia("(max-width:1000px)").matches;
  const mobile = window.matchMedia("(max-width:768px)").matches;

  const handleChange = (value) => {
    setSelect(value);
  };

  return (
    <div className="subTitMainBox">
      {mobile ? (
        <div className="subTitSubBox">
          <span
            style={{
              fontSize: mobile ? "13px" : "15px",
              fontFamily: "SimplonNorm",
              fontWeight: 700,
            }}
          >
            FILTER
          </span>
        </div>
      ) : (
        <>
          <div className="subTitSubBox">
            <span
              style={{
                fontSize: tablet ? "15px" : "18px",
                fontFamily: "SimplonNorm",
                fontWeight: 700,
              }}
            >
              {props.cardData?.length} Items
            </span>
            <button
              onClick={props.handleSideBar}
              className="hideShowBtn"
              style={{
                fontSize: tablet ? "14px" : "16px",
                fontFamily: "SimplonNorm",
              }}
            >
              <i
                className={
                  props.showSideBar ? "fa fa-angle-left" : "fa fa-angle-right"
                }
                aria-hidden="true"
              ></i>
              <span className="hideShowText">
                {props.showSideBar ? "HIDE FILTER" : "SHOW FILTER"}
              </span>
            </button>
          </div>
        </>
      )}
      <div className="recommendedBox">
        <CustomSelect
          select={select}
          handleChange={handleChange}
          selectOptions={selectOptions}
          mobile={false}
          tablet={false}
        />
      </div>
    </div>
  );
}

export default SubTitle;
