// "use client";
// import Image from "next/image";
// import { useState } from "react";

export default function Hero() {
  // const [activeBg, setActiveBg] = useState("");

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-white transition-all duration-500">
        {/* <Image src={""} alt="Hero BG" fill priority className="object-cover" /> */}
      </div>

      {/* Overlay (optional for readability) */}
      <div className="absolute inset-0 -z-10" />

      {/* Content */}
      <div className="text-center px-6 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-8">
          We Are{" "}
          <span
            // onMouseEnter={() => setActiveBg("")}
            // onMouseLeave={() => setActiveBg("yellow")}
            className="cursor-pointer underline decoration-4 underline-offset-8"
          >
            Masters
          </span>
        </h1>

        <p className="text-2xl md:text-4xl text-black mb-4">
          of Social media. Experienced enough to know the{" "}
          <span
            // onMouseEnter={() => setActiveBg("")}
            // onMouseLeave={() => setActiveBg("default")}
            className="font-extrabold cursor-pointer underline"
          >
            algorithm
          </span>
        </p>

        <p className="text-2xl md:text-4xl text-black mb-10">
          creative enough to{" "}
          <span
            // onMouseEnter={() => setActiveBg("blue")}
            // onMouseLeave={() => setActiveBg("default")}
            className="font-extrabold cursor-pointer underline"
          >
            break
          </span>{" "}
          it!
        </p>

        <div className="flex gap-4 justify-center">
          <button
            className="
        px-10 py-4 
        bg-amber-100 
        rounded-xl 
        text-lg 
        font-bold 
        cursor-pointer
        transition-all 
        duration-300 
        ease-out
        hover:-translate-y-1 
        hover:scale-105 
        hover:shadow-xl
        active:scale-95
      "
          >
            Get Started
          </button>

          <button
            className="px-10 py-4 border-2  border-black rounded-xl text-lg font-semibold cursor-pointer transition-all 
        duration-300 
        ease-out
        hover:bg-black 
        hover:text-white
        hover:-translate-y-1 
        hover:scale-105
        hover:shadow-xl
        active:scale-95
      "
          >
            View Work
          </button>
        </div>
      </div>
    </section>
  );
}
