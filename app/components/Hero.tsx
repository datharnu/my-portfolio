"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CircleArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Navbar from "./Navbar";

interface ScrollingTextProps {
  text: string;
  direction: "left" | "right";
  size: string;
  className?: string;
}

const ScrollingText: React.FC<ScrollingTextProps> = ({
  text,
  direction,
  size,
  className,
}) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap py-4 ${className}`}>
      <motion.div
        className={`inline-block ${size}`}
        animate={{
          x: direction === "left" ? [0, -2000] : [-2000, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        <span className="font-bold text-[#515863] opacity-10">{text} </span>
        <span className="font-bold text-[#515863] opacity-10">{text} </span>
      </motion.div>
    </div>
  );
};

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Frontend Developer";

  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["#E8ECF2", "#F3E8F9", "#ECF2E8", "#E8ECD2", "#ECE2E3"]
  );

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const handleScrollDown = (): void => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="bg-[#E8ECF2] min-h-screen flex flex-col justify-between px-4 overflow-hidden relative"
      style={{ backgroundColor }}
      id="hero"
    >
      <div className="lg:mx-20 z-20 flex flex-row justify-between items-center">
        <div>
          <Navbar />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10"
        >
          <a
            href="#contact"
            className="bg-[#7C7FEE] text-white px-8 py-3 rounded-full font-semibold text-sm lg:text-lg hover:bg-[#7C7FEE]/90 transition duration-300"
          >
            Let&apos;s Connect
          </a>
        </motion.div>
      </div>
      <ScrollingText
        text="Transforming Ideas into Seamless Digital Experiences"
        direction="left"
        size="text-[13rem]"
        className="absolute top-0 left-0 right-0"
      />

      <ScrollingText
        text="Innovating the Web One Pixel at a Time"
        direction="right"
        size="text-[13rem]"
        className="absolute top-1/4 left-0 right-0"
      />

      <div className="absolute lg:top-2/3 top-1/2 lg:left-20 left-0 right-0 z-10 -translate-y-1/2">
        <div className="max-w-4xl w-full ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="lg:text-[5rem] text-4xl font-bold text-[#1A1F2B] new lg:mb-4">
              Hi, I&apos;m Emmanuel
            </h1>
            <h2 className="lg:text-6xl text-3xl font-semibold text-[#7C7FEE] new mb-4">
              {typedText}
              <span className="animate-blink">|</span>
            </h2>
            <div className="text-lg lg:text-xl text-[#1A1F2B] mb-8 flex flex-col lg:flex-row gap-5 items-center justify-center lg:justify-start">
              <p className="px-10 lg:px-0">
                {" "}
                Crafting beautiful and responsive web experiences interact with.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex space-x-6 mt-1"
              >
                <a
                  href="https://github.com/datharnu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7C7FEE] hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/emmanuelolagbemi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7C7FEE] hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:your.olagbemisoyee@gmail.com"
                  className="text-[#7C7FEE] hover:text-white transition-colors"
                >
                  <Mail size={24} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <ScrollingText
        text="Crafting User-Centric Designs for the Modern Web"
        direction="left"
        size="text-[13rem]"
        className="absolute bottom-1/4 left-0 right-0"
      />

      <ScrollingText
        text="Building Responsive and Accessible Web Applications"
        direction="right"
        size="text-[13rem]"
        className="absolute bottom-0 left-0 right-0"
      />
      <div className="absolute bottom-24 lg:bottom-10 left-1/2 -translate-x-1/2">
        <div className="relative">
          <div className="absolute inset-0 rounded-full animate-ping bg-[#7C7FEE] opacity-75"></div>
          <div className="relative rounded-full p-2 bg-white">
            <CircleArrowDown
              size={24}
              onClick={handleScrollDown}
              style={{ cursor: "pointer" }}
              color="#7C7FEE"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
