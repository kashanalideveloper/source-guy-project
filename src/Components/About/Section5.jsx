import React from "react";
import { motion } from "framer-motion";

// --- Luxury Easing Curve ---
const luxuryEase = [0.25, 0.1, 0.25, 1.0];

const Section5 = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#2a0a0a] via-[#4a0404] to-[#1a0000] px-4 py-16 font-sans md:px-12 lg:px-20 xl:px-2 xl:py-16">
      {/* Decorative Glow (Background Ambience) */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,_rgba(185,28,28,0.15)_0%,_transparent_70%)]"></div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* ================= HEADING ================= */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: luxuryEase }}
          className="mb-8 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          The Face of SourceGuy
        </motion.h2>

        {/* ================= PARAGRAPH ================= */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: luxuryEase, delay: 0.2 }}
          className="mb-10 text-lg leading-relaxed font-medium text-red-50/90 md:text-xl"
        >
          SourceGuy isn’t a faceless corporation. It started with me, an
          entrepreneur who knows firsthand how painful supply chain failures can
          be. Today, we’re a team driven by the same mission: to safeguard
          businesses from the problems I once faced. Behind every shipment and
          inspection is a team of people who care about getting it right because
          we know the stakes.
        </motion.p>

        {/* ================= TAGLINE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: luxuryEase, delay: 0.4 }}
        >
          <h3 className="mb-6 text-xl font-bold text-white md:text-2xl">
            We don’t just move products, we move businesses forward.
          </h3>

          {/* Animated Separator Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "64px" }} // Expands to 64px
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: luxuryEase, delay: 0.6 }}
            className="mx-auto mb-12 h-1 rounded-full bg-white"
          />
        </motion.div>

        {/* ================= BUTTON ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: luxuryEase, delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#991b1b" }}
            whileTap={{ scale: 0.95 }}
            className="rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-10 py-4 text-sm font-bold tracking-widest text-white uppercase shadow-2xl transition-all hover:shadow-red-900/50"
          >
            Speak To Consultant
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Section5;
