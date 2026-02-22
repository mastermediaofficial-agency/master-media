"use client";

import React, { useMemo } from "react";
import { motion, Variants, Transition } from "framer-motion";
import Image from "next/image";

const images = [
  "/content/brands/home/Photo (1).webp",
  "/content/brands/home/Photo (2).webp",
  "/content/brands/home/Photo (3).webp",
  "/content/brands/home/Photo (4).webp",
  "/content/brands/home/Photo (5).webp",
  "/content/brands/home/Photo (6).webp",
  "/content/brands/home/Photo (7).webp",
  "/content/brands/home/Photo (8).webp",
  "/content/brands/home/Photo (9).webp",
  "/content/brands/home/Photo (10).webp",
  "/content/brands/home/Photo (11).webp",
  "/content/brands/home/Photo (12).webp",
  "/content/brands/home/Photo (13).webp",
  "/content/brands/home/Photo (14).webp",
  "/content/brands/home/Photo (15).webp",
  "/content/brands/home/Photo (16).webp",
  "/content/brands/home/Photo (17).webp",
  "/content/brands/home/Photo (18).webp",
  "/content/brands/home/Photo (20).webp",
  "/content/brands/home/Photo (21).webp",
  "/content/brands/home/Photo (22).webp",
];

const cardTransition: Transition = {
  duration: 0.9,
  ease: [0.23, 1, 0.32, 1],
};

const containerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: cardTransition,
  },
};

const ImageCard = React.memo(({ src }: { src: string }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="relative group cursor-pointer overflow-hidden rounded-xl lg:rounded-2xl bg-white/5 aspect-[4/6] will-change-transform"
    >
      <Image
        src={src}
        alt="Gallery Image"
        fill
        loading="lazy"
        sizes="(max-width: 768px) 33vw, 15vw"
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
    </motion.div>
  );
});

ImageCard.displayName = "ImageCard";

export default function Media() {
  const desktopGrids = useMemo(
    () => [
      { cols: "grid-cols-8", range: [0, 8] },
      { cols: "grid-cols-5", range: [8, 13] },
      { cols: "grid-cols-8", range: [13, 21] },
    ],
    [],
  );

  const mobileGrids = useMemo(
    () => [
      { cols: "grid-cols-4", range: [0, 4] },
      { cols: "grid-cols-3", range: [4, 7] },
      { cols: "grid-cols-4", range: [7, 11] },
      { cols: "grid-cols-3", range: [11, 14] },
    ],
    [],
  );

  return (
    <section className="relative w-full py-16 lg:py-24 px-4 lg:px-10 gallery-gradient overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 mb-12 lg:mb-24 text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-7xl font-bold text-white tracking-tight"
        >
          Impact in Action
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg lg:text-xl text-white/60 mt-6 font-light"
        >
          A glimpse into our impactful work and the communities we serve.
        </motion.p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:block max-w-400 mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-4 lg:gap-6"
        >
          {desktopGrids.map((grid, idx) => (
            <div
              key={`desktop-row-${idx}`}
              className={`grid ${grid.cols} gap-4 lg:gap-6`}
            >
              {images.slice(grid.range[0], grid.range[1]).map((src) => (
                <ImageCard key={src} src={src} />
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Grid */}
      <div className="block md:hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="flex flex-col gap-3"
        >
          {mobileGrids.map((grid, idx) => (
            <div
              key={`mobile-row-${idx}`}
              className={`grid ${grid.cols} gap-3`}
            >
              {images.slice(grid.range[0], grid.range[1]).map((src) => (
                <ImageCard key={src} src={src} />
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
