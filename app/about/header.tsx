import React from "react";
import Frame12 from "../../public/Frame 56.png";
import Image from "next/image";
import { Button } from "@nextui-org/react";
export default function Header() {
  return (
    <div>
      {/* Image Header */}
      <article className="relative">
        {/* Image*/}
        <Image src={Frame12} alt="profile-picture" className="my-5 w-fulld " />
        {/* Name & Title */}
        <div className="profile-title absolute md:bottom-10  lg:bottom-16 left-20 text-white sm:hidden">
          <h1 className="font-bold play md:text-[26px] text-[40px] text-center">
            Odunayo
          </h1>
          <p className="md:text-[24px] lg:text-[32px] open text-center ">
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