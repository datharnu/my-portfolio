import React from "react";
import Image, { StaticImageData } from "next/image";
import design1 from "../../public/desktop-preview-1.jpg";
import design2 from "../../public/desktop-preview.jpg";
import design3 from "../../public/design3.jpg";
import { motion } from "framer-motion";

interface PortfolioItemProps {
  imageSrc: StaticImageData;
  alt: string;
  text: string;
  textColor: string;
  hoverBorderColor: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  imageSrc,
  alt,
  text,
  textColor,
  hoverBorderColor,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Example animation: Scale up on hover
      className={`relative shadow-yellow-900 shadow-2xl sm:mx-5 md:mx-10 sm:flex rounded-xl overflow-hidden ${
        isHovered ? `border-b-8 ${hoverBorderColor}` : "border-yellow-600"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={imageSrc} alt={alt} className="h-[25rem] object-contain" />
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <p className={`font-bold text-lg ${textColor}`}>{text}</p>
        </div>
      )}
    </motion.div>
  );
};

export default function Portfolio() {
  return (
    <section className="lg:my-36 my-20">
      <h1 className="font-bold text-[40px] text-yellow-600 text-center lg:my-10 lg:ml-20 sm:text-[20px]">
        Portfolio
      </h1>
      <div className="lg:flex lg:mx-20 px-2 md:mx-24 sm:my-4 sm:space-y-10 md:space-y-10 gap-5">
        <div className="">
          <a href="https://chowdeck-alpha.vercel.app/">
            <PortfolioItem
              imageSrc={design3}
              alt="Responsive Design"
              text="Responsive Design"
              textColor="text-blue-500" // Customize text color here
              hoverBorderColor="border-blue-500" // Customize hover border color here
            />
          </a>
        </div>
        <div>
          <a href="https://news-homepage-gules.vercel.app/">
            <PortfolioItem
              imageSrc={design2}
              alt="Design"
              text="Web Design"
              textColor="text-green-500" // Customize text color here
              hoverBorderColor="border-green-500" // Customize hover border color here
            />
          </a>
        </div>
        <div>
          <a href="https://notification-page-on1p.vercel.app/">
            <PortfolioItem
              imageSrc={design1}
              alt="Design"
              text="Mobile Design"
              textColor="text-red-500" // Customize text color here
              hoverBorderColor="border-red-500" // Customize hover border color here
            />
          </a>
        </div>
      </div>
    </section>
  );
}
