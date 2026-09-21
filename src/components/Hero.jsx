import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ArrowRight, Phone, Shield, Zap, Heart, Smile } from "lucide-react";
import { CLINIC } from "../data/content";
import clinic1 from "../assets/clinic1.webp";
import clinic2 from "../assets/clinic2.webp";
import clinic3 from "../assets/clinic3.webp";
import clinic4 from "../assets/clinic4.webp";
import clinic5 from "../assets/clinic5.webp";

const TRUST_ROW = [
  { icon: Shield, label: "Safe & Sterile" },
  { icon: Zap, label: "Advanced Equipment" },
  { icon: Heart, label: "Patient-First Care" },
];

// DUMMY images — swap these 5 for your real clinic photos when ready.
// If importing local files instead: import clinic1 from "../assets/clinic-1.jpg";
// then drop clinic1, clinic2... into this array instead of URL strings.
const HERO_IMAGES = [
  clinic1,
  clinic2,
  clinic3,
  clinic4,
  clinic5 
];

const SLIDE_DURATION = 4500; // ms per image

export default function Hero({ scrollTo }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [next, paused]);

  return (
    <section id="home" className="hero-gradient pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white border border-[#FFDE00] rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FFDE00] text-[#FFDE00]" />
              ))}
            </div>
            <span className="font-inter text-xs font-semibold text-[#1a1a1a]">4.9 — 100+ Google Reviews</span>
          </div>

          <h1 className="font-poppins font-bold text-[2.6rem] md:text-[3.2rem] leading-[1.15] text-[#1a1a1a] mb-4">
            Advanced Dental Care <span className="text-[#0000EE]">You Can Trust</span>
          </h1>
          <p className="font-inter text-base md:text-lg text-[#4a4a4a] mb-8 max-w-md leading-relaxed">
            Dr. Tanu — Specialist in Advanced Micro Endodontics.{" "}   <br />
            <span className="font-medium text-[#1a1a1a]">{CLINIC.name}, Haldwani</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center justify-center gap-2 bg-[#0000EE] hover:bg-[#0000C4] text-white font-poppins font-semibold text-base rounded-xl px-7 py-3.5 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300"
            >
              Book Appointment <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${CLINIC.phoneTel}`}
              className="flex items-center justify-center gap-2 border-2 border-[#0000EE] text-[#0000EE] hover:bg-[#0000EE] hover:text-white font-poppins font-semibold text-base rounded-xl px-7 py-3.5 transition-all"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>

          <div className="flex flex-wrap gap-5 mt-10">
            {TRUST_ROW.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-inter text-[#4a4a4a]">
                <div className="w-7 h-7 bg-[#FFDE00] rounded-full flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5 text-[#1a1a1a]" />
                </div>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Right — hero image slider */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-100 bg-[#e8eeff] h-[340px] md:h-[420px]">
            <AnimatePresence mode="sync">
              <motion.img
                key={index}
                src={HERO_IMAGES[index]}
                alt={`${CLINIC.name} — patient care, ${index + 1} of ${HERO_IMAGES.length}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {HERO_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Floating badges — pinned to the outer container, always on top */}
          <div className="absolute -bottom-5 -left-4 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-[#f0f0f0] z-20">
            <div className="w-10 h-10 bg-[#0000EE] rounded-full flex items-center justify-center">
              <Smile className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-poppins font-bold text-[#0000EE] text-lg leading-none">100+</p>
              <p className="font-inter text-xs text-[#4a4a4a] mt-0.5">Happy Patients</p>
            </div>
          </div>
          <div className="absolute -top-4 -right-3 bg-[#FFDE00] rounded-2xl shadow-lg px-4 py-2.5 z-20">
            <p className="font-poppins font-bold text-[#1a1a1a] text-sm leading-none">Specialist</p>
            <p className="font-inter text-[11px] text-[#4a4a4a]">Endodontics</p>
          </div>
        </div>
      </div>
    </section>
  );
}