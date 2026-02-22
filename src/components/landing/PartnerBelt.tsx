"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { PARTNER_BELT } from "@/src/types/partners";

const PartnerBelt = () => {

  const repeatedPartners = React.useMemo(() => {
    return [...PARTNER_BELT, ...PARTNER_BELT, ...PARTNER_BELT];
  }, []);

  return (
    <section className="relative py-10 lg:py-20 overflow-hidden bg-white px-4 lg:px-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl lg:text-[48px] font-extrabold text-center text-black mb-10"
      >
        We <span className="text-[#566bd6]">partner with the best</span>, to do our best.
      </motion.h2>

      <div className="relative w-full max-w-400 mx-auto group">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          speed={4000}
          allowTouchMove={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="partner-swiper ease-linear!"
        >
          {repeatedPartners.map((item, i) => (
            <SwiperSlide 
                key={i} 
                className="!w-[260px] !h-[140px]"
            >
              <div className="w-full h-full rounded-2xl bg-[#879ee718] px-6 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex items-center justify-center">
                <div className="relative h-30 w-full">
                  <Image
                    src={item.logo}
                    alt={item.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-white to-transparent" />
      </div>

      {/* Global CSS override for Linear Motion */}
      <style jsx global>{`
        .partner-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
};

export default PartnerBelt;