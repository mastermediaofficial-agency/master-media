
import Hero from "@/src/components/landing/Hero";
import JoinUI from "@/src/components/landing/JoinUI";
import Mastery from "@/src/components/landing/Mastery";
import Media from "@/src/components/landing/Media";
import OverallStats from "@/src/components/landing/OverallStats";
import PartnerBelt from "@/src/components/landing/PartnerBelt";
import Reviews from "@/src/components/landing/Reviews";
import Services from "@/src/components/landing/Services";
import VideoGallery from "@/src/components/landing/VideoGallery";

export default function Home() {
  return (
    <div className="">
      <Hero />
      {/* <WhatWeDo /> */}
      <Services />   
      <Media/>
      <PartnerBelt/>
      <VideoGallery />
      <Reviews />
      <Mastery />
      <OverallStats />

      <JoinUI />
    </div>
  );
}

