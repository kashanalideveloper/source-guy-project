import React from "react";
import { motion } from "framer-motion";

const Section11 = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0000] to-[#2b0005] px-4 py-16 text-center font-sans sm:px-6 lg:px-8 xl:px-2 xl:py-16">
      {/* Optional faint radial glow for premium focus */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,34,41,0.05)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-4xl leading-[1.15] font-bold tracking-tight text-white md:text-5xl lg:text-[56px]"
        >
          Ready to Ditch the{" "}
          <span className="bg-gradient-to-r from-[#F5386B] to-[#FDB750] bg-clip-text text-transparent">
            Overhead
          </span>{" "}
          and Scale Smarter?
        </motion.h2>

        {/* Paragraph Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 max-w-4xl text-[17px] leading-relaxed font-medium text-white md:text-[20px]"
        >
          With SourceGuy as your outsourced supply chain partner, you'll cut
          costs, eliminate complexity, and gain the expertise of a global
          freight team — without hiring anyone.
        </motion.p>

        {/* Small Red Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 h-[3px] w-12 bg-[#cc2229]"
        />

        {/* Main CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mb-8 rounded-lg bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-8 py-4 text-sm font-bold tracking-[0.1em] text-white uppercase shadow-[0_0_30px_rgba(204,34,41,0.2)] transition-colors hover:bg-[#a61920] md:px-12 md:text-[15px]"
        >
          Book A Free Supply Chain Strategy Call
        </motion.button>

        {/* Footer Guarantee Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm font-medium text-slate-200 md:text-[15px]"
        >
          No contracts. No pressure. Just clarity on how much you could save.
        </motion.p>
      </div>
    </section>
  );
};

export default Section11;
