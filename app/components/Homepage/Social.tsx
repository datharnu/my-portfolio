import React from "react";
import Image from "next/image";
import Instagram from "../../../public/instagram (1).svg";
import Github from "../../../public/github.svg";
import Linkedin from "../../../public/linkedin-01.svg";
import Twitter from "../../../public/new-twitter-rectangle.svg";
export default function Social() {
  return (
    <section className="lg:pt-10 sm:py-5">
      <div className="flex gap-5 justify-center ">
        <a href="https://www.instagram.com/dat_harnu/">
          <Image src={Instagram} alt="Instagram" className="cursor-pointer" />
        </a>
        <a href="https://github.com/datharnu">
          <Image src={Github} alt="Github" />
        </a>
        <a href="https://www.linkedin.com/me?trk=p_mwlite_profile_self-secondary_nav">
          <Image src={Linkedin} alt="Linkedin" />
        </a>
        <a href="https://twitter.com/Harnu_haryo">
          <Image src={Twitter} alt="Twitter" />
        </a>
      </div>
    </section>
  );
}
