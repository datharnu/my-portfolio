/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import myImage from "../../../public/myImage.jpg";
import Navbar from "./Navbar";
import Social from "./Social";
import { Button } from "@nextui-org/react";
import Info from "./Info";

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
    <section className="bg-primary hero bg-center bg-no-repeat bg-cover ">
      <article className="lg:mx-[150px] mx-5 ">
        <Navbar />
        {/* title */}
        <article className="lg:flex-col lg:space-y-10 ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="box text-center sm:my-10 "
          >
            <h1 className="title">Hi! I’m</h1>
            <span className="title-span">Odunayo</span>
          </motion.div>
        </article>
        <article className="sm:flex sm:flex-col-reverse ">
          {/* Info slide in / social Links */}
          <div className="lg:mt-5">
            <Info />
            <Social />
          </div>

          {/* profile Image */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="py-10 sm:flex  md:flex justify-center sm:-mt-10 "
          >
            <Image
              src={myImage}
              alt="profile-image"
              width={350}
              className="border-secondary border-4 sm:border-none sm:rounded-none rounded-tl-lg rounded-tr-3xl rounded-bl-3xl rounded-br-lg "
            />
          </motion.div>
          {/* <p className="lg:text-right lg:-mt-16 -mt-5  text-center ">
            What can i conjure up for you today
          </p> */}
        </article>
      </article>
    </section>
  );
}
