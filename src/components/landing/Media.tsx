"use client";

import { motion } from "framer-motion";

const images = [
  "photo-1682687220742-aba13b6e50ba",
  "photo-1682687221038-404cb8830901",
  "photo-1682687220063-4742bd7fd538",
  "photo-1682687220923-c58b9a4592ae",
  "photo-1682687220742-aba13b6e50ba",
  "photo-1682687221038-404cb8830901",
  "photo-1682687220063-4742bd7fd538",
  "photo-1682687220923-c58b9a4592ae",
  "photo-1682687221038-404cb8830901",
  "photo-1682687220063-4742bd7fd538",
  "photo-1682687220923-c58b9a4592ae",
  "photo-1682687221038-404cb8830901",
  "photo-1682687221038-404cb8830901",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const, // premium easing
    },
  },
};

const ImageCard = ({ id }: { id: string }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      {/* Image */}
      <motion.img
        src={`https://images.unsplash.com/${id}?w=900`}
        alt=""
        className="w-full h-full object-cover transition-transform duration-700 ease-out"
        whileHover={{ scale: 1.12 }}
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500" />
    </motion.div>
  );
};

export default function Media() {
  return (
    <section className="relative w-full gallery-gradient py-10 lg:py-15 px-4 lg:px-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 
               bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]
               bg-size-[18px_18px]"
        initial={{ opacity: 0.05, scale: 1 }}
        animate={{
          opacity: [0.05, 0.12, 0.05],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Heading */}
      <div className="mb-14 lg:mb-20 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight">
          Impact in Action
        </h2>
        <p className="text-lg lg:text-xl text-white/80 mt-6 leading-relaxed">
          A glimpse into our impactful work and the communities we serve.
        </p>
      </div>

      {/* Desktop */}
      <div className="hidden md:block max-w-[1400px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="flex flex-col gap-6"
        >
          <div className="grid grid-cols-6 gap-4">
            {images.slice(0, 6).map((id, i) => (
              <ImageCard key={i} id={id} />
            ))}
          </div>

          <div className="grid grid-cols-4 gap-4">
            {images.slice(3, 7).map((id, i) => (
              <ImageCard key={i} id={id} />
            ))}
          </div>

          <div className="grid grid-cols-6 gap-4">
            {images.slice(7, 13).map((id, i) => (
              <ImageCard key={i} id={id} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden max-w-[1200px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-3 gap-3">
            {images.slice(0, 3).map((id, i) => (
              <ImageCard key={i} id={id} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {images.slice(3, 5).map((id, i) => (
              <ImageCard key={i} id={id} />
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            {images.slice(5, 8).map((id, i) => (
              <ImageCard key={i} id={id} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
