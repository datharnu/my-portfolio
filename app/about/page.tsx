"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Navbar from "../components/Homepage/Navbar";
import Image from "next/image";
import Frame12 from "../../public/Frame 12.png";

import Header from "./header";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { Progress } from "@nextui-org/react";

import Portfolio from "./Portfolio";
import Footer from "./footer";

export default function About() {
  return (
    <section className="bg-primary">
      <div>
        {/* Navbar */}
        <div className="lg:mx-[150px] mx-5 ">
          <Navbar />
        </div>
        {/* Image Header */}
        <Header />
        {/* About Me */}
        <div className="lg:flex justify-between lg:px-[150px] lg:py-20 sm:text-center md:text-center">
          <h1 className="aboutMe sm:text-[24px]">About Me</h1>

          <div className="lg:w-[50%] space-y-10 sm:mb-5">
            <p className="about-info lg:text-sm sm:text-xs mx-5 sm:font-semibold">
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
        <article>
          <div className="lg:flex " style={{ backgroundColor: "#5D5555" }}>
            <div className="text-center text-white my-auto mx-auto border-secondary border-4 lg:p-10 rounded-b-3xl sm:relative sm:mx-12 sm:px-5 sm:border-t-0 sm:border-2 sm:py-4 ">
              <h1 className="play lg:text-[40px] ">Skills</h1>
              <div className=" lg:text-[16px] open font-light sm:text-sm sm:fill-content3-foreground ">
                <p>We'd love to hear from you! Whether you have questions,</p>
                <p>
                  suggestions, or just want to say hello, drop us a line. Your
                  feedback
                </p>
                <p>
                  is the secret sauce that makes our site awesome. Can't wait to
                </p>
                connect!
              </div>
            </div>
            {/* portfolio */}
            <div className="text-white flex flex-col  mt-10 font-bold gap-5 w-full max-w-md mx-auto my-10 sm:px-10 sm:gap-2 sm:pb-10">
              {/* <h1>HTML</h1>
                <h1>CSS</h1>
                <h1>TAILWIND CSS</h1>
                <h1>NEXT.JS</h1>
                <h1>REACT</h1>
                <h1>TYPESCRIPT</h1>
                <h1>JAVASCRIPT</h1>
                <h1>FRAMER MOTION</h1>
                <h1>MUI</h1>
                <h1>GITHUB</h1>
                <h1>HTML5</h1>
                <h1>NEXTUI</h1>
                <h1>DAISYUI</h1> */}

              <Progress
                isIndeterminate
                label="HTML"
                color="danger"
                aria-label="Loading..."
                value={70}
              />
              <Progress
                isIndeterminate
                label="CSS"
                color="primary"
                aria-label="Loading..."
                value={70}
              />
              <Progress
                isIndeterminate
                label="TAILWIND CSS"
                color="secondary"
                aria-label="Loading..."
                value={70}
              />
              <Progress
                isIndeterminate
                label="NEXT.JS"
                color="success"
                aria-label="Loading..."
                value={70}
              />
              <Progress
                isIndeterminate
                label="REACT"
                color="warning"
                aria-label="Loading..."
                value={70}
              />
              <Progress
                isIndeterminate
                label="FRAMER MOTION"
                color="primary"
                aria-label="Loading..."
                value={70}
              />
              <Progress
                isIndeterminate
                label="MUI"
                color="danger"
                aria-label="Loading..."
                value={70}
              />
              <Progress
                isIndeterminate
                label="GITHUB"
                color="primary"
                aria-label="Loading..."
                value={70}
              />
              <Progress
                isIndeterminate
                label="HTML5"
                color="warning"
                aria-label="Loading..."
                value={70}
              />
              <Progress
                isIndeterminate
                label="NEXTUI"
                color="success"
                aria-label="Loading..."
                value={70}
              />
              <Progress
                isIndeterminate
                label="DAISYUI"
                color="secondary"
                aria-label="Loading..."
                value={70}
              />
              <Progress
                isIndeterminate
                label="CONTENTFUL"
                color="primary"
                aria-label="Loading..."
                value={70}
              />
              <Progress
                isIndeterminate
                label="VUEJS"
                color="danger"
                aria-label="Loading..."
                value={20}
              />
            </div>
          </div>
        </article>
        <Portfolio />
        <Footer />
      </div>
    </section>
  );
}
