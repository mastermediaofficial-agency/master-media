"use client";

import { motion } from "framer-motion";

export default function JoinButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="
        fixed -right-[-18px] top-1/2
        -translate-y-1/2
        bg-primary
        text-white font-medium font-20
        px-4 py-3
        rounded-xl
        shadow-lg z-50
        select-none

        origin-right
        -rotate-90
      "
    >
      Join Us
    </motion.button>
  );
}
