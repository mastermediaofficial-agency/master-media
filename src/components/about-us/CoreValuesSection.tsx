"use client";

import { motion } from "framer-motion";
import { FaHandshake, FaShieldAlt, FaChartLine, FaLock } from "react-icons/fa";

const values = [
  {
    title: "Trust First",
    desc: "We build long-term partnerships through transparency, consistency, and honest collaboration.",
    icon: FaHandshake,
  },
  {
    title: "Integrity by Design",
    desc: "Every strategy and decision is guided by ethics, accountability, and responsibility.",
    icon: FaShieldAlt,
  },
  {
    title: "Measurable Impact",
    desc: "Our focus is on real outcomes — growth, performance, and data-backed success.",
    icon: FaChartLine,
  },
  {
    title: "Security & Reliability",
    desc: "Your platforms, data, and brand assets are protected with enterprise-grade security.",
    icon: FaLock,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function CoreValuesSection() {
  return (
    <section
      className="
        py-28
        bg-linear-to-b
        from-[#eff2fc]
        via-[#c7d0f3]
        to-[#d1dbfd]
      "
    >
      <div className="max-w-3xl mx-auto text-center mb-20 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold tracking-tight text-[#213d77]"
        >
          Our Core Values
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-5 text-lg text-[#9f9f9f]"
        >
          The principles that define how we earn trust, create value, and
          protect what matters most.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {values.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: {
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                },
              }}
              className="
                group relative overflow-hidden
                rounded-3xl
                bg-white
                border border-[#324dd3]/10
                shadow-[0_16px_40px_rgba(50,77,211,0.12)]
                hover:shadow-[0_30px_90px_rgba(50,77,211,0.22)]
                transition-shadow duration-500
                transform-gpu will-change-transform
              "
            >
              <div className="h-24 bg-linear-to-r from-[#324dd3] to-[#566bd6] flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 250, damping: 18 }}
                  className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center"
                >
                  <item.icon className="text-white text-xl" />
                </motion.div>
              </div>

              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold text-[#213d77] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#9f9f9f]">
                  {item.desc}
                </p>
              </div>

              <motion.span
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="
            absolute top-0 right-0 h-full w-28
            bg-linear-to-l
            from-[#324dd3]/25
            to-transparent
            pointer-events-none
          "
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
