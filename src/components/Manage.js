import React from "react";
import Card from "./Card";
import CardOne from "./CardOne";
import CardBtn from "./CardBtn";
import { GoGift } from "react-icons/go";
import { FcPortraitMode } from "react-icons/fc";
import { FcCallback } from "react-icons/fc";
import MyCarousel from "./Carousel";
import Shortcuts from "./Shortcuts";

const data = [
  {
    color: "#b6dd6e",
    img: <FcCallback />,
    title: "Call manager",
  },
  {
    color: "#bd4ac6",
    img: <GoGift />,
    title: "rewards & coupons",
  },
  {
    color: "#09c5fc",
    img: <FcPortraitMode />,
    title: "refer a friend",
  },
];
function Manage() {
  return (
    <div>
      <div className="manageCards">
        <Card />
        <CardOne />
      </div>
      <MyCarousel />
      <div className="cardBtnwrapper">
        {data.map((value, index) => (
          <div key={index} style={{ width: "28%" }}>
            <CardBtn color={value.color} img={value.img} title={value.title} />
          </div>
        ))}
      </div>
      <div className="shortcut">
        <Shortcuts />
      </div>
      <div className="cardBtnwrapper">
        {data.map((value, index) => (
          <div key={index} style={{ width: "28%" }}>
            <CardBtn color={value.color} img={value.img} title={value.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Manage;
