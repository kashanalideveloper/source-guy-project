import React from "react";
import { motion } from "framer-motion";

// --- Placeholder Images (Replace with your actual files) ---
const IMG_DELIVERY =
  "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=300&auto=format&fit=crop"; // Left girl
const IMG_WORKER =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop"; // Right man

// --- Luxury Easing Curve ---
const luxuryEase = [0.25, 0.1, 0.25, 1.0];

const Section12 = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 font-sans md:px-12 lg:px-20 xl:px-2 xl:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* ================= LEFT SIDE: Images Composition ================= */}
        <div className="relative flex items-center justify-center gap-4 md:gap-6 lg:justify-start">
          {/* --- Column 1: Small Image + Pattern --- */}
          <div className="relative mt-16 flex flex-col items-end md:mt-12 xl:mt-22">
            {/* Decorative Red Stripes Pattern (Animated) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: luxuryEase }}
              className="absolute -top-6 -left-6 z-0 h-24 w-24 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-30 md:h-32 md:w-32 xl:h-64 xl:w-64"
            >
              {/* SVG Pattern fallback to match screenshot exactly */}
              <svg
                width="100%"
                height="100%"
                className="fill-current text-red-200"
              >
                <pattern
                  id="pattern-stripes"
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
                <rect width="100%" height="100%" fill="url(#pattern-stripes)" />
              </svg>
            </motion.div>

            {/* Image 1 (Delivery Girl) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: luxuryEase, delay: 0.2 }}
              className="relative z-10 aspect-[3/4] w-36 overflow-hidden border-4 border-white shadow-xl md:w-48 xl:w-68"
            >
              <img
                src={IMG_DELIVERY}
                alt="Delivery Service"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>

          {/* --- Column 2: Large Image (Worker) --- */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Slide up slightly
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: luxuryEase, delay: 0.4 }}
            className="relative z-20 aspect-[3/4] w-48 overflow-hidden border-4 border-white shadow-2xl md:w-64 xl:h-112 xl:w-74"
          >
            <img
              src={IMG_WORKER}
              alt="Logistics Solution"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>

        {/* ================= RIGHT SIDE: Content ================= */}
        {/* Animation: Right se slide hoga */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: luxuryEase, delay: 0.2 }}
          className="flex flex-col justify-center text-left"
        >
          {/* Badge */}
          <div className="mb-6 inline-block">
            <span className="rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-4 py-2 text-xs font-bold tracking-widest text-white uppercase">
              Get Started
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-6 text-4xl leading-[1.15] font-bold text-slate-900 md:text-5xl">
            Let’s Talk and Find <br className="hidden lg:block" />
            <span className="text-slate-800">Your Solution</span>
          </h2>

          {/* Text Block */}
          <div className="max-w-lg space-y-6 text-lg leading-relaxed font-medium text-slate-600">
            <p>
              Take action today and experience the difference SourceGuy can make
              for your business.
            </p>
            <p>
              Contact our dedicated team to discuss your requirements and
              explore how our comprehensive services can propel your success to
              new heights.
            </p>
          </div>

          {/* Button */}
          <div className="mt-10">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#991b1b" }} // Darker red on hover
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer rounded-md bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-10 py-4 text-sm font-bold tracking-widest text-white uppercase shadow-lg transition-transform duration-300 hover:shadow-red-900/30"
            >
              Contact Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section12;
