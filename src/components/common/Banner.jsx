import React from "react";
import bg_1 from "../../assets/Images/bg_1.jpg";
import { hasTouchSupport } from "../../components/constant";
const Banner = ({ backImg, title, subtitle }) => {
  return (
    <div
      // className="w-full h-96 bg-cover bg-center"
      className={`w-full  bg-cover bg-center ${
        hasTouchSupport ? "h-40" : "h-96"
      }`}
      style={{
        // height: "32rem",
        backgroundImage: `url(${backImg})`,
      }}
    >
      <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-10">
        <div className="text-center">
          <h6 className="text-base font-semibold text-white">{subtitle}</h6>
          <h1 className="text-white text-2xl font-bold uppercase md:text-3xl">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
