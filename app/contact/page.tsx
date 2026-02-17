import OurApproachCard from "@/src/components/contact/OurApproachCard";
import ContactForm from "../../src/components/contact/contactForm";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="min-h-screen bg-linear-to-br from-[#eef2ff] to-[#d7e2f7] flex items-center justify-center px-4 lg:px-10 pt-25 md:pt-30 pb-10 py-24">
      <div className="max-w-400 mx-auto w-full gap-6 lg:gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <div className="relative rounded-3xl bg-linear-to-br from-[#324dd3] to-[#213d77] p-10 text-white shadow-2xl overflow-hidden">
            <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
            <div
              className="absolute bottom-0 left-0 w-full h-full bg-no-repeat bg-bottom bg-obtain opacity-50 pointer-events-none"
              style={{
                backgroundImage: "url('/layers/wavy.webp')",
              }}
            />

            <h1 className="text-4xl font-bold mb-4">
              Let’s Build Something Powerful
            </h1>

            <p className="text-white/80 max-w-md">
              Have a project in mind? Want to collaborate or grow your brand?
              Reach out to Master Media — we’re ready to help.
            </p>

            <div className="mt-10 space-y-6 text-sm">
              <div>
                <p className="font-semibold text-white">Customer Support</p>
                <a
                  href="mailto:mastermediamain@gmail.com"
                  className="text-white/80 hover:text-white transition"
                >
                  mastermediamain@gmail.com
                </a>
              </div>

              <div>
                <p className="font-semibold text-white">Business Inquiries</p>
                <a
                  href="mailto:mastermediamain@gmail.com"
                  className="text-white/80 hover:text-white transition"
                >
                  mastermediamain@gmail.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-white">Head Office</p>
                <a
                  href="https://www.google.com/maps/place/Orai,+Uttar+Pradesh"
                  className="text-white/80 hover:text-white transition"
                >
                  Orai, Uttar Pradesh – 285001 (India)
                </a>
              </div>
              <div>
                <Link href="/">
                  <Image
                    src="/master-media-logo.png"
                    alt="Master Media Logo"
                    width={180}
                    height={70}
                    className="h-24 w-auto object-contain invert brightness-0"
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <ContactForm />
          </div>
        </div>
        <OurApproachCard />
      </div>
    </section>
  );
}
