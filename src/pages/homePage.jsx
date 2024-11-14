import React, { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import MainTitle from "../components/homeComponent/TitleComponent/mainTitle";
import SubTitle from "../components/homeComponent/subTitleComponent/subTitle";
import SideBarProducts from "../components/homeComponent/sideBarProductComponents/sideBarProducts";

function HomePage() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [cardData, setCardData] = useState();

  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setCardData(json));
  }, []);
  return (
    <div>
      <Layout>
        <MainTitle />
        <SubTitle
          showSideBar={showSideBar}
          handleSideBar={handleSideBar}
          cardData={cardData}
        />
        <SideBarProducts showSideBar={showSideBar} cardData={cardData} />
      </Layout>
    </div>
  );
}

export default HomePage;
