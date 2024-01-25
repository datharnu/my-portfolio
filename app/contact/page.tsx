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
            Feel free to reach out to me by completing the form below, and I'll
            get back to you as soon as I can.
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
