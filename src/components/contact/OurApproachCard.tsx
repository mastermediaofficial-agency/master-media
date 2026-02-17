"use client";

import { motion } from "framer-motion";

export default function OurApproachCard() {
  return (
    <section className="relative w-full rounded-3xl overflow-hidden shadow-2xl mt-6 lg:mt-10">
      <motion.div
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-linear-to-r from-[#324dd3] via-[#28377d] to-[#213d77]"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 w-full h-full bg-right bg-no-repeat bg-obtain select-none pointer-events-none"
        style={{ backgroundImage: "url('/layers/wire.webp')" }}
      />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[18px_18px]" />

      <div className="relative z-10 text-center px-6 py-16 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="font-36 font-bold text-white"
        >
          Our Approach
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 text-white/80 max-w-3xl mx-auto leading-relaxed font-18"
        >
          At Master Media, we believe in transparent collaboration, data-driven
          strategy, and execution that delivers measurable results. Every
          project is handled with precision, creativity, and a commitment to
          long-term growth.
        </motion.p>
      </div>
    </section>
  );
}
