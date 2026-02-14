import MosaicCollageDemo from "@/src/components/landing/CollageDemo";
// import CollageDemo from "@/src/components/landing/CollageDemo";
import Hero from "@/src/components/landing/Hero";
import JoinUI from "@/src/components/landing/JoinUI";
import Mastery from "@/src/components/landing/Mastery";
import OverallStats from "@/src/components/landing/OverallStats";
import PartnerBelt from "@/src/components/landing/PartnerBelt";
import Reviews from "@/src/components/landing/Reviews";
import Services from "@/src/components/landing/Services";
import VideoGallery from "@/src/components/landing/VideoGallery";
// import WhatWeDo from "@/src/components/landing/WhatWeDo";

export default function Home() {
  return (
    <div className="">
      <Hero />
      {/* <WhatWeDo /> */}
      <Services />
      <MosaicCollageDemo />
      <PartnerBelt/>
      <VideoGallery />
      <Reviews />
      <Mastery />
      <OverallStats />

      <JoinUI />
    </div>
  );
}

