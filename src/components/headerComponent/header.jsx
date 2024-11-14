import React, { useState } from "react";
import "./header.css";

function Header() {
  const tablet = window.matchMedia("(max-width:1000px)").matches;
  const mobile = window.matchMedia("(max-width:768px)").matches;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("ENG");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <header className="headerMainBox">
      <div className="headerSubBox">
        {mobile && (
          <img
            src={require("../../assets/icons/menu.png")}
            alt="header icon"
            className="mobileIcon"
          />
        )}
        <img
          src={require("../../assets/icons/headerIcon.png")}
          alt="header icon"
          className="headerIcon"
        />
        <span
          className="headerLogoText"
          style={{
            fontSize: mobile ? "22px" : tablet ? "29px" : "35px",
            fontFamily: "InterExtraBold",
          }}
        >
          LOGO
        </span>
        <div className="headerSideIconBox">
          <img
            src={require("../../assets/icons/search-normal.png")}
            alt="search icon"
            className="headerSideIcon"
          />
          <img
            src={require("../../assets/icons/heart.png")}
            alt="heart icon"
            className="headerSideIcon"
          />
          <img
            src={require("../../assets/icons/shopping-bag.png")}
            alt="shopping bag icon"
            className="headerSideIcon"
          />
          {!mobile && (
            <img
              src={require("../../assets/icons/profile.png")}
              alt="profile icon"
              className="headerSideIcon"
            />
          )}

          {!mobile && (
            <div className="custom-dropdown">
              <div className="dropdown-header" onClick={toggleDropdown}>
                {selectedOption}
                {isOpen ? (
                  <i className="fa fa-angle-up" aria-hidden="true"></i>
                ) : (
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                )}
              </div>
              {isOpen && (
                <ul className="dropdown-options">
                  <li onClick={() => handleOptionSelect("ENG")}>ENG</li>
                  <li onClick={() => handleOptionSelect("HINDI")}>HINDI</li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
      {!mobile && (
        <nav className="headerPageListBox">
          {["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"].map((title) => (
            <span
              key={title}
              style={{
                fontSize: tablet ? "17px" : "20px",
                fontFamily: "SimplonNorm",
                fontWeight: "bold",
              }}
              className="headerTitles"
            >
              {title}
            </span>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
