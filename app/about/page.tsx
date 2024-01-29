"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Navbar from "../components/Homepage/Navbar";
import Image from "next/image";
import Frame12 from "../../public/Frame 12.png";

import Header from "./header";
import { motion } from "framer-motion";
import { Button, ul } from "@nextui-org/react";
import { Progress } from "@nextui-org/react";

import Portfolio from "./Portfolio";
import Footer from "./footer";

export default function About() {
  return (
    <section className="bg-bgImg hero">
      <div>
        {/* Navbar */}
        <div className="lg:mx-[150px] mx-5 ">
          <Navbar />
        </div>
        {/* Image Header */}
        <Header />
        {/* About Me */}
        <div className="lg:flex justify-between lg:px-[150px] lg:py-20 sm:text-center md:text-center">
          <h1 className="aboutMe sm:text-[24px] md:text-[35px] md:mb-2 ">
            About Me
          </h1>

          <div className="lg:w-[50%] space-y-10 sm:mb-5 md:mb-7">
            <p className="about-info lg:text-sm sm:text-xs md:font-semibold  mx-5 sm:font-semibold">
              I'm a frontend developer, the architect of the digital realm you
              see and interact with. My world revolves around crafting user
              interfaces, making sure they're not just functional but also look
              slick and feel intuitive. From HTML and CSS for structure and
              style, to JavaScript for the interactive magic—I'm the one who
              brings designs to life in your browser. It's like being the
              magician behind the curtain, making things happen with a wave of
              my coding wand.
            </p>

            <Button className="lg:text-[14px] border-black border-2 p-2 bg-white hover:shadow-lg hover:-translate-y-2 rounded-none sm:text-xs ">
              Download CV/Resume
            </Button>
          </div>
        </div>
        {/* Skills */}
        <article className=" ">
          <div className="  " style={{ backgroundColor: "#5D5555" }}>
            <div className="lg:mx-[150px]  lg:flex py-10 lg:py-44 lg:gap-10  ">
              <div className="text-center text-white my-auto mx-auto border-black border-4 lg:p-10 rounded-b-3xl sm:border-none md:border-none sm:relative sm:mx-12  sm:px-5 md:py-5  sm:py-4 ">
                <h1 className="play lg:text-[40px] md:text-[35px] sm:text-[24px] ">
                  Current Skills
                </h1>
                <div className=" lg:text-[16px] open font-light sm:text-sm sm:fill-content3-foreground ">
                  <p>We'd love to hear from you! Whether you have questions,</p>
                  <p>
                    suggestions, or just want to say hello, drop us a line. Your
                    feedback
                  </p>
                  <p>
                    is the secret sauce that makes our site awesome. Can't wait
                    to
                  </p>
                  connect!
                </div>
              </div>

              {/* portfolio */}
              <div className="text-black font-semibold lg:text-lg sm:text-sm my-10 lg:w-[47%] ">
                <ul className="flex flex-wrap gap-[1rem] mx-2  justify-center ">
                  <li className="bg-pink-600 rounded-sm p-2">HTML</li>
                  <li className="bg-gray-400 rounded-sm p-2">CSS</li>
                  <li className="bg-yellow-700 rounded-sm p-2">Tailwind CSS</li>
                  <li className="bg-green-500 rounded-sm p-2">NEXTJS</li>
                  <li className=" bg-amber-400 rounded-sm p-2">React</li>
                  <li className="bg-gray-400  rounded-sm p-2">Framer Motion</li>
                  <li className="bg-yellow-700 rounded-sm p-2">Typescript</li>
                  <li className="bg-green-500 rounded-sm p-2">MUI</li>
                  <li className="bg-pink-600 rounded-sm p-2">Javascript</li>
                  <li className="bg-gray-400 rounded-sm p-2">Github</li>
                  <li className="bg-amber-400 rounded-sm p-2">HTML5</li>
                  <li className="bg-green-500 rounded-sm p-2">NEXTUI</li>
                  <li className="bg-yellow-700 rounded-sm p-2">DAISYUI</li>
                  <li className="bg-amber-400 rounded-sm p-2">Contentful</li>
                  <li className="bg-pink-600 rounded-sm p-2">VUEJS</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
        <Portfolio />
        <Footer />
      </div>
    </section>
  );
}
