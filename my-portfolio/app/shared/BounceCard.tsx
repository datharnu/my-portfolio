"use client";

import React from "react";
import { motion } from "framer-motion";

interface BounceCardProps {
  className?: string;
  children: React.ReactNode;
}

const BounceCard: React.FC<BounceCardProps> = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${
        className || ""
      }`}
    >
      {children}
    </motion.div>
  );
};

export default BounceCard;
