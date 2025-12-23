"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Link,
  ArrowUpRightFromSquareIcon,
  CircleChevronRight,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
} from "framer-motion";

interface SkillSectionProps {
  title: string;
  skills: string[];
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["#E8ECF2", "#F3E8F9", "#ECF2E8", "#E8ECD2", "#ECE2E3"]
  );

  const [typedText, setTypedText] = useState("");

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const mainControls = useAnimation();

  return (
    <motion.div
      ref={sectionRef}
      className="min-h-screen p-8 text-gray-800 "
      style={{ backgroundColor }}
      id="about"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h1
          animate={mainControls}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="lg:text-6xl text-4xl font-bold mb-12"
        >
          About
          <span className="text-indigo-500">
            . <hr className="w- h-[2px] mt-4 mb-8 bg-gray-400 rounded-full" />
          </span>
        </motion.h1>

        <div className="flex items-start mb-12">
          <motion.div
            animate={mainControls}
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold mr-6 text-white"
          >
            H
          </motion.div>
          <div>
            <p className="mb-4 text-lg">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 0.7 }}
              >
                ey my name is <span className="font-bold">Emmanuel</span>.
              </motion.span>
            </p>
            <AnimatedParagraph delay={0.5}>
              I&apos;m a musicologist turned software engineer from Lagos,
              Nigeria. I specialize in Fullstack development, primarily NextJs and
              TypeScript, but I love building with whatever tools are right for
              the job.
            </AnimatedParagraph>
            <AnimatedParagraph delay={0.7}>
              I recently worked with Wema Bank on Alat. I also contribute to
              design systems teams from time to time (once an artist, always an
              artist, am I right?).
            </AnimatedParagraph>
            <AnimatedParagraph delay={0.9}>
              Outside of work, my passion for music lives on. Any given Sunday,
              you&apos;ll find me in church playing the guitar 🎵 I even teach
              online courses for those looking to learn music!
            </AnimatedParagraph>
            <AnimatedParagraph delay={1.1}>
              I&apos;m passively exploring new positions where I can merge my
              love for code with my passion for music and creativity. If you
              think you&apos;ve got an opening that might interest me,
              let&apos;s connect 🔗
            </AnimatedParagraph>
          </div>
        </div>

        <SkillSection
          title="Use at work"
          skills={[
            "JavaScript",
            "TypeScript",
            "HTML",
            "CSS",
            "React",
            "Redux",
            "NodeJS",
            "Zod",
            "Postgres",
            "Yup",
            "GitHub",
            "Next.js",
            "React Native",
            "Postgres",
            "Framer-Motion",
          ]}
        />
        <SkillSection
          title="Use for fun"
          skills={[
            "React Native",
            "Tailwind",
            "VueJS",
            "Spring",
            "Figma",
            "Json",
            "NextUI",
            "Shadcn",
            "FastAPI",
          ]}
        />

        <motion.div
          animate={mainControls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="flex gap-2 "
        >
          <p className="flex mr-2">My links:</p>

          <SocialLink
            href="https://www.linkedin.com/in/emmanuelolagbemi/"
            icon={<Linkedin size={20} />}
          />
          <SocialLink
            href="https://github.com/datharnu"
            icon={<Github size={20} />}
          />
          <SocialLink href="#" icon={<Twitter size={20} />} />
          <SocialLink
            href="https://my-portfolio-iota-navy-23.vercel.app/"
            icon={<Link size={20} />}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const AnimatedParagraph: React.FC<{
  children: React.ReactNode;
  delay: number;
}> = ({ children, delay }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.p
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ delay, duration: 0.5 }}
      className="mb-4"
    >
      {children}
    </motion.p>
  );
};

const SkillSection: React.FC<SkillSectionProps> = ({ title, skills }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <motion.a
    href={href}
    className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200 mb-20"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);

export default About;
