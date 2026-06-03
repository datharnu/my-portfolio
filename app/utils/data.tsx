import { StaticImageData } from "next/image";

export interface ProjectCard {
  image: string | StaticImageData;
  cardName: string;
  link: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  cards: ProjectCard[];
}

export const projectData: Project[] = [
  {
    id: 1,
    title: "STARTUPS & PRODUCTS.",
    description:
      "These are products I conceived, built, and launched as a founder taking ideas from zero to production. Each project reflects my ability to own the full product lifecycle: from defining the problem and designing the architecture, to writing the code and putting it in front of real users. Building these taught me how to make fast decisions under constraints, wear multiple hats, and build things that actually work.",
      cards: [
        {
          image: "/picha.png",
          cardName: "Picha - A Saas PWA AI-Powered Event Photo Platform",
          link: "https://picha.fun",
        },
        {
          image: "/rentville.png",
          cardName: "Rentville - P2P Housing Marketplace",
          link: "https://rentville.ng",
        },
      ],
    },
  {
    id: 2,
    title: "Production & Client Projects",
    description:
      "These projects were built for real businesses and real users. They demonstrate my ability to deliver production-ready, scalable frontend and full-stack solutions from mobile applications to e-commerce platforms and community tools. Each one sharpened my skill for translating client requirements into clean, functional products shipped on time.",
      cards: [
        {
          image: "/beefcake.png",
          cardName: "Beefcake Swimwear - This is a live Shopify store for buying of swimming suits and accessories",
          link: "https://beefcakeswimwear.com",
        },
        {
          image: "/ptcc.png",
          cardName: "PTCC - Church Attendance & Clock-In System",
          link: "https://attendance.ptccentre.org/mark-attendance",
        },
      ],
    },
  {
    id: 3,
    title: "Experiments & Frontend Builds",
    description:
      "These projects were built to deepen my JavaScript skills, explore APIs, and experiment with state management and data visualisation all while maintaining a strong visual identity. They reflect my curiosity as a developer and my habit of learning by building. Disclaimer: These web apps are optimised for desktop.",
      cards: [
        {
          image: "/iptracker.png",
          cardName: "IP Address Tracker - API & Data Visualisation",
          link: "https://ip-address-tracker-one-sage.vercel.app/",
        },
        {
          image: "/jobFilter.png",
          cardName: "Job Filter State management & Frontend Logic",
          link: "https://job-filter-fawn.vercel.app/",
        },
      ],
    },
  {
    id: 4,
    title: "Web3 & Emerging Tech",
    description:
      "Curiosity has always pushed me toward what's next. This project sits at the intersection of blockchain technology and product thinking exploring what decentralised experiences can look like when built with the same care as traditional web products.",
      cards: [
        {
          image: "/lootory.png",
          cardName: "Lootory - Web3 Project",
          link: "https://t.me/lootorybot/lootory?startapp=ref_BE1C9823",
        },
      ],
    },
];