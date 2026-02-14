"use client";

import { useState } from "react";
import JoinModal from "./Join/JoinModal";
import { motion } from "framer-motion";

type ActiveWord = "masters" | "algorithm" | "break" | null;

export default function Hero() {
  const [activeWord, setActiveWord] = useState<ActiveWord>(null);
  const [open, setOpen] = useState(false);

  const getBgColor = () => {
    switch (activeWord) {
      case "masters":
        return "space-bg";
      case "algorithm":
        return "emerald-lux";
      case "break":
        return "cosmic-mix";
      default:
        return "";
    }
  };

  return (
    <section
      className={`relative h-dvh overflow-hidden flex items-center justify-center px-4 lg:px-10 transition-colors duration-300 ${getBgColor()}`}
    >
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/home/home-bg.png"
        preload="auto"
      >
        <source src="/videos/hero-2.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 -z-10 bg-white/50" />
      <div className="absolute inset-0 -z-10 bg-black/20" />

      <div className="relative max-w-800 text-black">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-72 mb-8 leading-tight"
          >
            <span>We Are The </span>

            <span
              onMouseEnter={() => setActiveWord("masters")}
              onMouseLeave={() => setActiveWord(null)}
              className="font-extrabold cursor-pointer transition-colors duration-200"
            >
              Masters
            </span>
          </motion.p>

          <p className="font-40 mb-4">
            <span>of Social media. Experienced enough to know the </span>

            <span
              onMouseEnter={() => setActiveWord("algorithm")}
              onMouseLeave={() => setActiveWord(null)}
              className="font-extrabold cursor-pointer transition-colors duration-200"
            >
              algorithm
            </span>
          </p>

          <p className="font-40 mb-10">
            <span>creative enough to </span>

            <span
              onMouseEnter={() => setActiveWord("break")}
              onMouseLeave={() => setActiveWord(null)}
              className="font-extrabold cursor-pointer transition-colors duration-200"
            >
              break
            </span>

            <span> it!</span>
          </p>

          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <button
              onClick={() => setOpen(true)}
              className="p-2 sm:p-4 lg:px-12 lg:py-3 cursor-pointer w-[200px] lg:w-[300px] xl:w-auto mx-auto bg-primary-dark shadow-xl shadow-blue-950 text-white rounded-xl font-24 font-bold hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              Get Started
            </button>

            <div className="relative z-50">
              <JoinModal open={open} onClose={() => setOpen(false)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
