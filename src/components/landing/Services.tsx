// "use client";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import {
//   FaBullhorn,
//   FaChartLine,
//   FaUsers,
//   FaLaptopCode,
//   FaPaintBrush,
//   FaAd,
// } from "react-icons/fa";
// import type { IconType } from "react-icons";

// interface Service {
//   title: string;
//   icon: IconType;
//   tagline: string;
//   hoverText: string;
//   color: string;
// }

// const services: Service[] = [
//   {
//     title: "Social Media Management",
//     icon: FaBullhorn,
//     tagline: "We make your feed less embarrassing",
//     hoverText:
//       "Posting consistently since... well, we actually do it consistently.",
//     color: "#324dd3",
//   },
//   {
//     title: "Performance Marketing",
//     icon: FaChartLine,
//     tagline: "ROI so good, you&apos;ll think we&apos;re lying",
//     hoverText: "Numbers go up. That&apos;s the goal, right?",
//     color: "#28377d",
//   },
//   {
//     title: "Influencer Marketing",
//     icon: FaUsers,
//     tagline: "Connect with people who have followers",
//     hoverText: "We know people who know people who have followers.",
//     color: "#566bd6",
//   },
//   {
//     title: "Website Development",
//     icon: FaLaptopCode,
//     tagline: "Code that works (most of the time)",
//     hoverText:
//       "Responsive, fast, and it even works on Internet Explorer... just kidding.",
//     color: "#324dd3",
//   },
//   {
//     title: "Branding",
//     icon: FaPaintBrush,
//     tagline: "Make your logo less terrible",
//     hoverText: "We&apos;ll make you memorable for the right reasons.",
//     color: "#28377d",
//   },
//   {
//     title: "Social Media Ads",
//     icon: FaAd,
//     tagline: "Ads people actually click on",
//     hoverText: "Scroll-stopping content that stops more than just thumbs.",
//     color: "#566bd6",
//   },
// ];

// interface ServiceCard3DProps {
//   title: string;
//   icon: IconType;
//   tagline: string;
//   hoverText: string;
//   color: string;
//   index: number;
// }

// const ServiceCard3D = ({
//   title,
//   icon: Icon,
//   tagline,
//   hoverText,
//   color,
//   index,
// }: ServiceCard3DProps) => {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [isHovered, setIsHovered] = useState(true);
//   const [showSecret, setShowSecret] = useState(false);

//   // Mouse position tracking
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   // Smooth spring animations
//   const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
//     stiffness: 200,
//     damping: 20,
//   });
//   const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
//     stiffness: 200,
//     damping: 20,
//   });
//   const scale = useSpring(1, { stiffness: 260, damping: 20 });

//   useEffect(() => {
//     if (isHovered) {
//       scale.set(1.05);
//     } else {
//       scale.set(1);
//     }
//   }, [isHovered, scale]);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const x = (e.clientX - rect.left) / rect.width - 0.5;
//     const y = (e.clientY - rect.top) / rect.height - 0.5;
//     mouseX.set(x);
//     mouseY.set(y);
//   };

//   const handleMouseLeave = () => {
//     mouseX.set(0);
//     mouseY.set(0);
//     setIsHovered(true);
//     setShowSecret(false);
//   };

//   return (
//     <motion.div
//       ref={cardRef}
//       initial={{ opacity: 0, y: 50, rotateX: -10 }}
//       whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//       viewport={{ once: true, margin: "-50px" }}
//       transition={{
//         duration: 0.6,
//         delay: index * 0.1,
//         ease: [0.25, 0.1, 0.25, 1],
//       }}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={handleMouseLeave}
//       onClick={() => setShowSecret(!showSecret)}
//       style={{
//         rotateX,
//         rotateY,
//         scale,
//         transformStyle: "preserve-3d",
//         perspective: 1000,
//       }}
//       className="relative cursor-pointer rounded-3xl border-2 border-gray-600/10"
//     >
//       <motion.div
//         className="absolute inset-0 rounded-3xl blur-xl opacity-0"
//         animate={{
//           opacity: isHovered ? 0.3 : 0,
//         }}
//         style={{
//           background: color,
//           transform: "translateZ(-20px)",
//         }}
//       />

//       {/* Main card */}
//       <motion.div
//        className="relative
//   min-w-[240px] sm:min-w-[300px]
//   h-[300px] sm:h-[340px] lg:h-[360px]
//   rounded-2xl sm:rounded-3xl
//   border-2 overflow-hidden"

//         style={{
//           borderColor: isHovered ? color : "rgba(255,255,255,0.1)",
//           background:
//             "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
//           backdropFilter: "blur(10px)",
//           transformStyle: "preserve-3d",
//         }}
//       >
//         {/* Gradient overlay on hover */}
//         <motion.div
//           className="absolute inset-0"
//           animate={{
//             opacity: isHovered ? 0.1 : 0,
//           }}
//           style={{
//             background: `radial-gradient(circle at 50% 50%, ${color}, transparent 70%)`,
//           }}
//         />

//         {/* Content */}
//       <div className="relative z-10 h-full p-5 sm:p-6 lg:p-8 flex flex-col">

//           {/* Icon with 3D effect */}
//           <motion.div
//             animate={{
//               rotateZ: isHovered ? [0, -5, 5, -5, 0] : 0,
//             }}
//             transition={{ duration: 0.5 }}
//             style={{
//               transform: "translateZ(40px)",
//             }}
//           >
//             <motion.div
//               className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20
// rounded-xl sm:rounded-2xl
// flex items-center justify-center mb-4 sm:mb-6"

//               style={{
//                 backgroundColor: color,
//                 boxShadow: isHovered
//                   ? `0 20px 40px ${color}40`
//                   : "0 10px 20px rgba(0,0,0,0.2)",
//               }}
//               animate={{
//                 y: isHovered ? [-2, 2, -2] : 0,
//               }}
//               transition={{
//                 repeat: isHovered ? Infinity : 0,
//                 duration: 2,
//                 ease: "easeInOut",
//               }}
//             >
//               <Icon className="text-white font-30" />
//             </motion.div>
//           </motion.div>

//           {/* Title */}
//           <div style={{ transform: "translateZ(30px)" }}>
//             <h3
//               className="font-24 font-bold mb-3"
//               style={{ color: "#171717" }}
//             >
//               {title}
//             </h3>

//             {/* Tagline */}
//             <motion.p
//               className="font-16 text-gray-500"
//               style={{
//                 transform: "translateZ(20px)",
//               }}
//               animate={{
//                 // opacity: isHovered ? 0 : 1,
//                 y: isHovered ? -10 : 0,
//               }}
//             >
//               {tagline}
//             </motion.p>

//             {/* Hover text */}
//             <motion.p
//               className="font-16 font-medium text-gray-500"
//               style={{

//                 transform: "translateZ(25px)",
//               }}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{
//                 opacity: isHovered ? 1 : 0,
//                 y: isHovered ? 0 : 10,
//               }}
//             >
//               {hoverText}
//             </motion.p>
//           </div>
//         </div>

//         {/* Decorative elements */}
//         <motion.div
//           className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl"
//           style={{
//             background: `${color}20`,
//             transform: "translateZ(10px)",
//           }}
//           animate={{
//             scale: isHovered ? 1.5 : 1,
//             x: isHovered ? 20 : 0,
//             y: isHovered ? -20 : 0,
//           }}
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// /* ---------------- SECTION WITH PARALLAX ---------------- */
// const Services = () => {
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [isDragging, setIsDragging] = useState(false);

//   // Auto-play carousel on mobile
//   useEffect(() => {
//     const el = carouselRef.current;
//     if (!el || window.innerWidth > 768) return;

//     let scroll = 0;
//     const interval = setInterval(() => {
//       if (!isDragging) {
//         scroll += 320;
//         if (scroll >= el.scrollWidth - el.clientWidth) scroll = 0;
//         el.scrollTo({ left: scroll, behavior: "smooth" });
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [isDragging]);

//   return (
//     <section
//       ref={sectionRef}
//       className="min-h-screen py-10 lg:py-20 px-4 sm:px-8 relative overflow-hidden"
//       style={{ backgroundColor: "#ffffff" }}
//     >
//       {/* Animated background elements */}
//       <motion.div
//         className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20"
//         style={{ background: "#324dd3" }}
//         animate={{
//           x: [0, 100, 0],
//           y: [0, 50, 0],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//       <motion.div
//         className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
//         style={{ background: "#566bd6" }}
//         animate={{
//           x: [0, -100, 0],
//           y: [0, -50, 0],
//         }}
//         transition={{
//           duration: 25,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             viewport={{ once: true }}
//             className="inline-block px-6 py-2 rounded-full mb-4"
//             style={{
//               backgroundColor: "#324dd3",
//               color: "white",
//               fontSize: "14px",
//               fontWeight: "600",
//               letterSpacing: "1px",
//             }}
//           >
//             SERVICES
//           </motion.div>
//           <h2
//             className="font-72 font-black mb-3"
//             style={{
//               color: "#171717",
//               fontFamily: "&apos;Helvetica Neue&apos;, sans-serif",
//               letterSpacing: "-0.02em",
//             }}
//           >
//             What We Do <span style={{ color: "#324dd3" }}>Best</span>
//           </h2>
//           <p
//             className="font-20 max-w-2xl mx-auto"
//             style={{ color: "#9f9f9f" }}
//           >
//             High-impact solutions for modern brands. No fluff, just results.
//             <br />
//             {/* <span className="font-16">(And maybe a little bit of humor)</span> */}
//           </p>
//         </motion.div>

//         {/* MOBILE – Carousel */}
//         <div className="md:hidden">
//           <motion.div
//             ref={carouselRef}
//             className="flex gap-4 sm:gap-6 overflow-x-auto py-8 snap-x snap-mandatory scrollbar-hide"
//             style={{ scrollbarWidth: "none" }}
//             onMouseDown={() => setIsDragging(true)}
//             onMouseUp={() => setIsDragging(false)}
//             onMouseLeave={() => setIsDragging(false)}
//           >
//             {services.map((s, i) => (
//               <div key={i} className="snap-center shrink-0">
//                 <ServiceCard3D
//                   title={s.title}
//                   icon={s.icon}
//                   tagline={s.tagline}
//                   hoverText={s.hoverText}
//                   color={s.color}
//                   index={i}
//                 />
//               </div>
//             ))}
//           </motion.div>
//           <p className="text-center font-16 mt-4" style={{ color: "#000000" }}>
//             ← Swipe to explore →
//           </p>
//         </div>

//         {/* DESKTOP – Grid with perspective */}
//         <motion.div
//           className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
//           style={{
//             perspective: 2000,
//             perspectiveOrigin: "center center",
//           }}
//         >
//           {services.map((s, i) => (
//             <ServiceCard3D
//               key={i}
//               title={s.title}
//               icon={s.icon}
//               tagline={s.tagline}
//               hoverText={s.hoverText}
//               color={s.color}
//               index={i}
//             />
//           ))}
//         </motion.div>

//         {/* Fun footer note */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.8 }}
//           className="text-center mt-16"
//         >
//           <p className="font-22" style={{ color: "#736D6C" }}>
//             Need something custom? Were flexible like yoga instructors.{" "}
//             <motion.span
//               whileHover={{ scale: 1.1, color: "#324dd3" }}
//               className="inline-block cursor-pointer font-semibold"
//             >
//               Lets talk →
//             </motion.span>
//           </p>
//         </motion.div>
//       </div>

//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Services;

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

interface Service {
  title: string;
  icon: IconType;
  tagline: string;
  hoverText: string;
  color: string;
  gradient: string;
}

const services: Service[] = [
  {
    title: "Social Media Management",
    icon: FaBullhorn,
    tagline: "We make your feed less embarrassing",
    hoverText:
      "Posting consistently since... well, we actually do it consistently.",
    color: "#324dd3",
    gradient: "linear-gradient(135deg, #324dd3 0%, #566bd6 100%)",
  },
  {
    title: "Performance Marketing",
    icon: FaChartLine,
    tagline: "ROI so good, you'll think we're lying",
    hoverText: "Numbers go up. That's the goal, right?",
    color: "#28377d",
    gradient: "linear-gradient(135deg, #28377d 0%, #324dd3 100%)",
  },
  {
    title: "Influencer Marketing",
    icon: FaUsers,
    tagline: "Connect with people who have followers",
    hoverText: "We know people who know people who have followers.",
    color: "#566bd6",
    gradient: "linear-gradient(135deg, #566bd6 0%, #324dd3 100%)",
  },
  {
    title: "Website Development",
    icon: FaLaptopCode,
    tagline: "Code that works (most of the time)",
    hoverText:
      "Responsive, fast, and it even works on Internet Explorer... just kidding.",
    color: "#324dd3",
    gradient: "linear-gradient(135deg, #324dd3 0%, #28377d 100%)",
  },
  {
    title: "Branding",
    icon: FaPaintBrush,
    tagline: "Make your logo less terrible",
    hoverText: "We'll make you memorable for the right reasons.",
    color: "#28377d",
    gradient: "linear-gradient(135deg, #28377d 0%, #566bd6 100%)",
  },
  {
    title: "Social Media Ads",
    icon: FaAd,
    tagline: "Ads people actually click on",
    hoverText: "Scroll-stopping content that stops more than just thumbs.",
    color: "#566bd6",
    gradient: "linear-gradient(135deg, #566bd6 0%, #324dd3 100%)",
  },
];

interface ServiceCard3DProps {
  title: string;
  icon: IconType;
  tagline: string;
  hoverText: string;
  color: string;
  gradient: string;
  index: number;
}

const ServiceCard3D = ({
  title,
  icon: Icon,
  tagline,
  hoverText,
  color,
  gradient,
  index,
}: ServiceCard3DProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });
  const scale = useSpring(1, { stiffness: 260, damping: 20 });

  useEffect(() => {
    if (isHovered) {
      scale.set(1.08);
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
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="relative cursor-pointer group"
    >
      {/* Animated glow effect */}
      <motion.div
        className="absolute -inset-1 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
        style={{
          background: gradient,
          transform: "translateZ(-30px)",
        }}
      />

      {/* Main card container */}
      <motion.div
        className="relative min-w-[280px] sm:min-w-[320px] h-[360px] sm:h-[400px] lg:h-[420px] rounded-3xl overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Gradient border effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl p-[2px]"
          style={{
            background: isHovered ? gradient : "rgba(50, 77, 211, 0.2)",
            transition: "all 0.5s ease",
          }}
        >
          {/* Inner card background */}
          <div
            className="w-full h-full rounded-3xl relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)",
            }}
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0"
              animate={{
                opacity: isHovered ? 0.08 : 0,
              }}
              transition={{ duration: 0.4 }}
              style={{
                background: gradient,
              }}
            />

            {/* Decorative circles */}
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-5"
              style={{
                background: color,
                transform: "translateZ(5px)",
              }}
              animate={{
                scale: isHovered ? 1.5 : 1,
                x: isHovered ? 30 : 0,
                y: isHovered ? -30 : 0,
              }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-5"
              style={{
                background: color,
                transform: "translateZ(5px)",
              }}
              animate={{
                scale: isHovered ? 1.4 : 1,
                x: isHovered ? -20 : 0,
                y: isHovered ? 20 : 0,
              }}
              transition={{ duration: 0.5 }}
            />

            {/* Content */}
            <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-between">
              {/* Top section with icon */}
              <div style={{ transform: "translateZ(40px)" }}>
                {/* Icon container */}
                <motion.div
                  className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl flex items-center justify-center mb-6 overflow-hidden"
                  style={{
                    background: gradient,
                    boxShadow: isHovered
                      ? `0 25px 50px ${color}60`
                      : "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  animate={{
                    y: isHovered ? [-3, 3, -3] : 0,
                    rotate: isHovered ? [0, 5, -5, 0] : 0,
                  }}
                  transition={{
                    y: {
                      repeat: isHovered ? Infinity : 0,
                      duration: 2.5,
                      ease: "easeInOut",
                    },
                    rotate: { duration: 0.6 },
                  }}
                >
                  {/* Shine effect on icon */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 60%, transparent 100%)",
                      ],
                      x: isHovered ? ["-100%", "200%"] : "-100%",
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: isHovered ? Infinity : 0,
                      repeatDelay: 1,
                    }}
                  />

                  <Icon className="text-white text-4xl sm:text-5xl relative z-10" />

                  {/* Pulsing ring around icon */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-white/50"
                    animate={{
                      scale: isHovered ? [1, 1.1, 1] : 1,
                      opacity: isHovered ? [0.5, 0, 0.5] : 0,
                    }}
                    transition={{
                      duration: 2,
                      repeat: isHovered ? Infinity : 0,
                    }}
                  />
                </motion.div>

                {/* Number badge */}
                <motion.div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white font-bold text-sm mb-4"
                  style={{
                    background: gradient,
                  }}
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.div>
              </div>

              {/* Bottom section with text */}
              <div style={{ transform: "translateZ(30px)" }}>
                {/* Title */}
                <h3 className="font-28 sm:font-32 font-black mb-3 leading-tight text-[#171717]">
                  {title}
                </h3>

                {/* Tagline - visible by default */}
                <motion.p
                  className="font-16 sm:font-18 text-[#9f9f9f] mb-3 leading-relaxed"
                  animate={{
                    opacity: isHovered ? 0 : 1,
                    y: isHovered ? -10 : 0,
                    height: isHovered ? 0 : "auto",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {tagline}
                </motion.p>

                {/* Hover text - appears on hover */}
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: isHovered ? "auto" : 0,
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p
                    className="font-16 sm:font-18 font-semibold leading-relaxed"
                    style={{ color: color }}
                  >
                    {hoverText}
                  </p>
                </motion.div>

                {/* Animated arrow */}
                <motion.div
                  className="flex items-center gap-2 mt-4"
                  animate={{
                    x: isHovered ? 5 : 0,
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                  href={'/services'}
                    className="font-bold text-sm tracking-wider"
                    style={{ color: color }}
                  >
                    LEARN MORE
                  </Link>
                  <motion.span
                    className="text-xl"
                    style={{ color: color }}
                    animate={{
                      x: isHovered ? [0, 5, 0] : 0,
                    }}
                    transition={{
                      duration: 1,
                      repeat: isHovered ? Infinity : 0,
                    }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </div>

            {/* Bottom accent line */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{
                background: gradient,
              }}
              animate={{
                scaleX: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>

        {/* Floating particles effect */}
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: color,
                  left: `${20 + i * 15}%`,
                  top: "50%",
                }}
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [-50, -100],
                  x: [0, Math.random() * 40 - 20],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </>
        )}
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
    }, 3500);

    return () => clearInterval(interval);
  }, [isDragging]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-10 lg:py-15 px-4 sm:px-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #ffffff 0%, #f8f9ff 100%)",
      }}
    >
      {/* Animated background elements with blur */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
        style={{ background: "#324dd3" }}
        animate={{
          x: [0, 150, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
        style={{ background: "#566bd6" }}
        animate={{
          x: [0, -150, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Additional floating orbs */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{ background: "#28377d" }}
        animate={{
          y: [0, 80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 border-2"
            style={{
              background: "linear-gradient(135deg, #324dd3 0%, #566bd6 100%)",
              borderColor: "#324dd3",
              color: "white",
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              boxShadow: "0 10px 30px rgba(50, 77, 211, 0.3)",
            }}
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            ></motion.span>
            OUR SERVICES
          </motion.div>

          <h2
            className="font-72 font-black mb-5 leading-tight"
            style={{
              color: "#171717",
              fontFamily: "'Helvetica Neue', sans-serif",
              letterSpacing: "-0.03em",
            }}
          >
            What We Do{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #324dd3 0%, #566bd6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Best
            </span>
          </h2>

          <motion.p
            className="font-18 sm:font-22 max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#9f9f9f" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            High-impact solutions for modern brands. No fluff, just results that
            speak louder than words.
          </motion.p>
        </motion.div>

        {/* MOBILE – Enhanced Carousel */}
        <div className="md:hidden">
          <motion.div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto py-8 snap-x snap-mandatory scrollbar-hide px-4"
            style={{ scrollbarWidth: "none" }}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
          >
            {services.map((s, i) => (
              <div key={i} className="snap-center shrink-0">
                <ServiceCard3D
                  title={s.title}
                  icon={s.icon}
                  tagline={s.tagline}
                  hoverText={s.hoverText}
                  color={s.color}
                  gradient={s.gradient}
                  index={i}
                />
              </div>
            ))}
          </motion.div>

          <motion.p
            className="text-center font-16 mt-6 font-semibold"
            style={{ color: "#324dd3" }}
            animate={{ x: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ← Swipe to explore →
          </motion.p>
        </div>

        {/* DESKTOP – Enhanced Grid */}
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
              gradient={s.gradient}
              index={i}
            />
          ))}
        </motion.div>

        {/* Enhanced footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-20"
        >
          <p
            className="font-20 sm:font-24 font-semibold"
            style={{ color: "#171717" }}
          >
            Need something custom? We're flexible like yoga instructors.{" "}
            <motion.span
              whileHover={{
                scale: 1.05,
                x: 5,
              }}
              className="inline-flex items-center gap-2 cursor-pointer font-bold"
              style={{
                background: "linear-gradient(135deg, #324dd3 0%, #566bd6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Let&apos;s talk
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
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