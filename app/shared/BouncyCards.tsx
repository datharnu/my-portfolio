import React from "react";
import ClientButton from "./ClientButton";
import BounceCard from "./BounceCard";
import CardTitle from "./CardTitle";
import Chowdeck from "../../public/chowdeck3.jpeg";
import Image, { StaticImageData } from "next/image";
import Joblisting from "../../public/joblisting.webp";
import IpAdress from "../../public/Ip Address Tracker.webp";
import Dashboard from "../../public/dashboard.png";
import Waitlist from "../../public/waitlist.png";
import Beeface from "../../public/Beeface.webp";
import { ArrowRight, Github, SquareArrowOutUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  image: StaticImageData;
  description: string;
  techStack: string;
  githubLink?: string;
  liveLink: string;
}
const ProjectModal: React.FC<Project> = ({
  title,
  image,
  description,
  techStack,
  githubLink,
  liveLink,
}) => (
  <Dialog>
    <DialogTrigger className="text-white font-semibold text-sm hover:text-blue-400">
      Learn more...
    </DialogTrigger>
    <DialogContent className="lg:max-w-[425px] max-w-[380px]">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      <div className="mt-4">
        <Image src={image} alt={title} className="w-full rounded-lg" />
        <p className="mt-4 text-sm">{description}</p>
        <p className="mt-2 text-sm font-semibold">Tech Stack: {techStack}</p>
        <div className="mt-4 flex justify-end space-x-2">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 text-gray-600 hover:text-blue-500" />
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <SquareArrowOutUpRight className="w-6 h-6 text-gray-600 hover:text-blue-500" />
          </a>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);
const BouncyCardsFeatures: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800 mt-20">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
          Explore my work
          <span className="text-slate-400"> and creative solutions</span>
        </h2>
        <ClientButton />
      </div>
      <div className="mb-4 grid grid-cols-12 gap-7 my-20 lg:flex lg:w-full ">
        <BounceCard className="col-span-12 md:col-span-8 h-4 lg:w-1/2  ">
          <Image src={Waitlist} alt="Chowdeck" className="w-full " />
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl  bg-gradient-to-br from-blue-400 to-cyan-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex items-center justify-between">
              <span className="block text-lg font-bold text-indigo-50">
                Waitlist{" "}
                <span className="font-semibold text-[14px]">
                  [ React - Tailwind - Typescript ]
                </span>
              </span>
              <div className="flex items-center gap-2">
                <a href="">
                  <Github className="w-4 text-white  hover:text-blue-400" />
                </a>{" "}
                <a href="www.rentville.ng">
                  <SquareArrowOutUpRight className="w-4 text-white hover:text-blue-400" />
                </a>
              </div>
            </div>
            <p className="text-sm">
              It&rsquo;s a waitlist i literally made using React and Tailwind,
              designed and built on my own
              <span className="itmes-center gap-2 text-white font-semibold text-sm hover:text-blue-400">
                {" "}
                <ProjectModal
                  title="Waitlist"
                  image={Waitlist}
                  description="Designed and developed a waitlist application using React and Tailwind CSS. The app features a clean, responsive design and provides a user-friendly interface for managing and tracking waitlist entries. This project demonstrates my ability to create visually appealing, functional applications independently while leveraging React for interactive components and Tailwind CSS for efficient styling"
                  techStack="[ React - Tailwind - Typescript ]"
                  githubLink="https://github.com/datharnu/Rentville-waitlist"
                  liveLink="https://rentville-waitlist.vercel.app/"
                />
              </span>
            </p>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8 lg:w-1/2 h-4">
          <Image src={Joblisting} alt="Chowdeck" className="w-full " />
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex items-center justify-between">
              <span className="block text-lg font-bold text-indigo-50">
                Job Filter{" "}
                <span className="font-semibold text-[14px]">
                  [ React - Tailwind - Javascript - JSON ]
                </span>
              </span>
              <div className="flex items-center gap-2">
                <a href="https://github.com/datharnu/job-filter">
                  <Github className="w-4 text-white  hover:text-blue-400" />
                </a>{" "}
                <a href="https://job-filter-mg6l.vercel.app/">
                  <SquareArrowOutUpRight className="w-4 text-white hover:text-blue-400" />
                </a>
              </div>
            </div>
            <p className="text-sm">
              A single-page app, styled with Styled Components, enables dynamic
              content filtering through clickable options.
              <span className="itmes-center gap-2 text-white font-semibold text-sm hover:text-blue-400">
                {" "}
                <ProjectModal
                  title="Job Filter"
                  image={Joblisting}
                  techStack="  [ React - Tailwind - Javascript - JSON ]"
                  description=" Built a single-page application using Styled Components for dynamic styling. The app features interactive content filtering through clickable options, allowing users to seamlessly sort and view content based on their preferences. This project demonstrates my proficiency in creating responsive, user-friendly interfaces and leveraging Styled Components for modular and maintainable CSS. "
                  githubLink="https://github.com/datharnu/job-filter"
                  liveLink="https://job-filter-mg6l.vercel.app/"
                />
              </span>
            </p>
          </div>
        </BounceCard>
      </div>

      <BounceCard className="col-span-12 md:col-span-4 h-4 mt-10">
        <Image src={Dashboard} alt="Chowdeck" className="w-full " />
        <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
          <div className="flex items-center justify-between">
            <span className="block text-lg font-bold text-indigo-50">
              Dashboard{" "}
              <span className="font-semibold text-[14px]">
                [ React - TailwindCSS - Javascript - Typescript ]
              </span>
            </span>
            <div className="flex items-center gap-2">
              <a href="https://github.com/datharnu/Dashboard">
                <Github className="w-4 text-white  hover:text-blue-400" />
              </a>{" "}
              <a href="https://dashboard-delta-three-64.vercel.app/">
                <SquareArrowOutUpRight className="w-4 text-white hover:text-blue-400" />
              </a>
            </div>
          </div>
          <p className="text-sm">
            This is a dashboard of a crypto project showing what it looks like
            having a crypto dashboard
            <span className="itmes-center gap-2 text-white font-semibold text-sm hover:text-blue-400">
              {" "}
              <ProjectModal
                title="Dashboard"
                image={Dashboard}
                description=" Designed and developed a cryptocurrency dashboard that provides a comprehensive view of crypto assets and market trends. The dashboard features real-time data visualization, interactive charts, and user-friendly interfaces for tracking portfolio performance and market fluctuations. This project highlights my ability to create dynamic, data-driven interfaces and effectively present complex information in an accessible and engaging manner."
                techStack="     [ React - TailwindCSS - Javascript - Typescript ]"
                githubLink="https://github.com/datharnu/Dashboard"
                liveLink="https://dashboard-delta-three-64.vercel.app/"
              />
            </span>
          </p>
        </div>
      </BounceCard>
      <div className="grid grid-cols-12 gap-7   mt-10 lg:mt-10 lg:flex lg:w-full  ">
        <BounceCard className="col-span-12 md:col-span-8 h-4 lg:w-1/2  ">
          <Image src={IpAdress} alt="Chowdeck" className="w-full " />
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl  bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex items-center justify-between">
              <span className="block text-lg font-bold text-indigo-50">
                IP Address Tracker{" "}
                <span className="font-semibold text-[14px]">
                  [ React - CSS - Javascript - JSON ]
                </span>
              </span>
              <div className="flex items-center gap-2">
                <a href="https://github.com/datharnu/IpAddress--Tracker">
                  <Github className="w-4 text-white  hover:text-blue-400" />
                </a>{" "}
                <a href="https://ip-address-tracker-five-beryl.vercel.app/">
                  <SquareArrowOutUpRight className="w-4 text-white hover:text-blue-400" />
                </a>
              </div>
            </div>
            <p className="text-sm">
              This is an Ip Adress App and i make use of two separate APIs
              together to create an IP Address Tracking app.
              <span className="itmes-center gap-2 text-white font-semibold text-sm hover:text-blue-400">
                {" "}
                <ProjectModal
                  title="Ip Address Tracker"
                  image={IpAdress}
                  description=" Developed an IP Address Tracking application utilizing two separate APIs to provide comprehensive IP address information. The app offers real-time tracking and detailed location data, integrating data from multiple sources to deliver accurate and actionable insights. This project showcases my ability to work with APIs, handle asynchronous data, and create a functional and informative user interface."
                  techStack="[ React - CSS - Javascript - JSON ]"
                  githubLink="https://github.com/datharnu/IpAddress--Tracker"
                  liveLink="https://ip-address-tracker-five-beryl.vercel.app/"
                />
              </span>
            </p>
          </div>
        </BounceCard>

        {/* Chow deck should be here  */}
        <BounceCard className="col-span-12 md:col-span-4 lg:w-1/2 h-4">
          {/* <CardTitle>Do a thing</CardTitle> */}
          <Image src={Chowdeck} alt="Chowdeck" className="w-full " />
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex items-center justify-between">
              <span className="block text-lg font-bold text-indigo-50">
                Chowdeck{" "}
                <span className="font-semibold text-[14px]">
                  [ NextJs - DaisyUi - Typescript - Tailwind ]
                </span>
              </span>
              <div className="flex items-center gap-2">
                <a href="https://github.com/datharnu/Chowdeck">
                  <Github className="w-4 text-white  hover:text-blue-400" />
                </a>{" "}
                <a href="https://chowdeck-alpha.vercel.app/">
                  <SquareArrowOutUpRight className="w-4 text-white hover:text-blue-400" />
                </a>
              </div>
            </div>
            <p className="text-sm">
              A website that helps with logistics for food delivery, it
              basically connects with the restaurant.
              <span className="itmes-center gap-2 text-white font-semibold text-sm hover:text-blue-400">
                {" "}
                <ProjectModal
                  title="Chowdeck"
                  image={Chowdeck}
                  description="Developed a web platform that streamlines food delivery logistics by connecting restaurants with delivery services. The site features real-time order tracking, dynamic menu management, and an intuitive interface for customers and delivery drivers. Key frontend highlights include responsive design, interactive elements, and seamless integration of payment and communication features. This project showcases my skills in creating user-centric, efficient, and scalable web applications."
                  techStack="NextJs - DaisyUi - Typescript - Tailwind"
                  githubLink="https://github.com/datharnu/Chowdeck"
                  liveLink="https://chowdeck-alpha.vercel.app/"
                />
              </span>
            </p>
          </div>
        </BounceCard>
      </div>

      <BounceCard className="col-span-12 md:col-span-4 h-4 mt-10">
        <Image src={Beeface} alt="Chowdeck" className="w-full " />
        <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
          <div className="flex items-center justify-between">
            <span className="block text-lg font-bold text-indigo-50">
              Beefcake Swimwear{" "}
              <span className="font-semibold text-[14px]">
                [ Liquid - TailwindCSS - Javascript/ES6 - Shopify GraphQL API ]
              </span>
            </span>
            <div className="flex items-center gap-2">
              <a href="https://beefcakeswimwear.com">
                <SquareArrowOutUpRight className="w-4 text-white hover:text-blue-400" />
              </a>
            </div>
          </div>
          <p className="text-sm">
            This is a live Shopify store for buying of swimming suits and
            accessories
            <span className="itmes-center gap-2 text-white font-semibold text-sm hover:text-blue-400">
              {" "}
              <ProjectModal
                title="Beefcake Swimwear"
                image={Beeface}
                description="Designed and developed a Shopify Store for buying of swimming suits and simming accessories which entails me working on reuseable components and implementing responsive design. "
                techStack="[ Liquid - TailwindCSS - Javascript/ES6  - Shopify GraphQL API ]"
                liveLink="https://beefcakeswimwear.com"
              />
            </span>
          </p>
        </div>
      </BounceCard>
    </section>
  );
};

export default BouncyCardsFeatures;
