import React from "react";
import { motion } from "framer-motion";
// Ensure you have installed framer-motion: npm install framer-motion

const Section9 = () => {
  return (
    <section className="relative flex min-h-[600px] w-full items-center overflow-hidden bg-gray-50 font-sans">
      {/* --- Background Image Area --- */}
      <div className="absolute inset-0 z-0 xl:h-[65%]">
        {/* Using a placeholder image similar to the warehouse setting */}
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Warehouse Worker"
          className="h-full w-full object-cover object-right opacity-90 md:object-center"
        />
        {/* Subtle Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] md:bg-white/40 md:backdrop-blur-none"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-[600px]">
          {/* --- Hatched Pattern Decoration --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="absolute -top-8 left-40 z-0 hidden h-12 w-32 opacity-70 md:block"
          >
            <svg width="100%" height="100%">
              <defs>
                <pattern
                  id="hatch"
                  width="8"
                  height="8"
                  patternTransform="rotate(45 0 0)"
                  patternUnits="userSpaceOnUse"
                >
                  {/* Reddish thin lines */}
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="8"
                    stroke="#b02626"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hatch)" />
            </svg>
          </motion.div>

          {/* --- DARK TESTIMONIAL CARD (Updated Animation) --- */}
          <motion.div
            // Initial state: OFF-SCREEN LEFT (x: -150) and invisible
            initial={{ opacity: 0, x: -150 }}
            // Final state: In original position (x: 0) and visible
            whileInView={{ opacity: 1, x: 0 }}
            // Trigger when 100px of the element is visible in viewport
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.9, // Slightly longer duration for smoothness
              delay: 0.4, // THE DELAY: Waits 0.4s before starting
              ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a very smooth "cool" landing
            }}
            className="relative z-10 mb-12 bg-[#13162b] p-10 shadow-2xl md:p-12 xl:mb-0"
            style={{ borderRadius: "2px" }} // Slight sharp edge aesthetic
          >
            {/* Red Quote Icon Bubble */}
            <div className="absolute -top-7 left-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#c41e25] shadow-md">
              {/* Exact Screenshot Matching SVG Quote Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="h-6 w-6 text-white"
              >
                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
              </svg>
            </div>

            {/* Testimonial Text */}
            <div className="mt-6">
              <p className="mb-10 text-xl leading-normal font-semibold text-white md:text-2xl">
                I highly recommend SourceGuy for Product Sourcing in China.
                Their dedication and professionalism are unmatched.
              </p>
            </div>

            {/* Author Profile */}
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-gray-500/50">
                {/* Placeholder for Ronald's image */}
                <img
                  src="https://i.pravatar.cc/150?img=68" // Using a generic avatar helper
                  alt="Ronald"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-lg font-medium tracking-wide text-white">
                Ronald
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section9;
