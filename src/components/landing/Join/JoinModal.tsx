"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import JoinForm from "./JoinForm";
import { IoMdClose } from "react-icons/io";

export default function JoinModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* 🌫 Soft overlay */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* 🎈 Balloon Modal */}
          <motion.div
            className="
              fixed z-50 
              left-1/2 top-1/2
              -translate-y-1/2
              bg-white backdrop-blur-xl
              rounded-2xl
              p-6
              shadow-[0_20px_60px_rgba(0,0,0,0.25)]
              w-[300px] sm:w-[500px] lg:w-[800px]
            "
            initial={{
              x: "100vw",      // pushed from right
              scaleX: 0.7,     // compressed like air pressure
              opacity: 0,
            }}
            animate={{
              x: "-50%",       // settle at center
              scaleX: [0.7, 1.05, 1], // inflate → relax
              opacity: 1,
            }}
            exit={{
              x: "100vw",
              scaleX: 0.8,
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1], // balloon easing (VERY important)
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ❌ Close */}
            <button
              onClick={onClose}
              className="
                absolute top-6 right-5
                text-gray-400 hover:text-black
                bg-blue-100 rounded-full shrink-0 p-1
              "
            >
              <IoMdClose size={24} />
            </button>

            <JoinForm />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
