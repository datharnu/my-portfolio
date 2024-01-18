/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profileImage from "../../../public/Frame 2.png";
import Navbar from "./Navbar";
import Social from "./Social";
import { Button } from "@nextui-org/react";
export default function Homepage() {
  return (
    <section className="bg-bgImg">
      <article className="lg:mx-[150px] mx-5 ">
        <Navbar />
        {/* title */}
        <article className="lg:flex-col space-y-10 sm:">
          <div className="text-center sm:my-10 ">
            <h1 className="title">Hi! I’m</h1>
            <span className="title-span">Odunayo</span>
          </div>
          <div className="info text-center lg:text-[16px] text-lg ">
            <p className="">
              I'm a <span className="info-span">frontend developer</span>, the
              architect of the digital realm you see and
            </p>
            <p>
              interact with. My world revolves around crafting user interfaces,
              making sure they're
            </p>
            <p>
              not just functional but also look slick and feel intuitive. From
              HTML and CSS for
            </p>
            <p>
              structure and style, to JavaScript for the interactive magic—I'm
              the one who brings
            </p>
            <p>
              designs to life in your browser. It's like being the magician
              behind the curtain, making
            </p>
            <p>things happen with a wave of my coding wand.</p>
          </div>
        </article>
        <Social />
        {/* profile Image */}
        <div className="py-10 sm:flex md:flex justify-center">
          <Image src={profileImage} alt="profile-image" />
        </div>
        <p className="lg:text-right lg:-mt-16 -mt-5  text-center ">
          What can i conjure up for you today
        </p>
      </article>
    </section>
  );
}
