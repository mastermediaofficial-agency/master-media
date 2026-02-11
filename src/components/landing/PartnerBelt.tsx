"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PARTNER_BELT } from "@/src/types/partners";

const useScrollDirection = () => {
  const [direction, setDirection] = React.useState<"left" | "right">("left");

  React.useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      setDirection(currentY > lastY ? "left" : "right");
      lastY = currentY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return direction;
};

const PartnerBelt = () => {
  const direction = useScrollDirection();

  return (
    <section className="relative py-10 lg:py-20 overflow-hidden bg-white px-4 lg:px-10">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className=" font-48 font-extrabold text-center text-black"
      >
        We{" "}
        <span className="text-[#566bd6]">partner with the best</span>, to do our
        best.
      </motion.h2>

      {/* Belt */}
      <div className="relative overflow-hidden max-w-400 mx-auto py-8 mt-10">
        <div
          className={`
            belt-track
            ${direction === "left" ? "belt-left" : "belt-left"}
          `}
        >
          {[...PARTNER_BELT, ...PARTNER_BELT,  ...PARTNER_BELT].map((item, i) => (
            <div
              key={i}
              className="
                w-[260px]
                min-h-[140px]
                rounded-2xl
                bg-[#879ee718]
                px-6
                py-5
                shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                flex
                flex-col
                justify-between
              "
            >
              <p className="text-sm text-center font-bold text-black">
                {item.title}
              </p>

              <div className="relative mt-6 h-14 w-full">
                <Image
                  src={item.logo}
                  alt={item.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white to-transparent" />
      </div>
    </section>
  );
};

export default PartnerBelt;
