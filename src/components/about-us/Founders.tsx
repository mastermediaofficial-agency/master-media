"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const founders = [
  {
    name: "Mr. Abhi Gupta",
    role: "Co-Founder",
    image: "/images/Abhi_Gupta.webp",
    bio: `The brain behind the brand. Vision-driven and relentlessly curious.
          Abhi believes marketing isn’t about selling 
          products — it’s about crafting stories that build trust and drive action. 
          With a sharp eye for brand identity and growth strategy, he turns ideas into impact. 
          When he’s not shaping campaigns, he’s already planning the next big move for Master Media.`,
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Mr. Aman Gupta",
    role: "Co-Founder",
    image: "/images/Aman_Gupta.webp",
    bio: `Strategic thinker. Vision architect. Calm in chaos.
          Aman ensures Master Media doesn’t just follow trends — we create them. 
          He connects long-term vision with practical execution, bringing clarity where things get complex. 
          Quietly dependable and deeply analytical, he’s also the one the team turns to when problems need real solutions.`,
    linkedin: "https://linkedin.com/in/username",
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
          <div className="relative w-full h-[75%]">
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
          </div>

          <div className="p-4 text-center">
            <h3 className="font-24 font-bold text-primary">{founder.name}</h3>
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
            p-8
          "
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-lg leading-relaxed text-center">{founder.bio}</p>

          {founder.linkedin && (
            <Link
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="
              mt-8 inline-flex items-center justify-center
              w-12 h-12
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
