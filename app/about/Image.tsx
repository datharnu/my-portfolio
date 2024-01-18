"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import frame56 from "../../public/Frame 56.png"; // Import the phone1 image
import NextImage from "next/image"; // Rename the imported Image component
import { useEffect } from "react";
import frame42 from "../../public/Frame 42.png";
import frame2 from "../../public/Frame 2.png";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

function MyImage({ clx }: { clx: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <section>
      <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        <NextImage
          src={clx}
          alt=""
          className="w-full"
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
    </section>
  );
}
export default function Slider() {
  const bgImages = [{ id: 1, image: frame56 }];

  return (
    <>
      {bgImages.map((imageObj) => (
        <MyImage key={imageObj.id} clx={imageObj.image} />
      ))}
    </>
  );
}
