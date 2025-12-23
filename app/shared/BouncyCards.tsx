// import React from "react";
// import ClientButton from "./ClientButton";
// import BounceCard from "./BounceCard";
// import CardTitle from "./CardTitle";
// import Boots from "../../public/boots.png";
// import Image, { StaticImageData } from "next/image";
// import Joblisting from "../../public/joblisting.webp";
// import IpAdress from "../../public/Ip Address Tracker.webp";
// import Picha from "../../public/picha.png";
// import Waitlist from "../../public/waitlist.png";
// import Beeface from "../../public/Beeface.webp";
// import { ArrowRight, Github, SquareArrowOutUpRight } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// interface Project {
//   title: string;
//   image: StaticImageData;
//   description: string;
//   techStack: string;
//   githubLink?: string;
//   liveLink: string;
// }
// const ProjectModal: React.FC<Project> = ({
//   title,
//   image,
//   description,
//   techStack,
//   githubLink,
//   liveLink,
// }) => (
//   <Dialog>
//     <DialogTrigger className="text-white font-semibold text-sm hover:text-blue-400">
//       Learn more...
//     </DialogTrigger>
//     <DialogContent className="lg:max-w-[425px] max-w-[380px]">
//       <DialogHeader>
//         <DialogTitle>{title}</DialogTitle>
//       </DialogHeader>
//       <div className="mt-4">
//         <Image src={image} alt={title} className="w-full rounded-lg" />
//         <p className="mt-4 text-sm">{description}</p>
//         <p className="mt-2 text-sm font-semibold">Tech Stack: {techStack}</p>
//         <div className="mt-4 flex justify-end space-x-2">
//           <a href={githubLink} target="_blank" rel="noopener noreferrer">
//             <Github className="w-6 h-6 text-gray-600 hover:text-blue-500" />
//           </a>
//           <a href={liveLink} target="_blank" rel="noopener noreferrer">
//             <SquareArrowOutUpRight className="w-6 h-6 text-gray-600 hover:text-blue-500" />
//           </a>
//         </div>
//       </div>
//     </DialogContent>
//   </Dialog>
// );
// const BouncyCardsFeatures: React.FC = () => {
//   return (
//     <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800 mt-20">
//       <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
//         <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
//           Explore my work
//           <span className="text-slate-400"> and creative solutions</span>
//         </h2>
//         <ClientButton />
//       </div>
//       <div className="mb-4 grid grid-cols-12 gap-7 my-20 lg:flex lg:w-full ">
//         <BounceCard className="col-span-12 md:col-span-8 h-4 lg:w-1/2  ">
//           <Image src={Waitlist} alt="Chowdeck" className="w-full " />
//           <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl  bg-gradient-to-br from-blue-400 to-cyan-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
//             <div className="flex items-center justify-between">
//               <span className="block text-lg font-bold text-indigo-50">
//                 Rentville{" "}
//                 <span className="font-semibold text-[14px]">
//                   [ React - Tailwind - Typescript ]
//                 </span>
//               </span>
//               <div className="flex items-center gap-2">
//                 <a href="">
//                   <Github className="w-4 text-white  hover:text-blue-400" />
//                 </a>{" "}
//                 <a href="https://rconnect.rentville.ng/">
//                   <SquareArrowOutUpRight className="w-4 text-white hover:text-blue-400" />
//                 </a>
//               </div>
//             </div>
//             <p className="text-sm">
//               It&rsquo;s a webapp i literally made using NextJs,Typescript,
//               Zustand, TailwindCSS and more
//               <span className="itmes-center gap-2 text-white font-semibold text-sm hover:text-blue-400">
//                 {" "}
//                 <ProjectModal
//                   title="Waitlist"
//                   image={Waitlist}
//                   description="Designed and developed Rentville, a property–rental platform built with React and Tailwind CSS. The platform connects homeowners with renters and provides a seamless way to discover, list, and book houses. Rentville features a clean, responsive interface, smooth navigation, and user-friendly components that simplify the rental process. This project showcases my ability to build functional, scalable web applications independently while leveraging React for dynamic UI interactions and Tailwind CSS for efficient, modern styling."
//                   techStack="[ React - Tailwind - Typescript ]"
//                   githubLink="https://github.com/datharnu/Rentville-waitlist"
//                   liveLink="https://rentville.ng"
//                 />
//               </span>
//             </p>
//           </div>
//         </BounceCard>
//         <BounceCard className="col-span-12 md:col-span-8 lg:w-1/2 h-4">
//           <Image src={Joblisting} alt="Chowdeck" className="w-full " />
//           <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
//             <div className="flex items-center justify-between">
//               <span className="block text-lg font-bold text-indigo-50">
//                 Job Filter{" "}
//                 <span className="font-semibold text-[14px]">
//                   [ React - Tailwind - Javascript - JSON ]
//                 </span>
//               </span>
//               <div className="flex items-center gap-2">
//                 <a href="https://github.com/datharnu/job-filter">
//                   <Github className="w-4 text-white  hover:text-blue-400" />
//                 </a>{" "}
//                 <a href="https://jobfil.netlify.app/">
//                   <SquareArrowOutUpRight className="w-4 text-white hover:text-blue-400" />
//                 </a>
//               </div>
//             </div>
//             <p className="text-sm">
//               A single-page app, styled with Styled Components, enables dynamic
//               content filtering through clickable options.
//               <span className="itmes-center gap-2 text-white font-semibold text-sm hover:text-blue-400">
//                 {" "}
//                 <ProjectModal
//                   title="Job Filter"
//                   image={Joblisting}
//                   techStack="  [ React - Tailwind - Javascript - JSON ]"
//                   description=" Built a single-page application using Styled Components for dynamic styling. The app features interactive content filtering through clickable options, allowing users to seamlessly sort and view content based on their preferences. This project demonstrates my proficiency in creating responsive, user-friendly interfaces and leveraging Styled Components for modular and maintainable CSS. "
//                   githubLink="https://github.com/datharnu/job-filter"
//                   liveLink="https://jobfil.netlify.app/"
//                 />
//               </span>
//             </p>
//           </div>
//         </BounceCard>
//       </div>

//       <BounceCard className="col-span-12 md:col-span-4 h-4 mt-10">
//         <Image src={Picha} alt="Chowdeck" className="w-full " />
//         <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
//           <div className="flex items-center justify-between">
//             <span className="block text-lg font-bold text-indigo-50">
//              Picha{" "}
//               <span className="font-semibold text-[14px]">
//                 [ PostgrelSQL - TailwindCSS - NodeJs - Typescript ]
//               </span>
//             </span>
//             <div className="flex items-center gap-2">
//               <a href="">
//                 <Github className="w-4 text-white  hover:text-blue-400" />
//               </a>{" "}
//               <a href="https://picha.fun">
//                 <SquareArrowOutUpRight className="w-4 text-white hover:text-blue-400" />
//               </a>
//             </div>
//           </div>
//           <p className="text-sm">
//             This is an event cloud app that allows users to event host and guest have access to their
//             images and video uploads.
//             <span className="itmes-center gap-2 text-white font-semibold text-sm hover:text-blue-400">
//               {" "}
//               <ProjectModal
//                 title="Dashboard"
//                 image={Picha}
//                 description="Designed and developed Picha, an event photo and video management platform that helps users easily access, organize, and retrieve media from events. The platform includes smart filtering, face detection–ready architecture, and a clean, intuitive interface that reduces the need to scroll through thousands of files. This project highlights my ability to build dynamic, user-centered applications and present large volumes of media content in a seamless, efficient, and visually engaging way."
//                 techStack="     [ PostgrelSQL - TailwindCSS - NodeJs - Typescript  ]"
//                 githubLink=""
//                 liveLink="https://picha.fun"
//               />
//             </span>
//           </p>
//         </div>
//       </BounceCard>
//       <div className="grid grid-cols-12 gap-7   mt-10 lg:mt-10 lg:flex lg:w-full  ">
//         <BounceCard className="col-span-12 md:col-span-8 h-4 lg:w-1/2  ">
//           <Image src={IpAdress} alt="Chowdeck" className="w-full " />
//           <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl  bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
//             <div className="flex items-center justify-between">
//               <span className="block text-lg font-bold text-indigo-50">
//                 IP Address Tracker{" "}
//                 <span className="font-semibold text-[14px]">
//                   [ React - CSS - Javascript - JSON ]
//                 </span>
//               </span>
//               <div className="flex items-center gap-2">
//                 <a href="https://github.com/datharnu/IpAddress--Tracker">
//                   <Github className="w-4 text-white  hover:text-blue-400" />
//                 </a>{" "}
//                 <a href="https://ipaddresstracke.netlify.app/">
//                   <SquareArrowOutUpRight className="w-4 text-white hover:text-blue-400" />
//                 </a>
//               </div>
//             </div>
//             <p className="text-sm">
//               This is an Ip Adress App and i make use of two separate APIs
//               together to create an IP Address Tracking app.
//               <span className="itmes-center gap-2 text-white font-semibold text-sm hover:text-blue-400">
//                 {" "}
//                 <ProjectModal
//                   title="Ip Address Tracker"
//                   image={IpAdress}
//                   description=" Developed an IP Address Tracking application utilizing two separate APIs to provide comprehensive IP address information. The app offers real-time tracking and detailed location data, integrating data from multiple sources to deliver accurate and actionable insights. This project showcases my ability to work with APIs, handle asynchronous data, and create a functional and informative user interface."
//                   techStack="[ React - CSS - Javascript - JSON ]"
//                   githubLink="https://github.com/datharnu/IpAddress--Tracker"
//                   liveLink="https://ipaddresstracke.netlify.app/"
//                 />
//               </span>
//             </p>
//           </div>
//         </BounceCard>

//         {/* Chow deck should be here  */}
//         <BounceCard className="col-span-12 md:col-span-4 lg:w-1/2 h-4">
//           {/* <CardTitle>Do a thing</CardTitle> */}
//           <Image src={Boots} alt="Chowdeck" className="w-full " />
//           <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
//             <div className="flex items-center justify-between">
//               <span className="block text-lg font-bold text-indigo-50">
//                 Boots and More{" "}
//                 <span className="font-semibold text-[14px]">
//                   [ NextJs - DaisyUi - Typescript - Tailwind ]
//                 </span>
//               </span>
//               <div className="flex items-center gap-2">
//                 <a href="">
//                   <Github className="w-4 text-white  hover:text-blue-400" />
//                 </a>{" "}
//                 <a href="https://bootsandmore.netlify.app">
//                   <SquareArrowOutUpRight className="w-4 text-white hover:text-blue-400" />
//                 </a>
//               </div>
//             </div>
//             <p className="text-sm">
//               A ecommerce website for buying boots and shoes of different kinds.
//               <span className="itmes-center gap-2 text-white font-semibold text-sm hover:text-blue-400">
//                 {" "}
//                 <ProjectModal
//                   title="Chowdeck"
//                   image={Boots}
//                   description="Developed a full-featured e-commerce platform that connects buyers with a wide range of products through a seamless and intuitive shopping experience. The site includes dynamic product management, secure checkout flows, responsive design, and real-time cart updates. Customers can easily browse categories, view product details, and complete purchases with integrated payment options. This project highlights my ability to build scalable, user-friendly web applications with smooth interactions, efficient navigation, and modern frontend functionality"
//                   techStack="NextJs - DaisyUi - Typescript - Tailwind"
//                   githubLink=""
//                   liveLink="https://bootsandmore.netlify.app"
//                 />
//               </span>
//             </p>
//           </div>
//         </BounceCard>
//       </div>

//       <BounceCard className="col-span-12 md:col-span-4 h-4 mt-10">
//         <Image src={Beeface} alt="Chowdeck" className="w-full " />
//         <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
//           <div className="flex items-center justify-between">
//             <span className="block text-lg font-bold text-indigo-50">
//               Beefcake Swimwear{" "}
//               <span className="font-semibold text-[14px]">
//                 [ Liquid - TailwindCSS - Javascript/ES6 - Shopify GraphQL API ]
//               </span>
//             </span>
//             <div className="flex items-center gap-2">
//               <a href="https://beefcakeswimwear.com">
//                 <SquareArrowOutUpRight className="w-4 text-white hover:text-blue-400" />
//               </a>
//             </div>
//           </div>
//           <p className="text-sm">
//             This is a live Shopify store for buying of swimming suits and
//             accessories
//             <span className="itmes-center gap-2 text-white font-semibold text-sm hover:text-blue-400">
//               {" "}
//               <ProjectModal
//                 title="Beefcake Swimwear"
//                 image={Beeface}
//                 description="Designed and developed a Shopify Store for buying of swimming suits and simming accessories which entails me working on reuseable components and implementing responsive design. "
//                 techStack="[ Liquid - TailwindCSS - Javascript/ES6  - Shopify GraphQL API ]"
//                 liveLink="https://beefcakeswimwear.com"
//               />
//             </span>
//           </p>
//         </div>
//       </BounceCard>
//     </section>
//   );
// };

// export default BouncyCardsFeatures;


import React from "react";
import ClientButton from "./ClientButton";
import BounceCard from "./BounceCard";
import CardTitle from "./CardTitle";
import Boots from "../../public/boots.png";
import Image, { StaticImageData } from "next/image";
import Joblisting from "../../public/joblisting.webp";
import IpAdress from "../../public/Ip Address Tracker.webp";
import Picha from "../../public/picha.png";
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
  image?: StaticImageData;
  description: string;
  techStack: string;
  githubLink?: string;
  liveLink?: string;
  videoSrc?: string;
}
const ProjectModal: React.FC<Project> = ({
  title,
  image,
  description,
  techStack,
  githubLink,
  liveLink,
  videoSrc,
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
        {videoSrc ? (
          <video
            src={videoSrc}
            controls
            className="w-full max-h-[300px] object-contain rounded-lg"
          />
        ) : (
          image && <Image src={image} alt={title} className="w-full rounded-lg" />
        )}
        <p className="mt-4 text-sm">{description}</p>
        <p className="mt-2 text-sm font-semibold">Tech Stack: {techStack}</p>
        <div className="mt-4 flex justify-end space-x-2">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-gray-600 hover:text-blue-500" />
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <SquareArrowOutUpRight className="w-6 h-6 text-gray-600 hover:text-blue-500" />
            </a>
          )}
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
                Rentville{" "}
                <span className="font-semibold text-[14px]">
                  [ React - Tailwind - Typescript ]
                </span>
              </span>
              <div className="flex items-center gap-2">
                <a href="">
                  <Github className="w-4 text-white  hover:text-blue-400" />
                </a>{" "}
                <a href="https://rconnect.rentville.ng/">
                  <SquareArrowOutUpRight className="w-4 text-white hover:text-blue-400" />
                </a>
              </div>
            </div>
            <p className="text-sm">
              It&rsquo;s a webapp i literally made using NextJs,Typescript,
              Zustand, TailwindCSS and more
              <span className="itmes-center gap-2 text-white font-semibold text-sm hover:text-blue-400">
                {" "}
                <ProjectModal
                  title="Waitlist"
                  image={Waitlist}
                  description="Designed and developed Rentville, a property–rental platform built with React and Tailwind CSS. The platform connects homeowners with renters and provides a seamless way to discover, list, and book houses. Rentville features a clean, responsive interface, smooth navigation, and user-friendly components that simplify the rental process. This project showcases my ability to build functional, scalable web applications independently while leveraging React for dynamic UI interactions and Tailwind CSS for efficient, modern styling."
                  techStack="[ React - Tailwind - Typescript ]"
                  githubLink="https://github.com/datharnu/Rentville-waitlist"
                  liveLink="https://rentville.ng"
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
                <a href="https://jobfil.netlify.app/">
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
                  liveLink="https://jobfil.netlify.app/"
                />
              </span>
            </p>
          </div>
        </BounceCard>
      </div>

      <BounceCard className="col-span-12 md:col-span-4 h-4 mt-10">
        <video
          src="https://github.com/user-attachments/assets/78cea2a3-2b3c-4ee1-b9c7-4cff2a7f047f"
          loop
          muted
          autoPlay
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
          <div className="flex items-center justify-between">
            <span className="block text-lg font-bold text-indigo-50">
              TaskMart{" "}
              <span className="font-semibold text-[14px]">
                [ Mobile App - React Native - Typescript ]
              </span>
            </span>
          </div>
          <p className="text-sm text-gray-100">
            A marketplace for tasks and decluttering.
            <span className="items-center gap-2 text-white font-semibold text-sm hover:text-blue-400">
              {" "}
              <ProjectModal
                title="TaskMart"
                videoSrc="https://github.com/user-attachments/assets/78cea2a3-2b3c-4ee1-b9c7-4cff2a7f047f"
                description="TaskMart is a comprehensive mobile application that serves as a marketplace for all kinds of jobs, whether white-collar or blue-collar tasks. It also features a 'Mart' section for decluttering and selling items. The platform incorporates an escrow payment system to ensure secure transactions between users."
                techStack="[ Mobile App - React Native - Typescript ]"
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
                <a href="https://ipaddresstracke.netlify.app/">
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
                  liveLink="https://ipaddresstracke.netlify.app/"
                />
              </span>
            </p>
          </div>
        </BounceCard>

        {/* Chow deck should be here  */}
        <BounceCard className="col-span-12 md:col-span-4 lg:w-1/2 h-4">
          {/* <CardTitle>Do a thing</CardTitle> */}
          <Image src={Boots} alt="Chowdeck" className="w-full " />
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex items-center justify-between">
              <span className="block text-lg font-bold text-indigo-50">
                Boots and More{" "}
                <span className="font-semibold text-[14px]">
                  [ NextJs - DaisyUi - Typescript - Tailwind ]
                </span>
              </span>
              <div className="flex items-center gap-2">
                <a href="">
                  <Github className="w-4 text-white  hover:text-blue-400" />
                </a>{" "}
                <a href="https://bootsandmore.netlify.app">
                  <SquareArrowOutUpRight className="w-4 text-white hover:text-blue-400" />
                </a>
              </div>
            </div>
            <p className="text-sm">
              A ecommerce website for buying boots and shoes of different kinds.
              <span className="itmes-center gap-2 text-white font-semibold text-sm hover:text-blue-400">
                {" "}
                <ProjectModal
                  title="Chowdeck"
                  image={Boots}
                  description="Developed a full-featured e-commerce platform that connects buyers with a wide range of products through a seamless and intuitive shopping experience. The site includes dynamic product management, secure checkout flows, responsive design, and real-time cart updates. Customers can easily browse categories, view product details, and complete purchases with integrated payment options. This project highlights my ability to build scalable, user-friendly web applications with smooth interactions, efficient navigation, and modern frontend functionality"
                  techStack="NextJs - DaisyUi - Typescript - Tailwind"
                  githubLink=""
                  liveLink="https://bootsandmore.netlify.app"
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

      <BounceCard className="col-span-12 md:col-span-4 h-4 mt-10">
        <Image src={Picha} alt="Chowdeck" className="w-full " />
        <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
          <div className="flex items-center justify-between">
            <span className="block text-lg font-bold text-indigo-50">
              Picha{" "}
              <span className="font-semibold text-[14px]">
                [ PostgrelSQL - TailwindCSS - NodeJs - Typescript ]
              </span>
            </span>
            <div className="flex items-center gap-2">
              <a href="">
                <Github className="w-4 text-white  hover:text-blue-400" />
              </a>{" "}
              <a href="https://picha.fun">
                <SquareArrowOutUpRight className="w-4 text-white hover:text-blue-400" />
              </a>
            </div>
          </div>
          <p className="text-sm">
            This is an event cloud app that allows users to event host and guest have access to their
            images and video uploads.
            <span className="itmes-center gap-2 text-white font-semibold text-sm hover:text-blue-400">
              {" "}
              <ProjectModal
                title="Dashboard"
                image={Picha}
                description="Designed and developed Picha, an event photo and video management platform that helps users easily access, organize, and retrieve media from events. The platform includes smart filtering, face detection–ready architecture, and a clean, intuitive interface that reduces the need to scroll through thousands of files. This project highlights my ability to build dynamic, user-centered applications and present large volumes of media content in a seamless, efficient, and visually engaging way."
                techStack="     [ PostgrelSQL - TailwindCSS - NodeJs - Typescript  ]"
                githubLink=""
                liveLink="https://picha.fun"
              />
            </span>
          </p>
        </div>
      </BounceCard>
    </section >
  );
};

export default BouncyCardsFeatures;