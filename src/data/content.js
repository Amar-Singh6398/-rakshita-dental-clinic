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
  whatsapp: "8449197218",
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
  { icon: RotateCcw, name: "Root Canal Treatment", desc: "Painless, precision endodontic care" , image:assets.simg1 },
  { icon: Sparkles, name: "Teeth Whitening", desc: "Professional-grade brightening" , image:assets.simg2 },
  { icon: Zap, name: "Dental Implants", desc: "Permanent tooth replacement solutions" , image:assets.simg3 },
  { icon: Layers, name: "Veneers & Crowns", desc: "Restore and enhance your smile" , image:assets.simg4 },
  { icon: Wind, name: "Teeth Cleaning", desc: "Deep scaling and polishing" , image:assets.simg5 },
  { icon: Heart, name: "Paediatric Dentistry", desc: "Gentle care for little smiles" , image:assets.simg6 },
  { icon: Scissors, name: "Extractions", desc: "Safe, comfortable tooth removal" , image:assets.simg7 },
  { icon: Shield, name: "Dentures & Bridges", desc: "Functional, natural-looking prosthetics" , image:assets.simg8 },
  { icon: AlertCircle, name: "Emergency Care", desc: "Immediate relief when it matters", image:assets.simg9 },
  { icon: Smile, name: "Cosmetic Procedures", desc: "Smile makeovers tailored to you" , image:assets.simg10 },
  { icon: Activity, name: "Braces & Aligners", desc: "Straight teeth, confident you" , image:assets.simg11 },
  { icon: UserCheck, name: "Oral Surgery", desc: "Expert surgical interventions" , image:assets.simg12 },
];

// Verified Google Business reviews supplied from the clinic's Google reviews.
// Keep the wording faithful to the original reviews.

export const REVIEWS = [
  {
    name: "Ankita Aren",
    time: "2 weeks ago",
    quote:
      "I had a wonderful experience with Dr. Tanu during my root canal treatment (RCT). She handled the entire procedure with exceptional care, patience, and professionalism. What I appreciated most was that she explained every step clearly, which made me feel comfortable and reassured throughout the treatment. Her gentle approach, attention to detail, and genuine concern for patient comfort made the experience far less stressful than I had imagined. I highly recommend Dr. Tanu to anyone looking for a skilled, compassionate, and trustworthy dentist.",
    stars: 5,
  },

  {
    name: "Yashraj Arora",
    time: "a month ago",
    quote:
      "I highly recommend Rakshita Dental Clinic in Haldwani. I took my daughter there due to tooth sensitivity, and she needed a cavity filling done. Dr. Tanu was incredibly calm, gentle, and demonstrated outstanding professionalism throughout the visit. Her reassuring manner completely eased my daughter's anxiety, turning what could have been a scary experience into a smooth, painless procedure. We are so grateful for her exceptional pediatric care!",
    stars: 5,
  },

  {
    name: "Garima Arora",
    time: "a month ago",
    quote:
      "I want to express my deepest gratitude to Dr. Tanu at Rakshita Dental Clinic. I arrived at the clinic in excruciating pain due to a poorly executed root canal from Delhi. Dr. Tanu quickly identified the issue, gave me immense personal attention, and treated me successfully. The clinic itself is incredibly clean and maintains strict hygiene standards, which gave me great peace of mind. Highly recommended!",
    stars: 5,
  },

  {
    name: "Diksha Arya",
    time: "4 months ago",
    quote:
      "I had an excellent experience during my RCT treatments. The entire procedure was smooth, comfortable, and completely painless, which truly reflects her expertise and precision. She handled every step with great patience and care, ensuring I felt at ease throughout. A highly proficient dentist whom you can completely trust with your dental care.",
    stars: 5,
  },

  {
    name: "Savitri Tamta",
    time: "4 months ago",
    quote:
      "My case was a bit critical and I was about to get married, so I was quite nervous. But the doctor understood my problem with great patience and gave me the best treatment. He made me feel comfortable at every step. Today I am completely fine and feel confident. I thank him from the bottom of my heart and recommend him to everyone.",
    stars: 5,
  },
];

// TODO: Replace with real clinic photos before launch.
export const GALLERY = [
  { url: assets.img1, alt: "our happy clients", tall: true },
  { url: assets.img2, alt: "our happy clients", tall: true },
  { url: assets.img7, alt: "our happy clients", tall: true },
  { url: assets.img8, alt: "our happy clients", tall: true },
  { url: assets.img5, alt: "our happy clients", tall: true },
  { url: assets.img6, alt: "our happy clients", tall: true },
   { url: assets.img3, alt: "our happy clients", tall: true },
  { url: assets.img4, alt: "our happy clients", tall: true },
  { url: assets.img9, alt: "our happy clients", tall: true },
  { url: assets.img10, alt: "our happy clients", tall: true },
  { url: assets.clinic1, alt: "Dental clinic", tall: true },
  { url: assets.clinic2, alt: "Modern dental treatment chair", tall: false },
  { url: assets.clinic3, alt: "Dental equipment and tools", tall: false },
  { url: assets.clinic4, alt: "Doctor consulting with patient", tall: true },
  { url: assets.clinic5, alt: "Dental implant procedure", tall: false }
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