"use client";

import toast from "react-hot-toast";
import ClientSuccessSection from "@/src/components/about/CustomerDelightSection";
import ImageBelt from "@/src/components/about/ImageBelt";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const founders = [
  {
    name: "Mr. Abhi",
    role: "CEO & Co-Founder",
    image: "/abhi.jpg", // put image in public folder
    bio: `The brain behind the brand. Sahil believes marketing isn't about selling —
    it's about storytelling that converts. When he's not building empires,
    he's probably planning the next one.`,
  },
  {
    name: "Mr. Gupta",
    role: "Co-Founder",
    image: "/gupta.jpg",
    bio: `Strategic thinker. Vision architect. Calm in chaos.
    Jestin ensures Master Media doesn't just follow trends —
    we create them. Also secretly the team's problem-solver.`,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#171717]">
      {/* HERO SECTION */}
      <section className="relative bg-primary text-white px-4 lg:px-10 pt-25 md:pt-30 pb-15 overflow-hidden">
        <div className="max-w-6xl mx-auto pb-20">
          <h2 className="text-5xl font-bold mb-6">About Master Media</h2>

          <p className="text-lg max-w-3xl leading-relaxed">
            For years, we’ve partnered with brands to build meaningful digital
            presence, scalable marketing systems, and performance-driven
            campaigns that create measurable growth — not vanity metrics.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-[80px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,64L60,58.7C120,53,240,43,360,42.7C480,43,600,53,720,69.3C840,85,960,107,1080,112C1200,117,1320,107,1380,101.3L1440,96V120H0Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Mission */}
          <div>
            <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
              Our Mission
            </h3>

            <p className="text-[var(--color-gray)] leading-relaxed mb-6">
              To empower businesses through intelligent digital strategies,
              performance marketing, and creative storytelling that drives
              sustainable growth.
            </p>

            <p className="text-[var(--color-gray)] leading-relaxed mb-6">
              We believe digital marketing should be transparent, measurable,
              and aligned with real business outcomes — not just impressions and
              engagement numbers.
            </p>

            <p className="text-[var(--color-gray)] leading-relaxed">
              Our approach combines data, creativity, and automation to build
              systems that continue generating value long after campaigns go
              live.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
              Our Vision
            </h3>

            <p className="text-[var(--color-gray)] leading-relaxed mb-6">
              A digital ecosystem where brands grow through trust, strategy, and
              meaningful audience connections.
            </p>

            <p className="text-[var(--color-gray)] leading-relaxed mb-6">
              We envision a future where businesses don’t rely on guesswork, but
              operate with clarity — backed by data-driven decisions, scalable
              funnels, and optimized digital infrastructure.
            </p>

            <p className="text-[var(--color-gray)] leading-relaxed">
              Master Media aims to be the partner that transforms ambitious
              ideas into profitable digital realities.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDERS SECTION */}
      <section className="py-24 px-6 text-center bg-primary/70">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-16"
        >
          Meet The Founders
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <FlipCard key={index} founder={founder} />
          ))}
        </div>
      </section>

      <ClientSuccessSection />
      <ImageBelt />

      {/* CTA SECTION */}
      <section className="py-20 text-center bg-primary text-white">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-semibold"
        >
          Ready to Build Something Big?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg"
        >
          Let’s turn your ideas into revenue-generating machines.
        </motion.p>

        <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => {
    toast.success("🚀 Great! Let’s build something amazing together.");
  }}
  className="mt-8 px-8 py-3 bg-white text-primary font-semibold rounded-lg shadow-lg"
>
  Let’s Talk 🚀
</motion.button>

      </section>
    </div>
  );
}

function FlipCard({ founder }: any) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-[420px] perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full transition-transform duration-700 preserve-3d"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute w-full h-full bg-white rounded-xl shadow-xl flex flex-col items-center justify-center p-6 backface-hidden border border-gray-200"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={founder.image}
            alt={founder.name}
            width={200}
            height={200}
            className="rounded-xl object-cover"
          />
          <h3 className="mt-6 text-xl font-bold text-[var(--color-primary)]">
            {founder.name}
          </h3>
          <p className="text-[var(--color-gray)] mt-2">{founder.role}</p>
        </div>

        {/* BACK */}
        <div
          className="absolute w-full h-full bg-[var(--color-primary)] text-white rounded-xl shadow-xl flex items-center justify-center p-8 rotateY-180"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-lg leading-relaxed">{founder.bio}</p>
        </div>
      </motion.div>
    </div>
  );
}
