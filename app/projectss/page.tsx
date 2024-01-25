/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Navbar from "../components/Homepage/Navbar";
import Header from "../about/header";
import { Button } from "@nextui-org/react";
import ProjectCard from "./Card";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="bg-bgImg hero pb-10">
      <div>
        {/* Navbar */}
        <div className="lg:mx-[150px] mx-5">
          <Navbar />
        </div>
        <Header />
        {/* Project Body */}
        <article className="lg:mx-36">
          {/* Project Info */}
          <div className="my-20 space-y-5 sm:-mt-1">
            <h1 className="aboutMe sm:text-[24px] md:text-[35px] md:text-center sm:text-center">
              Projects
            </h1>
            <div className="lg:flex justify-between ">
              <div className=" sm:text-sm lg:text-[16px]  sm:px-10 md:px-20  ">
                <p>
                  Need a touch of magic on the user interface? Our frontend
                  sorcerers are at your service! Whether it's fixing bugs,
                </p>
                <p>
                  adding a sprinkle of responsiveness, or just making things
                  look downright gorgeous, reach out to our frontend
                </p>
                <p> maestros and let the enchantment begin.</p>
              </div>
              <div>
                {/* Discover Button */}
                <Link href="https://github.com/datharnu">
                  <Button className="lg:text-[14px] border-black border-2 p-2 md:hidden sm:hidden bg-white hover:shadow-lg hover:-translate-y-2 rounded-none sm:text-xs ">
                    Discover More
                  </Button>
                </Link>
              </div>
            </div>
            {/* Project Card */}
            <article className="">
              <div>
                <ProjectCard />
              </div>
            </article>
          </div>
        </article>
      </div>
    </section>
  );
}
