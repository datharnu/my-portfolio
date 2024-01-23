"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import Slider from "./Image";
export default function Header() {
  return (
    <div className="md:my-10">
      {/* Image Header */}
      <article className="relative">
        {/* Image*/}
        <div className="my-5  ">
          <Slider />
        </div>

        {/* Name & Title */}
        <div className="profile-title absolute md:bottom-10  lg:bottom-16 left-20 text-white md:hidden sm:hidden lg:hidden">
          <h1 className="font-bold play md:text-[26px] text-[40px] text-center">
            Odunayo
          </h1>
          <p className="md:text-[24px] play lg:text-[32px] open text-center ">
            Web Developer
          </p>
          <Button className=" md:text-xs lg:text-[16px]  px-10 lg:py-1 md:px-7 open text-black ml-5 mt-2 lg:mt-4 hover:shadow-lg hover:-translate-y-2 rounded-none">
            Contact Me
          </Button>
        </div>
      </article>
    </div>
  );
}
