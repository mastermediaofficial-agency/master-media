"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX, useEffect, useState } from "react";
import {
  FaInfoCircle,
  FaBriefcase,
  FaRocket,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaServicestack } from "react-icons/fa6";

type NavItem = {
  label: string;
  href: string;
  icon: JSX.Element;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", icon: <FaInfoCircle /> },
  { label: "Services", href: "/services", icon: <FaServicestack /> },
  { label: "Our Work", href: "/our-works", icon: <FaBriefcase /> },
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

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full">
        <div
          className={`mx-auto max-w-7xl px-4 transition-all duration-500 ease-out
          ${scrollDir === "up" ? "mt-2 scale-[1.01]" : "mt-4 scale-100"}`}
        >
          <div
            className={`flex h-18 items-center justify-between rounded-2xl border px-6 backdrop-blur-lg
            transition-all duration-500 ease-out
            ${
              scrollDir === "up"
                ? "bg-white/90 shadow-md"
                : "bg-white shadow-sm"
            }`}
          >
            {/* LOGO */}
            <Link href="/" className="relative h-full w-24">
              <Image
                src="/mm-logo-trans.png"
                alt="Master Media"
                fill
                className="object-contain"
                priority
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative flex items-center gap-2 text-sm font-medium transition
                    ${active ? "text-black" : "text-gray-600 hover:text-black"}`}
                  >
                    <span
                      className={`text-base transition-transform ${
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
              href="/contact"
              className="hidden lg:inline-flex items-center rounded-xl bg-primary px-5 py-2.5
              text-sm font-semibold text-white transition hover:bg-primary/90 hover:shadow-lg"
            >
              Get In Touch
            </Link>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-2xl"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity
        ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-72 bg-white p-6 shadow-xl
        transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setOpen(false)} className="text-xl">
            <FaTimes />
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
                className={`flex items-center gap-3 text-sm font-medium
                ${active ? "text-black" : "text-gray-600"}`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex justify-center rounded-xl bg-blue-600
            px-4 py-3 text-sm font-semibold text-white"
          >
            Get In Touch
          </Link>
        </nav>
      </aside>
    </>
  );
}
