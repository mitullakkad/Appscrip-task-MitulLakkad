import React from "react";
import "./sideBarProducts.css";
import SideBar from "../sideBarComponents/sideBar";
import Products from "../productComponent/products";

function SideBarProducts(props) {
  const mobile = window.matchMedia("(max-width:768px)").matches; // Use window.innerWidth for media query

  return (
    <div className="sideProductMainBox">
      {props.showSideBar || (!mobile && <SideBar />)}
      <Products cardData={props.cardData} />
    </div>
  );
}

export default SideBarProducts;
