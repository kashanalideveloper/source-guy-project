import React from "react";
import { motion } from "framer-motion";

// --- Placeholder Images ---
const IMG_MAIN =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"; // Delivery man
const IMG_SECONDARY =
  "https://sourceguy.com/wp-content/uploads/2022/09/asian-logistic-foreman-wearing-protective-mask-wor-2021-09-02-20-16-29-utc-1-656x530.webp"; // Workers

// --- Luxury Easing Curve ---
const luxuryEase = [0.25, 0.1, 0.25, 1.0];

// --- Service List Data ---
const services = [
  "Product Sourcing",
  "Pre Production Inspection",
  "During Production Inspection",
  "Pre Shipping Inspection",
  "Freight Forwarding",
  "Product Photography",
  "Sample Consolidation",
  "Sample Inspection",
];

const Section4 = () => {
  return (
    <section className="overflow-hidden bg-white font-sans">
      {/* ================= MAIN CONTENT GRID ================= */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 py-16 md:px-12 lg:grid-cols-2 lg:gap-24 lg:px-20 xl:px-2 xl:py-16">
        {/* ================= LEFT SIDE: SERVICES LIST ================= */}
        <div className="flex flex-col justify-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: luxuryEase }}
          >
            <span className="mb-6 inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-3 py-1.5 text-xs font-bold tracking-widest text-[#B91C1C] text-white uppercase">
              Services
            </span>
            <h2 className="mb-8 text-4xl leading-tight font-bold text-slate-900 md:text-5xl">
              Services We Offer
            </h2>
          </motion.div>

          {/* Services List */}
          <div className="space-y-5">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: luxuryEase,
                  delay: 0.2 + index * 0.1,
                }}
                className="group flex cursor-pointer items-center gap-4"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#F5386B] to-[#FDB750] shadow-md transition-transform group-hover:scale-110">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-lg font-bold text-slate-700 transition-colors group-hover:text-[#B91C1C]">
                  {service}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT SIDE: PREMIUM IMAGE COMPOSITION ================= */}
        <div className="relative flex h-[500px] w-full items-center justify-center lg:h-[600px] lg:justify-end">
          {/* 1. Striped Pattern (Decoration) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.5, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            // Responsive Updates:
            // - Mobile: top-12 right-3 (Same as before)
            // - Tablet (md): Thoda bada aur position adjust ki
            // - Desktop (xl): Position perfect ki
            className="absolute top-12 right-3 z-0 h-44 w-44 opacity-40 md:top-8 md:right-8 md:h-56 md:w-56 lg:h-64 lg:w-64 xl:top-5 xl:right-4"
          >
            <svg
              width="100%"
              height="100%"
              className="fill-current text-[#B91C1C]"
            >
              <pattern
                id="pattern-stripes-red"
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
                fill="url(#pattern-stripes-red)"
              />
            </svg>
          </motion.div>

          {/* 2. Secondary Image (Small, Bottom Right, Overlapping) */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: luxuryEase, delay: 0.3 }}
            // Responsive Updates:
            // - Mobile: Same
            // - Tablet (md): Height/Width thoda adjust kiya taaki main image ko cover na kare
            // - Desktop (lg/xl): Full size premium look
            className="absolute right-0 bottom-8 z-20 h-40 w-52 overflow-hidden rounded-lg border-4 border-white shadow-2xl sm:h-48 sm:w-64 md:h-48 md:w-64 lg:h-56 lg:w-72 xl:h-64 xl:w-80"
          >
            <img
              src={IMG_SECONDARY}
              alt="Port Operations"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </motion.div>

          {/* 3. Main Image (Large, Center/Left, Underlapping) */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: -30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: luxuryEase }}
            // Responsive Updates:
            // - Mobile: w-3/4 (Same)
            // - Tablet (md): w-3/5 (Thoda chota kiya taaki secondary image ke sath overlap clean ho)
            // - Desktop (lg): w-2/3
            // - XL: mr-12 (Thoda left shift taaki breathing room mile)
            className="relative z-10 aspect-[3/4] w-3/4 overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] md:aspect-[4/5] md:w-3/5 lg:w-2/3 xl:mr-12"
          >
            <img
              src={IMG_MAIN}
              alt="Delivery Service"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/10 transition-colors hover:bg-black/20"></div>
          </motion.div>
        </div>
      </div>

      {/* ================= BOTTOM TRUSTED BY BAR (FIXED) ================= */}
      <div className="relative z-30 -mt-20 mb-20 w-full overflow-hidden">
        <motion.div
          // Animation: Poora Box Right se slide hoga
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: luxuryEase }}
          // FIX 1: Added 'relative' and 'overflow-hidden'
          // 'relative': Taaki pattern iske andar hi rahe.
          // 'overflow-hidden': Taaki pattern rounded corners se bahar na nikle.
          className="relative ml-auto w-[90%] overflow-hidden rounded-l-2xl bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-6 py-8 shadow-2xl md:w-3/4 md:px-12"
        >
          <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
            {/* Left Side: Text */}
            <div className="shrink-0 text-lg font-bold tracking-widest text-white uppercase">
              Trusted by :
            </div>

            {/* Right Side: Logos */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-white md:gap-12">
              <span className="flex cursor-pointer items-center gap-1 text-xl font-bold opacity-90 transition-opacity hover:opacity-100 md:text-2xl">
                <span className="opacity-70">Helium</span>10
              </span>
              <span className="flex cursor-pointer items-center gap-1 text-xl font-semibold opacity-90 transition-opacity hover:opacity-100 md:text-2xl">
                Jungle<span className="font-light opacity-80">Scout</span>
              </span>
              <span className="flex cursor-pointer items-center gap-1 text-xl font-bold italic opacity-90 transition-opacity hover:opacity-100 md:text-2xl">
                amazon
              </span>
              <span className="flex cursor-pointer items-center gap-2 text-xl font-bold opacity-90 transition-opacity hover:opacity-100 md:text-2xl">
                <span className="text-lg">✚</span> Keepa
              </span>
            </div>
          </div>

          {/* Pattern Overlay */}
          {/* Ab ye 'relative' parent ke andar hai, to ye sirf red box me dikhega */}
          <div className="pointer-events-none absolute inset-0 z-0 opacity-10">
            <svg width="100%" height="100%" className="fill-current text-black">
              <pattern
                id="pattern-stripes-dark"
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
                fill="url(#pattern-stripes-dark)"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section4;
