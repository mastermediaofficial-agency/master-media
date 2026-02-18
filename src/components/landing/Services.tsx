"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaLaptopCode,
  FaPaintBrush,
  FaAd,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Service = {
  title: string;
  icon: IconType;
  tagline: string;
  hoverText: string;
  color: string;
  gradient: string;
};

const G = [
  "linear-gradient(135deg,#324dd3 0%,#566bd6 100%)",
  "linear-gradient(135deg,#28377d 0%,#324dd3 100%)",
  "linear-gradient(135deg,#566bd6 0%,#324dd3 100%)",
  "linear-gradient(135deg,#324dd3 0%,#28377d 100%)",
  "linear-gradient(135deg,#28377d 0%,#566bd6 100%)",
];
const SHINE =
  "linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.4) 50%,transparent 100%)";
const fade = (delay = 0, duration = 0.8) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration },
});
const inf = (v: boolean) => ({ repeat: v ? Infinity : 0 });

const services: Service[] = [
  {
    title: "Social Media Management",
    icon: FaBullhorn,
    tagline: "We make your feed less embarrassing",
    hoverText:
      "Posting consistently since... well, we actually do it consistently.",
    color: "#324dd3",
    gradient: G[0],
  },
  {
    title: "Performance Marketing",
    icon: FaChartLine,
    tagline: "ROI so good, you'll think we're lying",
    hoverText: "Numbers go up. That's the goal, right?",
    color: "#28377d",
    gradient: G[1],
  },
  {
    title: "Influencer Marketing",
    icon: FaUsers,
    tagline: "Connect with people who have followers",
    hoverText: "We know people who know people who have followers.",
    color: "#566bd6",
    gradient: G[2],
  },
  {
    title: "Website Development",
    icon: FaLaptopCode,
    tagline: "Code that works (most of the time)",
    hoverText:
      "Responsive, fast, and it even works on Internet Explorer... just kidding.",
    color: "#324dd3",
    gradient: G[3],
  },
  {
    title: "Branding",
    icon: FaPaintBrush,
    tagline: "Make your logo less terrible",
    hoverText: "We'll make you memorable for the right reasons.",
    color: "#28377d",
    gradient: G[4],
  },
  {
    title: "Social Media Ads",
    icon: FaAd,
    tagline: "Ads people actually click on",
    hoverText: "Scroll-stopping content that stops more than just thumbs.",
    color: "#566bd6",
    gradient: G[2],
  },
];

const ServiceCard3D = ({
  title,
  icon: Icon,
  tagline,
  hoverText,
  color,
  gradient,
  index,
}: Service & { index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hov, setHov] = useState(false);
  const mx = useMotionValue(0),
    my = useMotionValue(0);
  const rX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });
  const sc = useSpring(1, { stiffness: 260, damping: 20 });
  useEffect(() => {
    sc.set(hov ? 1.08 : 1);
  }, [hov, sc]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.2,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
        setHov(false);
      }}
      style={{
        rotateX: rX,
        rotateY: rY,
        scale: sc,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="relative cursor-pointer group"
    >
      <div
        className="absolute -inset-1 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
        style={{ background: gradient, transform: "translateZ(-30px)" }}
      />

      <div
        className="relative min-w-[280px] sm:min-w-[320px] h-[360px] sm:h-[400px] lg:h-[420px] rounded-3xl overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 rounded-3xl p-[2px]"
          style={{
            background: hov ? gradient : "rgba(50,77,211,0.2)",
            transition: "all 0.5s ease",
          }}
        >
          <div
            className="w-full h-full rounded-3xl relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg,#fff 0%,#f8f9ff 100%)",
            }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{ opacity: hov ? 0.08 : 0 }}
              transition={{ duration: 0.4 }}
              style={{ background: gradient }}
            />

            {[
              {
                c: "absolute -top-20 -right-20 w-40 h-40",
                a: { scale: hov ? 1.5 : 1, x: hov ? 30 : 0, y: hov ? -30 : 0 },
              },
              {
                c: "absolute -bottom-10 -left-10 w-32 h-32",
                a: { scale: hov ? 1.4 : 1, x: hov ? -20 : 0, y: hov ? 20 : 0 },
              },
            ].map(({ c, a }, i) => (
              <motion.div
                key={i}
                className={`${c} rounded-full opacity-5`}
                style={{ background: color }}
                animate={a}
                transition={{ duration: 0.5 }}
              />
            ))}

            <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-between">
              <div style={{ transform: "translateZ(40px)" }}>
                <motion.div
                  className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl flex items-center justify-center mb-6 overflow-hidden"
                  style={{
                    background: gradient,
                    boxShadow: hov
                      ? `0 25px 50px ${color}60`
                      : "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  animate={{
                    y: hov ? [-3, 3, -3] : 0,
                    rotate: hov ? [0, 5, -5, 0] : 0,
                  }}
                  transition={{
                    y: { ...inf(hov), duration: 2.5, ease: "easeInOut" },
                    rotate: { duration: 0.6 },
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: SHINE }}
                    animate={{ x: hov ? ["-100%", "200%"] : "-100%" }}
                    transition={{ duration: 1.5, ...inf(hov), repeatDelay: 1 }}
                  />
                  <Icon className="text-white text-4xl sm:text-5xl relative z-10" />
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-white/50"
                    animate={{
                      scale: hov ? [1, 1.1, 1] : 1,
                      opacity: hov ? [0.5, 0, 0.5] : 0,
                    }}
                    transition={{ duration: 2, ...inf(hov) }}
                  />
                </motion.div>
                <motion.div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white font-bold text-sm mb-4"
                  style={{ background: gradient }}
                  animate={{ scale: hov ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.div>
              </div>

              <div style={{ transform: "translateZ(30px)" }}>
                <h3 className="font-28 sm:font-32 font-black mb-3 leading-tight text-[#171717]">
                  {title}
                </h3>
                <motion.p
                  className="font-16 sm:font-18 text-[#9f9f9f] mb-3 leading-relaxed"
                  animate={{
                    opacity: hov ? 0 : 1,
                    y: hov ? -10 : 0,
                    height: hov ? 0 : "auto",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {tagline}
                </motion.p>
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: hov ? "auto" : 0, opacity: hov ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p
                    className="font-16 sm:font-18 font-semibold leading-relaxed"
                    style={{ color }}
                  >
                    {hoverText}
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 mt-4"
                  animate={{ x: hov ? 5 : 0, opacity: hov ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href="/services"
                    className="font-bold text-sm tracking-wider"
                    style={{ color }}
                  >
                    LEARN MORE
                  </Link>
                  <motion.span
                    className="text-xl"
                    style={{ color }}
                    animate={{ x: hov ? [0, 5, 0] : 0 }}
                    transition={{ duration: 1, ...inf(hov) }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{ background: gradient }}
              animate={{ scaleX: hov ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        {hov &&
          [...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{ background: color, left: `${20 + i * 15}%`, top: "50%" }}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: [-50, -100],
                x: [0, Math.random() * 40 - 20],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
      </div>
    </motion.div>
  );
};

const orbs = [
  {
    cls: "top-0 left-0 w-[500px] h-[500px] opacity-15",
    color: "#324dd3",
    a: { x: [0, 150, 0], y: [0, 100, 0], scale: [1, 1.2, 1] },
    dur: 25,
  },
  {
    cls: "bottom-0 right-0 w-[500px] h-[500px] opacity-15",
    color: "#566bd6",
    a: { x: [0, -150, 0], y: [0, -100, 0], scale: [1, 1.3, 1] },
    dur: 30,
  },
  {
    cls: "top-1/2 left-1/4 w-64 h-64 opacity-10",
    color: "#28377d",
    a: { y: [0, 80, 0], scale: [1, 1.1, 1] },
    dur: 20,
  },
];

const clipText = {
  background: G[0],
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const Services = () => (
  <section
    className="min-h-screen py-10 lg:py-15 px-4 sm:px-8 relative overflow-hidden"
    style={{ background: "linear-gradient(to bottom,#fff 0%,#f8f9ff 100%)" }}
  >
    {orbs.map(({ cls, color, a, dur }, i) => (
      <motion.div
        key={i}
        className={`absolute rounded-full blur-3xl ${cls}`}
        style={{ background: color }}
        animate={a}
        transition={{ duration: dur, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}

    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div {...fade()} className="text-center mb-10">
        <motion.div
          {...fade(0, 0.6)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 border-2"
          style={{
            background: G[0],
            borderColor: "#324dd3",
            color: "white",
            fontSize: "14px",
            fontWeight: "700",
            letterSpacing: "1.5px",
            boxShadow: "0 10px 30px rgba(50,77,211,0.3)",
          }}
        >
          OUR SERVICES
        </motion.div>
        <h2
          className="font-72 font-black mb-5 leading-tight"
          style={{
            color: "#171717",
            fontFamily: "'Helvetica Neue',sans-serif",
            letterSpacing: "-0.03em",
          }}
        >
          What We Do <span style={clipText}>Best</span>
        </h2>
        <motion.p
          className="font-18 sm:font-22 max-w-3xl mx-auto leading-relaxed text-primary"
          {...fade(0.3)}
        >
          High-impact solutions for modern brands. No fluff, just results that
          speak louder than words.
        </motion.p>
      </motion.div>

      <div className="md:hidden pb-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1.15}
          centeredSlides
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active !bg-[#324dd3]",
          }}
          className="!pb-10"
        >
          {services.map((s, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <div className="py-4 px-1">
                <ServiceCard3D {...s} index={i} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <motion.div
        className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        style={{ perspective: 2000, perspectiveOrigin: "center center" }}
      >
        {services.map((s, i) => (
          <ServiceCard3D key={i} {...s} index={i} />
        ))}
      </motion.div>

      <motion.div {...fade(0.8)} className="text-center mt-5">
        <p
          className="font-20 sm:font-24 font-semibold"
          style={{ color: "#171717" }}
        >
          Need something custom? We&apos;re flexible like yoga instructors.{" "}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, x: 5 }}
            className="inline-flex items-center gap-2 cursor-pointer font-bold"
            style={clipText}
          >
            Let&apos;s talk{" "}
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </p>
      </motion.div>
    </div>
  </section>
);

export default Services;
