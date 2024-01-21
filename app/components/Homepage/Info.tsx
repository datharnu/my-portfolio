/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import { useInView } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
}

function Section({ children }: SectionProps): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </div>
    </section>
  );
}

export default function Info(): JSX.Element {
  return (
    <Section>
      <div className="info text-center lg:text-[16px] text-lg sm:text-sm  sm:px-10  ">
        <p className="">
          I'm a <span className="info-span ">frontend developer</span>, the
          architect of the digital realm you see and
        </p>
        <p>
          interact with. My world revolves around crafting user interfaces,
          making sure they're
        </p>
        <p>
          not just functional but also look slick and feel intuitive. From HTML
          and CSS for
        </p>
        <p>
          structure and style, to JavaScript for the interactive magic—I'm the
          one who brings
        </p>
        <p>
          designs to life in your browser. It's like being the magician behind
          the curtain, making
        </p>
        <p>things happen with a wave of my coding wand.</p>
      </div>
      {/* small screen Info */}
    </Section>
  );
}
