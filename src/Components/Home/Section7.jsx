import React from "react";
import { motion } from "framer-motion";

const Section7 = () => {
  // --- ANIMATION VARIANTS ---

  // Header Left (Partnerships badge & Title)
  const headerLeftVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Header Right (Description text)
  const headerRightVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  // Logos Container (Stagger effect control)
  const logosContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Har logo ke beech 0.15s ka gap
        delayChildren: 0.4, // Header ke baad shuru hoga
      },
    },
  };

  // Individual Logo Item (Bottom to Top)
  const logoItemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  // Guaranteed Logo URLs using Clearbit
  const partners = [
    {
      name: "Aramex",
      src: "https://sourceguy.com/wp-content/uploads/2023/07/pngwing.com-7-1024x167.png",
    },
    {
      name: "Amazon",
      src: "https://sourceguy.com/wp-content/uploads/2024/04/Group-633.webp",
    },
    {
      name: "Matson",
      src: "https://sourceguy.com/wp-content/uploads/2024/04/Group-639.webp",
    },
    {
      name: "Maersk",
      src: "https://sourceguy.com/wp-content/uploads/2024/04/2560px-Maersk_Group_Logo.svg-1.webp",
    },
    {
      name: "Evergreen",
      src: "https://sourceguy.com/wp-content/uploads/2024/04/2560px-Evergreen_Logo.svg-1.webp",
    },
    {
      name: "Hapag-Lloyd",
      src: "https://sourceguy.com/wp-content/uploads/2024/04/download_logo_HLAG-removebg-preview-1.webp",
    },
    {
      name: "CMA CGM",
      src: "https://sourceguy.com/wp-content/uploads/2024/04/2560px-CMA_CGM_logo.svg-1.webp",
    },
    {
      name: "ZIM",
      src: "https://sourceguy.com/wp-content/uploads/2024/04/ZIM_Icon_300x300-1.webp",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white py-16 font-sans lg:py-28 xl:py-16">
      <div className="container mx-auto px-4 lg:px-12 xl:px-2">
        {/* ================= HEADER SECTION ================= */}
        <div className="mb-20 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          {/* LEFT SIDE: Badge & Title (Slides from Left) */}
          <motion.div
            variants={headerLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-md"
          >
            <span className="mb-4 inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-3 py-1.5 text-[11px] font-bold tracking-widest text-white uppercase">
              Partnerships
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-[#0f172a] lg:text-5xl">
              Our Partners
            </h2>
          </motion.div>

          {/* RIGHT SIDE: Description (Slides from Right) */}
          <motion.div
            variants={headerRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl"
          >
            <p className="text-[16px] leading-relaxed font-medium text-slate-700">
              We use our expertise and our global reach to drive economic
              prosperity and are proud of our significant impact, made possible
              through long-term partnerships.
            </p>
          </motion.div>
        </div>

        {/* ================= LOGO GRID (ANIMATED) ================= */}
        <motion.div
          variants={logosContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 items-center justify-items-center gap-x-12 gap-y-16 md:grid-cols-4"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={logoItemVariants}
              className="group relative flex h-16 w-auto cursor-pointer items-center justify-center"
            >
              {/* Logo Image */}
              <img
                src={partner.src}
                alt={partner.name}
                className="max-h-12 w-auto object-contain opacity-40 grayscale transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                onError={(e) => {
                  e.target.style.display = "none"; // Hide broken image
                  e.target.nextSibling.style.display = "block"; // Show text fallback
                }}
              />

              {/* Fallback Text (Hidden unless image fails) */}
              <span className="hidden text-xl font-bold text-slate-300 group-hover:text-[#B91C1C]">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Section7;
