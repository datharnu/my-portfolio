/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import mail from "../../public/mail-01.svg";
import telephone from "../../public/telephone.svg";
import { Button } from "@nextui-org/react";
import copyright from "../../public/copyright.svg";
import Social from "../components/Homepage/Social";
export default function Footer() {
  return (
    <section className="bg-footer">
      <article className="py-10">
        <div className="text-white text-center">
          <h1 className="lg:text-[40px] play ">Let's work together</h1>
          <p>I would love to hear from you so feel free to reach out</p>

          <Button className="lg:text-[20px] play font-bold text-white border-white mt-5 border-2 p-2 px-5 bg-black hover:shadow-lg hover:-translate-y-2 rounded-none cursor-pointer">
            Contact Me
          </Button>
        </div>

        {/* Reach me */}
        <div className="text-white -mt-10 space-y-2 lg:ml-20">
          <div className="mb-5">
            <h1 className="lg:text-[20px]">Reach Me</h1>
          </div>
          {/* Email */}
          <div className="flex gap-5">
            <Image src={mail} alt="email" />
            <span>Olagbemisoyee@gmail.com</span>
          </div>
          {/* Telephone */}
          <div className="flex gap-5">
            <Image src={telephone} alt="telephone" />
            <span>+2349065434849</span>
          </div>
        </div>
        <div className="text-white flex justify-center gap-2">
          <Image src={copyright} alt="copyright" className="" />
          <p>2024 Emmanuel Odunayo Olagbemisoye. All Right Reserved.</p>
        </div>
        <div className="flex justify-end relative bottom-32 lg:mr-20">
          <Social />
        </div>
      </article>
    </section>
  );
}
