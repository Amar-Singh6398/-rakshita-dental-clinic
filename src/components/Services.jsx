import { useState } from "react";
import { SERVICES } from "../data/content";

export default function Services() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="services" className="py-20 bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto px-5">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="section-tag">What We Offer</span>

          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#1a1a1a] mt-2 mb-3">
            Our Services
          </h2>

          <p className="font-inter text-[#4a4a4a] max-w-xl mx-auto">
            Comprehensive dental care under one roof, delivered with precision
            and compassion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
{SERVICES.map(({ icon: Icon, name, desc, image }, index) => (
  <div
    key={name}
    className="
      service-card group relative overflow-hidden
      rounded-2xl border border-[rgba(0,0,0,0.06)]
      cursor-pointer h-[360px] shadow-sm
      hover:shadow-xl transition-shadow duration-500
      bg-white
    "
  >
    {/* Background Image — Always Visible */}
    {image && (
      <img
        src={image}
        alt={name}
        className="
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-105
        "
      />
    )}

    {/* Dark Overlay */}
    <div
      className="
        absolute inset-0
        bg-gradient-to-t from-[#081b41]/90
        via-[#081b41]/20 to-transparent
        opacity-70 group-hover:opacity-100
        transition-opacity duration-500
      "
    />

    {/* Default Service Name — Visible Initially */}
    <div
      className="
        absolute inset-x-0 bottom-0 p-5 z-10
        text-white
        transition-all duration-500
        group-hover:-translate-y-2
        group-hover:opacity-0
      "
    >
      <h3 className="font-poppins font-semibold text-lg">
        {name}
      </h3>
    </div>

    {/* Hover Content — No New Image */}
    <div
      className="
        absolute inset-x-0 bottom-0 z-20 p-5
        flex items-end justify-between gap-3
        text-white
        translate-y-5 opacity-0
        group-hover:translate-y-0
        group-hover:opacity-100
        transition-all duration-500 ease-out
      "
    >
      <div className="min-w-0">
        <h3 className="font-poppins font-semibold text-lg">
          {name}
        </h3>

        <p className="font-inter text-xs text-white/75 mt-1">
          Explore our treatment
        </p>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="
          shrink-0 w-10 h-10 rounded-full
          bg-white/15 backdrop-blur-sm
          border border-white/30
          flex items-center justify-center
          hover:bg-[#FFDE00] hover:text-[#1a1a1a]
          transition-all duration-300
        "
        aria-label={`Book ${name}`}
      >
        <span className="text-lg">→</span>
      </button>
    </div>
  </div>
))}

        </div>
      </div>
    </section>
  );
}