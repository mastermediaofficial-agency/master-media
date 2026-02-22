import { fadeUp } from "@/src/types/lib/animations";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function PolicySection({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileInView={{ scale: 1, opacity: 1 }}
initial={{ scale: 0.95, opacity: 0.8 }}
      className="relative group p-4 lg:p-6 rounded-2xl border border-white/10 bg-primary-light/50 backdrop-blur-md hover:border-[#324dd3] transition-all duration-500 overflow-hidden
"
    >
      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-[#324dd3]/0 via-[#324dd3]/10 to-[#324dd3]/0 opacity-0 group-hover:opacity-100 transition duration-700" />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-48 font-bold text-primary/70 group-hover:text-[#324dd3]/40 transition">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2 className="font-24 font-semibold text-white">{title}</h2>
        </div>

        <div className="text-white/80 leading-relaxed">{children}</div>
      </div>
    </motion.div>
  );
}
