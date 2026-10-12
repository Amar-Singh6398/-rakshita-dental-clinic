import { useState } from "react";
import { MapPin, Clock, Phone, MessageCircle, CheckCircle, Mail } from "lucide-react";
import { CLINIC, QUERY_OPTIONS } from "../data/content";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
    time: "",
    message: "",
  });

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://formspree.io/f/mbgdkwwr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setSubmitted(true);
      setForm({
        name: "",
        phone: "",
        email: "",
        query: "",
        time: "",
        message: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    alert("Unable to submit the enquiry. Please try again.");
  }
};

  return (
    <section id="contact" className="py-20 bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-start">
        {/* Left */}
        <div className="md:pt-4">
          <span className="section-tag">Get in Touch</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#1a1a1a] mt-2 mb-3">
            Book Your Appointment
          </h2>
          <p className="font-inter text-[#4a4a4a] text-base mb-8 leading-relaxed">
            Fill the form and our team will contact you shortly to confirm your appointment.
          </p>

          <div className="flex flex-col gap-3 mb-10">
            <a
              href={`https://wa.me/${CLINIC.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-poppins font-semibold text-sm rounded-xl px-5 py-3.5 transition-colors shadow-md shadow-green-100"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${CLINIC.phoneTel}`}
              className="flex items-center gap-3 bg-[#0000EE] hover:bg-[#0000C4] text-white font-poppins font-semibold text-sm rounded-xl px-5 py-3.5 transition-colors shadow-md shadow-blue-100"
            >
              <Phone className="w-5 h-5" />
              {CLINIC.phoneDisplay} — Call Now
            </a>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 bg-[#FFDE00] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <div>
                <p className="font-inter font-medium text-sm text-[#1a1a1a]">Clinic Address</p>
                <p className="font-inter text-sm text-[#4a4a4a] mt-0.5 leading-relaxed">
                  {CLINIC.address.line1}
                  <br />
                  {CLINIC.address.line2}
                  <br />
                  {CLINIC.address.line3}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#FFDE00] rounded-full flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <div>
                <p className="font-inter font-medium text-sm text-[#1a1a1a]">Opening Hours</p>
                <p className="font-inter text-sm text-[#4a4a4a] mt-0.5">{CLINIC.hours}</p>
              </div>
            </div>

       {/* Email Addresses */}
<div className="flex items-start gap-3">
  <div className="w-9 h-9 bg-[#FFDE00] rounded-full flex items-center justify-center shrink-0 mt-0.5">
    <Mail className="w-4 h-4 text-[#1a1a1a]" />
  </div>

  <div className="min-w-0">
    <p className="font-inter font-medium text-sm text-[#1a1a1a]">
      Email Address
    </p>

    <div className="flex flex-col gap-1 mt-1">
      <a
        href="mailto:drsainisinghtanu543@gmail.com"
        className="font-inter text-sm text-[#4a4a4a] hover:text-[#0000EE] transition-colors break-all"
      >
        drsainisinghtanu543@gmail.com
      </a>

      <a
        href="mailto:rakshitadentalcare543@gmail.com"
        className="font-inter text-sm text-[#4a4a4a] hover:text-[#0000EE] transition-colors break-all"
      >
        rakshitadentalcare543@gmail.com
      </a>
    </div>
  </div>
</div>
          </div>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-blue-50 border border-[rgba(0,0,0,0.05)] p-7 md:p-8">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-[#FFDE00] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h3 className="font-poppins font-bold text-2xl text-[#1a1a1a] mb-2">Thank You!</h3>
              <p className="font-inter text-[#4a4a4a] text-base leading-relaxed mb-8">
                We've received your enquiry. Our team will reach out to you shortly.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/${CLINIC.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-poppins font-semibold text-sm rounded-xl px-5 py-3 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
                <a
                  href={`tel:${CLINIC.phoneTel}`}
                  className="flex items-center justify-center gap-2 border-2 border-[#0000EE] text-[#0000EE] font-poppins font-semibold text-sm rounded-xl px-5 py-3 transition-colors"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-inter text-sm font-medium text-[#1a1a1a] block mb-1.5">
                  Full Name <span className="text-[#0000EE]">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="ring-yellow w-full bg-[#f7f8fa] border border-[rgba(0,0,0,0.08)] rounded-xl px-4 py-3 text-sm font-inter text-[#1a1a1a] placeholder-[#9a9aaa] outline-none focus:border-[#FFDE00] focus:ring-2 focus:ring-[#FFDE00]/30 transition"
                />
              </div>
              <div>
                <label className="font-inter text-sm font-medium text-[#1a1a1a] block mb-1.5">
                  Phone Number <span className="text-[#0000EE]">*</span>
                </label>
                <input
                  required
                  type="tel"
                  placeholder="Your mobile number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="ring-yellow w-full bg-[#f7f8fa] border border-[rgba(0,0,0,0.08)] rounded-xl px-4 py-3 text-sm font-inter text-[#1a1a1a] placeholder-[#9a9aaa] outline-none focus:border-[#FFDE00] focus:ring-2 focus:ring-[#FFDE00]/30 transition"
                />
              </div>
              <div>
                <label className="font-inter text-sm font-medium text-[#1a1a1a] block mb-1.5">
                  Email <span className="text-[#9a9aaa] font-normal">(optional)</span>
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="ring-yellow w-full bg-[#f7f8fa] border border-[rgba(0,0,0,0.08)] rounded-xl px-4 py-3 text-sm font-inter text-[#1a1a1a] placeholder-[#9a9aaa] outline-none focus:border-[#FFDE00] focus:ring-2 focus:ring-[#FFDE00]/30 transition"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-inter text-sm font-medium text-[#1a1a1a] block mb-1.5">
                    Select Query <span className="text-[#0000EE]">*</span>
                  </label>
                  <select
                    required
                    value={form.query}
                    onChange={(e) => setForm({ ...form, query: e.target.value })}
                    className="ring-yellow w-full bg-[#f7f8fa] border border-[rgba(0,0,0,0.08)] rounded-xl px-4 py-3 text-sm font-inter text-[#1a1a1a] outline-none focus:border-[#FFDE00] focus:ring-2 focus:ring-[#FFDE00]/30 transition appearance-none"
                  >
                    <option value="">Choose...</option>
                    {QUERY_OPTIONS.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-inter text-sm font-medium text-[#1a1a1a] block mb-1.5">Preferred Time</label>
                  <select
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="ring-yellow w-full bg-[#f7f8fa] border border-[rgba(0,0,0,0.08)] rounded-xl px-4 py-3 text-sm font-inter text-[#1a1a1a] outline-none focus:border-[#FFDE00] focus:ring-2 focus:ring-[#FFDE00]/30 transition appearance-none"
                  >
                    <option value="">Any time</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="font-inter text-sm font-medium text-[#1a1a1a] block mb-1.5">
                  Message <span className="text-[#9a9aaa] font-normal">(optional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your issue or any additional details..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="ring-yellow w-full bg-[#f7f8fa] border border-[rgba(0,0,0,0.08)] rounded-xl px-4 py-3 text-sm font-inter text-[#1a1a1a] placeholder-[#9a9aaa] outline-none focus:border-[#FFDE00] focus:ring-2 focus:ring-[#FFDE00]/30 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0000EE] hover:bg-[#0000C4] text-white font-poppins font-semibold text-base rounded-xl py-3.5 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 mt-1"
              >
                Submit Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
