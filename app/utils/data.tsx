import React from "react";
import { motion } from "framer-motion";

// Define props types for BounceCard
interface BounceCardProps {
  className?: string;
  children: React.ReactNode;
}

// Define props types for CardTitle
interface CardTitleProps {
  children: React.ReactNode;
}

// BounceCard component
export const BounceCard: React.FC<BounceCardProps> = ({
  className,
  children,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

// CardTitle component
export const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};
