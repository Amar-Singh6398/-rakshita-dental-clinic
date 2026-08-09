import { MapPin, Clock, Phone,MessageCircle } from "lucide-react";
import {FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.jpg";
import { NAV_LINKS, CLINIC , SOCIAL_LINKS} from "../data/content";


export default function Footer({ scrollTo }) {
  return (
    <footer id="footer" className="bg-[#050550] text-white">
       <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch  p-[30px]">

      {/* ================= MAP ================= */}
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">

        <iframe
          title="Rakshita Dental Clinic Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1740.965870958819!2d79.49611671328428!3d29.22556219999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09b025be70e1f%3A0xf2501d3d3b8ccf6f!2sRakshita%20Dental%20Clinic%3A%20Dr%20Tanu%2C%20A%20Center%20of%20Advanced%20Endodontics!5e0!3m2!1sen!2sin!4v1785650058124!5m2!1sen!2sin"
          className="w-full h-[100%]"
          loading="lazy"
          allowFullScreen
          style={{ border: 0 }}
          referrerPolicy="strict-origin-when-cross-origin"
        />

      </div>

      {/* ================= CLINIC INFO ================= */}
      <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 flex flex-col justify-between">

        {/* Logo */}
        <div>

          <div className="flex items-center gap-4 mb-8">
            <img
              src={logo}
              alt="Logo"
              className="w-14 h-14 rounded-xl object-cover"
            />

            <div>
              <h3 className="font-poppins text-2xl font-bold">
                {CLINIC.name}
              </h3>

              <p className="text-blue-200">
                {CLINIC.tagline}
              </p>
            </div>
          </div>

          <div className="space-y-6">

            <div className="flex gap-4">
              <MapPin className="text-[#FFDE00] mt-1" />

              <div>
                <p className="font-semibold">Address</p>

                <p className="text-blue-200 text-sm">
                  {CLINIC.address.line1}
                  <br />
                  {CLINIC.address.line2}
                  <br />
                  {CLINIC.address.line3}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-[#FFDE00]" />

              <div>
                <p className="font-semibold">Working Hours</p>

                <p className="text-blue-200 text-sm">
                  {CLINIC.hours}
                </p>
              </div>
            </div>

            <div>
  <p className="font-poppins font-semibold text-white mb-4">
    Connect With Us
  </p>

  <div className="flex items-center gap-4">

    <a
      href={SOCIAL_LINKS.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ffde00] hover:text-[#000] transition-all duration-300"
    >
      <FaLinkedin size={20} />
    </a>

    <a
      href={SOCIAL_LINKS.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFDE00] hover:text-[#000] transition-all duration-300"
    >
      <FaInstagram size={20} />
    </a>

    <a
      href={`https://wa.me/${CLINIC.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300"
    >
      <FaWhatsapp  size={20} />
    </a>

  </div>
</div>

        

          </div>
        </div>

      </div>

    </div>


   

      {/* Footer bar */}
     <div className="border-t border-white/10">
  <div className="max-w-7xl mx-auto px-5 py-5 flex justify-center items-center">
    <p className="font-inter text-xs text-blue-300 flex items-center gap-1">
      © {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
    </p>
  </div>
</div>
    </footer>
  );
}
