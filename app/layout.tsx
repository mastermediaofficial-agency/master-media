import Providers from "@/src/components/providers/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Master Media",
    template: "%s | Master Media",
  },
  description:
    "Master Media is a creative digital agency delivering modern websites, branding, and digital solutions.",
  keywords: [
    "Master Media",
    "Digital Agency",
    "Web Development",
    "Branding",
    "UI UX Design",
  ],
  authors: [{ name: "Master Media" }],
  creator: "Master Media",
  metadataBase: new URL("https://www.mastermediaofficial.com"),
  manifest: "/manifest.json",
  // themeColor: "#9e00fe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${montserrat.variable}  ${poppins.variable}
          antialiased
        `}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Providers />
      </body>
    </html>
  );
}
