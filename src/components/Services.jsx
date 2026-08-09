import { SERVICES } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="section-tag">What We Offer</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#1a1a1a] mt-2 mb-3">Our Services</h2>
          <p className="font-inter text-[#4a4a4a] max-w-xl mx-auto">
            Comprehensive dental care under one roof, delivered with precision and compassion.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map(({ icon: Icon, name, desc }) => (
            <div
              key={name}
              className="hover-lift bg-white rounded-2xl p-5 border border-[rgba(0,0,0,0.06)] cursor-pointer group"
            >
              <div className="w-11 h-11 bg-[#FFDE00] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0000EE] transition-colors">
                <Icon className="w-5 h-5 text-[#1a1a1a] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-poppins font-semibold text-[#1a1a1a] text-[0.95rem] mb-1">{name}</h3>
              <p className="font-inter text-[#4a4a4a] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
