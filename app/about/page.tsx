/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Navbar from "../components/Homepage/Navbar";
import Image from "next/image";
import Frame12 from "../../public/Frame 12.png";
import Header from "./header";
export default function About() {
  return (
    <section className=" ">
      <div>
        {/* Navbar */}
        <div className="lg:mx-[150px] mx-5 ">
          <Navbar />
        </div>
        {/* Image Header */}
        <Header />
        {/* About Me */}
        <div className="lg:flex justify-between lg:px-[150px] lg:py-20">
          <h1 className="aboutMe">About Me</h1>

          <div className="lg:w-[50%] space-y-10">
            <p className="about-info lg:text-xs">
              I'm a frontend developer, the architect of the digital realm you
              see and interact with. My world revolves around crafting user
              interfaces, making sure they're not just functional but also look
              slick and feel intuitive. From HTML and CSS for structure and
              style, to JavaScript for the interactive magic—I'm the one who
              brings designs to life in your browser. It's like being the
              magician behind the curtain, making things happen with a wave of
              my coding wand.
            </p>
            <button className="lg:text-[14px] border-black border-2 p-2 bg-white hover:shadow-lg hover:translate-x-2">
              Download CV/Resume
            </button>
          </div>
        </div>
        {/* Skills */}
        <article>
          <div className="" style={{ backgroundColor: "#5D5555" }}>
            <div className="text-center text-white py-20">
              <h1 className="play lg:text-[40px] ">Skills</h1>
              <div className=" lg:text-[16px] open font-light ">
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
            {/* My focus */}
            <div className="text-white ">
              <h1 className="text-[32px] play underline">My Focus</h1>

              <li className="">Responsive Design</li>
              <li>Web Design</li>
              <li>Mobile Design</li>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
