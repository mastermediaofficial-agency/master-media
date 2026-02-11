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
        return "";
    }
  };

  const dim = (word: ActiveWord) =>
    activeWord !== null && activeWord !== word ? "opacity-0" : "opacity-100";

  return (
    <section
      className={`relative min-h-screen overflow-hidden flex items-center justify-center transition-colors duration-300  ${getBgColor()}`}
    ><video
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
      <div className="px-6 max-w-800 text-black">
        <div className="text-center">
          {/* Line 1 */}
          <h1 className="font-72 font-extrabold mb-8 leading-tight">
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
          <p className="font-36 mb-4">
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
          <p className="font-36 mb-10">
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
            className={`flex gap-4 justify-center flex-col sm:flex-row transition-opacity duration-200 ${
              activeWord ? "opacity-0" : "opacity-100"
            }`}
          >
            <button className="p-2.5 sm:p-4 lg:px-10 lg:py-4 bg-primary-dark shadow-xl shadow-blue-950 text-white rounded-xl font-22 font-bold hover:-translate-y-1 hover:shadow-xl transition-all">
              Get Started
            </button>

            <button className="p-2.5 sm:p-4 lg:px-10 lg:py-4 bg-black text-white shadow-xl shadow-gray-950 rounded-xl font-22 font-semibold hover:-translate-y-1 hover:shadow-xl transition-all">
              View Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
