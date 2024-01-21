/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import myImage from "../../../public/myImage.jpg";
import mine from "../../../public/mine.jpg";
import mie from "../../../public/mie.jpeg";
import Navbar from "./Navbar";
import Social from "./Social";
import { Button } from "@nextui-org/react";
import Info from "./Info";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import Contact from "@/app/contact/page";
import MyImage from "./Avatar";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};
export default function Homepage() {
  return (
    <section className=" hero bg-center bg-no-repeat bg-cover h-screen ">
      <article className="lg:mx-[150px] mx-5 ">
        <Navbar />
        {/* title */}
        <article className="lg:flex-col lg:space-y-10 my-10  ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="box text-center sm:my-5 "
          >
            <h1 className="text-[64px] font-bold sm:text-3xl md:text-5xl ">
              Hi! I’m
              <span className="title-span sm:text-3xl md:text-5xl ">
                Emmanuel
              </span>
            </h1>
            <h1 className="title sm:text-3xl md:text-5xl">Olagbemisoye</h1>
          </motion.div>
        </article>
        <article className="sm:flex sm:flex-col-reverse sm:-mt-10 ">
          {/* Info slide in / social Links */}
          <div className="lg:mt-5">
            <Info />
            <Social />
          </div>

          {/* profile Image */}

          <MyImage />

          {/* <p className="lg:text-right lg:-mt-16 -mt-5  text-center ">
            What can i conjure up for you today
          </p> */}
        </article>
      </article>
    </section>
  );
}
