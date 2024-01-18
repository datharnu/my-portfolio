import React from "react";
import Image from "next/image";
import Instagram from "../../../public/instagram (1).svg";
import Github from "../../../public/github.svg";
import Linkedin from "../../../public/linkedin-01.svg";
import Twitter from "../../../public/new-twitter-rectangle.svg";
import { Link } from "@nextui-org/react";
export default function Social() {
  return (
    <section className="lg:pt-10 sm:py-5">
      <div className="flex gap-5 justify-center ">
        <Link className="nav-link" href="https://www.instagram.com/dat_harnu/">
          <Image src={Instagram} alt="Instagram" className="cursor-pointer" />
        </Link>
        <Link className="nav-link" href="https://github.com/datharnu">
          <Image src={Github} alt="Github" />
        </Link>
        <Link
          className="nav-link"
          href="https://www.linkedin.com/me?trk=p_mwlite_profile_self-secondary_nav"
        >
          <Image src={Linkedin} alt="Linkedin" />
        </Link>
        <Link className="nav-link" href="https://twitter.com/Harnu_haryo">
          <Image src={Twitter} alt="Twitter" />
        </Link>
      </div>
    </section>
  );
}
