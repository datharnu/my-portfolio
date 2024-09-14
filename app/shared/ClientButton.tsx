"use client";

import React from "react";
import { motion } from "framer-motion";

const ClientButton: React.FC = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
    >
      Learn more
    </motion.button>
  );
};

export default ClientButton;
