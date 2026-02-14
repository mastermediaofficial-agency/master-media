"use client";

import { useState } from "react";
import JoinModal from "./Join/JoinModal";

type ActiveWord = "masters" | "algorithm" | "break" | null;

export default function Hero() {
  const [activeWord, setActiveWord] = useState<ActiveWord>(null);
  const [open, setOpen] = useState(false);

  const getBgColor = () => {
    switch (activeWord) {
      case "masters":
        return "bg-yellow-400";
      case "algorithm":
        return "bg-emerald-500";
      case "break":
        return "bg-primary-light";
      default:
        return "";
    }
  };

  const dim = (word: ActiveWord) =>
    activeWord !== null && activeWord !== word ? "opacity-0" : "opacity-100";

  return (
    <section
      className={`relative min-h-screen overflow-hidden flex items-center justify-center px-4 lg:px-10 pt-25 md:pt-30 pb-15 transition-colors duration-300  ${getBgColor()}`}
    >
      <video
        className="absolute inset-0 -z-10 w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 -z-10  bg-white/50" />

      <div className="relative px-6 max-w-800 text-black">
        <div className="text-center">
          <p className="font-72  mb-8 leading-tight">
            <span
              className={`transition-opacity duration-200 ${dim("masters")}`}
            >
              We Are The{" "}
            </span>

            <span
              onMouseEnter={() => setActiveWord("masters")}
              onMouseLeave={() => setActiveWord(null)}
              className={`font-extrabold cursor-pointer transition-opacity duration-200 ${dim(
                "masters",
              )}`}
            >
              Masters
            </span>
          </p>

          <p className="font-38 mb-4">
            <span
              className={`transition-opacity duration-200 ${dim("algorithm")}`}
            >
              of Social media. Experienced enough to know the{" "}
            </span>

            <span
              onMouseEnter={() => setActiveWord("algorithm")}
              onMouseLeave={() => setActiveWord(null)}
              className={`font-extrabold cursor-pointer transition-opacity duration-200 ${dim(
                "algorithm",
              )}`}
            >
              algorithm
            </span>
          </p>

          {/* Line 3 */}
          <p className="font-38 mb-10">
            <span className={`transition-opacity duration-200 ${dim("break")}`}>
              creative enough to{" "}
            </span>

            <span
              onMouseEnter={() => setActiveWord("break")}
              onMouseLeave={() => setActiveWord(null)}
              className={`font-extrabold cursor-pointer transition-opacity duration-200 ${dim(
                "break",
              )}`}
            >
              break
            </span>

            <span className={`transition-opacity duration-200 ${dim("break")}`}>
              {" "}
              it!
            </span>
          </p>

          {/* Buttons */}
          <div
            className={`flex gap-4 justify-center flex-col sm:flex-row transition-opacity duration-200 ${
              activeWord ? "opacity-0" : "opacity-100"
            }`}
          >
            <>
              <button
                onClick={() => setOpen(true)}
                className="p-2.5 sm:p-4 lg:px-12 lg:py-3 bg-primary-dark shadow-xl shadow-blue-950 text-white rounded-xl font-26 font-bold hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                Get Started
              </button>
              <div className="relative z-999">
                <JoinModal open={open} onClose={() => setOpen(false)} />
              </div>
            </>
          </div>
        </div>
      </div>
    </section>
  );
}
