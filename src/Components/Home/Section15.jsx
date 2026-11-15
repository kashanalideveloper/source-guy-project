import React from "react";
import { motion } from "framer-motion";

// --- Placeholder Image (Delivery/Logistics Guy) ---
const CONTACT_IMAGE =
  "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800&auto=format&fit=crop";
// Note: Aap apni specific image ("guy in red shirt") yahan replace kar sakte hain.

// --- Luxury Easing Curve ---
const luxuryEase = [0.25, 0.1, 0.25, 1.0];

const Section15 = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#4a0404] via-[#2f0000] to-[#1a0000] px-4 py-24 font-sans md:px-12 lg:px-20 xl:px-2">
      {/* Decorative Glow Effect (Optional for depth) */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-red-900/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* ================= LEFT SIDE: FORM ================= */}
        {/* Animation: Left se slide */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: luxuryEase }}
          className="flex flex-col justify-center"
        >
          {/* Badge */}
          <span className="mb-6 inline-block w-max rounded-sm bg-white px-3 py-1 text-[10px] font-bold tracking-widest text-[#8B0000] uppercase">
            Get In Touch
          </span>

          {/* Heading */}
          <h2 className="mb-4 text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl xl:text-4xl">
            Freight Isn’t Just About Shipping. <br />
            It’s About Growth.
          </h2>

          <p className="mb-10 text-lg font-medium text-red-100">
            Let’s Scale Together.
          </p>

          {/* --- Form Fields --- */}
          <form className="space-y-6">
            {/* Row 1: Names */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest text-red-200 uppercase">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Ex. John"
                  className="w-full rounded-md bg-[#E5E5E5] px-4 py-2 text-sm text-slate-900 placeholder-gray-500 transition-all focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest text-red-200 uppercase">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Ex. Lewis"
                  className="w-full rounded-md bg-[#E5E5E5] px-4 py-2 text-sm text-slate-900 placeholder-gray-500 transition-all focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Row 2: Email & Phone */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest text-red-200 uppercase">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full rounded-md bg-[#E5E5E5] px-4 py-2 text-sm text-slate-900 placeholder-gray-500 transition-all focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest text-red-200 uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(081) 890-1209"
                  className="w-full rounded-md bg-[#E5E5E5] px-4 py-2 text-sm text-slate-900 placeholder-gray-500 transition-all focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Row 3: Message */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-widest text-red-200 uppercase">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full resize-none rounded-md bg-[#E5E5E5] px-4 py-3 text-sm text-slate-900 placeholder-gray-500 transition-all focus:ring-2 focus:ring-red-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#f8f8f8" }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-md border border-white bg-white px-8 py-4 text-xs font-extrabold tracking-[0.15em] text-[#8B0000] uppercase transition-all hover:shadow-lg md:w-auto"
              >
                Speak To Our Freight Strategy Team
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* ================= RIGHT SIDE: IMAGE & PATTERN ================= */}
        {/* Animation: Right se slide */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: luxuryEase, delay: 0.2 }}
          className="relative flex h-full min-h-[500px] items-center justify-center lg:justify-end"
        >
          {/* Decorative Striped Pattern (Top Right) */}
          <div className="absolute -top-6 -right-6 z-0 h-64 w-64 opacity-50">
            <svg width="100%" height="100%" className="fill-current text-white">
              <pattern
                id="pattern-stripes-white"
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
                fill="url(#pattern-stripes-white)"
              />
            </svg>
          </div>

          {/* Main Image */}
          <div className="relative z-10 h-full max-h-[600px] w-full overflow-hidden border-4 border-transparent bg-gray-800 shadow-2xl">
            {/* Using a placeholder for the "Guy with box" */}
            <img
              src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800&auto=format&fit=crop"
              alt="Logistics Partner"
              className="h-full w-full object-cover object-center"
            />

            {/* Gradient Overlay on Image Bottom (Optional for better integration) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0000] via-transparent to-transparent opacity-40"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section15;
