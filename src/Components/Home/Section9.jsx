import React from "react";
import { motion } from "framer-motion";

const Section9 = () => {
  return (
    <section className="relative w-full overflow-hidden font-sans">
      {/* Background Gradient & Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1a0505] via-[#2b0808] to-[#1a0505]"></div>

      {/* Red Glow Effect (Bottom Right) */}
      <div className="absolute -right-20 -bottom-20 z-0 h-96 w-96 rounded-full bg-[#B91C1C] opacity-20 blur-[150px]"></div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:px-12 lg:py-32 xl:px-2 xl:py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          {/* Main Heading */}
          <h2 className="mb-8 text-4xl font-bold tracking-tight text-white lg:text-6xl">
            Let's Talk{" "}
            <span className="bg-gradient-to-r from-[#F5386B] to-[#FDB750] bg-clip-text text-transparent opacity-90">
              Freight
            </span>
          </h2>

          {/* Subheading/Description */}
          <p className="mb-12 max-w-3xl text-[16px] leading-relaxed font-medium text-white lg:text-[18px]">
            You don't need more apps, brokers, or freelancers. You need a
            freight team that just gets it done. Outsource your entire freight
            operation today. No more logistics headaches. No more missed
            deadlines. Just streamlined shipping, end-to-end.
          </p>

          {/* Decorative Red Line */}
          <div className="mb-12 h-1 w-16 rounded-full bg-gradient-to-r from-[#F5386B] to-[#FDB750]"></div>

          {/* Call to Action Button */}
          <button className="rounded-md bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-10 py-4 text-[13px] font-bold tracking-[0.15em] text-white uppercase shadow-lg shadow-red-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#991b1b] hover:shadow-red-900/50">
            Speak To Consultant
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Section9;
