"use client";

import { motion } from "framer-motion";
import {
  FiBarChart2,
  FiUsers,
  FiGlobe,
  FiPenTool,
  FiVolume2,
  FiTrendingUp,
} from "react-icons/fi";
import type { IconType } from "react-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const services: {
  title: string;
  desc: string;
  icon: IconType;
}[] = [
  {
    title: "Social Media Management",
    desc: "Posting consistently, engaging smartly, and keeping your brand relevant.",
    icon: FiVolume2,
  },
  {
    title: "Performance Marketing",
    desc: "ROI-focused campaigns that actually convert clicks into customers.",
    icon: FiTrendingUp,
  },
  {
    title: "Influencer Marketing",
    desc: "Collaborate with creators who truly align with your brand voice.",
    icon: FiUsers,
  },
  {
    title: "Website Development",
    desc: "Fast, responsive, and modern websites built to scale.",
    icon: FiGlobe,
  },
  {
    title: "Branding",
    desc: "Create a strong visual identity that people remember.",
    icon: FiPenTool,
  },
  {
    title: "Social Media Ads",
    desc: "Scroll-stopping ads designed for performance and reach.",
    icon: FiBarChart2,
  },
];

export default function WhatWeDo() {
  return (
   <div className="w-full ">
     <section className="py-20 px-4 max-w-7xl mx-auto bg-white w-full">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold">
          What We Do <span className="text-blue-600">Best</span>
        </h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          High-impact solutions for modern brands. No fluff, just results.
        </p>
      </div>

      {/* Desktop */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, i) => (
          <ServiceCard key={i} {...item} />
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden">
        <Swiper spaceBetween={16} slidesPerView={1.1}>
          {services.map((item, i) => (
            <SwiperSlide key={i}>
              <ServiceCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
   </div>
  );
}

function ServiceCard({
  title,
  desc,
  icon: Icon,
}: {
  title: string;
  desc: string;
  icon: IconType;
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="
        group relative rounded-2xl p-6
        bg-gradient-to-br from-blue-50 to-indigo-100
        border border-blue-200
        shadow-lg hover:shadow-2xl
        overflow-hidden
      "
    >
      <div className="relative z-10 w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4">
        <Icon size={22} />
      </div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
