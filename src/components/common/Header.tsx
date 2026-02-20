"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX, useEffect, useState } from "react";
import {
  FaBriefcase,
  FaRocket,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaServicestack } from "react-icons/fa6";
import { BiHomeSmile } from "react-icons/bi";

type NavItem = {
  label: string;
  href: string;
  icon: JSX.Element;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", icon: <BiHomeSmile /> },
  { label: "Services", href: "/services", icon: <FaServicestack /> },
  { label: "About Us", href: "/about-us", icon: <FaBriefcase /> },
  { label: "Careers", href: "/careers", icon: <FaRocket /> },
  { label: "Contact", href: "/contact", icon: <FaEnvelope /> },
];

export default function Header() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY < lastScrollY) {
        setScrollDir("up");
      } else {
        setScrollDir("down");
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (open) {
      // lock scroll
      document.body.style.overflow = "hidden";
    } else {
      // unlock scroll
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 z-50 w-full px-4 lg:px-10 font-sans">
        <div
          className={`mx-auto max-w-400 transition-all duration-500 ease-out
          ${scrollDir === "up" ? "mt-2.5 lg:mt-4 scale-[1.01]" : "mt-6 scale-100"}`}
        >
          <div
            className={`flex h-14 md:h-18 items-center justify-between rounded-2xl px-6 backdrop-blur-lg
            transition-all duration-500 ease-out
            ${
              scrollDir === "up"
                ? "bg-white/90 shadow-md"
                : "bg-white shadow-sm"
            }`}
          >
            {/* LOGO */}
            <Link href="/" className="relative h-full w-18 md:w-25">
              <Image
                src="/master-media-logo.png"
                alt="Master Media"
                fill
                className="object-cover"
                priority
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-10">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative flex items-center gap-2 font-16 font-semibold transition
                    ${active ? "text-black" : "text-gray-600 hover:text-black"}`}
                  >
                    <span
                      className={`font-16 transition-transform ${
                        active ? "scale-110" : "group-hover:scale-110"
                      }`}
                    >
                      {item.icon}
                    </span>

                    <span>{item.label}</span>

                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-blue-600 transition-transform duration-300
  ${active ? "scale-x-100" : "scale-x-0"}`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <Link
              href="https://wa.me/919026792973?text=Hi%20I%20want%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center rounded-xl bg-primary px-5 py-2.5
              font-18 font-semibold text-white transition hover:bg-primary/90 hover:shadow-lg"
            >
              Get In Touch
            </Link>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden font-24 text-black"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-50 bg-black/75 transition-opacity
        ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-72 bg-white p-6 shadow-xl
        transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-primary-light/50 pb-4">
          <span className="font-20 text-black font-semibold">Master Media</span>
          <button onClick={() => setOpen(false)} className="font-20 text-black">
            <FaTimes size={20} />
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-6">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 font-16 font-medium
                ${active ? "text-black" : "text-gray-600"}`}
              >
                <span className="font-18">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}

          <div className="border-t border-primary-light/50 pt-4 flex justify-center w-full">
            <Link
              href="https://wa.me/919026792973?text=Hi%20I%20want%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="w-full shadow-blue-500 inline-flex justify-center rounded-xl bg-primary border border-gray-400
            px-4 py-3 font-16 font-semibold text-white hover:shadow-sm"
            >
              Get In Touch
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
