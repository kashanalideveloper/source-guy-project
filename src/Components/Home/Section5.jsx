import React from "react";
import { motion } from "framer-motion";

const Section5 = () => {
  return (
    <section className="w-full overflow-hidden bg-[#f8fafc] py-16 font-sans lg:py-28 xl:py-16">
      <div className="container mx-auto px-4 lg:px-12 xl:px-2">
        {/* Main Animation Container */}
        <motion.div
          initial={{ opacity: 0, y: 80 }} // Start slightly lower
          whileInView={{ opacity: 1, y: 0 }} // Move to original position
          viewport={{ once: true, margin: "-100px" }} // Trigger animation when in view
          transition={{ duration: 0.9, ease: "easeOut" }} // Smooth easing
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          {/* 1. Red Badge */}
          <span className="mb-8 inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-white uppercase shadow-sm">
            Our Results
          </span>

          {/* 2. Main Heading */}
          <h2 className="mb-8 text-4xl leading-tight font-bold tracking-tight text-[#0f172a] lg:text-5xl">
            Freight Done{" "}
            <span className="relative inline-block">
              Right
              {/* Red Underline Effect */}
              <span className="absolute -bottom-2 left-0 h-[4px] w-full rounded-full bg-gradient-to-r from-[#F5386B] to-[#FDB750]"></span>
            </span>{" "}
            — Start to Finish
          </h2>

          {/* 3. Description Paragraph */}
          <p className="mb-10 max-w-3xl text-[16px] leading-relaxed font-medium text-slate-800 lg:text-[18px]">
            You don't need a logistics department. You need a logistics partner.
            That's where we come in. From sourcing to doorstep delivery, our
            clients never chase couriers, brokers, or suppliers. We do it all!
          </p>

          {/* 4. Bottom Bold Tagline */}
          <h3 className="text-xl font-bold text-[#0f172a] lg:text-2xl">
            Our results speak for themselves! So, what's holding you back?
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default Section5;
