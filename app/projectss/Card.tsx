import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@nextui-org/react";
import IpAdress from "../../public/Ip Address Tracker.webp";
import FilterJob from "../../public/filterapp.webp";
import Chowdeck from "../../public/chowdeck3.jpeg";
import Newsletter from "../../public/design2.jpg";
import FacebookNotification from "../../public/design1.jpg";
import UrlShortener from "../../public/urlShorten.jpeg";
import AdviceGenerator from "../../public/Advice generator.webp";
import CardComponent from "../../public/Card Component.jpeg";
import CarApp from "../../public/Car App.jpeg";

interface cardsData {
  image: StaticImageData;
  info: string;
  button: string;
  title: string;
}

const cardsData = [
  {
    image: IpAdress,
    info: "This is an Ip Adress App and i make use of  two separate APIs together to create an IP Address Tracking app.",
    button: "Live Preview",
    title: "IP ADDRESS TRACKER",
  },
  {
    image: FilterJob,
    info: "A React single-page app, styled with Styled Components, enables dynamic content filtering through clickable options.",
    button: "Live Preview",
    title: "JOB LISTING FILTER",
  },
  {
    image: FacebookNotification,
    info: " Engaging in this project served as a valuable test of my proficiency in HTML, CSS, and fundamental JavaScript skills, providing a comprehensive assessment of my abilities in web development.",
    button: "Live Preview",
    title: "NOTIFICATION PAGE",
  },
  {
    image: Newsletter,
    info: "Designing this news homepage provided an ideal chance to enhance my CSS Grid skills, with numerous challenging decisions and ample learning opportunities.",
    button: "Live Preview",
    title: "NEWS HOMEPAGE",
  },
  {
    image: UrlShortener,
    info: "In this App i Incorporated the Clean URI link shortening API and experiment with browser storage for this landing page challenge.",
    button: "Live Preview",
    title: "URL SHORTENER",
  },
  {
    image: Chowdeck,
    info: "I independently reconstructed this website using Next.js, TypeScript, and DaisyUI.",
    button: "Live Preview",
    title: "CHOWDECK APP",
  },
  {
    image: CarApp,
    info: "A basic landing page ....  Technologies used: HTML, CSS, Tailwind",
    button: "Live Preview",
    title: "CAR APP",
  },
  {
    image: AdviceGenerator,
    info: "In this project, I gained experience in interacting with third-party APIs. The application utilizes the Advice Slip API to generate random quotes of advice.",
    button: "Live Preview",
    title: "ADVICE GENERATOR APP",
  },
  {
    image: CardComponent,
    info: "This project served as a means to refine the transition between layouts, offering a valuable test for those new to constructing responsive projects.",
    button: "Live Preview",
    title: "CARD COMPONENT",
  },
];

export default function ProjectCard() {
  return (
    <section className="lg:grid lg:grid-cols-4 gap-4 md:grid md:grid-cols-2   ">
      {cardsData.map(({ image, info, button, title }, index) => (
        <div
          key={index}
          className=" max-w-96 mx-auto md:mx-5   shadow-2xl rounded-lg shadow-yellow-900 my-20 py-5 bg-primary"
        >
          {/* Card Image */}
          <div className="m-5">
            <Image src={image} alt="frame" className="w-[588px]" />
          </div>
          {/* Card Info */}
          <div className="my-5  space-y-5   ">
            <h1 className="lg:text-[18px] font-semibold px-5 play text-yellow-900 ">
              {title}
            </h1>
            <p className="px-5 sm:text-xs lg:text-sm">{info}</p>
          </div>
          <Button className="lg:text-[14px] border-black border-2 p-2 bg-white hover:shadow-lg hover:-translate-y-2 rounded-none sm:text-xs mx-5 px-5 ">
            {button}
          </Button>
        </div>
      ))}
    </section>
  );
}
