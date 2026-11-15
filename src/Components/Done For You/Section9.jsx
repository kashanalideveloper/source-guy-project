import React from "react";
import { motion } from "framer-motion";
import people from "../../assets/images/SG-Freight-Client.png";
// --- Placeholder Assets ---
// Note: Replace these with your actual local images

const AVATAR_IMAGE = "https://randomuser.me/api/portraits/men/32.jpg";

// --- Luxury Easing Curve ---
const luxuryEase = [0.25, 0.1, 0.25, 1.0];
const luxuryRightEase = [0.22, 1, 0.36, 1];

const Section9 = () => {
  return (
    <div className="flex flex-col overflow-x-hidden font-sans">
      {/* overflow-x-hidden is important so the slide-in doesn't cause scrollbars */}

      {/* ================= UPPER SECTION: Red Gradient ================= */}
      <section className="relative w-full bg-gradient-to-br from-[#2f0000] via-[#4a0404] to-[#220202] pb-4 text-white">
        {/* Background Glow */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent opacity-50" />

        <div className="mx-auto max-w-7xl px-4 pt-14 md:px-12 lg:px-20 lg:pt-28 xl:px-2 xl:pt-0">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* --- Left Side: Text Content --- */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: luxuryEase }}
              className="z-10"
            >
              <h2 className="mb-8 text-4xl leading-tight font-bold tracking-tight md:text-5xl">
                What Our Customers Say
              </h2>

              <p className="mb-10 max-w-lg text-lg leading-relaxed font-light text-gray-200 opacity-90 md:text-xl">
                We used to juggle 4 different freight vendors. SourceGuy took
                over everything including sourcing, shipping, and compliance and
                saved us over £11,000 in the first quarter alone.
              </p>

              {/* Author Block */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={AVATAR_IMAGE}
                    alt="James R."
                    className="h-14 w-14 rounded-full border-2 border-red-800 object-cover shadow-lg"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">James R.</h4>
                  <p className="text-sm font-medium tracking-wide text-red-200">
                    Logistics Manager, Midlands-Based Retail Chain
                  </p>
                </div>
              </div>
            </motion.div>

            {/* --- Right Side: People Image --- */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.4, ease: luxuryRightEase, delay: 0.3 }}
              className="relative z-10 flex h-full items-end justify-center lg:justify-end"
            >
              <img
                src={people}
                alt="Happy Customers"
                className="w-full max-w-md object-contain drop-shadow-2xl lg:max-w-lg"
                // Negative margin to overlap slightly with the bottom bar if needed,
                // or just to sit perfectly.
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= LOWER SECTION: Black Floating Bar (3/4 Width) ================= */}
      {/* Negative Margin-Top to pull it up over the red section slightly for a "Floating Card" look */}
      <div className="relative z-20 -mt-16 w-full px-4 md:-mt-20 xl:-mt-12 xl:ml-44">
        <motion.div
          // Animation: Bottom se slide hoga (Change is here)
          // initial={{ opacity: 0, x: 100 }} // Purana (Right se)
          initial={{ opacity: 0, y: 80 }} // Naya (Neeche se shuru hoga)
          // whileInView={{ opacity: 1, x: 0 }} // Purana
          whileInView={{ opacity: 1, y: 0 }} // Naya (Apni jagah par aayega)
          // Baaki sab same rahega smooth luxury feel ke liye
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: luxuryEase, delay: 0.3 }}
          // Width: md:w-3/4 (75% on desktop), rounded corners, shadow
          className="mx-auto flex w-full flex-col items-center justify-between gap-8 rounded-2xl border border-gray-800 bg-black px-6 py-8 text-white shadow-2xl md:w-3/4 md:px-12 lg:flex-row"
        >
          {/* Label */}
          <div className="shrink-0 text-sm font-semibold tracking-widest text-gray-400 uppercase">
            Trusted by :
          </div>

          {/* Logos Grid */}
          <div className="flex w-full flex-wrap items-center justify-center gap-8 md:gap-12 lg:justify-end">
            {/* Logo 1 */}
            <LogoItem delay={0.4}>
              <span className="flex items-center gap-1 text-xl font-bold md:text-2xl">
                <span className="opacity-70">Helium</span>10
              </span>
            </LogoItem>

            {/* Logo 2 */}
            <LogoItem delay={0.5}>
              <span className="flex items-center gap-1 text-xl font-semibold md:text-2xl">
                Jungle<span className="font-light opacity-80">Scout</span>
              </span>
            </LogoItem>

            {/* Logo 3 */}
            <LogoItem delay={0.6}>
              <span className="flex items-center gap-1 text-xl font-bold italic md:text-2xl">
                amazon
              </span>
            </LogoItem>

            {/* Logo 4 */}
            <LogoItem delay={0.7}>
              <span className="flex items-center gap-2 text-xl font-bold md:text-2xl">
                <span className="text-lg text-gray-500">✚</span> Keepa
              </span>
            </LogoItem>
          </div>
        </motion.div>
      </div>

      {/* Spacer to prevent cut-off at bottom */}
      <div className="h-20 bg-white"></div>
    </div>
  );
};

// --- Helper Component for Logos ---
const LogoItem = ({ children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
    className="cursor-pointer opacity-60 grayscale transition-opacity duration-300 hover:opacity-100 hover:grayscale-0"
  >
    {children}
  </motion.div>
);

export default Section9;
