// Import necessary modules and types
import React from "react";
import { motion } from "framer-motion";
import NextImage, { StaticImageData } from "next/image";
import frame56 from "../../public/coper.jpg";
import frame2 from "../../public/myImage.jpeg";
import neww from "../../public/mine.jpeg";

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
          className="w-full  h-[17rem] sm:h-[10rem] object-cover sm:border-shad sm:border-y-8       "
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
    </section>
  );
};

// Slider component
const Slider: React.FC = () => {
  return (
    <div className="flex sm:overflow-x-auto ">
      <div className=" lg:border-shad md:border-shad border-y-8 sm:border-none md:w-[150px] ">
        <MyImage imageSrc={frame56} width="250px" />
      </div>
      <div className="lg:border-shad md:border-shad border-y-8 sm:border-none lg:border-l-8  sm:border-shad  sm:border-x-8 md:w-[150px]">
        <MyImage imageSrc={frame2} width="250px" />
      </div>

      <div className="lg:border-shad md:border-shad border-8 sm:border-none rounded-r-xl ">
        <MyImage imageSrc={neww} width="250px" />
      </div>
    </div>
  );
};

export default Slider;
