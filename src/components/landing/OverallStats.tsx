"use client";

import { motion } from "framer-motion";
import { CgSmileMouthOpen } from "react-icons/cg";
import {
  FaArrowRight,
  FaUsers,
  FaBolt,
  FaTrophy,
} from "react-icons/fa";

export default function OverallStats() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#F8FAFF] via-[#F3F6FF] to-[#EEF2FF] py-10 lg:py-20 px-6">
      {/* Floating linear blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-120 h-120 bg-purple-300/30 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-6xl text-center">
        {/* Heading */}
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

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-6 font-18 text-gray-600 max-w-2xl mx-auto"
        >
          Aapke har ek sawal ka,
          <br />
          Ek hi <span className="font-semibold text-blue-600">“Dhurandhar”</span>{" "}
          jawab —{" "}
          <span className="font-semibold text-blue-600">Master Media</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
        >
          {/* Primary */}
          <button className="group relative inline-flex items-center justify-center rounded-xl bg-[#324dd3] px-8 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.6)]">
            Request a Proposal
            <FaArrowRight className="ml-3 transition-transform group-hover:translate-x-1"  size={20}/>
            <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-sm bg-linear-to-r from-blue-500/10 to-purple-500/10" />
          </button>

          {/* Secondary */}
          <button className="group inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-800 transition-all duration-300 hover:border-blue-400 hover:text-blue-600 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
            <FaUsers className="mr-3 text-[#324dd3]"  size={20}/>
            Join the Team
          </button>
        </motion.div>

        {/* Achievement Card */}
        <motion.div
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
        </motion.div>
      </div>
    </section>
  );
}
