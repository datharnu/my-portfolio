import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { min: "320px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "2560px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    extend: {
      backgroundImage: {
        bgImg: "url(/background.png)",
        bgImg2: "url(/back1.jpg)",
        bgImg3: "url(/back2.jpg)",
        bgImg4: "url(/back3.jpg)",
      },

      colors: {
        primary: "#FEFBF5",
        secondary: "#996a0d",
        shad: "#5D5555",
        footer: "#1C1817",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
