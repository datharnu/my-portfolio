import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Mail, X, Shapes } from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  id: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  text,
  id,
  isActive,
  onClick,
}) => (
  <motion.li
    className={`flex items-center space-x-4 px-4 py-3 rounded-lg cursor-pointer ${
      isActive
        ? "bg-[#7C7FEE] text-white"
        : "text-[#1A1F2B] hover:bg-[#7C7FEE]/10"
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <a href={`#${id}`} className="flex items-center space-x-4 w-full">
      {icon}
      <span className="font-medium">{text}</span>
    </a>
  </motion.li>
);

const Logo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="25" cy="25" r="20" fill="black" />
    <text
      x="25"
      y="32"
      textAnchor="middle"
      fill="white"
      fontSize="24"
      fontWeight="bold"
    >
      E
    </text>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const toggleNavbar = () => setIsOpen(!isOpen);

  const navItems = [
    { icon: <Home size={24} />, text: "Home", id: "hero" },
    { icon: <User size={24} />, text: "About", id: "about" },
    { icon: <Briefcase size={24} />, text: "Projects", id: "projects" },
    { icon: <Shapes size={24} />, text: "Experience", id: "experience" },
    { icon: <Mail size={24} />, text: "Contact", id: "contact" },
  ];

  const navVariants = {
    hidden: {
      x: "-100%",
      y: "-100%",
      opacity: 0,
      skew: "20deg",
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      skew: "0deg",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      x: "-100%",
      y: "-100%",
      opacity: 0,
      skew: "20deg",
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  return (
    <>
      <motion.button
        className="fixed z-50 p-2 bg-white rounded-full shadow-lg"
        onClick={toggleNavbar}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <Logo />}
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed left-0 top-0 bottom-0 bg-white shadow-2xl z-40 flex flex-col w-64 origin-top-left"
            variants={navVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="p-8 mt-16">
              <h2 className="text-2xl font-bold text-[#1A1F2B] mb-8">Menu</h2>
              <ul className="space-y-4 flex flex-col">
                {navItems.map((item) => (
                  <NavItem
                    key={item.text}
                    icon={item.icon}
                    text={item.text}
                    id={item.id}
                    isActive={activeItem === item.text}
                    onClick={() => {
                      setActiveItem(item.text);
                      toggleNavbar(); // Close the navbar after selection
                    }}
                  />
                ))}
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
