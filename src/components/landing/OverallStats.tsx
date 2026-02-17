"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
// import { CgSmileMouthOpen } from "react-icons/cg";
import {
  FaArrowRight,
  FaUsers,
  // FaBolt,
  // FaTrophy,
} from "react-icons/fa";
import JoinModal from "./Join/JoinModal";

export default function OverallStats() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#7a99e7] via-[#d9e1f7] to-[#b9c4eb] py-10 lg:py-20 px-6">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-120 h-120 bg-purple-300/10 rounded-full blur-[140px]" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full h-full opacity-0 bg-no-repeat bg-cover select-none pointer-events-none "
        style={{ backgroundImage: "url('/layers/tile.webp')" }}
      />

      <div className="relative mx-auto max-w-6xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-48 font-extrabold text-black"
        >
          Let’s Rewrite Your{" "}
          <span className="bg-linear-to-r from-blue-600  to-blue-600 bg-clip-text text-transparent">
            Brand’s Story
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-6 font-24 text-gray-600 max-w-2xl mx-auto"
        >
          Aapke har ek sawal ka,
          <br />
          Ek hi{" "}
          <span className="font-semibold text-blue-600">“Dhurandhar”</span>{" "}
          jawab —{" "}
          <span className="font-semibold text-blue-600">Master Media</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-2 md:gap-5 justify-center"
        >
          <>
            <button
              onClick={() => setOpen(true)}
              className="group relative inline-flex items-center justify-center rounded-xl bg-[#324dd3] px-8 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.6)]"
            >
              Request a Proposal
              <FaArrowRight
                className="ml-3 transition-transform group-hover:translate-x-1"
                size={20}
              />
              <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-sm bg-linear-to-r from-blue-500/10 to-purple-500/10" />
            </button>
            <div className="relative z-999">
              <JoinModal open={open} onClose={() => setOpen(false)} />
            </div>
          </>

          <Link
            href="/careers"
            className="group inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-800 transition-all duration-300 hover:border-blue-400 hover:text-blue-600 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
          >
            <FaUsers className="mr-3 text-[#324dd3]" size={20} />
            Join the Team
          </Link>
        </motion.div>

        {/* Achievement Card */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 mx-auto max-w-2xl rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl p-6 shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] transition-all duration-300"
        >
          <div className="flex items-start gap-4 text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-blue-400 to-purple-900 text-white shadow-lg">
              <FaTrophy />
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                Achievement Unlocked
                <FaBolt className="text-blue-500 animate-pulse" />
              </h4>
              <p className="mt-2 font-16 text-gray-600">
                Master of the Scroll! Even the Instagram algorithm is jealous of
                your attention span <CgSmileMouthOpen className="inline-block" size={20}/> <br />
                <span className="font-semibold text-blue-600">
                  500 “Master Points”
                </span>{" "}
                have been credited to your brand’s future.
              </p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
