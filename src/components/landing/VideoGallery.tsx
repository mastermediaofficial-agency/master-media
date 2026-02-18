"use client";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

interface VideoItem {
  id: number;
  src: string;
  title: string;
}

const VideoGallery: React.FC = () => {
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const videos: VideoItem[] = [
    { id: 1, src: "content/videos/1.mp4", title: "Master Media" },
    { id: 2, src: "content/videos/2.mp4", title: "Master Media" },
    { id: 3, src: "content/videos/3.mp4", title: "Master Media" },
    { id: 4, src: "content/videos/4.mp4", title: "Master Media" },
    { id: 5, src: "content/videos/5.mp4", title: "Master Media" },
    { id: 6, src: "content/videos/6.mp4", title: "Master Media" },
    { id: 7, src: "content/videos/7.mp4", title: "Master Media" },
  ];

  // Lock background scroll when modal is open
  useEffect(() => {
    if (zoomIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [zoomIndex]);

  // Handle video playback logic for the carousel
  const handlePlayState = (activeIndex: number) => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  return (
    <section className="relative py-10 lg:py-20 bg-[#1a237e]">
      {/* Header Text from your original component */}
      <div className="mb-14 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Impact, Frame by Frame
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto opacity-90">
          A glimpse into our impactful work and the communities we serve.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 35,      // The "Tilt" angle from your reference
            stretch: 0,
            depth: 250,      // Depth of side slides
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          onSlideChange={(swiper) => handlePlayState(swiper.realIndex)}
          className="!pb-16"
        >
          {videos.map((item, index) => (
            <SwiperSlide 
              key={item.id} 
              className="!w-[280px] md:!w-[320px] aspect-[9/16]"
            >
              <div
                className="relative h-full w-full overflow-hidden rounded-2xl cursor-pointer group shadow-2xl"
                onClick={() => setZoomIndex(index)}
              >
                <video
                  ref={(el) => { videoRefs.current[index] = el; }}
                  src={item.src}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-lg font-semibold drop-shadow-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Fullscreen Video Modal logic from your original code */}
      {zoomIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4">
          <button
            onClick={() => setZoomIndex(null)}
            className="absolute top-6 right-6 z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white text-2xl hover:bg-white/20 transition"
          >
            ✕
          </button>
          
          <div className="w-full max-w-4xl max-h-[85vh] flex items-center justify-center">
             <video
                src={videos[zoomIndex].src}
                controls
                autoPlay
                className="max-w-full max-h-full rounded-lg shadow-2xl"
              />
          </div>
        </div>
      )}

      {/* Custom Pagination Styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background: #3b82f6 !important;
          width: 25px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
};

export default VideoGallery;