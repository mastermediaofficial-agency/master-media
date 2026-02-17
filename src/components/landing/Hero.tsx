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

type ActiveWord = "masters" | "algorithm" | "break" | null;

const stats = [
  {
    label: "Total Reach",
    val: "10M+",
    icon: <SlGraph size={26} className="text-white" />,
  },
  {
    label: "Campaigns",
    val: "500+",
    icon: <GoGoal size={26} className="text-blue-600" />,
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
          transition={{ delay: 0.3 }}
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="sm:hidden mb-12"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1.15}
            spaceBetween={20}
            centeredSlides
            loop
            speed={800}
            resistance
            resistanceRatio={0.85}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            pagination={{
              clickable: true,
            }}
            grabCursor
          >
            {stats.map((stat, i) => (
              <SwiperSlide key={i}>
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-center transition-all duration-500 active:scale-95">
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

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <motion.button
            onClick={() => setOpen(true)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(37, 99, 235, 0.25)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-2.5 bg-primary text-white rounded-lg font-black text-lg relative overflow-hidden group shadow-xl"
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
                    src={`/content/partnerBelt/${i}.png`}
                    alt="user"
                    className="w-full h-full object-cover"
                    width={40}
                    height={40}
                  />
                </div>
              ))}
            </div>
            <div className="font-16 text-slate-500 font-medium">
              <span className="text-white font-bold">20+</span> Brands Trust Us
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

// "use client";

// import { useState, useMemo, useEffect } from "react";
// import JoinModal from "./Join/JoinModal";
// import { motion, useMotionValue, useSpring } from "framer-motion";

// type ActiveWord = "masters" | "algorithm" | "break" | null;

// export default function Hero() {
//   const [activeWord, setActiveWord] = useState<ActiveWord>(null);
//   const [open, setOpen] = useState(false);

//   // Mouse tracking for the spotlight effect
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
//   const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [mouseX, mouseY]);

//   return (
//     <section className="relative h-dvh w-full overflow-hidden bg-[#030303] flex items-center justify-center px-6">
//       {/* 1. Dynamic Interactive Spotlight */}
//       <motion.div
//         className="pointer-events-none absolute inset-0 z-0 opacity-50"
//         style={{
//           background: useMemo(
//             () =>
//               `radial-gradient(600px circle at var(--x) var(--y), rgba(50, 77, 211, 0.15), transparent 80%)`,
//             [],
//           ),
//           // Note: We use CSS variables for performance with Framer Motion
//           // @ts-ignore
//           "--x": useMemo(() => smoothX.get() + "px", [smoothX]),
//           "--y": useMemo(() => smoothY.get() + "px", [smoothY]),
//         }}
//       />

//       {/* 2. Background Grid with Perspective */}
//       <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)]" />

//       <div className="relative z-10 max-w-6xl w-full">
//         <div className="flex flex-col lg:flex-row items-center gap-16">
//           {/* Left Side: Content */}
//           <div className="flex-1 text-left">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="inline-block px-4 py-1.5 rounded-sm border-l-2 border-blue-600 bg-blue-600/10 mb-6"
//             >
//               <span className="text-xs font-black text-blue-500 tracking-[0.3em] uppercase">
//                 Digital Growth Partners
//               </span>
//             </motion.div>

//             <h1 className="text-6xl md:text-7xl font-black text-white leading-none mb-8">
//               WE ARE THE <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">
//                 MASTERS.
//               </span>
//             </h1>

//             <p className="text-xl text-slate-400 max-w-lg mb-10 leading-relaxed border-l border-white/10 pl-6">
//               Experienced enough to know the algorithm, creative enough to{" "}
//               <span className="text-white italic">break it.</span>
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <motion.button
//                 onClick={() => setOpen(true)}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="px-8 py-4 bg-white text-black font-bold rounded-sm hover:bg-blue-600 hover:text-white transition-all duration-300"
//               >
//                 GET STARTED
//               </motion.button>
//               {/* <button className="px-8 py-4 border border-white/10 text-white font-bold rounded-sm hover:bg-white/5 transition-all">
//                 OUR WORK
//               </button> */}
//             </div>
//           </div>

//           {/* Right Side: Bento-Style Stats Grid */}
//           <div className="flex-1 grid grid-cols-2 gap-4 w-full">
//             <StatCard label="Total Reach" value="10M+" delay={0.1} />
//             <StatCard label="Campaigns" value="500+" delay={0.2} />
//             <StatCard label="Growth" value="300%" delay={0.3} colSpan />
//           </div>
//         </div>
//       </div>

//       <JoinModal open={open} onClose={() => setOpen(false)} />
//     </section>
//   );
// }

// // Sub-component for the Stats
// function StatCard({
//   label,
//   value,
//   delay,
//   colSpan = false,
// }: {
//   label: string;
//   value: string;
//   delay: number;
//   colSpan?: boolean;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay }}
//       className={`p-8 bg-[#0A0A0A] border border-white/5 relative group overflow-hidden ${colSpan ? "col-span-2" : ""}`}
//     >
//       <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
//       <div className="relative z-10">
//         <div className="text-4xl font-black text-white mb-1 tracking-tighter">
//           {value}
//         </div>
//         <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">
//           {label}
//         </div>
//       </div>
//       {/* Animated corner accent */}
//       <div className="absolute top-0 right-0 w-8 h-8">
//         <div className="absolute top-4 right-4 w-[1px] h-4 bg-blue-600 group-hover:h-6 transition-all" />
//         <div className="absolute top-4 right-4 w-4 h-[1px] bg-blue-600 group-hover:w-6 transition-all" />
//       </div>
//     </motion.div>
//   );
// }

// "use client";

// import { useState, useMemo, useEffect } from "react";
// import JoinModal from "./Join/JoinModal";
// import { motion, useMotionValue, useSpring } from "framer-motion";

// type ActiveWord = "masters" | "algorithm" | "break" | null;

// export default function Hero() {
//   const [activeWord, setActiveWord] = useState<ActiveWord>(null);
//   const [open, setOpen] = useState(false);

//   // Mouse tracking for interactive light
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
//   const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [mouseX, mouseY]);

//   return (
//     <section
//       className="relative h-dvh w-full overflow-hidden flex items-center justify-center px-6"
//       style={{
//         // Using your colors to create a sophisticated, light-tinted background
//         background: `linear-gradient(135deg, #ffffff 0%, #f0f3ff 50%, #e6e9f8 100%)`
//       }}
//     >

//       {/* --- BACKGROUND ENHANCEMENTS --- */}
//       <div className="absolute inset-0 z-0">
//         {/* Floating Brand Orbs using --color-primary-light and --color-primary */}
//         <motion.div
//           animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
//           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-[0.12]"
//           style={{ background: "#566bd6" }}
//         />

//         <motion.div
//           animate={{ x: [0, -20, 0], y: [0, 40, 0], scale: [1, 1.05, 1] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//           className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-[0.08]"
//           style={{ background: "#324dd3" }}
//         />

//         {/* Dynamic Light Beam that follows mouse */}
//         <motion.div
//           className="pointer-events-none absolute inset-0 z-[1] opacity-60"
//           style={{
//             background: useMemo(
//               () => `radial-gradient(800px circle at var(--x) var(--y), rgba(86, 107, 214, 0.15), transparent 80%)`,
//               [],
//             ),
//             // @ts-ignore
//             "--x": useMemo(() => smoothX.get() + "px", [smoothX]),
//             "--y": useMemo(() => smoothY.get() + "px", [smoothY]),
//           }}
//         />

//         {/* Brand-Colored Grid Overlay */}
//         <div className="absolute inset-0 z-[2] bg-[linear-gradient(to_right,#324dd30a_1px,transparent_1px),linear-gradient(to_bottom,#324dd30a_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)]" />
//       </div>

//       {/* --- CONTENT LAYER --- */}
//       <div className="relative z-10 max-w-7xl w-full pt-16">
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

//           {/* Left Content */}
//           <div className="flex-1 text-left">
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#324dd325] bg-white/60 backdrop-blur-sm mb-10 shadow-sm"
//             >
//               <div className="w-2 h-2 rounded-full bg-[#324dd3] animate-pulse" />
//               <span className="text-[11px] font-black text-[#324dd3] tracking-[0.3em] uppercase">
//                 Strategic Growth Partners
//               </span>
//             </motion.div>

//             <h1 className="text-6xl md:text-8xl font-black text-[#171717] leading-[0.95] mb-8 tracking-tighter">
//               WE ARE THE <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#324dd3] via-[#566bd6] to-[#28377d]">
//                 MASTERS.
//               </span>
//             </h1>

//             <p className="text-xl md:text-2xl text-[#171717]/60 max-w-xl mb-12 leading-relaxed font-light border-l-3 border-[#324dd3]/20 pl-6">
//               Experienced enough to know the algorithm, creative enough to{" "}
//               <span className="text-[#171717] font-bold italic underline decoration-[#324dd3]/30 decoration-4">break it.</span>
//             </p>

//             <motion.button
//               onClick={() => setOpen(true)}
//               whileHover={{
//                 scale: 1.05,
//                 backgroundColor: "#28377d",
//                 boxShadow: "0 25px 50px -12px rgba(50, 77, 211, 0.25)"
//               }}
//               whileTap={{ scale: 0.95 }}
//               className="px-14 py-6 bg-[#324dd3] text-white font-black rounded-2xl transition-all duration-300 tracking-wider text-lg"
//             >
//               GET STARTED
//             </motion.button>
//           </div>

//           {/* Right Bento Grid - Glassmorphism style */}
//           <div className="flex-1 grid grid-cols-2 gap-6 w-full">
//             <StatCard label="Total Reach" value="10M+" delay={0.1} />
//             <StatCard label="Campaigns" value="500+" delay={0.2} />
//             <StatCard label="ROI Growth" value="300%" delay={0.3} colSpan />
//           </div>
//         </div>
//       </div>

//       <JoinModal open={open} onClose={() => setOpen(false)} />
//     </section>
//   );
// }

// function StatCard({ label, value, delay, colSpan = false }: { label: string; value: string; delay: number; colSpan?: boolean }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ delay, duration: 0.5 }}
//       whileHover={{ y: -8, transition: { duration: 0.2 } }}
//       className={`p-10 bg-white/70 border border-[#324dd310] backdrop-blur-xl relative group overflow-hidden shadow-[0_8px_30px_rgb(50,77,211,0.04)] hover:shadow-[0_20px_50px_rgba(50,77,211,0.1)] transition-all duration-500 rounded-[2.5rem] ${colSpan ? "col-span-2" : ""}`}
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-[#324dd308] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

//       <div className="relative z-10">
//         <div className="text-5xl md:text-6xl font-black text-[#171717] mb-2 tracking-tighter">
//           {value}
//         </div>
//         <div className="text-[11px] uppercase tracking-[0.3em] text-[#171717]/40 font-black">
//           {label}
//         </div>
//       </div>

//       {/* Decorative Brand Accent */}
//       <div className="absolute top-0 right-0 p-8">
//         <div className="w-3 h-3 rounded-full bg-[#324dd315] group-hover:bg-[#324dd3] group-hover:scale-125 transition-all duration-500" />
//       </div>
//     </motion.div>
//   );
// }
