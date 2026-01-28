"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-primary-dark text-white font-sans overflow-hidden">
      <div className="mx-auto max-w-400 px-6 pt-10 pb-5">
        {/* TOP GRID */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-5 lg:justify-between">
          {/* INTRO */}
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="mb-4 text-2xl font-bold leading-snug">
              Congrats! <br />
              You actually reached the footer.
            </h3>

            <div className="flex flex-col gap-5">
              <p className="text-base leading-relaxed text-white/75">
                That means you scrolled, explored, and didn&apos;t rage-quit.
                <br />
                We&apos;re mentally adding{" "}
                <strong className="text-white">10,000 steps</strong> to your
                fitness tracker. You&apos;re welcome 😌
              </p>

              <p className="max-w-xl text-base leading-relaxed text-white/70">
                Master Media is a digital & creative agency building brands
                people remember. We mix strategy, creativity, tech, and just the
                right amount of madness to help businesses grow online.
                <br />
                <span className="mt-2 inline-block text-white/80">
                  If you&apos;re reading this, congratulations — you clearly
                  care about details. We like you already.
                </span>
              </p>
            </div>
          </div>

          {/* LINKS GRID */}
          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 lg:text-left">
            {/* COMPANY */}
            <div>
              <p className="mb-4 text-lg uppercase tracking-wider font-bold text-gray-300">
                Company
              </p>
              <div className="flex flex-col gap-3 text-base font-medium items-center lg:items-start">
                {["About Us", "Services", "Our Work", "Careers"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                    className="group w-fit"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-white transition-all group-hover:w-full" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* RESOURCES */}
            <div>
              <p className="mb-4 text-lg uppercase tracking-wider font-bold text-gray-300">
                Resources
              </p>
              <div className="flex flex-col gap-3 text-base font-medium items-center lg:items-start">
                {["Awards", "Contact Us", "Privacy Policy"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                    className="group w-fit"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-white transition-all group-hover:w-full" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* SOCIALS */}
            <div className="flex flex-col items-center">
              <p className="mb-4 text-lg uppercase tracking-wider font-bold text-gray-300">
                Follow Us
              </p>

              <div className="flex justify-center gap-4 lg:flex-col lg:items-start">
                {[
                  {
                    icon: <FaInstagram className="h-7 w-7" />,
                    label: "Instagram",
                  },
                  {
                    icon: <FaXTwitter className="h-6 w-6" />,
                    label: "Twitter",
                  },
                  {
                    icon: <FaFacebookF className="h-6 w-6" />,
                    label: "Facebook",
                  },
                  {
                    icon: <FaLinkedinIn className="h-6 w-6" />,
                    label: "LinkedIn",
                  },
                ].map((item) => (
                  <Link
                    key={item.label}
                    aria-label={item.label}
                    href="/"
                    className="flex h-11 w-11 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:bg-white/70 hover:text-primary-dark"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-8 flex flex-col gap-5 border-t border-white/15 pt-4 text-center sm:flex-row sm:items-center sm:justify-between">
          <span className="text-white/60">
            © {new Date().getFullYear()} Master Media. Built with ☕ & ideas.
          </span>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group mx-auto sm:mx-0 flex items-center gap-2 rounded-full border border-white/40 px-5 py-2 font-medium transition hover:bg-white hover:text-primary-dark"
          >
            Back to top
            <FaArrowUp className="transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
