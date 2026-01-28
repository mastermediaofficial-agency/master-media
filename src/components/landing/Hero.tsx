"use client";

import { useState } from "react";

type ActiveWord = "masters" | "algorithm" | "break" | null;

export default function Hero() {
  const [activeWord, setActiveWord] = useState<ActiveWord>(null);

  const getBgColor = () => {
    switch (activeWord) {
      case "masters":
        return "bg-yellow-400";
      case "algorithm":
        return "bg-emerald-500";
      case "break":
        return "bg-primary-light";
      default:
        return "bg-white";
    }
  };

  const dim = (word: ActiveWord) =>
    activeWord !== null && activeWord !== word ? "opacity-0" : "opacity-100";

  return (
    <section
      className={`relative min-h-screen overflow-hidden flex items-center justify-center transition-colors duration-300  ${getBgColor()}`}
    >
      <div className="px-6 max-w-400 text-black">
        <div className="text-center">
          {/* Line 1 */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            <span
              className={`transition-opacity duration-200 ${dim("masters")}`}
            >
              We Are{" "}
            </span>

            <span
              onMouseEnter={() => setActiveWord("masters")}
              onMouseLeave={() => setActiveWord(null)}
              className={`cursor-pointer underline decoration-4 underline-offset-8 transition-opacity duration-200 ${dim(
                "masters",
              )}`}
            >
              Masters
            </span>
          </h1>

          {/* Line 2 */}
          <p className="text-2xl md:text-4xl mb-4">
            <span
              className={`transition-opacity duration-200 ${dim("algorithm")}`}
            >
              of Social media. Experienced enough to know the{" "}
            </span>

            <span
              onMouseEnter={() => setActiveWord("algorithm")}
              onMouseLeave={() => setActiveWord(null)}
              className={`font-extrabold cursor-pointer underline transition-opacity duration-200 ${dim(
                "algorithm",
              )}`}
            >
              algorithm
            </span>
          </p>

          {/* Line 3 */}
          <p className="text-2xl md:text-4xl mb-10">
            <span className={`transition-opacity duration-200 ${dim("break")}`}>
              creative enough to{" "}
            </span>

            <span
              onMouseEnter={() => setActiveWord("break")}
              onMouseLeave={() => setActiveWord(null)}
              className={`font-extrabold cursor-pointer underline transition-opacity duration-200 ${dim(
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
            className={`flex gap-4 justify-center transition-opacity duration-200 ${
              activeWord ? "opacity-0" : "opacity-100"
            }`}
          >
            <button className="px-10 py-4 bg-yellow-300 border-2 border-black rounded-xl text-[22px] font-bold hover:-translate-y-1 hover:shadow-xl transition-all">
              Get Started
            </button>

            <button className="px-10 py-4 bg-black text-white border-2 border-black rounded-xl text-[22px] font-semibold hover:-translate-y-1 hover:shadow-xl transition-all">
              View Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
