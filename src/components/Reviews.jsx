import { useState } from "react";
import { Star, ChevronDown, ChevronUp } from "lucide-react";
import { REVIEWS } from "../data/content";

function ReviewCard({ name, time, quote, stars }) {
  const [expanded, setExpanded] = useState(false);

  // Number of characters shown before Read More
  const maxLength = 190;

  const isLong = quote.length > maxLength;

  const displayQuote =
    !expanded && isLong
      ? quote.slice(0, maxLength).trim() + "..."
      : quote;

  return (
    <div
      className="
        hover-lift
        bg-white
        border
        border-[rgba(0,0,0,0.06)]
        rounded-2xl
        p-5
        shadow-sm
        w-[300px]
        shrink-0
        flex
        flex-col
      "
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {[...Array(stars)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-[#FFDE00] text-[#FFDE00]"
          />
        ))}
      </div>

      {/* Review */}
      <div className="flex-1">
        <p className="font-inter text-[#4a4a4a] text-sm leading-relaxed">
          "{displayQuote}"
        </p>

        {/* Read More */}
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="
              mt-2
              inline-flex
              items-center
              gap-1
              font-inter
              text-xs
              font-semibold
              text-[#0000EE]
              hover:underline
              transition
            "
          >
            {expanded ? "Read less" : "Read more"}

            {expanded ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>
        )}
      </div>

      {/* Bottom */}
      <div className="border-t border-[rgba(0,0,0,0.06)] pt-3 mt-4 flex items-center justify-between">
        <div>
          <p className="font-poppins font-semibold text-[#1a1a1a] text-sm">
            {name}
          </p>

          <p className="font-inter text-xs text-[#4a4a4a]">
            {time}
          </p>
        </div>

        <div className="w-8 h-8 bg-[#0000EE] rounded-full flex items-center justify-center">
          <span className="font-poppins font-bold text-white text-xs">
            {name[0]}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="section-tag">Testimonials</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#1a1a1a] mt-2 mb-4">
            What Our Patients Say
          </h2>
          <div className="inline-flex items-center gap-3 bg-[#f7f8fa] border border-[rgba(0,0,0,0.06)] rounded-2xl px-5 py-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FFDE00] text-[#FFDE00]" />
              ))}
            </div>
            <span className="font-poppins font-bold text-[#1a1a1a]">4.9</span>
            <span className="font-inter text-sm text-[#4a4a4a]">based on 100+ Google Reviews</span>
            <a
              href={"https://www.google.com/search?q=rakshita+dental+clinic&oq=ra&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg5MgYIAhAjGCcyDQgDEAAYgwEYsQMYgAQyFggEEC4YgwEYxwEYsQMY0QMYgAQYigUyBggFEEUYPDIGCAYQRRg9MgYIBxBFGD3SAQc5MTJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#sv=CAESzQEKuQEStgEKd0FKaVQ0dExoZkp4c0pUZ18zQ3ZuZkI2dVZkVEhURThzNEJKeVM5WU1UelpsWktKS2U2S1huRUhXOWtXbGZTWTdCakY1WmZLcXhHWE1CQ2FGN2k1SUp3UDVoazNhMjhUaThHMmZFak5pbjJNTFo2bllpZkFoZlFvEhdLYlJNYXRMR0ZaelF3Y3NQMk1HTjZRWRoiQURzcjlmVGNsWU5IS2FMbHE4SmNnbUs4MUN0elF1QmtlURIEODA1MRoBMyoAMAA4AUAAGAAg1ub2WkoCEAI"}
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-xs font-medium text-[#0000EE] underline underline-offset-2"
            >
              View all
            </a>
          </div>
        </div>
      </div>

      {/* Full-bleed auto-scrolling marquee, fades at both edges, pauses on hover */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="reviews-track flex gap-5 w-max px-5">
          {[...REVIEWS, ...REVIEWS].map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} {...review} />
          ))}
        </div>
      </div>

      <style>{`
        .reviews-track {
          animation: reviews-scroll ${REVIEWS.length * 6}s linear infinite;
        }
        .reviews-track:hover {
          animation-play-state: paused;
        }
        @keyframes reviews-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}