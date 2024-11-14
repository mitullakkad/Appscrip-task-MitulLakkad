import React from "react";
import "./footer.css";
import FooterAccordion from "../commonComponents/footerAccordionComponent/footerAccordion";

function Footer() {
  const mobile = window.matchMedia("(max-width:768px)").matches;

  const dataOne = [
    { id: 1, label: "About Us" },
    { id: 2, label: "Stories" },
    { id: 3, label: "Artisans" },
    { id: 4, label: "Boutiques" },
    { id: 5, label: "Contact Us" },
    { id: 6, label: "EU Compliances Docs" },
  ];

  const dataTwo = [
    { id: 1, label: "Orders & Shipping" },
    { id: 2, label: "Join/Login as a Seller" },
    { id: 3, label: "Payment & Pricing" },
    { id: 4, label: "Return & Refunds" },
    { id: 5, label: "FAQs" },
    { id: 6, label: "Privacy Policy" },
    { id: 7, label: "Terms & Conditions" },
  ];

  const dataThree = [
    { id: 1, icon: "linkdin.png", alt: "linkdin" },
    { id: 2, icon: "Insta.png", alt: "Insta" },
  ];

  return (
    <div className="ft-MainBox">
      <div className="ft-BoxOne">
        <div className="ft-subscribe-main-box">
          <p className="ft-beFirstTitleText">BE THE FIRST TO KNOW</p>
          <p className="ft-signUpText">
            {mobile
              ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text."
              : "Sign up for updates from mettā muse."}
          </p>
          <div className="ft-inputSubBox">
            <input
              placeholder="Enter your e-mail..."
              className="ft-inputFiled"
            />
            <button className="ft-subscribeBtn">Subscribe</button>
          </div>
        </div>
        <div className="ft-contactUsBox">
          <div>
            <p className="ft-beFirstTitleText">
              {mobile ? "CALL US" : "CONTACT US"}
            </p>
            <div className="ft-contactNumberBox">
              <p className="ft-contactNumberText">
                +44 221 133 5360
                {mobile && (
                  <i
                    className="fa fa-stop"
                    aria-hidden="true"
                    style={{ fontSize: "6px", rotate: "45deg" }}
                  ></i>
                )}
                {mobile && "customercare@mettamuse.com"}
              </p>
            </div>
          </div>

          {!mobile && (
            <p className="ft-signUpText">customercare@mettamuse.com</p>
          )}
          <p className="ft-beFirstTitleText" style={{ marginTop: "10px" }}>
            CURRENCY
          </p>
          <p className="ft-currencyBox">
            <img
              src={require("../../assets/images/usaIcon.png")}
              className="usaLogo"
              alt="usaLogo"
            />
            <i
              className="fa fa-stop"
              aria-hidden="true"
              style={{ fontSize: "6px", rotate: "45deg" }}
            ></i>
            USD
          </p>
          {!mobile && (
            <p className="ft-commonSmText">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          )}
        </div>
      </div>
      <div className="ft-BoxTwo">
        <div className="ft-mettaBox">
          {mobile ? (
            <FooterAccordion title="mettā muse" subtitle={dataOne} />
          ) : (
            <>
              <p className="ft-commonMainTitle">mettā muse</p>
              {dataOne.map((item) => {
                return (
                  <p className="ft-commonSubText" key={item.id}>
                    {item.label}
                  </p>
                );
              })}
            </>
          )}
        </div>
        <div className={mobile ? "ft-mettaBox2" : "ft-mettaBox"}>
          {mobile ? (
            <FooterAccordion title="QUICK LINKS" subtitle={dataTwo} />
          ) : (
            <>
              <p className="ft-commonMainTitle">QUICK LINKS</p>
              {dataTwo.map((item) => {
                return (
                  <p className="ft-commonSubText" key={item.id}>
                    {item.label}
                  </p>
                );
              })}
            </>
          )}
        </div>
        <div className="ft-mettaBox3">
          {mobile ? (
            <FooterAccordion title="Follow Us" subtitle={dataThree} />
          ) : (
            <div>
              <p className="ft-beFirstTitleText">Follow Us</p>
              <div className="instaLinkBox">
                <img
                  src={require("../../assets/icons/linkdin.png")}
                  className="linkInstaIcon"
                  alt="linkdin"
                />
                <img
                  src={require("../../assets/icons/Insta.png")}
                  className="linkInstaIcon"
                  alt="insta"
                />
              </div>
            </div>
          )}
          <div className="paymentInfoBox">
            <p className="ft-commonSubText">mettā muse Accepts</p>
            <img
              src={require("../../assets/images/frame.png")}
              className="paymentIcons"
              alt="paymentIcons"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
