"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaUsers,
  FaHeart,
  FaBuilding,
  FaAward,
} from "react-icons/fa";

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  title: string;
  desc: string;
}

const stats: StatItem[] = [
  {
    icon: <FaUsers />,
    value: 5000,
    suffix: "+",
    title: "Brands Empowered",
    desc: "Businesses scaled with strategy",
  },
  {
    icon: <FaHeart />,
    value: 60000,
    suffix: "+",
    title: "Campaign Impressions",
    desc: "Audience reach across digital platforms",
  },
  {
    icon: <FaBuilding />,
    value: 120,
    suffix: "+",
    title: "Projects Delivered",
    desc: "Web, branding & growth campaigns",
  },
  {
    icon: <FaAward />,
    value: 15,
    suffix: "+",
    title: "Industry Recognitions",
    desc: "Trusted by brands & partners",
  },
];

export default function Mastery() {
  return (
    <section className="relative bg-linear-to-b from-[#28377d] to-[#1f2b63] py-10 lg:py-20 text-white">
      <div className="mx-auto max-w-400 text-center px-4 lg:px-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-48 font-extrabold"
        >
          Our Journey in Numbers
        </motion.h1>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {stats.map((item, i) => (
            <StatCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */

function StatCard({
  icon,
  value,
  suffix,
  title,
  desc,
}: StatItem) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1400; // speed feel
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * value));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-xl bg-[#324dd3]/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Card */}
      <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 lg:p-6 shadow-lg transition-all duration-300 group-hover:border-[#566bd6]">
        {/* Icon */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#324dd3] text-white text-xl shadow-md">
          {icon}
        </div>

        {/* Number */}
        <div className="mt-4 lg:mt-6 font-36 font-extrabold text-white/80">
          {count.toLocaleString()}
          {suffix}
        </div>

        {/* Title */}
        <p className="mt-3 font-semibold text-white">{title}</p>

        {/* Desc */}
        <p className="mt-2 font-16 text-white/80">{desc}</p>
      </div>
    </motion.div>
  );
}
