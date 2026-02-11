"use client";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaRegCirclePlay } from "react-icons/fa6";

interface VideoItem {
  id: number;
  src: string;
  title: string;
}

const VideoGallery: React.FC = () => {
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const videos: VideoItem[] = [
    { id: 1, src: "/videos/video.mp4", title: "Global Cultural Exchange" },
    { id: 2, src: "/videos/video.mp4", title: "Impactful Community Events" },
    { id: 3, src: "/videos/video.mp4", title: "Celebrating Diversity" },
    { id: 4, src: "/videos/video.mp4", title: "Global Cultural Exchange" },
    { id: 5, src: "/videos/video.mp4", title: "Impactful Community Events" },
    { id: 6, src: "/videos/video.mp4", title: "Celebrating Diversity" },
  ];

  // Lock background scroll when modal is open
  useEffect(() => {
    if (zoomIndex !== null) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
    if (zoomIndex === null) {
      document.querySelectorAll("video").forEach((v) => {
        v.pause();
        v.currentTime = 0;
      });
    }
  }, [zoomIndex]);

  // ESC to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomIndex(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const playActiveVideo = (index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === index) {
        video.muted = true;
        video.playsInline = true;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  // Pause all videos when modal opens
  useEffect(() => {
    if (zoomIndex !== null) {
      videoRefs.current.forEach((v) => {
        if (v) {
          v.pause();
          v.currentTime = 0;
        }
      });
    }
  }, [zoomIndex]);

  return (
    <section className="relative py-10 lg:py-20 bg-primary-dark">
      <div className="mb-14 text-center">
        <h2 className="font-48 font-extrabold text-black ">
          Impact in Action: Gallery
        </h2>
        <p className="mt-2 font-20 text-white max-w-3xl mx-auto">
          A glimpse into our impactful work and the communities we serve.
        </p>
      </div>

      <div className="max-w-400 mx-auto px-4 md:px-10">
        {/* Main Swiper */}
        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          spaceBetween={35}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          className="px-4"
          onSwiper={(swiper) => {
            playActiveVideo(swiper.activeIndex+1);
          }}
          onSlideChange={(swiper) => {
            playActiveVideo(swiper.activeIndex+1);
          }}
        >
          {videos.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                className="relative overflow-hidden rounded-xl cursor-pointer group"
                onMouseEnter={() => videoRefs.current[index]?.play()}
                onMouseLeave={() => {
                  const v = videoRefs.current[index];
                  if (v) {
                    v.pause();
                    v.currentTime = 0;
                  }
                }}
                onClick={() => setZoomIndex(index)}
              >
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[index] = el;
                  }}
                  src={item.src}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-[500px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-500" />

                {/* Title */}
                <div className="absolute bottom-6 left-6 right-6 text-white group-hover:opacity-0 transition-opacity duration-500">
                  <h3 className="font-18 font-medium drop-shadow-lg">
                    {item.title}
                  </h3>
                </div>

                {/* Optional play icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="bg-black/50 rounded-full p-3 text-white text-xl">
                    <FaRegCirclePlay size={32} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Fullscreen Video Modal */}
      {zoomIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            initialSlide={zoomIndex}
            className="w-full h-full flex items-center justify-center"
          >
            {videos.map((item, index) => (
              <SwiperSlide
                key={item.id}
                className="flex! items-center! justify-center!"
              >
                <video
                  src={item.src}
                  controls
                  autoPlay={index === zoomIndex}
                  className="w-auto max-w-[90vw] max-h-[85vh] rounded-lg object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => setZoomIndex(null)}
            aria-label="Close video"
            className="
              absolute top-6 right-6 z-100
              flex items-center justify-center
              w-12 h-12
              rounded-full
              bg-black/60
              text-white font-24
              hover:bg-black/80
              transition
            "
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;
