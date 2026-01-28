"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

interface VideoItem {
  id: number;
  src: string;
  title: string;
}

const videos: VideoItem[] = [
  { id: 1, src: "/videos/video.mp4", title: "Global Cultural Exchange" },
  { id: 2, src: "/videos/video.mp4", title: "Impactful Community Events" },
  { id: 3, src: "/videos/video.mp4", title: "Celebrating Diversity" },
  { id: 4, src: "/videos/video.mp4", title: "Global Cultural Exchange" },
  { id: 5, src: "/videos/video.mp4", title: "Impactful Community Events" },
  { id: 6, src: "/videos/video.mp4", title: "Celebrating Diversity" },
];

export default function VideoGallery() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleMouseEnter = (index: number) => {
    swiperRef.current?.autoplay.stop();
    const video = videoRefs.current[index];
    if (video) {
      video.muted = false;
      video.play();
    }
  };

  const handleMouseLeave = (index: number) => {
    swiperRef.current?.autoplay.start();
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.muted = true;
      video.currentTime = 0;
    }
  };

  return (
    <section className="relative py-20 bg-background">
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-semibold text-primary-dark">
          Impact in Action
        </h2>
        <p className="mt-4 text-gray max-w-xl mx-auto">
          A glimpse into our impactful work and the communities we serve.
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto">
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop
          centeredSlides
          slidesPerView="auto"
          spaceBetween={32}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          className="video-swiper px-4 md:px-10"
        >
          {videos.map((video, index) => (
            <SwiperSlide
              key={video.id}
              className="!w-[320px] md:!w-[420px] transition-transform duration-700"
            >
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="group relative overflow-hidden rounded-3xl bg-black shadow-xl"
              >
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[index] = el;
                  }}
                  src={video.src}
                  muted
                  loop
                  playsInline
                  className="h-[420px] w-full object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-500" />

                <div className="absolute bottom-6 left-6 right-6 text-white group-hover:opacity-0 transition-opacity duration-500">
                  <h3 className="text-lg font-medium">{video.title}</h3>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-lg">
                    Playing
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
