import { useState } from "react";
import { GALLERY } from "../data/content";
import { ChevronDown } from "lucide-react";

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleImages = GALLERY.slice(0, visibleCount);
  const hasMore = visibleCount < GALLERY.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section id="gallery" className="py-20 bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="section-tag">Our Space</span>

          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#1a1a1a] mt-2 mb-3">
            Take a Look Inside
          </h2>

          <p className="font-inter text-[#4a4a4a] max-w-md mx-auto">
            A modern, welcoming clinic designed for your comfort and care.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleImages.map(({ url, alt }, i) => (
            <div
              key={i}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                bg-[#e8eeff]
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-500
              "
            >
              <img
                src={url}
                alt={alt}
                className="
                  w-full
                  h-64
                  md:h-72
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
                loading="lazy"
              />

              {/* Subtle overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/20
                  via-transparent
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              />
            </div>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMore}
              className="
                inline-flex
                items-center
                gap-2
                px-7
                py-3
                rounded-full
                bg-[#0000ee]
                text-white
                font-inter
                font-medium
                shadow-md
                hover:bg-[#172f6d]
                hover:shadow-lg
                transition-all
                duration-300
              "
            >
              Load More
              <ChevronDown size={18} />
            </button>
          </div>
        )}

        {/* Optional count */}
        <p className="text-center text-sm text-gray-500 mt-4 font-inter">
          Showing {Math.min(visibleCount, GALLERY.length)} of{" "}
          {GALLERY.length} images
        </p>

      </div>
    </section>
  );
}