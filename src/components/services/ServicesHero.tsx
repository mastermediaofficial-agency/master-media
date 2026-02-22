"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center mb-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-48 font-extrabold mb-6 text-black"
      >
        Our{" "}
        <span className="bg-linear-to-r from-[#324dd3] to-[#566bd6] bg-clip-text text-transparent">
          Services
        </span>{" "}
      </motion.h1>

      <p className="text-gray-400 font-18">
        We don&apos;t do boring marketing.
        <br />
        We build brands, break patterns, and create growth stories that resonate.
      </p>
    </motion.div>
  );
}
