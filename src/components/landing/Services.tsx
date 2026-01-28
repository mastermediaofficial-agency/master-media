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

interface Service {
  title: string;
  icon: IconType;
  tagline: string;
  hoverText: string;
  color: string;
}

const services: Service[] = [
  {
    title: "Social Media Management",
    icon: FaBullhorn,
    tagline: "We make your feed less embarrassing",
    hoverText: "Posting consistently since... well, we actually do it consistently.",
    color: "#324dd3",
  },
  {
    title: "Performance Marketing",
    icon: FaChartLine,
    tagline: "ROI so good, you'll think we're lying",
    hoverText: "Numbers go up. That's the goal, right?",
    color: "#28377d",
  },
  {
    title: "Influencer Marketing",
    icon: FaUsers,
    tagline: "Connect with people who have followers",
    hoverText: "We know people who know people who have followers.",
    color: "#566bd6",
  },
  {
    title: "Website Development",
    icon: FaLaptopCode,
    tagline: "Code that works (most of the time)",
    hoverText: "Responsive, fast, and it even works on Internet Explorer... just kidding.",
    color: "#324dd3",
  },
  {
    title: "Branding",
    icon: FaPaintBrush,
    tagline: "Make your logo less terrible",
    hoverText: "We'll make you memorable for the right reasons.",
    color: "#28377d",
  },
  {
    title: "Social Ads",
    icon: FaAd,
    tagline: "Ads people actually click on",
    hoverText: "Scroll-stopping content that stops more than just thumbs.",
    color: "#566bd6",
  },
];


interface ServiceCard3DProps {
  title: string;
  icon: IconType;
  tagline: string;
  hoverText: string;
  color: string;
  index: number;
}

const ServiceCard3D = ({ 
  title, 
  icon: Icon, 
  tagline, 
  hoverText, 
  color, 
  index 
}: ServiceCard3DProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showSecret, setShowSecret] = useState(false);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 200,
    damping: 20,
  });
  const scale = useSpring(1, { stiffness: 260, damping: 20 });

  useEffect(() => {
    if (isHovered) {
      scale.set(1.05);
    } else {
      scale.set(1);
    }
  }, [isHovered, scale]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
    setShowSecret(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => setShowSecret(!showSecret)}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="relative cursor-pointer rounded-3xl border-2 border-gray-600/10"
    >
      <motion.div
        className="absolute inset-0 rounded-3xl blur-xl opacity-0"
        animate={{
          opacity: isHovered ? 0.3 : 0,
        }}
        style={{
          background: color,
          transform: "translateZ(-20px)",
        }}
      />

      {/* Main card */}
      <motion.div
        className="relative min-w-[280px] sm:min-w-[320px] h-[360px] rounded-3xl border-2 overflow-hidden"
        style={{
          borderColor: isHovered ? color : "rgba(255,255,255,0.1)",
          background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
          backdropFilter: "blur(10px)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: isHovered ? 0.1 : 0,
          }}
          style={{
            background: `radial-gradient(circle at 50% 50%, ${color}, transparent 70%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full p-8 flex flex-col justify-between">
          {/* Icon with 3D effect */}
          <motion.div
            animate={{
              rotateZ: isHovered ? [0, -5, 5, -5, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
            style={{
              transform: "translateZ(40px)",
            }}
          >
            <motion.div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
              style={{
                backgroundColor: color,
                boxShadow: isHovered 
                  ? `0 20px 40px ${color}40` 
                  : "0 10px 20px rgba(0,0,0,0.2)",
              }}
              animate={{
                y: isHovered ? [-2, 2, -2] : 0,
              }}
              transition={{
                repeat: isHovered ? Infinity : 0,
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <Icon className="text-white text-3xl" />
            </motion.div>
          </motion.div>

          {/* Title */}
          <div style={{ transform: "translateZ(30px)" }}>
            <h3 
              className="text-2xl font-bold mb-3"
              style={{ color: "#171717" }}
            >
              {title}
            </h3>

            {/* Tagline */}
            <motion.p
              className="text-base mb-4"
              style={{ 
                color: "#9f9f9f",
                transform: "translateZ(20px)",
              }}
              animate={{
                opacity: isHovered ? 0 : 1,
                y: isHovered ? -10 : 0,
              }}
            >
              {tagline}
            </motion.p>

            {/* Hover text */}
            <motion.p
              className="text-base font-medium absolute"
              style={{ 
                color: color,
                transform: "translateZ(25px)",
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 10,
              }}
            >
              {hoverText}
            </motion.p>
          </div>

          {/* Secret easter egg */}
          <motion.div
            className="absolute bottom-4 right-4 text-xs"
            style={{ 
              color: "#9f9f9f",
              transform: "translateZ(15px)",
            }}
            animate={{
              opacity: showSecret ? 1 : 0.3,
              scale: showSecret ? 1.2 : 1,
            }}
          >
            {showSecret ? "🎉 You found it!" : "👆 Click me"}
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl"
          style={{
            background: `${color}20`,
            transform: "translateZ(10px)",
          }}
          animate={{
            scale: isHovered ? 1.5 : 1,
            x: isHovered ? 20 : 0,
            y: isHovered ? -20 : 0,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

/* ---------------- SECTION WITH PARALLAX ---------------- */
const Services = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-play carousel on mobile
  useEffect(() => {
    const el = carouselRef.current;
    if (!el || window.innerWidth > 768) return;

    let scroll = 0;
    const interval = setInterval(() => {
      if (!isDragging) {
        scroll += 320;
        if (scroll >= el.scrollWidth - el.clientWidth) scroll = 0;
        el.scrollTo({ left: scroll, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isDragging]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 px-4 sm:px-8 relative overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: "#324dd3" }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: "#566bd6" }}
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full mb-4"
            style={{
              backgroundColor: "#324dd3",
              color: "white",
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            SERVICES
          </motion.div>
          <h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4"
            style={{ 
              color: "#171717",
              fontFamily: "'Helvetica Neue', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            What We Do{" "}
            <span style={{ color: "#324dd3" }}>Best</span>
          </h2>
          <p 
            className="text-lg sm:text-xl max-w-2xl mx-auto"
            style={{ color: "#9f9f9f" }}
          >
            High-impact solutions for modern brands. No fluff, just results.
            <br />
            <span className="text-sm">(And maybe a little bit of humor)</span>
          </p>
        </motion.div>

        {/* MOBILE – Carousel */}
        <div className="md:hidden">
          <motion.div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
          >
            {services.map((s, i) => (
              <div key={i} className="snap-center flex-shrink-0">
                <ServiceCard3D 
                  title={s.title}
                  icon={s.icon}
                  tagline={s.tagline}
                  hoverText={s.hoverText}
                  color={s.color}
                  index={i}
                />
              </div>
            ))}
          </motion.div>
          <p 
            className="text-center text-sm mt-4"
            style={{ color: "#9f9f9f" }}
          >
            ← Swipe to explore →
          </p>
        </div>

        {/* DESKTOP – Grid with perspective */}
        <motion.div
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          style={{
            perspective: 2000,
            perspectiveOrigin: "center center",
          }}
        >
          {services.map((s, i) => (
            <ServiceCard3D 
              key={i}
              title={s.title}
              icon={s.icon}
              tagline={s.tagline}
              hoverText={s.hoverText}
              color={s.color}
              index={i}
            />
          ))}
        </motion.div>

        {/* Fun footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p 
            className="text-sm"
            style={{ color: "#9f9f9f" }}
          >
            Need something custom? Were flexible like yoga instructors.{" "}
            <motion.span
              whileHover={{ scale: 1.1, color: "#324dd3" }}
              className="inline-block cursor-pointer font-semibold"
            >
              Lets talk →
            </motion.span>
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Services;