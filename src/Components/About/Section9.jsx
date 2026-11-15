import React, { useState } from "react";
import { motion } from "framer-motion";

// --- Certificate Images ---
const CERTIFICATES = [
  "https://sourceguy.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-28-at-12.33.17-PM-1.jpeg",
  "https://sourceguy.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-28-at-12.33.17-PM.jpeg",
  "https://cdn.prod.website-files.com/60a530a795c0ca8a81c5868a/661ff23cf5f40891e7b890f0_1.png",
  "https://sourceguy.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-28-at-12.33.17-PM-1.jpeg",
  "https://sourceguy.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-28-at-12.33.17-PM.jpeg",
  "https://cdn.prod.website-files.com/60a530a795c0ca8a81c5868a/661ff23cf5f40891e7b890f0_1.png",
];

// --- Luxury Easing Curve ---
const luxuryEase = [0.25, 0.1, 0.25, 1.0];

const Section9 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Group certificates into pairs (2 per slide)
  const itemsPerPage = 2;
  const slides = [];
  for (let i = 0; i < CERTIFICATES.length; i += itemsPerPage) {
    slides.push(CERTIFICATES.slice(i, i + itemsPerPage));
  }

  return (
    <section className="overflow-hidden bg-white px-4 py-16 font-sans md:px-12 lg:px-20 xl:px-2 xl:py-16">
      <div className="mx-auto max-w-7xl text-center">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: luxuryEase }}
          className="mb-16"
        >
          <span className="mb-4 inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-3 py-1.5 text-[11px] font-bold tracking-widest text-white uppercase">
            Our Certificates
          </span>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed font-medium text-slate-700 md:text-base">
            We are proud members of various International Trade Organizations
            and Communities. With years of experience in the industry, we have
            worked with thousands of brands worldwide ensuring quality delivery
            every single time.
          </p>
        </motion.div>

        {/* ================= SLIDER WINDOW (Overflow Hidden) ================= */}
        <div className="relative mx-auto w-full max-w-7xl overflow-hidden px-2 pb-12">
          {/* ================= TRACK (The Long Moving Train) ================= */}
          <motion.div
            // This moves the whole track left/right
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth Physics
            className="flex w-full"
          >
            {slides.map((slideItems, slideIndex) => (
              // ================= SINGLE SLIDE (Contains 2 Items) =================
              // 'min-w-full' ensures this slide takes up 100% of the view width
              <div
                key={slideIndex}
                className="grid min-w-full flex-shrink-0 grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12"
              >
                {slideItems.map((imgSrc, itemIndex) => (
                  <div key={itemIndex} className="flex h-full justify-center">
                    {/* Certificate Card */}
                    <div className="group relative w-full max-w-[550px] rounded-xl border border-slate-100 bg-white p-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)]">
                      {/* Image Container */}
                      <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-lg border border-slate-50 bg-slate-50/50">
                        <img
                          src={imgSrc}
                          alt="Certificate"
                          className="h-full w-full transform object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      {/* Blue Corner Animations (Top-Left) */}
                      <div className="pointer-events-none absolute top-0 left-0 h-8 w-8">
                        <div className="absolute top-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-blue-600 transition-transform duration-500 group-hover:scale-x-100"></div>
                        <div className="absolute top-0 left-0 h-full w-[3px] origin-top scale-y-0 bg-blue-600 transition-transform delay-75 duration-500 group-hover:scale-y-100"></div>
                      </div>

                      {/* Blue Corner Animations (Bottom-Right) */}
                      <div className="pointer-events-none absolute right-0 bottom-0 h-8 w-8">
                        <div className="absolute right-0 bottom-0 h-[3px] w-full origin-right scale-x-0 bg-blue-600 transition-transform duration-500 group-hover:scale-x-100"></div>
                        <div className="absolute right-0 bottom-0 h-full w-[3px] origin-bottom scale-y-0 bg-blue-600 transition-transform delay-75 duration-500 group-hover:scale-y-100"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ================= DOTS NAVIGATION ================= */}
        <div className="mt-4 flex items-center justify-center gap-1">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="group p-1 focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            >
              <span
                className={`block rounded-full transition-all duration-500 ease-out ${
                  currentIndex === index
                    ? "h-1.5 w-8 bg-[#B91C1C]" // Active
                    : "h-1.5 w-1.5 bg-slate-300 group-hover:bg-red-200" // Inactive
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section9;
