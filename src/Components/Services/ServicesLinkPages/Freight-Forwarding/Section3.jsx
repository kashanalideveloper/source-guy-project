import React from "react";
import { motion } from "framer-motion";
import { Play, AlertCircle } from "lucide-react"; // Standard icons

const Section3 = () => {
  // Animation Variants for smooth reveal
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 font-sans lg:py-28 xl:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-2">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT SECTION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase shadow-md shadow-pink-200">
                Hurdles During Product Sourcing
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeInUp}
              className="text-4xl leading-[1.15] font-bold text-[#0F172A] lg:text-5xl"
            >
              Challenges of Product <br />
              Sourcing in China
            </motion.h2>

            <motion.ul className="space-y-6 pt-4" variants={staggerContainer}>
              {[
                "Time-Consuming and Complex Task",
                "Requires Extensive Research",
                "Prompt Coordination",
                "Extremely Overwhelming",
                "Requires Strong Negotiation Skills",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="group flex cursor-default items-center gap-4"
                >
                  {/* UPDATED: Gradient Icon Circle */}
                  {/* Custom Alert Icon based on Image */}
                  <div className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 transition-transform duration-300 group-hover:scale-110">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-[#F5386B] to-[#FDB750] shadow-sm">
                      <span className="text-xs leading-none font-black text-white">
                        !
                      </span>
                    </div>
                  </div>

                  {/* Text with Hover Effect */}
                  <span className="text-lg font-semibold text-slate-700 transition-colors duration-300 group-hover:text-[#F5386B]">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* RIGHT IMAGE SECTION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative mt-12 flex justify-center lg:mt-0 lg:block lg:pl-10"
          >
            {/* Decorative Pattern */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="pointer-events-none absolute -top-6 right-4 z-0 h-40 w-40 opacity-40 sm:h-48 sm:w-48 lg:-top-8 lg:-right-7 lg:h-64 lg:w-64 lg:opacity-60"
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                <defs>
                  <pattern
                    id="diagonalHatch"
                    patternUnits="userSpaceOnUse"
                    width="4"
                    height="4"
                  >
                    <path
                      d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2"
                      stroke="#D64545"
                      strokeWidth="0.5"
                      opacity="0.3"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diagonalHatch)" />
              </svg>
            </motion.div>

            {/* Main Image */}
            <motion.div
              variants={scaleIn}
              className="relative z-10 h-[320px] w-full max-w-[360px] overflow-hidden rounded-xl shadow-2xl sm:h-[360px] sm:max-w-[400px] lg:h-[400px] lg:w-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800"
                alt="Delivery Service"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Secondary Image */}
            <motion.div
              initial={{ opacity: 0, y: 50, x: 50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute right-2 -bottom-10 z-20 w-[75%] max-w-[260px] sm:right-4 sm:max-w-[300px] lg:-right-12 lg:-bottom-12 lg:w-2/3"
            >
              <div className="h-[180px] overflow-hidden rounded-xl border-[6px] border-white shadow-2xl sm:h-[220px] lg:h-[250px] lg:w-[350px] xl:w-[250px]">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600"
                  alt="Warehouse Logistics"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
