import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative bg-primary text-black px-4 lg:px-10 pt-30 md:pt-30px-6 py-24 pb-15">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="font-extrabold leading-none"
        >
          <h1 className="text-[clamp(4rem,7vw,5rem)] tracking-tight">
            <span className="block text-transparent [text-shadow:0.2px_0.2px_0_#facc15,-0.2px_0.2px_0_#facc15,0.5px_-0.2px_0_#facc15,-0.2px_-0.2px_0_#facc15]">
              Master Media,
            </span>
            <span className="block text-transparent stroke-text">HOW</span>
            <span className="block text-transparent stroke-text">WHY</span>
            <span className="block text-gray-300">WHAT ?</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative bg-white rounded-3xl p-8 shadow-xl"
        >
          <p className="font-16 leading-relaxed text-gray-800">
            If you don&apos;t want to be a dead fish going with the flow, why
            won&apos;t you drop us a mail? We will get back to you and see what
            you have got to show.
          </p>

          <span className="absolute left-[-14px] bottom-10 w-0 h-0 border-t-14 border-t-transparent border-b-14 border-b-transparent border-r-14 border-r-white" />
        </motion.div>
      </div>

      <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 2px yellow;
        }
      `}</style>
    </section>
  );
}

export default Hero;
