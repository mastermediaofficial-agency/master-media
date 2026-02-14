"use client";

import { useEffect, useRef, useState } from "react";
import PolicySection from "@/src/components/privacy/PolicySection";
import { motion, Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const sections = [
  {
    id: "info",
    title: "Information We Collect",
    content: (
      <ul className="space-y-2 lg:space-y-3 list-disc pl-6">
        <li>Name, email address, phone number</li>
        <li>Company and billing details</li>
        {/* <li>IP address and browser information</li> */}
        <li>Analytics and interaction data</li>
      </ul>
    ),
  },
  {
    id: "usage",
    title: "How We Use Your Information",
    content: (
      <ul className="space-y-2 lg:space-y-3 list-disc pl-6">
        <li>Provide branding & marketing services</li>
        <li>Improve website performance</li>
        <li>Respond to inquiries</li>
        <li>Process payments securely</li>
      </ul>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    content: (
      <p>
        We use cookies and analytics tools to improve user experience and
        measure website performance.
      </p>
    ),
  },
  {
    id: "protection",
    title: "Data Protection",
    content: (
      <p>We implement strict technical and organizational security measures.</p>
    ),
  },
  {
    id: "thirdparty",
    title: "Third-Party Services",
    content: (
      <p>Trusted third-party providers assist with hosting and analytics.</p>
    ),
  },
  {
    id: "rights",
    title: "Your Rights",
    content: (
      <ul className="space-y-2 lg:space-y-3 list-disc pl-6">
        <li>Request access to your data</li>
        <li>Request correction or deletion</li>
        <li>Withdraw consent</li>
      </ul>
    ),
  },
];

export default function Privacy() {
  const [active, setActive] = useState(sections[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gray-400 px-4 lg:px-10 pt-25 pb-15">
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#324dd3]/50 rounded-full blur-[140px]"
      />
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-4xl mx-auto text-center pb-5 lg:pb-15"
      >
        <h1 className="font-60 font-bold text-white mb-6">Privacy Policy</h1>
        <p className="font-20 text-white/70 leading-relaxed">
          At <span className="text-[#324dd3] font-semibold">Master Media</span>,
          we ensure transparency and protection of your information.
        </p>
      </motion.div>

      <div className="relative max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16">
        <div className="hidden lg:block">
          <div className="sticky top-32 space-y-5">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() =>
                  document
                    .getElementById(section.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`group flex items-center gap-3 w-full text-left transition-all duration-300 ${
                  active === section.id
                    ? "text-[#324dd3]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <span className="text-sm font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm font-medium">{section.title}</span>

                {active === section.id && (
                  <motion.div
                    layoutId="activeDot"
                    className="ml-auto w-2 h-2 rounded-full bg-[#324dd3]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 lg:space-y-8"
        >
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              ref={(el: any) => (sectionRefs.current[section.id] = el)}
            >
              <PolicySection index={index} title={section.title}>
                {section.content}
              </PolicySection>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative mt-20 text-center text-white"
      >
        For privacy-related inquiries contact us at{" "}
        <a
          href="mailto:mastermediamain@gmail.com"
          className="text-[#324dd3] underline font-medium hover:underline"
        >
          mastermediamain@gmail.com
        </a>
      </motion.div>
    </section>
  );
}
