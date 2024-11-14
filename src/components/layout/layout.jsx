import React from "react";
import "./layout.css"; // Assuming this contains all your CSS styles
import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";
import { dataList } from "../../utils/constants";

function Layout({ children }) {
  const mobile = window.matchMedia("(max-width:768px)").matches;

  return (
    <div>
      <div className="pageTopLineBox">
        {mobile ? (
          <div className="topIconTextBox">
            <img
              src={require("../../assets/icons/topLineIcon.png")}
              className="topLineIcon"
              alt="topLineIcon"
            />
            <p
              className="topLineText"
              style={{ fontFamily: "InterExtraLight", fontSize: "12px" }}
            >
              Lorem ipsum dolor
            </p>
          </div>
        ) : (
          <>
            {dataList.map((item) => {
              return (
                <div className="topIconTextBox" key={item.id}>
                  <img
                    src={require("../../assets/icons/topLineIcon.png")}
                    className="topLineIcon"
                    alt="topLineIcon"
                  />
                  <p
                    className="topLineText"
                    style={{ fontFamily: "InterExtraLight", fontSize: "12px" }}
                  >
                    {item.label}
                  </p>
                </div>
              );
            })}
          </>
        )}
      </div>
      <Header />
      {mobile && (
        <div className="breadLinkBox">
          <div aria-label="breadcrumb" className="breadcrumbs">
            <a
              className="breadcrumb-link"
              href="/"
              style={{
                fontSize: "12px",
                fontFamily: "SimplonNorm",
                color: "#BFC8CD",
                textDecoration: "none",
              }}
            >
              HOME
            </a>
            <span className="breadcrumb-separator"> | </span>

            <a
              className="breadcrumb-link"
              href="/"
              style={{
                fontSize: "12px",
                fontFamily: "SimplonNorm",
                textDecoration: "none",
              }}
            >
              SHOP
            </a>
          </div>
        </div>
      )}
      <div className="childrenLayout">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
