import React from "react";
import Image, { StaticImageData } from "next/image";
import design1 from "../../public/desktop-preview-1.jpg";
import design2 from "../../public/desktop-preview.jpg";
import design3 from "../../public/design3.jpg";

interface PortfolioItemProps {
  imageSrc: StaticImageData;
  alt: string;
  text: string;
  textColor: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  imageSrc,
  alt,
  text,
  textColor,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative   shadow-secondary  shadow-md mx-5 sm:flex rounded-xl  overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={imageSrc} alt={alt} className=" h-[25rem] object-contain" />
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <p className={` font-bold text-lg ${textColor}`}>{text}</p>
        </div>
      )}
    </div>
  );
};

export default function Portfolio() {
  return (
    <section className="lg:my-36">
      <h1 className="font-bold text-[40px] sm:text-center lg:my-10 lg:ml-20 sm:text-[20px] ">
        Portfolio
      </h1>
      <div className="lg:flex lg:mx-20 px-2 sm:my-4 sm:space-y-10 gap-5  ">
        <div>
          <a href="https://chowdeck-alpha.vercel.app/">
            <PortfolioItem
              imageSrc={design3}
              alt="Responsive Design"
              text="Project 1"
              textColor="text-blue-500" // Customize text color here
            />
          </a>
        </div>
        <div>
          <a href="https://news-homepage-gules.vercel.app/">
            <PortfolioItem
              imageSrc={design2}
              alt="Design"
              text="Project 2"
              textColor="text-green-500" // Customize text color here
            />
          </a>
        </div>
        <div>
          <a href="https://notification-page-on1p.vercel.app/">
            <PortfolioItem
              imageSrc={design1}
              alt="Design"
              text="Project 3"
              textColor="text-red-500" // Customize text color here
            />
          </a>
        </div>
      </div>
    </section>
  );
}
