"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MasterMediaGrowth() {
  return (
    <section className="relative w-full bg-linear-to-r from-[#0B1225] to-[#111A35] py-10 lg:py-20 px-4 lg:px-10">
      {/* <div className="absolute inset-0 opacity-20 bg-[url('/layers/tech.jpg')] bg-no-repeat bg-right bg-fit"></div> */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-white flex flex-col items-center lg:items-start justify-center space-y-6 text-center lg:text-left">
          <span className="px-4 py-1 text-sm rounded-full bg-[#324dd3]/10 text-[#566bd6] border border-[#324dd3]/30">
            Master Media Agency
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Empowering Brands <br />
            Through Digital Excellence
          </h2>

          <p className="text-[#9f9f9f] text-base md:text-lg max-w-xl">
            At Master Media, we help businesses grow with powerful digital
            marketing strategies, creative branding, and performance-driven
            development. From startups to enterprises, we transform ideas into
            scalable digital success.
          </p>

          <Link
            href={"/contact"}
            className="inline-flex items-center justify-center rounded-lg bg-[#324dd3] px-10 py-3 text-white font-medium transition-all duration-300 hover:bg-[#28377d] hover:shadow-lg hover:shadow-[#324dd3]/30 cursor-pointer"
          >
            Work With Us
          </Link>
        </div>
        <div className="relative flex lg:justify-end justify-center select-none ">
          <motion.img
            src="/layers/phone-1.png"
            alt="mobile"
            draggable={false}
            initial={{ opacity: 0, scale: 0.9, y: -60 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              y: -8,
              rotate: -2,
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="w-[140px] md:w-[220px] rounded-2xl shadow-2xl rotate-[-4deg] pb-10 select-none will-change-transform"
          />

          <motion.img
            src="/layers/phone-1.png"
            alt="mobile"
            draggable={false}
            initial={{ opacity: 0, scale: 0.9, y: 60 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              y: -8,
              rotate: 2,
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: 0.15,
            }}
            className="w-[140px] md:w-[220px] rounded-2xl shadow-2xl rotate-6 pt-10 select-none will-change-transform"
          />
        </div>
      </div>
    </section>
  );
}
