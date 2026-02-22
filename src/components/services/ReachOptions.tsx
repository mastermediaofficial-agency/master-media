"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiPhoneCall, FiHelpCircle } from "react-icons/fi";
import JoinModal from "../landing/Join/JoinModal";

export default function ReachOptions() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-12">
          Let’s Connect With Master Media
        </h2>

        <div className="grid md:grid-cols-1 gap-8">
          {/* CARD 1 */}
          <AnimatedCard
            icon={<FiPhoneCall size={26} />}
            title="Talk to a Growth Specialist"
            desc="We’ll help you discover the right digital strategy, creative direction, and growth roadmap tailored for your brand."
            buttonText="Contact Sales"
            onClick={() => window.open("tel:+919026792973")}
          />

          {/* CARD 2 */}
          {/* <AnimatedCard
            icon={<FiHelpCircle size={26} />}
            title="Product & Campaign Support"
            desc="Need guidance on your project or campaign? Our team is ready to help you move forward with clarity and confidence."
            buttonText="Request Support"
            onClick={() => setOpen(true)}
          /> */}
        </div>
      </div>

      <>
        <div className="relative z-999">
          <JoinModal open={open} onClose={() => setOpen(false)} />
        </div>
      </>
    </section>
  );
}

// ---compo--

function AnimatedCard({
  icon,
  title,
  desc,
  buttonText,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  buttonText: string;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ rotateX: 4, rotateY: -4 }}
      transition={{ duration: 0.6 }}
      className="group relative bg-[#f5f7ff] rounded-2xl p-10 shadow-md hover:shadow-xl transition-all"
      style={{ perspective: 1000 }}
    >
      {/* Animated Bottom Line */}
      <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#324dd3] group-hover:w-full transition-all duration-500 rounded-full" />

      <div className="mb-6 flex justify-center text-[#324dd3]">{icon}</div>

      <h3 className="text-xl font-semibold text-primary mb-4">{title}</h3>

      <p className="text-gray-600 text-sm mb-6 leading-relaxed">{desc}</p>

      <button
        onClick={onClick}
        className="bg-primary hover:bg-primary-dark cursor-pointer text-white px-6 py-3 rounded-xl transition"
      >
        {buttonText}
      </button>
    </motion.div>
  );
}
