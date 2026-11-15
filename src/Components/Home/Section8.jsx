import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import logo from "../../assets/images/62a221df443b787d58371253-ricz3w9kphq2yrycpt6ipr74ye0txlkggmhmte9o88.png";
import alibaba from "../../assets/images/alibaba-verified.png";

const Section8 = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-16 font-sans lg:py-28 xl:py-16">
      <div className="container mx-auto px-4 lg:px-12 xl:px-2">
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row lg:gap-24">
          {/* ================= LEFT SIDE (Slide from Left) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex w-full flex-col items-start lg:w-1/2"
          >
            {/* Badge */}
            <span className="mb-6 inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-3 py-1.5 text-[11px] font-bold tracking-widest text-white uppercase">
              Verified
            </span>

            {/* Heading */}
            <h2 className="mb-4 text-4xl leading-[1.15] font-bold tracking-tight text-[#0f172a] lg:text-5xl">
              We're Alibaba <br />
              Verified Supplier
            </h2>

            {/* Sub-heading */}
            <p className="mb-10 text-lg font-medium text-slate-500">
              Verified by Alibaba. Trusted by global buyers.
            </p>

            {/* Logos Area (Simulating the Image in Screenshot) */}
            <div className="flex items-center gap-4">
              {/* Alibaba Logo */}
              <div className="flex h-14 w-auto">
                <img
                  src={logo}
                  alt="Alibaba"
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* Verified Badge Simulated */}
              <div className="flex h-12 flex-col justify-center rounded-lg border border-blue-100 bg-[#eff6ff] px-1">
                <img src={alibaba} className="h-10 w-26" alt="" />
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE (Slide from Right) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            {/* Description Paragraph */}
            <p className="mb-6 text-[16px] leading-relaxed font-medium text-slate-800">
              SourceGuy is an Alibaba Verified Supplier, meaning our business,
              operations, and capabilities are independently audited. This
              reduces risk, ensures accountability, and gives you a reliable
              partner for end-to-end freight and sourcing.
            </p>

            {/* Bold Highlighted Line */}
            <h4 className="mb-10 text-[15px] font-bold text-[#0f172a] lg:text-[16px]">
              No guesswork. No middlemen. Just verified execution at scale.
            </h4>

            {/* Buttons Group */}
            <div className="flex flex-col gap-4 sm:flex-row">
              {/* Visit Store Button */}
              <button className="rounded-md bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-8 py-4 text-sm font-bold tracking-wider text-white uppercase shadow-lg shadow-red-900/20 transition-all hover:-translate-y-1 hover:bg-red-800">
                Visit Our Store
              </button>

              {/* Watch Video Button */}
              <button className="flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-8 py-4 text-sm font-bold tracking-wider text-white uppercase shadow-lg shadow-red-900/20 transition-all hover:-translate-y-1 hover:bg-red-800">
                <Play fill="currentColor" size={16} />
                Watch Video
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
