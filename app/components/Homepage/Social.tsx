import React from "react";
import Image from "next/image";
import Instagram from "../../../public/instagram (1).svg";
import Github from "../../../public/github.svg";
import Linkedin from "../../../public/linkedin-01.svg";
import Twitter from "../../../public/new-twitter-rectangle.svg";
import { Link } from "@nextui-org/react";
import { motion } from "framer-motion";
export default function Social() {
  return (
    <section className="lg:pt-10 sm:py-5 md:py-5">
      <div className="flex gap-5 justify-center ">
        {/* Instagram */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <Link
            className="hover:scale-110"
            href="https://www.instagram.com/dat_harnu/"
          >
            <Image
              src={Instagram}
              alt="Instagram"
              className="cursor-pointer  "
              width={40}
            />
          </Link>
        </motion.div>

        {/* Github */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <Link className="hover:scale-110 " href="https://github.com/datharnu">
            <Image src={Github} alt="Github" className="" width={40} />
          </Link>
        </motion.div>

        {/* Linkedin */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <Link
            className="hover:scale-110"
            href="https://www.linkedin.com/me?trk=p_mwlite_profile_self-secondary_nav"
          >
            <Image src={Linkedin} alt="Linkedin" width={40} />
          </Link>
        </motion.div>
        {/* Twitter */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <Link
            className="hover:scale-110"
            href="https://twitter.com/Harnu_haryo"
          >
            <Image src={Twitter} alt="Twitter" width={40} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
