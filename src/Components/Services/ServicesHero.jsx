import React from "react";
import { motion } from "framer-motion";

// --- Placeholder Image (Business/Team Theme) ---
// Screenshot jaisa "Handshake" ya "Team Meeting" wala image
const SERVICE_HERO_BG =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop";

// --- Luxury Easing Curve ---
const luxuryEase = [0.25, 0.1, 0.25, 1.0];

const ServicesHero = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden font-sans">
      {/* ================= BACKGROUND IMAGE ================= */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute inset-0 h-full w-full"
      >
        <img
          src={SERVICE_HERO_BG}
          alt="Our Services Background"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* ================= DARK OVERLAY ================= */}
      {/* Left side dark gradient taaki text readable ho */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* ================= CONTENT CONTAINER ================= */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 md:px-12 lg:px-20 xl:px-2">
        <div className="flex items-stretch gap-6 md:gap-8">
          {/* --- VERTICAL RED LINE --- */}
          {/* Animation: Height 0 se Full grow hogi */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "auto" }} // Grows to fit text height
            viewport={{ once: true }}
            transition={{ duration: 1, ease: luxuryEase, delay: 0.2 }}
            className="w-1.5 shrink-0 bg-[#B91C1C] md:w-2"
          ></motion.div>

          {/* --- TEXT BLOCK --- */}
          <div className="flex flex-col justify-center py-2">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: luxuryEase, delay: 1 }}
              className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              Our Services
            </motion.h1>

            {/* Description Paragraphs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: luxuryEase, delay: 0.8 }}
              className="max-w-2xl space-y-4 text-lg leading-relaxed font-medium text-slate-100 md:text-xl"
            >
              <p>
                Explore Our Comprehensive Services to Elevate Your Business.
                SourceGuy offers a holistic suite of solutions tailored to meet
                your unique needs.
              </p>
              <p>
                Discover how we can optimize your supply chain and enhance your
                business operations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
