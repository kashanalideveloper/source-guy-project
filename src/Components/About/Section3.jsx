import React from "react";
import { motion } from "framer-motion";

// --- Luxury Easing Curve ---
const luxuryEase = [0.25, 0.1, 0.25, 1.0];

const Section3 = () => {
  return (
    <section className="bg-slate-50 px-4 py-16 font-sans md:px-12 lg:px-20 xl:px-2 xl:py-16">
      <div className="mx-auto max-w-4xl text-center">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: luxuryEase }}
        >
          {/* Badge */}
          <span className="mb-6 inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-3 py-1.5 text-[10px] font-bold tracking-widest text-white uppercase shadow-sm md:text-xs">
            Who We Serve
          </span>

          {/* Main Heading */}
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Businesses We Help
          </h2>

          {/* Decorative Red Line */}
          <div className="mx-auto mb-10 h-1 w-16 rounded-full bg-[#B91C1C]"></div>
        </motion.div>

        {/* ================= CONTENT PARAGRAPHS ================= */}
        <div className="space-y-6 text-lg leading-relaxed font-medium text-slate-600 md:text-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: luxuryEase, delay: 0.2 }}
          >
            We work with e-commerce sellers, Amazon FBA entrepreneurs,
            wholesalers, and business owners across the globe. Whether you’re
            launching your first product or managing a growing inventory,
            SourceGuy ensures your supply chain runs smoothly—so you can scale
            without bottlenecks.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: luxuryEase, delay: 0.3 }}
          >
            Our value is simple: we help businesses avoid the delays,
            miscommunication, and quality-control nightmares that often sink
            growth. We give you clarity, speed, and trust in a space where those
            three things are rare.
          </motion.p>
        </div>

        {/* ================= BOTTOM TAGLINE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: luxuryEase, delay: 0.5 }}
          className="mt-12 md:mt-16"
        >
          <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
            We Streamline Supply Chain for Businesses That Want to Scale
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default Section3;
