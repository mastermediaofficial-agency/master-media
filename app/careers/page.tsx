"use client";

import CareerForm from "@/src/components/career/CareerForm";
import { motion } from "framer-motion";
import { useState } from "react";

/* ------------------ DUMMY DATA (API READY) ------------------ */

const LOCATIONS = ["Bangalore", "Gurgaon", "Mumbai"] as const;

const JOBS = [
  {
    id: 1,
    title: "Associate Brand Solutions Manager",
    experience: "1–2 years",
    type: "Permanent",
    department: "Brand Solutions",
    location: "Bangalore",
  },
  {
    id: 2,
    title: "Associate Graphic Designer",
    experience: "1–3 years",
    type: "Permanent",
    department: "Art",
    location: "Bangalore",
  },
  {
    id: 3,
    title: "Associate Group Head – Copy",
    experience: "6–8 years",
    type: "Permanent",
    department: "Copy",
    location: "Mumbai",
  },
];

/* ------------------ PAGE ------------------ */

export default function Career() {
  const [activeLocation, setActiveLocation] =
    useState<(typeof LOCATIONS)[number]>("Bangalore");

  const filteredJobs = JOBS.filter(
    (job) => job.location === activeLocation
  );

  return (
    <main className="overflow-hidden">
      {/* ---------------- HERO ---------------- */}
      <section className="relative bg-[#E3C20B] text-black px-4 lg:px-10 pt-25 md:pt-30px-6 py-24 pb-15">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="font-extrabold leading-none"
          >
            <h1 className="text-[clamp(3rem,7vw,6rem)] tracking-tight">
              <span className="block text-transparent stroke-text">
                MM
              </span>
              <span className="block text-transparent stroke-text">
                HOW
              </span>
              <span className="block text-transparent stroke-text">
                WHY
              </span>
              <span className="block text-black">WHAT</span>
            </h1>
          </motion.div>

          {/* Right bubble */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative bg-white rounded-3xl p-8 shadow-xl"
          >
            <p className="text-sm leading-relaxed text-gray-800">
              If you don&apos;t want to be a dead fish going with the
              flow, why won&apos;t you drop us a mail? We will get back
              to you and see what you have got to show.
            </p>

            {/* speech bubble tail */}
            <span className="absolute left-[-14px] bottom-10 w-0 h-0 border-t-14 border-t-transparent border-b-14 border-b-transparent border-r-14 border-r-white" />
          </motion.div>
        </div>
      </section>

      {/* ---------------- OPENINGS ---------------- */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl font-bold mb-10 text-gray-800"
          >
            Current Openings
          </motion.h2>

          {/* Location tabs */}
          <div className="flex justify-center gap-8 mb-14">
            {LOCATIONS.map((loc) => (
              <button
                key={loc}
                onClick={() => setActiveLocation(loc)}
                className={`text-sm font-semibold transition ${
                  activeLocation === loc
                    ? "text-red-600 underline underline-offset-4"
                    : "text-black/70 hover:text-black"
                }`}
              >
                {loc}
              </button>
            ))}
          </div>

          {/* Jobs list */}
          <div className="space-y-6">
            {filteredJobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-b pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              >
                {/* Job info */}
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {job.title} ({job.experience})
                  </h3>
                  <p className="text-sm text-gray-800 mt-1">
                    {job.type} • {job.department}
                  </p>
                </div>

                {/* CTA */}
                <button className="self-start md:self-auto text-white flex items-center gap-2 bg-primary-light text-sm font-semibold px-6 py-2 rounded-full hover:scale-105 transition">
                  View Details
                  <span className="inline-block">→</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CareerForm/>

      {/* ---------------- FOOT NOTE ---------------- */}
      <section className="bg-black text-black py-20 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg"
        >
          Didn&apos;t find your role? <br />
          <span className="text-white font-semibold text-[44px]">
            We&apos;re always looking for sharp minds.
          </span>
        </motion.p>
      </section>

      {/* Tailwind helper */}
      <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 2px red;
        }
      `}</style>
    </main>
  );
}
