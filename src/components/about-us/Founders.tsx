"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const founders = [
  {
    name: "Mr. Abhi Gupta",
    role: "CEO & Co-Founder",
    image: "/abhi.jpg",
    bio: `The brain behind the brand. Sahil believes marketing isn&apos;t about selling —
    it&apos;s about storytelling that converts. When he&apos;s not building empires,
    he&apos;s probably planning the next one.`,
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Mr. Aman Gupta",
    role: "Co-Founder",
    image: "/gupta.jpg",
    bio: `Strategic thinker. Vision architect. Calm in chaos.
    Jestin ensures Master Media doesn&apos;t just follow trends —
    we create them. Also secretly the team&apos;s problem-solver.`,
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

      <div className="grid md:grid-cols-2 gap-6 lg:gap-16 max-w-5xl mx-auto">
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
      className="relative w-full h-[420px] cursor-pointer"
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
          className="
            absolute inset-0
            bg-white rounded-xl
            shadow-xl border border-gray-200
            flex flex-col items-center justify-center p-6
          "
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <Image
            src={founder.image}
            alt={founder.name}
            width={200}
            height={200}
            className="rounded-xl object-cover"
          />
          <h3 className="mt-6 text-xl font-bold text-primary">
            {founder.name}
          </h3>
          <p className="text-gray mt-2">{founder.role}</p>
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
              rounded-full
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
