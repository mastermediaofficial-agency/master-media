"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  {
    title: "Accelerated Skill Growth",
    desc: "Gain hands-on experience in live projects that sharpen your expertise and prepare you for industry challenges.",
  },
  {
    title: "Mentorship & Guidance",
    desc: "Work alongside experienced leaders who guide, review, and elevate your performance consistently.",
  },
  {
    title: "Ownership & Impact",
    desc: "From day one, take responsibility for meaningful work that directly contributes to Master Media’s growth.",
  },
  {
    title: "Transparent Career Path",
    desc: "Structured feedback and performance tracking ensure your growth is always visible and measurable.",
  },
];

export default function CareerGrowthSection() {
  return (
    <section className="w-full bg-primary-light text-white py-15 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Where Small Opportunities Create Big Careers
          </h2>
          <p className="text-white mt-4 max-w-2xl mx-auto">
            At Master Media, even a small chance can unlock extraordinary professional growth.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/images/career.jpg"  // replace with your image
                alt="Career Growth"
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-8">

            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04 }}
                className="
                  bg-primary-dark
                  hover:bg-gray
                  transition-all duration-300
                  rounded-xl
                  p-8
                  cursor-pointer
                "
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
