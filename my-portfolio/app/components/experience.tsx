"use client";
import React, { useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

interface ExperienceProps {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

const ExperienceItem: React.FC<ExperienceProps> = ({
  company,
  role,
  period,
  location,
  description,
  skills,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-baseline">
        <motion.h2
          className="text-2xl font-bold"
          initial={{ x: -20, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          {company}
        </motion.h2>
        <motion.span
          className="text-gray-500"
          initial={{ x: 20, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          {period}
        </motion.span>
      </div>
      <div className="flex justify-between  mt-1 items-center">
        <motion.h3
          className="text-xl text-blue-500"
          initial={{ x: -20, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
          transition={{ delay: 0.3 }}
        >
          {role}
        </motion.h3>
        <motion.span
          className="text-gray-500"
          initial={{ x: 20, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
          transition={{ delay: 0.3 }}
        >
          {location}
        </motion.span>
      </div>
      <motion.p
        className="mt-2 text-gray-700"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.4 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="flex flex-wrap gap-2 mt-3"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5 }}
      >
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
      <hr className="-full h-[2px] mt-4 mb-8 bg-gray-400" />
    </motion.div>
  );
};

const ExperienceSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["#E8ECF2", "#F3E8F9", "#ECF2E8", "#E8ECD2", "#ECE2E3"]
  );

  const experiences = [
    {
      company: "Wema Bank",
      role: "Software Engineer",
      period: "2022 - 2023",
      location: "Lagos",
      description:
        "I help build and scale a new platform for our customers. Increased output of our primary services by 70%. Intigrated backend service from NodeJs. Also helped make it look prettier.",
      skills: [
        "React",
        "NodeJs",
        "Tailwind",
        "Git",
        "GitHub",
        "React Native",
        "Expo",
        "Shadcn",
      ],
    },
    {
      company: "Reftek Consulting",
      role: "Fullstack Engineer",
      period: "2020 - 2022",
      location: "Lagos",
      description:
        "Delivered high quality web applications and PWAs for various clients in the e-commerce and estate sectors. It was fun.",
      skills: [
        "React",
        "Node",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "PostgreSQL",
        "NodeJs",
        "Tailwind",
      ],
    },
    {
      company: "Rentville",
      role: "Senior Software Engineer",
      period: "2023 - Present",
      location: "Lagos",
      description:
        "Designed and developed a web application for a real estate company that helped us improve our digital footprint. It was a great experience!",
      skills: [
        "TypeScript",
        "NextJs",
        "NodeJs",
        "Tailwind",
        "Git",
        "Shadcn",
        "Figma",
        "JSON API",
      ],
    },
  ];

  const handleClick = () => {
    setIsAnimated(true);
  };

  return (
    <motion.div
      style={{ backgroundColor }}
      onClick={handleClick}
      id="experience"
    >
      <div className="mx-auto max-w-7xl px-4 text-slate-800 mt-20 py-20 p-8 min-h-screen">
        <motion.h1 className="lg:text-6xl text-4xl font-bold">
          Experience<span className="text-blue-500">.</span>
        </motion.h1>
        <motion.hr
          className="w-full h-[2px] mt-4 mb-8 bg-gray-400 rounded-full"
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceSection;
