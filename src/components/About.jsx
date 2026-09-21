import { ChevronRight } from "lucide-react";
import { CLINIC } from "../data/content";
import tanu from"../assets/Dr tanu.webp";

const STATS = [
  { stat: "100+", label: "Happy Patients" },
  { stat: "4.9★", label: "Google Rating" },
  { stat: "RCT", label: "Root Canal Expert" },
];

export default function About({ scrollTo }) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-center">
        {/* Doctor image */}
        <div className="relative order-2 md:order-1">
          <div className="rounded-3xl overflow-hidden bg-[#e8eeff] shadow-xl">
            <img
              src={tanu}
              alt="Dr. Tanu, specialist in Advanced Endodontics"
              className="w-full h-[380px] md:h-[750px] object-cover object-top"
            />
          </div>
          <div className="absolute bottom-5 right-5 bg-[#0000EE] text-white rounded-2xl px-5 py-4 shadow-lg">
            <p className="font-poppins font-bold text-2xl">
              4.9<span className="text-[#FFDE00]">★</span>
            </p>
            <p className="font-inter text-xs text-blue-100 mt-0.5">Google Rating</p>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 md:order-2">
          <span className="section-tag">About the Doctor</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#1a1a1a] mt-2 mb-1">Meet Dr. Tanu</h2>
          <div className="w-12 h-1 bg-[#0000EE] rounded-full mb-5" />
          <p className="font-inter text-[#4a4a4a] text-base leading-relaxed mb-4">
            Dr. Tanu is a dedicated specialist in Advanced Endodontics, bringing precision, empathy, and years of
            expertise to every patient interaction at {CLINIC.name}, Haldwani.
          </p>
          <p className="font-inter text-[#4a4a4a] text-base leading-relaxed mb-8">
            With a focus on root canal therapy and complex endodontic procedures, Dr. Tanu uses the latest technology
            to ensure treatments that are as comfortable as they are effective — from your first consultation to
            complete recovery.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {STATS.map(({ stat, label }) => (
              <div key={label} className="bg-[#f7f8fa] rounded-2xl p-4 text-center border border-[rgba(0,0,0,0.05)]">
                <p className="font-poppins font-bold text-[#0000EE] text-xl">{stat}</p>
                <p className="font-inter text-[11px] text-[#4a4a4a] mt-1 leading-tight">{label}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollTo("contact")}
            className="mt-8 flex items-center gap-2 bg-[#0000EE] hover:bg-[#0000C4] text-white font-poppins font-semibold text-sm rounded-xl px-6 py-3 transition-all shadow-md"
          >
            Book with Dr. Tanu <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
