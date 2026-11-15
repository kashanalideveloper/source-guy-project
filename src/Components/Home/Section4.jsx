import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const Section4 = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-16 font-sans lg:py-28 xl:py-16">
      <div className="container mx-auto px-4 lg:px-12 xl:px-2">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* ================= LEFT SIDE: CONTENT (From Left) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            {/* Heading */}
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-[#0f172a] lg:text-5xl">
              Why Choose SourceGuy
            </h2>

            {/* Description */}
            <p className="mb-8 max-w-lg text-[16px] leading-relaxed text-black">
              We operate as your dedicated logistics department; handling
              sourcing, shipping, customs, and coordination with zero overhead.
            </p>

            {/* Checklist */}
            <ul className="mb-8 w-full space-y-4">
              {[
                "No internal logistics hires required",
                "Dedicated account managers and 24/7 tracking",
                "Transparent pricing, zero guesswork",
                "Scalable for SMEs and large enterprises",
                "All transport modes: Road, Sea, Air, Rail",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle
                    className="flex-shrink-0 fill-[#22c55e] text-white"
                    size={20}
                  />
                  <span className="text-[15px] font-medium text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Highlighted Question */}
            <div className="mb-10 flex items-start gap-3">
              <ArrowRight
                className="mt-1 flex-shrink-0 text-[#B91C1C]"
                size={20}
              />
              <p className="bg-gradient-to-r from-[#F5386B] to-[#FDB750] bg-clip-text text-[15px] font-bold text-transparent lg:text-[16px]">
                What if you could eliminate freight headaches and cut costs by
                30%?
              </p>
            </div>

            {/* CTA Button */}
            <button className="rounded-md bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-8 py-3 text-sm font-bold tracking-widest text-white uppercase shadow-lg shadow-red-900/20 transition-all hover:-translate-y-1 hover:bg-red-800">
              Give It A Try
            </button>
          </motion.div>

          {/* ================= RIGHT SIDE: SAVINGS CARD (From Right) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-lg lg:ml-auto"
          >
            <div className="relative overflow-hidden rounded-xl border-2 border-slate-100 bg-sky-50 p-8 shadow-2xl shadow-slate-200/60 lg:p-10">
              {/* Card Title */}
              <h3 className="mb-8 text-center text-2xl font-bold text-[#0f172a]">
                Before & After Savings
              </h3>

              {/* Row 1: Before */}
              <div className="mb-6">
                <div className="mb-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-slate-600">
                    Before SourceGuy
                  </span>
                  <div className="relative top-[-4px] mx-4 flex-1 border-b-2 border-dotted border-slate-300"></div>
                  <span className="text-3xl font-extrabold text-slate-800">
                    $18.50
                  </span>
                </div>
                <p className="text-xs font-light tracking-wide text-black uppercase">
                  Per unit cost
                </p>
              </div>

              {/* Row 2: After */}
              <div className="mb-8">
                <div className="mb-1 flex items-baseline justify-between">
                  <span className="bg-gradient-to-r from-[#F5386B] to-[#FDB750] bg-clip-text text-xl font-bold text-transparent">
                    After SourceGuy
                  </span>
                  <div className="relative top-[-4px] mx-4 flex-1 border-b-2 border-dotted border-red-200"></div>
                  <span className="bg-gradient-to-r from-[#F5386B] to-[#FDB750] bg-clip-text text-3xl font-extrabold text-transparent">
                    $12.95
                  </span>
                </div>
                <p className="bg-gradient-to-r from-[#F5386B] to-[#FDB750] bg-clip-text text-xs font-light tracking-wide text-transparent uppercase">
                  Per unit cost
                </p>
              </div>

              {/* Savings Box */}
              <div className="flex items-center justify-between rounded-xl border border-green-100 bg-green-100 p-4">
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-[#16a34a]">
                    Annual Savings
                  </span>
                  <span className="mt-1 text-xs font-medium text-green-600/70">
                    10,000 units
                  </span>
                </div>
                <span className="text-3xl font-extrabold text-[#16a34a]">
                  $55,500
                </span>
              </div>
            </div>

            {/* Decorative Background Blob behind card */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-50 opacity-60 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
