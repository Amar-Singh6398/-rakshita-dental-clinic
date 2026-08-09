import {
  Zap,
  Shield,
  Heart,
  Smile,
  Activity,
  Scissors,
  Layers,
  Wind,
  UserCheck,
  AlertCircle,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import {assets} from "../assets";

export const NAV_LINKS = ["Home", "Services", "About", "Gallery", "Reviews", "Contact"];

export const CLINIC = {
  name: "Rakshita Dental Clinic",
  tagline: "Center of Advanced Endodontics",
  phoneDisplay: "073513 78313",
  phoneTel: "07351378313",
  whatsapp: "917351378313",
  address: {
    line1: "Shop No. 9, Joshi Complex, near Rikhari Medical House,",
    line2: "Opposite Madhu Traders, Unchapul, Haldwani,",
    line3: "Uttarakhand 263139",
  },
  hours: "Mon – Sat: 9:30 AM – 7:00 PM",
  googleMapsUrl: "https://maps.google.com/?q=Rakshita+Dental+Clinic+Haldwani",
  // TODO: replace with the real Google review listing URL
  googleReviewsUrl: "https://g.co/kgs/dental",
};

export const SERVICES = [
  { icon: RotateCcw, name: "Root Canal Treatment", desc: "Painless, precision endodontic care" },
  { icon: Sparkles, name: "Teeth Whitening", desc: "Professional-grade brightening" },
  { icon: Zap, name: "Dental Implants", desc: "Permanent tooth replacement solutions" },
  { icon: Layers, name: "Veneers & Crowns", desc: "Restore and enhance your smile" },
  { icon: Wind, name: "Teeth Cleaning", desc: "Deep scaling and polishing" },
  { icon: Heart, name: "Paediatric Dentistry", desc: "Gentle care for little smiles" },
  { icon: Scissors, name: "Extractions", desc: "Safe, comfortable tooth removal" },
  { icon: Shield, name: "Dentures & Bridges", desc: "Functional, natural-looking prosthetics" },
  { icon: AlertCircle, name: "Emergency Care", desc: "Immediate relief when it matters" },
  { icon: Smile, name: "Cosmetic Procedures", desc: "Smile makeovers tailored to you" },
  { icon: Activity, name: "Braces & Aligners", desc: "Straight teeth, confident you" },
  { icon: UserCheck, name: "Oral Surgery", desc: "Expert surgical interventions" },
];

// TODO: Replace these with real, verified quotes from the clinic's actual
// Google Business reviews before launch. These are placeholders only.
export const REVIEWS = [
  {
    name: "Priya Joshi",
    time: "2 months ago",
    quote: "Dr. Tanu is incredibly thorough and gentle. My root canal was completely painless — I was shocked! The clinic is clean and the staff is so warm.",
    stars: 5,
  },
  {
    name: "Rahul Mehta",
    time: "4 months ago",
    quote: "Best dental experience I've had in Haldwani. Dr. Tanu explained every step of my treatment clearly. My implants look completely natural.",
    stars: 5,
  },
  {
    name: "Sunita Bisht",
    time: "a year ago",
    quote: "Brought my 7-year-old here and she wasn't scared at all — the doctor was so patient and kind. We are now regular patients. Highly recommend!",
    stars: 5,
  },
  {
    name: "Amit Rawat",
    time: "6 months ago",
    quote: "Professional setup, modern equipment, and Dr. Tanu is extremely skilled. Got my teeth whitened and the results exceeded my expectations.",
    stars: 5,
  },
];

// TODO: Replace with real clinic photos before launch.
export const GALLERY = [
  { url: assets.clinic1, alt: "Dental clinic", tall: true },
  { url: assets.clinic2, alt: "Modern dental treatment chair", tall: false },
  { url: assets.clinic3, alt: "Dental equipment and tools", tall: false },
  { url: assets.clinic4, alt: "Doctor consulting with patient", tall: true },
  { url: assets.clinic5, alt: "Dental implant procedure", tall: false },
  { url: assets.logo, alt: "Clean clinic interior", tall: true },
];

export const QUERY_OPTIONS = [
  "Root Canal Treatment",
  "Teeth Whitening",
  "Dental Implants",
  "Veneers & Crowns",
  "Teeth Cleaning",
  "Paediatric Dentistry",
  "Emergency / Pain",
  "General Check-up",
  "Other",
];

//
export const SOCIAL_LINKS = {
linkedin: "https://www.linkedin.com/in/dr-tanu-singh-9861b32b4/",
instagram: "https://www.instagram.com/rakshitadentalclinic/",
}