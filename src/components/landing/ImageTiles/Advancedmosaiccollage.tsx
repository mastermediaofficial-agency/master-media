"use client";

import { useScroll } from "framer-motion";
import { useMemo, useRef } from "react";
import ParallaxTile from "./ParallaxTile";
import { motion } from "framer-motion";
/* ---------------- CONFIG ---------------- */

interface RandomCollageProps {
  images: string[];
  count?: number;
}

/* ---------------- HELPERS ---------------- */

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

/* ---------------- COMPONENT ---------------- */

export default function RandomCinematicCollage({
  images,
  count = 30,
}: RandomCollageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const tiles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const height = rand(120, 260);

      return {
        id: `tile-${i}`,
        src: images[i % images.length],
        x: rand(5, 85),
        y: rand(5, 85),
        height,
        rotate: rand(-6, 6),
        depth: height > 200 ? -18 : height > 160 ? -10 : -4,
      };
    });
  }, [images, count]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-dvh overflow-hidden bg-primary-light"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-10 my-6 w-full text-center">
        <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-48 font-extrabold text-black"
      >
        Our{" "}
        <span className="bg-white bg-clip-text text-transparent">
          Brand’s Cut
        </span>
      </motion.h1>
      </div>
      {tiles.map((tile, i) => (
        <ParallaxTile
          key={tile.id}
          tile={tile}
          index={i}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </section>
  );
}
