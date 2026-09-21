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
              onClick={() =>
                setActiveCard(activeCard === index ? null : index)
              }
              className="
                service-card
                group
                relative
                overflow-hidden
                bg-white
                rounded-2xl
                border
                border-[rgba(0,0,0,0.06)]
                cursor-pointer
                h-[360px]
                shadow-sm
                hover:shadow-xl
                transition-shadow
                duration-500
              "
            >

              {/* =========================
                  NORMAL CONTENT
              ========================= */}

              <div
                className={`
                  service-content
                  absolute
                  inset-0
                  z-10
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  p-6
                  bg-white
                  transition-all
                  duration-700
                  ease-[cubic-bezier(.22,.61,.36,1)]
                  ${
                    activeCard === index
                      ? "-translate-y-10 opacity-0"
                      : "translate-y-0 opacity-100"
                  }
                  md:group-hover:-translate-y-10
                  md:group-hover:opacity-0
                `}
              >

                {/* Icon */}
                <div
                  className="
                    w-14
                    h-14
                    bg-[#FFDE00]
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    mb-5
                    transition-all
                    duration-500
                    md:group-hover:-translate-y-4
                  "
                >
                  <Icon className="w-6 h-6 text-[#1a1a1a]" />
                </div>

                {/* Title */}
                <h3
                  className="
                    font-poppins
                    font-semibold
                    text-[#1a1a1a]
                    text-lg
                    mb-2
                  "
                >
                  {name}
                </h3>

                {/* Description */}
                <p
                  className="
                    font-inter
                    text-[#4a4a4a]
                    text-sm
                    leading-relaxed
                    max-w-[240px]
                  "
                >
                  {desc}
                </p>

              </div>


              {/* =========================
                  IMAGE LAYER
              ========================= */}

              {image && (
                <div
                  className={`
                    absolute
                    inset-0
                    z-20
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(.22,.61,.36,1)]
                    ${
                      activeCard === index
                        ? "translate-y-0"
                        : "translate-y-[103%]"
                    }
                    md:group-hover:translate-y-0
                  `}
                >

                  {/* Image */}
                  <img
                    src={image}
                    alt={name}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      scale-105
                      md:group-hover:scale-100
                      transition-transform
                      duration-1000
                      ease-out
                    "
                  />

                  {/* Gradient */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#081b41]/80
                      via-[#081b41]/20
                      to-transparent
                    "
                  />

                  {/* Image Bottom Content */}
                  <div
                    className={`
                      absolute
                      left-5
                      right-5
                      bottom-5
                      flex
                      items-center
                      justify-between
                      text-white
                      transition-all
                      duration-500
                      delay-300
                      ${
                        activeCard === index
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }
                      md:group-hover:translate-y-0
                      md:group-hover:opacity-100
                    `}
                  >

                    <div>
                      <p className="font-poppins font-semibold text-sm">
                        {name}
                      </p>

                      <p className="font-inter text-xs text-white/75 mt-1">
                        Explore our treatment
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();

                        document
                          .getElementById("contact")
                          ?.scrollIntoView({
                            behavior: "smooth",
                          });
                      }}
                      className="
                        w-9
                        h-9
                        rounded-full
                        bg-white/15
                        backdrop-blur-sm
                        border
                        border-white/30
                        flex
                        items-center
                        justify-center
                        cursor-pointer
                        hover:bg-[#FFDE00]
                        hover:text-[#1a1a1a]
                        transition-all
                        duration-300
                      "
                      aria-label={`Book ${name}`}
                    >
                      <span className="text-lg">→</span>
                    </button>

                  </div>

                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}