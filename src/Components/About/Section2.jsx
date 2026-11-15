import React from "react";
import { motion } from "framer-motion";

// --- Placeholder Image (Founder/CEO) ---
// Ek professional portrait image (Arms crossed, solid background)
const FOUNDER_IMAGE =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop";

// --- Luxury Easing Curve ---
const luxuryEase = [0.25, 0.1, 0.25, 1.0];

const Section2 = () => {
  return (
    <section className="overflow-hidden bg-white px-4 py-16 font-sans md:px-12 lg:px-20 xl:px-2 xl:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* ================= LEFT SIDE: STORY CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: luxuryEase }}
          className="flex flex-col justify-center"
        >
          {/* Badge */}
          <span className="mb-6 inline-block w-max rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-3 py-1.5 text-[11px] font-bold tracking-widest text-white uppercase">
            Our Brand Story
          </span>

          {/* Heading */}
          <h2 className="mb-8 text-3xl leading-tight font-bold text-slate-900 md:text-4xl lg:text-5xl xl:text-4xl">
            SourceGuy was born out of <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#F5386B] to-[#FDB750] bg-clip-text text-transparent">
              frustration!!
            </span>
          </h2>

          {/* Story Paragraphs */}
          <div className="space-y-6 text-lg leading-relaxed font-medium text-slate-600">
            <p>
              In my early days as an e-commerce entrepreneur, I quickly learned
              that the hardest part of running a business wasn’t finding
              customers; it was keeping promises to them.
            </p>
            <p>
              A bulk order that should have taken five days to deliver ended up
              taking nearly three weeks. By the time the shipment arrived, the
              client had moved on to a competitor. That single experience cost
              me more than money, it cost me trust.
            </p>
            <p>
              I realized something important: logistics isn’t just a back-office
              function. It’s the backbone of every business. Without reliability
              in sourcing and shipping, growth collapses. That’s when I decided
              to build a solution I wish I had from the start; a partner that
              removes the stress of sourcing, inspections, and freight
              management.
            </p>
            <p className="font-bold text-slate-900">
              That partner became SourceGuy.
            </p>
          </div>

          {/* Button */}
          <div className="mt-10">
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#991b1b" }}
              whileTap={{ scale: 0.98 }}
              className="rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-8 py-4 text-sm font-bold tracking-widest text-white uppercase shadow-lg transition-all hover:shadow-red-900/30"
            >
              Sounds Familiar?
            </motion.button>
          </div>
        </motion.div>

        {/* ================= RIGHT SIDE: FOUNDER IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: luxuryEase, delay: 0.2 }}
          className="relative h-full min-h-[500px] w-full"
        >
          {/* Image Container */}
          <div className="relative h-full w-full overflow-hidden rounded-lg bg-gray-100 shadow-2xl xl:h-[720px]">
            <img
              src={FOUNDER_IMAGE}
              alt="Kaleem HK - CEO"
              className="h-full w-full object-cover object-top grayscale-[20%] filter transition-all duration-700 hover:grayscale-0"
            />

            {/* Gradient Overlay (Bottom) for Text Readability */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            {/* Founder Details Overlay */}
            <div className="absolute bottom-8 left-8 z-10 text-white">
              {/* Signature Animation */}
              <motion.div
                initial={{ opacity: 0, pathLength: 0 }}
                whileInView={{ opacity: 1, pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                className="mb-2 w-32 md:w-40"
              >
                {/* SVG Signature Placeholder (White Stroke) */}
                <svg
                  viewBox="0 0 200 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M10,60 C40,50 40,20 60,30 C70,35 60,60 80,50 C100,40 120,40 140,50 C160,60 180,20 190,40"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                  />
                </svg>
              </motion.div>

              {/* Name & Title */}
              <h3 className="mb-1 text-2xl font-bold tracking-tight md:text-3xl">
                Kaleem HK.
              </h3>
              <p className="text-sm font-medium tracking-widest text-gray-300 uppercase">
                CEO & Founder
              </p>
            </div>
          </div>

          {/* Decorative Background Pattern (Optional behind image) */}
          <div className="absolute top-10 -right-10 -z-10 hidden h-full w-full rounded-lg border-2 border-gray-100 lg:block"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;
