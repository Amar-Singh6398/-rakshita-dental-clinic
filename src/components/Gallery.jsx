import { GALLERY } from "../data/content";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="section-tag">Our Space</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#1a1a1a] mt-2 mb-3">
            Take a Look Inside
          </h2>
          <p className="font-inter text-[#4a4a4a] max-w-md mx-auto">
            A modern, welcoming clinic designed for your comfort and care.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY.map(({ url, alt, tall }, i) => (
            <div
              key={i}
              className="gallery-item break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-[#e8eeff]"
            >
              <img src={url} alt={alt} className={`w-full object-cover ${tall ? "h-64" : "h-48"}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
