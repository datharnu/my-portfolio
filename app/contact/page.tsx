/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Header from "../about/header";
import Navbar from "../components/Homepage/Navbar";
import Footer from "../about/footer";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import Form from "./Form";

export default function Contact() {
  return (
    <section className="bg-bgImg hero">
      <div>
        {/* Navbar */}
        <div className="lg:mx-[150px] mx-5 ">
          <Navbar />
        </div>
        <Header />

        {/* contact Info */}
        <div className="my-20 space-y-8">
          <h1 className="aboutMe sm:text-[24px] md:text-[35px]  text-center">
            Contact
          </h1>
          <p className="text-center sm:text-sm lg:text-[16px] lg:px-72 sm:px-10 md:px-20 ">
            Need a touch of magic on the user interface? Our frontend sorcerers
            are at your service! Whether it's fixing bugs, adding a sprinkle of
            responsiveness, or just making things look downright gorgeous, reach
            out to our frontend maestros and let the enchantment begin.
          </p>
        </div>

        {/* Form */}
        <Form />
        {/* Footer */}
        <div>
          <Footer />
        </div>
      </div>
    </section>
  );
}
