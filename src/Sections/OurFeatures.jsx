import React from "react";
import { BsStars } from "react-icons/bs";
import featuresImag from "../images/features.png";

export default function OurFeatures() {
  const featuresStyle = "flex ml-3 text-xs mb-3 w-80";
  const Satar = "text-hover mr-3 text-2xl";
  return (
    <div className="flex justify-center items-center  flex-wrap">
      <img src={featuresImag} alt="featuresImag" width={900} />
      <div>
        <h1 className=" text-4xl lg:w-1/2  mb-9 font-bold leading-snug pl-5 ">
          Our Virtual Headsets Shine with Unique Features!
        </h1>
        <ul className=" flex flex-wrap lg:justify-start justify-center">
          <ul>
            <li className={featuresStyle}>
              <BsStars className={Satar} />
              High-resolution OLED or LCD screens: Provide sharp and clear
              visuals.
            </li>
            <li className={featuresStyle}>
              <BsStars className={Satar} />
              Refresh rate: Higher refresh rates reduce motion sickness and
              provide.
            </li>
            <li className={featuresStyle}>
              <BsStars className={Satar} />
              Eye tracking: Monitors the movement of the user's eyes, allowing
              for more.
            </li>
          </ul>
          <ul>
            <li className={featuresStyle}>
              <BsStars className={Satar} />
              Refresh rate: Higher refresh rates reduce motion sickness and
              provide.
            </li>
            <li className={featuresStyle}>
              <BsStars className={Satar} />
              Eye tracking: Monitors the movement of the user's eyes, allowing
              for more.
            </li>
            <li className={featuresStyle}>
              <BsStars className={Satar} />
              High-resolution OLED or LCD screens: Provide sharp and clear
              visuals.
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
