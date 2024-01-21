// Import necessary modules and types
import React from "react";
import { motion } from "framer-motion";
import NextImage, { StaticImageData } from "next/image";
import frame56 from "../../public/myImage.jpeg";

// Define the types
interface ImageProps {
  imageSrc: StaticImageData;
  width: string; // Add width prop
}

const hiddenMask =
  "repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)";
const visibleMask =
  "repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)";

// MyImage component
const MyImage: React.FC<ImageProps> = ({ imageSrc, width }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isInView, setIsInView] = React.useState(false);

  return (
    <section style={{ width }}>
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
        className="w-auto "
      >
        <NextImage
          src={imageSrc}
          alt=""
          className="w-full h-[15rem] sm:h-[7rem] object-cover border-secondary lg:border-y-2 "
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
    </section>
  );
};

// Slider component
const Slider: React.FC = () => {
  return (
    <div className="">
      <MyImage imageSrc={frame56} width="" />
    </div>
  );
};

export default Slider;
