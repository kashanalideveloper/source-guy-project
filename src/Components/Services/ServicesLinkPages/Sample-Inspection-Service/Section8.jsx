import React from "react";
import { motion } from "framer-motion";

const Section8 = () => {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const imageLeftVariant = {
    hidden: { opacity: 0, x: -50, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 60, delay: 0.2 },
    },
  };

  const imageRightVariant = {
    hidden: { opacity: 0, x: 50, y: -20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 60, delay: 0.4 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 font-sans lg:py-32 xl:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-2">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* --- Left Column: Luxury Image Composition --- */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Ambient Background Glow (Replaces old pattern) */}
            <div className="absolute -inset-4 -z-10 animate-pulse rounded-full bg-gradient-to-r from-pink-100 to-yellow-100 opacity-50 blur-3xl"></div>

            <div className="relative h-[450px] w-full sm:h-[550px]">
              {/* Back/Right Image (Warehouse Guy) */}
              <motion.div
                variants={imageRightVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="absolute top-0 right-0 z-10 h-[80%] w-[70%] overflow-hidden rounded-3xl border border-slate-50 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)]"
              >
                {/* Replace src with your actual warehouse image */}
                <img
                  src="https://sourceguy.com/wp-content/uploads/2023/07/woman-working-in-delivery-company-2021-08-28-12-44-37-utc-1.jpg"
                  alt="Warehouse operations"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              {/* Front/Left Image (Delivery Girl) */}
              <motion.div
                variants={imageLeftVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="absolute bottom-0 left-0 z-20 h-[65%] w-[60%] overflow-hidden rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] ring-8 ring-white"
              >
                {/* Replace src with your actual delivery person image */}
                <img
                  src="https://sourceguy.com/wp-content/uploads/2023/07/team-section-01-807x1024.jpg"
                  alt="Delivery logistics"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              {/* Decorative Pattern Box (Pixel Perfect Match to Screenshot) */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="pointer-events-none absolute -top-10 -left-10 z-0 h-68 w-64"
                style={{
                  // Yeh wahi exact diagonal pink/red pattern hai jo image mein hai
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-1 13L13 -1M-1 1L1 -1M11 13L13 11' stroke='%23C1121F' stroke-opacity='0.3' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
                }}
              ></motion.div>
            </div>
          </div>

          {/* --- Right Column: Text Content --- */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-start"
          >
            {/* Eyebrow Badge */}
            <motion.div variants={fadeUp}>
              <span className="mb-6 inline-block rounded-sm border border-pink-100 bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-4 py-1.5 text-xs font-bold tracking-[0.15em] text-white uppercase shadow-sm">
                Get Started
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="mb-6 text-4xl leading-[1.15] font-bold tracking-tight text-[#0F172A] sm:text-5xl"
            >
              Ready To Source Quality Products{" "}
              <span className="bg-gradient-to-r from-[#F5386B] to-[#FDB750] bg-clip-text text-transparent">
                Hassle-Free?
              </span>
            </motion.h2>

            {/* Paragraph 1 */}
            <motion.p
              variants={fadeUp}
              className="mb-4 text-lg leading-relaxed font-medium text-slate-600"
            >
              Take action today and experience the difference SourceGuy can make
              for your business.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              variants={fadeUp}
              className="mb-10 text-base leading-relaxed text-slate-500"
            >
              Contact our team today to discuss your product sourcing
              requirements. Let us handle the complexities while you enjoy the
              benefits of a well-managed and efficient product sourcing process.
            </motion.p>

            {/* Action Button */}
            <motion.div variants={fadeUp} className="w-full sm:w-auto">
              <button className="group relative w-full overflow-hidden rounded-md bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-8 py-4 text-sm font-bold tracking-widest text-white uppercase shadow-lg shadow-pink-300/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-pink-400/50 sm:w-auto">
                {/* Shine effect on hover */}
                <div className="absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"></div>
                <span className="relative z-10">Contact Now</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
