"use client";

import Image from "next/image";
import { motion, useTransform } from "framer-motion";

interface TileProps {
  tile: {
    id: string;
    src: string;
    x: number;
    y: number;
    height: number;
    rotate: number;
    depth: number;
  };
  index: number;
  scrollYProgress: any;
}

export default function ParallaxTile({
  tile,
  index,
  scrollYProgress,
}: TileProps) {
  const yParallax = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${tile.depth}%`],
  );

  return (
    
    <motion.div
      className="
        absolute
        rounded-xl
        overflow-hidden
        bg-black
        ring-1 ring-white/10
        shadow-[0_40px_80px_rgba(0,0,0,0.5)]
      "
      style={{
        left: `${tile.x}%`,
        top: `${tile.y}%`,
        height: tile.height,
        width: tile.height * 0.75,
        y: yParallax,
        rotate: tile.rotate,
      }}
      initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{
        delay: index * 0.04,
        type: "spring",
        stiffness: 80,
        damping: 18,
      }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        zIndex: 10,
      }}
    >
      <Image src={tile.src} alt="" fill className="object-cover" quality={90} />

      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/10" />
    </motion.div>
  );
}
