import React from "react";
import { motion } from "framer-motion";

const Section4 = () => {
  return (
    <section className="relative overflow-hidden bg-[#110304] px-4 py-16 text-center font-sans text-white xl:px-2 xl:py-16">
      {/* Optional faint background glow for premium feel */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[#2a0808] opacity-30" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-[54px]"
        >
          Let's Talk{" "}
          <span className="bg-gradient-to-r from-[#F5386B] to-[#FDB750] bg-clip-text text-transparent">
            Freight
          </span>
        </motion.h2>

        {/* Paragraph Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 max-w-4xl text-base leading-relaxed font-medium text-white md:text-[17px]"
        >
          You don't need more apps, brokers, or freelancers. You need a freight
          team that just gets it done. Outsource your entire freight operation
          today. No more logistics headaches. No more missed deadlines. Just
          streamlined shipping, end-to-end.
        </motion.p>

        {/* Sub Heading (Call to Action Hook) */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 text-2xl font-bold md:text-[28px]"
        >
          Book Your{" "}
          <span className="bg-gradient-to-r from-[#F5386B] to-[#FDB750] bg-clip-text text-transparent">
            FREE 1-on-1 Consultation
          </span>
        </motion.h3>

        {/* Small Red Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10 h-1 w-12 bg-[#cc2229]"
        />

        {/* Final CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-md bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-10 py-4 text-[13px] font-bold tracking-[0.15em] text-white uppercase shadow-[0_0_40px_rgba(204,34,41,0.3)] transition-colors hover:bg-[#a61920]"
        >
          Speak To Consultant
        </motion.button>
      </div>
    </section>
  );
};

export default Section4;
