"use client";

import { useState, useMemo } from "react";
import JoinModal from "./Join/JoinModal";
import { motion } from "framer-motion";
import { LuZap, LuArrowRight } from "react-icons/lu"; // Added React Icons
import { IoRocketOutline } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import Image from "next/image";
import { GoGoal } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useIsMobileTablet } from "@/src/utils/hooks/useIsMobileTablet";

type ActiveWord = "masters" | "algorithm" | "break" | null;

const stats = [
  {
    label: "Total Reach",
    val: "1M+",
    icon: <SlGraph size={26} className="text-white" />,
  },
  {
    label: "Campaigns",
    val: "100+",
    icon: <GoGoal size={26} className="text-white" />,
  },
  {
    label: "ROI Growth",
    val: "300%",
    icon: <IoRocketOutline size={26} className="text-white" />,
  },
];

const AmbientOrb = ({ color, delay }: { color: string; delay: number }) => (
  <motion.div
    className="absolute rounded-full blur-[120px] opacity-20"
    style={{ background: color, width: "40vw", height: "40vw" }}
    animate={{
      x: [0, 50, -30, 0],
      y: [0, -30, 50, 0],
      scale: [1, 1.1, 0.9, 1],
    }}
    transition={{ duration: 20, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const DataStream = ({ index }: { index: number }) => {
  const left = useMemo(() => Math.random() * 100, []);
  const duration = useMemo(() => Math.random() * 2 + 1, []);
  const delay = useMemo(() => Math.random() * 5, []);
  return (
    <motion.div
      className="absolute w-px h-24 bg-linear-to-b from-transparent via-blue-500/40 to-transparent"
      style={{ left: `${left}%`, top: "-10%" }}
      animate={{ y: ["0dvh", "110dvh"] }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    />
  );
};

export default function Hero() {
  const [activeWord, setActiveWord] = useState<ActiveWord>(null);
  const [open, setOpen] = useState(false);

  const isMobile = useIsMobileTablet();

  const streams = useMemo(() => Array.from({ length: 15 }), []);

  return (
    <section className="relative overflow-hidden flex items-center justify-center bg-blue-950 px-6 pb-15">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <AmbientOrb color="#324dd3" delay={0} />
        <div className="absolute top-0 right-0">
          <AmbientOrb color="#566bd6" delay={5} />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[50px_50px]" />
        {streams.map((_, i) => (
          <DataStream key={i} index={i} />
        ))}
      </div>

      {/* CONTENT LAYER - ADDED pt-24 TO AVOID HEADER OVERLAP */}
      <div className="relative z-10 max-w-5xl w-full text-center pt-24 md:pt-32">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md mb-8"
        >
          <LuZap className="text-blue-400 w-4 h-4 fill-blue-400 animate-pulse" />
          <span className="text-[10px] md:text-xs font-bold text-blue-200 tracking-[0.3em] uppercase">
            Strategic Growth Partners
          </span>
        </motion.div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-4">
          We Are The
          <motion.span
            onMouseEnter={() => setActiveWord("masters")}
            onMouseLeave={() => setActiveWord(null)}
            className="ml-5 relative inline-block text-transparent bg-clip-text bg-linear-to-r from-primary via-white to-primary cursor-default"
            whileHover={{ scale: 1.02 }}
          >
            Masters
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-blue-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: activeWord === "masters" ? "100%" : "0%" }}
            />
          </motion.span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
          Experienced enough to know the{" "}
          <span className="text-white font-medium">algorithm</span>,{" "}
          <br className="hidden md:block" />
          creative enough to{" "}
          <span className="text-blue-400 font-medium italic">break it.</span>
        </p>

        {/* Desktop Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
          viewport={{ once: true, amount: 0 }}
          className="hidden sm:grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-12"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl border border-white/10 bg-white/3 backdrop-blur-md group hover:bg-white/[0.07] transition-all"
            >
              <div className="flex items-center justify-center mb-2 opacity-80">
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-white">{stat.val}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-black mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile Swiper */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-10 px-4"
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              spaceBetween={20}
              centeredSlides
              loop
              speed={800}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              grabCursor
            >
              {stats.map((stat, i) => (
                <SwiperSlide key={i}>
                  <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-center">
                    <div className="flex items-center justify-center mb-3 opacity-80">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-black text-white">
                      {stat.val}
                    </div>
                    <div className="text-[11px] uppercase tracking-widest text-slate-500 font-black mt-2">
                      {stat.label}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <motion.button
            onClick={() => setOpen(true)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(37, 99, 235, 0.25)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-2.5 bg-primary text-white rounded-lg font-black text-lg relative overflow-hidden group shadow-xl cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-3">
              Get Started{" "}
              <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[37, 38, 40, 41, 42].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center text-[10px] font-bold text-white shadow-lg overflow-hidden"
                >
                  <Image
                    src={`/content/partnerBelt/${i}.webp`}
                    alt="user"
                    className="w-full h-full object-cover"
                    width={40}
                    height={40}
                  />
                </div>
              ))}
            </div>
            <div className="font-16 text-white font-medium">
              <span className="text-white font-bold">250+</span> Brands Trust Us
            </div>
          </div>
        </div>
      </div>

      <JoinModal open={open} onClose={() => setOpen(false)} />

      {/* Aesthetic Scanline */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_4px,3px_100%]" />
    </section>
  );
}
