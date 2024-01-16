"use client";
import { useState } from "react";
import React from "react";
import Social from "./Social";
import Image from "next/image";
import profileImage from "../../public/Frame 2.png";
export default function Homepage() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuToggle = () => {
    setMenuOpen((prevMenuState) => !prevMenuState);
    console.log("hello");
  };

  const closeToggle = () => {
    setMenuOpen(false);
  };
  return (
    <section className="lg:mx-[150px] sm:mx-5 ">
      <div className="  mt-10 flex justify-between">
        <div className="">
          <h1 className="logo sm:text-6xl lg:text-[96px]">OA</h1>
        </div>
        {/* Navbar Small Screen */}
        <div>
          {/* Menu Icon */}
          <div
            className={`menu-icon  burger menu-btn-one lg:hidden `}
            onClick={menuToggle}
          >
            <input type="checkbox" />

            <span className="click"></span>
            <span className="click"></span>
            <span className="click"></span>
          </div>
          <div
            className={`menu-info font-bold  ${isMenuOpen ? "appear" : "hide"}`}
          >
            <nav className="text-[16px] lg:hidden  space-y-5 font-semibold">
              <ul>
                <a href="">HOME</a>
              </ul>
              <ul>
                <a href="">PROJECTS</a>
              </ul>
              <ul>
                <a href="">ABOUT</a>
              </ul>
              <ul>
                <a href="">CONTACT</a>
              </ul>
            </nav>
          </div>
        </div>

        {/* Navbar large Screen */}
        <nav className="text-[16px] sm:hidden md:hidden  space-y-5 font-semibold">
          <ul>
            <a href="">HOME</a>
          </ul>
          <ul>
            <a href="">PROJECTS</a>
          </ul>
          <ul>
            <a href="">ABOUT</a>
          </ul>
          <ul>
            <a href="">CONTACT</a>
          </ul>
        </nav>
      </div>
      {/* title */}
      <article className="lg:flex-col space-y-10 sm:">
        <div className="text-center sm:my-10">
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
            structure and style, to JavaScript for the interactive magic—I'm the
            one who brings
          </p>
          <p>
            designs to life in your browser. It's like being the magician behind
            the curtain, making
          </p>
          <p>things happen with a wave of my coding wand.</p>
        </div>
      </article>
      <Social />
      {/* profile Image */}
      <div className="py-10 sm:flex justify-center">
        <Image src={profileImage} alt="profile-image" />
      </div>
      <p className="text-right -mt-5   ">What can i conjure up for you today</p>
    </section>
  );
}
