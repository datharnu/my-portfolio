/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import mail from "../../public/mail-01.svg";
import telephone from "../../public/telephone.svg";
import { Button } from "@nextui-org/react";
import copyright from "../../public/copyright.svg";
import Social from "../components/Homepage/Social";
import Link from "next/link";
export default function Footer() {
  return (
    <section className="bg-footer">
      <article className="py-10 sm:mx-10">
        <div className="text-white text-center">
          <h1 className="lg:text-[40px] play ">Let's work together</h1>
          <p>I would love to hear from you so feel free to reach out</p>

          <Link href="/contact">
            <Button className="lg:text-[20px] play font-bold text-white border-white mt-5 border-2 p-2 px-5 bg-black hover:shadow-lg hover:-translate-y-2 rounded-none cursor-pointer">
              Contact Me
            </Button>
          </Link>
        </div>

        {/* Reach me */}
        <div className="text-white sm:mt-10 lg:-mt-10 md:mt-10 space-y-2 lg:ml-20 text-center ">
          {/* Email */}
          <div className="flex gap-5 md:ml-5 sm:justify-center">
            <Image src={mail} alt="email" />
            <span>Olagbemisoyee@gmail.com</span>
          </div>
          {/* Telephone */}
          <div className="flex gap-5 md:ml-5 md:pt-2 sm:justify-center">
            <Image src={telephone} alt="telephone" />
            <span>+2349065434849</span>
          </div>
        </div>
        {/* Social Links */}
        <div className="lg:flex justify-end relative  bottom-10 lg:mr-20 sm:mt-10">
          <Social />
        </div>
        {/* Copyright */}
        <div className="text-white flex justify-center gap-2 text-center ">
          <Image src={copyright} alt="copyright" className="" />
          <p>2024 Emmanuel Odunayo Olagbemisoye. All Right Reserved.</p>
        </div>
      </article>
    </section>
  );
}
