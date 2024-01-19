"use client";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import React from "react";
import Link from "next/link";
const sidebar = {
  open: (height = 500) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 10,
    },
  }),
  closed: {
    clipPath: "circle(0px at 21px 1px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
// ... (existing imports)

export default function Navbar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <section>
      <div className="pt-10 flex justify-between">
        <motion.div className="">
          <h1 className="logo text-4xl md:text-6xl lg:text-[96px]">OA</h1>
        </motion.div>

        {/* Navbar Small Screen */}
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          ref={containerRef}
        >
          {/* Menu Item small Screen */}
          <motion.div className="background" variants={sidebar}>
            <nav className="text-sm mt-20 lg:hidden ml-5 space-y-5 font-semibold">
              <motion.ul whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link className="nav-link hover:font-bold" href="/">
                  HOME
                </Link>
              </motion.ul>
              <motion.ul whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link className="nav-link hover:font-bold" href="">
                  PROJECTS
                </Link>
              </motion.ul>
              <motion.ul whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link className="nav-link hover:font-bold" href="about">
                  ABOUT
                </Link>
              </motion.ul>
              <motion.ul whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link className="nav-link hover:font-bold" href="">
                  CONTACT
                </Link>
              </motion.ul>
            </nav>
          </motion.div>
          <motion.div
            onClick={() => toggleOpen()}
            className="menu-btn-one lg:hidden"
            animate={{
              scale: [1, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "20%"],
            }}
          >
            <input type="checkbox" />
            <span className="click"></span>
            <span className="click"></span>
            <span className="click"></span>
          </motion.div>
        </motion.nav>

        {/* Navbar large Screen */}
        <nav className="text-[16px] sm:hidden md:hidden space-y-5 font-semibold">
          <motion.ul whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link className="nav-link hover:font-bold" href="/">
              HOME
            </Link>
          </motion.ul>
          <motion.ul whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link className="nav-link hover:font-bold" href="">
              PROJECTS
            </Link>
          </motion.ul>
          <motion.ul whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link className="nav-link hover:font-bold" href="about">
              ABOUT
            </Link>
          </motion.ul>
          <motion.ul whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link className="nav-link hover:font-bold" href="contact">
              CONTACT
            </Link>
          </motion.ul>
        </nav>
      </div>
    </section>
  );
}
