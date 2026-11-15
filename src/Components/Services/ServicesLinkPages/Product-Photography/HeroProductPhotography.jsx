import React from "react";
import { motion } from "framer-motion";

// --- Placeholder Image (Logistics/Freight Theme) ---
const HERO_BG =
  "https://images.unsplash.com/photo-1752604032883-d87232356997?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D";

// --- Luxury Easing Curve ---
const luxuryEase = [0.25, 0.1, 0.25, 1.0];

const HeroProductPhotography = () => {
  return (
    // Update: Height set to 60vh (60% of viewport height)
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
          src={HERO_BG}
          alt="Logistics Background"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* ================= DARK OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30"></div>

      {/* Decorative Globe Overlay */}
      <div className="absolute top-0 right-0 h-full w-1/2 bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/23/World_map_blank_with_dots.svg')] bg-cover bg-no-repeat opacity-10 mix-blend-overlay"></div>

      {/* ================= CONTENT CONTAINER ================= */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 md:px-12 lg:px-20 xl:px-2">
        <div className="flex items-start gap-6">
          {/* --- VERTICAL RED LINE --- */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "185px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: luxuryEase, delay: 0.2 }}
            className="mt-3 hidden w-1 bg-[#B91C1C] md:block md:w-2"
          ></motion.div>

          {/* --- TEXT BLOCK --- */}
          <div className="flex flex-col justify-center">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: luxuryEase, delay: 0.4 }}
              className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              Product Photography
              <br /> Services
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: luxuryEase, delay: 0.6 }}
              className="md:text-md max-w-xl text-lg leading-relaxed font-light text-white"
            >
              At SourceGuy, we offer a complete range of product sourcing
              services in China ensuring that you get the best product.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroProductPhotography;
