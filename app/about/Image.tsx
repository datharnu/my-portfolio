// Import necessary modules and types
import React, { useState } from "react";
import { motion } from "framer-motion";
import NextImage, { StaticImageData } from "next/image";
import frame56 from "../../public/Frame 56.png";

// Define the types
interface ImageProps {
  imageSrc: StaticImageData;
}

const hiddenMask =
  "repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)";
const visibleMask =
  "repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)";

// MyImage component
const MyImage: React.FC<ImageProps> = ({ imageSrc }) => {
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
          src={imageSrc}
          alt=""
          className="w-full"
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
    </section>
  );
};

// Slider component
const Slider: React.FC = () => {
  return (
    <>
      <MyImage imageSrc={frame56} />
    </>
  );
};

export default Slider;
