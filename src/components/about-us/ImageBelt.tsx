"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const images = Array.from({ length: 25 }, (_, i) => ({
  src: `/content/brands/home/Photo (${i + 1}).webp`,
  title: "Inside Master Media",
  desc: "A glimpse into our impactful work and brand collaborations.",
}));

export default function ImageBelt() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    if (!containerRef.current || isPaused) return;

    const speed = 0.07;
    const width = containerRef.current.scrollWidth / 2;

    let newX = x.get() - delta * speed;

    if (Math.abs(newX) >= width) {
      newX = 0;
    }

    x.set(newX);
  });

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
        Inside Master Media
      </h2>

      <div className="absolute left-0 top-0 h-full w-16 md:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-16 md:w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex gap-4 w-max"
        >
          {[...images, ...images].map((img, index) => (
            <HoverImageCard key={index} img={img} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function HoverImageCard({ img }: { img: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative w-[250px] h-[300px] sm:w-[280px] sm:h-[360px] md:w-[320px] md:h-[420px] rounded-sm overflow-hidden shadow-lg group transition-all duration-500"
    >
      <Image
        src={img.src}
        alt={img.title}
        fill
        sizes="(max-width: 768px) 250px, 320px"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-primary/85 backdrop-blur-sm flex flex-col justify-center items-center text-white px-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">
          {img.title}
        </h3>
        <p className="text-sm text-center leading-relaxed opacity-90">
          {img.desc}
        </p>
      </div>
    </motion.div>
  );
}
