"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const founders = [
  {
    name: "Mr. Abhi Gupta, The Guardian of Execution",
    role: "Co-Founder & COO",
    image: "/images/Abhi_Gupta.webp",
    bio: `Providing vision is not enough until, Abhi is the one who polishes it to perfection. He is the gatekeeper of the "Master Media" standard—where even a pixel out of place is one too many. With years of elite industry experience, he specializes in turning raw concepts into flawless digital realities. He is the calm in the creative storm, ensuring that every project we deliver is defined by expert finesse and measurable impact.`,
    linkedin: "https://www.linkedin.com/in/abhigupta1811/",
  },
  {
    name: "Mr. Aman Gupta, The Master Architect",
    role: "Co-Founder & CMO",
    image: "/images/Aman_Gupta.webp",
    bio: `Every high-performing team needs a strategist who can see the finish line before the race even begins. Aman Gupta is the one drawing the blueprints for our digital dominance. If "Market Authority" were a high-stakes game, Aman would be five moves ahead. He replaces guesswork with surgical precision, ensuring every campaign is a masterclass in growth. He doesn't just lead; he sets the high-standard pulse that drives our entire squad toward perfection.`,
    linkedin: "https://www.linkedin.com/in/aman-gupta-7315aa202/",
  },
];

export default function Founders() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  React.useEffect(() => {
    const handleClick = () => setActiveIndex(null);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <section className="py-24 px-6 text-center bg-primary/70">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-16"
      >
        Meet The Founders
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-16 max-w-4xl mx-auto">
        {founders.map((founder, index) => (
          <FlipCard
            key={index}
            founder={founder}
            isActive={activeIndex === index}
            onHover={() => setActiveIndex(index)}
            onLeave={() => setActiveIndex(null)}
            stopPropagation
          />
        ))}
      </div>
    </section>
  );
}

function FlipCard({ founder, isActive, onHover, onLeave }: any) {
  return (
    <div
      className="relative aspect-square cursor-pointer"
      style={{ perspective: "1200px" }}
      onMouseEnter={(e) => {
        e.stopPropagation();
        onHover();
      }}
      onMouseLeave={(e) => {
        e.stopPropagation();
        onLeave();
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <motion.div
        animate={{ rotateY: isActive ? 180 : 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative w-full h-full transform-gpu will-change-transform"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative w-full h-[65%] sm:h-[75%]">
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
          </div>

          <div className="p-4 text-center">
            <h3 className="font-bold text-primary">{founder.name}</h3>
            <p className="text-gray text-sm mt-1">{founder.role}</p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="
            absolute inset-0
            bg-primary text-white rounded-xl
            shadow-xl
            flex flex-col items-center justify-center
            p-5 sm:p-8
          "
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-[13px] sm:text-base leading-relaxed text-center">{founder.bio}</p>

          {founder.linkedin && (
            <Link
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="
              mt-3 sm:mt-8 inline-flex items-center justify-center
              w-10 h-10 sm:w-12 sm:h-12
              rounded-full shrink-0
              bg-white text-[#324dd3]
              transition-all duration-300
              hover:scale-110 hover:bg-[#e8edff]
              shadow-md
            "
              onClick={(e) => e.stopPropagation()}
            >
              <FaLinkedinIn size={18} />
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
}
