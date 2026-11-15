import React from "react";
import { motion } from "framer-motion";

// --- Placeholder Images ---
// Warehouse worker with yellow helmet (Similar to screenshot)
const BG_IMAGE =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop";
const AVATAR = "https://randomuser.me/api/portraits/men/32.jpg";

// --- Luxury Easing Curve ---
const luxuryEase = [0.25, 0.1, 0.25, 1.0];

const Section6 = () => {
  return (
    <section className="relative w-full overflow-hidden px-4 py-16 font-sans md:px-12 lg:px-20 xl:px-2 xl:py-16">
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG_IMAGE}
          alt="Warehouse Operations"
          className="h-full w-full object-cover object-right opacity-90 md:object-center" // Right alignment ensures worker is visible
        />
        {/* White fade overlay for better text contrast if needed on mobile */}
        <div className="absolute inset-0 bg-white/10 md:bg-transparent"></div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl items-center">
        {/* ================= TESTIMONIAL CARD ================= */}
        <div className="relative w-full lg:w-1/2">
          {/* Decorative Striped Pattern (Behind the card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -top-8 -right-8 z-0 h-40 w-40 md:h-56 md:w-56"
          >
            <svg
              width="100%"
              height="100%"
              className="fill-current text-[#B91C1C]"
            >
              <pattern
                id="pattern-stripes-testi"
                x="0"
                y="0"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
              <rect
                width="100%"
                height="100%"
                fill="url(#pattern-stripes-testi)"
              />
            </svg>
          </motion.div>

          {/* Main Dark Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: luxuryEase }}
            className="relative z-10 rounded-sm bg-[#0F172A] p-8 shadow-2xl md:p-12" // Dark Navy Background
          >
            {/* Quote Icon (Floating) */}
            <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#F5386B] to-[#FDB750] shadow-lg md:-top-8 md:left-12 md:h-16 md:w-16">
              <svg
                className="h-6 w-6 fill-current text-white md:h-8 md:w-8"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" />
              </svg>
            </div>

            {/* Testimonial Text */}
            <blockquote className="mt-4 text-lg leading-relaxed font-medium tracking-wide text-white md:text-xl">
              "SourceGuy has been instrumental in our business growth. Their
              expertise in sourcing, inspection, and photography has
              significantly improved the quality and presentation of our
              products."
            </blockquote>

            {/* Author Info */}
            <div className="mt-8 flex items-center gap-4">
              {/* Avatar */}
              <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-slate-600">
                <img
                  src={AVATAR}
                  alt="Ronald Scharr"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Name & Title */}
              <div>
                <h4 className="text-base font-bold text-white">
                  Ronald Scharr
                </h4>
                <p className="text-xs font-bold tracking-widest text-red-500 uppercase">
                  Thinklab CEO
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
