"use client";

import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        width: "60px",
        height: "60px",
        zIndex: 1001,
      }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
    >
      <img
        src="/logo.png"
        alt="Logo"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </motion.div>
  );
}