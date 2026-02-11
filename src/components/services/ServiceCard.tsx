"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

type Props = {
  title: string;
  desc: string;
  icon: IconType;
  index: number;
};

export default function ServiceCard({ title, desc, icon: Icon, index }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="
        group relative overflow-hidden
        bg-black/5
        rounded-2xl p-8
        border border-gray-200
        shadow-sm cursor-pointer
        hover:shadow-[0_20px_50px_rgba(50,77,211,0.15)]
        transition-all
      "
    >
      {/* 🔵 Gradient Glow */}
      <div
        className="
          absolute inset-0
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          pointer-events-none
          bg-linear-to-br
          from-light/20
          via-transparent
          to-transparent
        "
      />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 6, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="
          w-12 h-12 mb-6
          rounded-xl
          flex items-center justify-center
          bg-primary/10
          text-primary
          font-24
        "
      >
        <Icon />
      </motion.div>

      {/* Title */}
      <h3
        className="
          text-xl font-semibold mb-3
          text-background
          group-hover:text-primary
          transition-colors
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          text-gray
          text-lg leading-relaxed
        "
      >
        {desc}
      </p>

      {/* Bottom Accent Line */}
      <div
        className="
          absolute bottom-0 left-0 h-[3px] w-0
          bg-primary
          group-hover:w-full
          transition-all duration-500
        "
      />
    </motion.div>
  );
}
