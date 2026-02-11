import { useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export function useMagnet(strength = 0.35) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { stiffness: 180, damping: 22 };

  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);
  const rX = useSpring(rotateX, springConfig);
  const rY = useSpring(rotateY, springConfig);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);

    x.set(dx * strength);
    y.set(dy * strength);

    rotateX.set((-dy / rect.height) * 8);
    rotateY.set((dx / rect.width) * 8);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  return {
    ref,
    style: {
      x: sx,
      y: sy,
      rotateX: rX,
      rotateY: rY,
    },
    handlers: {
      onMouseMove,
      onMouseLeave,
    },
  };
}
