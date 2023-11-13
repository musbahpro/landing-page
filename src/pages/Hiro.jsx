import React from "react";
import { BsStars } from "react-icons/bs";
import { MdExplore, MdArrowRightAlt } from "react-icons/md";

import HeroImag from "../images/Hiroimag.png";
import Efect from "../images/Isolation_Mode.png";
import SochilIcons from "../components/SochilIcons";
import OurFeatures from "../Sections/OurFeatures";
import Games from "../Sections/Games";
import Faq from "../Sections/Faq";

export default function Hiro() {
  return (
    <>
      <div>
      <img src={Efect} alt="Efect" className=" absolute top-20 left-0 w-full" />
      <div className=" flex justify-evenly items-center flex-wrap relative  pt-12 px-3">
        <div className=" space-y-10 ">
          <span className=" text-xs font-light uppercase">
            Virtual Headsets
          </span>
          <h1 className=" text-5xl lg:w-96 font-extrabold leading-tight">
            Experience a new dimension of reality
          </h1>
          <div className=" relative">
            <p className=" text-xs leading-3	">
              Step into the future with our virtual headset, come to life right{" "}
              <br />
              before your eyes
            </p>
            <BsStars className="top-2 text-hover -left-8 absolute" />
          </div>
          <div className="flex space-x-7">
            <button className=" px-5 py-3 rounded-sm text-primer text-sm gap-4 bg-efrct flex justify-center items-center">
              Visit Sttore <MdArrowRightAlt className="text-xl" />
            </button>
            <button className=" Explore px-5 py-3 rounded-sm  text-sm gap-4 border border-efrct flex justify-center items-center">
              <MdExplore /> Explore{" "}
            </button>
          </div>
          <SochilIcons />
        </div>
        <div>
          <img src={HeroImag} alt="HeroImag" className=" " width={500} />
        </div>
      </div>
      </div>
      <OurFeatures/>
      <Games/>
      <Faq/>
    </>
  );
}
