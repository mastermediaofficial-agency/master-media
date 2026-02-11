"use client";
import { services } from "@/src/utils/constants/services.data";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <div className="max-w-400 px-4 lg:px-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, i) => (
        <ServiceCard key={service.title} index={i} {...service} />
      ))}
    </div>
  );
}
