import { Phone, Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";
import { NAV_LINKS, CLINIC } from "../data/content";

export default function Header({ scrolled, menuOpen, setMenuOpen, scrollTo }) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo("home")} className="flex items-center gap-3 group">
          <img
            src={logo}
            alt={`${CLINIC.name} logo`}
            className="h-11 w-11 object-contain rounded-lg"
          />
          <div className="hidden sm:block">
            <p className="font-poppins font-bold text-[#0000EE] text-base leading-tight">
              {CLINIC.name}
            </p>
            <p className="font-inter text-[11px] text-[#4a4a4a] leading-tight">{CLINIC.tagline}</p>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="nav-link font-inter text-sm font-medium text-[#4a4a4a] hover:text-[#0000EE] transition-colors"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${CLINIC.phoneTel}`}
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-[#0000EE] border border-[#0000EE] rounded-full px-4 py-2 hover:bg-[#0000EE] hover:text-white transition-all"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="hidden sm:block bg-[#0000EE] text-white font-poppins font-semibold text-sm rounded-full px-5 py-2 hover:bg-[#0000C4] transition-colors"
          >
            Book Now
          </button>
          <button
            className="lg:hidden p-2 text-[#1a1a1a]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#f0f0f0] px-5 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left font-inter text-base font-medium text-[#1a1a1a] py-1 hover:text-[#0000EE] transition-colors"
            >
              {link}
            </button>
          ))}
          <div className="flex gap-3 pt-2">
            <a
              href={`tel:${CLINIC.phoneTel}`}
              className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-[#0000EE] border border-[#0000EE] rounded-full px-4 py-2"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="flex-1 bg-[#0000EE] text-white font-poppins font-semibold text-sm rounded-full px-4 py-2"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
