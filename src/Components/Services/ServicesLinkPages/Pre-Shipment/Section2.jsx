import React from "react";
import { motion } from "framer-motion";

const Section2 = () => {
  // Animation Variants
  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Gradient Class
  const gradientBg =
    "bg-gradient-to-r from-[#F43F5E] via-[#FB923C] to-[#FACC15]";

  return (
    <section className="flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 py-16 font-sans xl:px-2 xl:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left Content Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
          className="space-y-6"
        >
          {/* Badge with Gradient Text */}
          <span className="inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-4 py-1 text-xs font-bold tracking-widest text-white uppercase">
            What is Product Sourcing
          </span>

          <h1 className="text-4xl leading-tight font-bold text-slate-900 md:text-5xl">
            Streamline Your Supply Chain <br />
            <span className="bg-gradient-to-r from-[#F43F5E] to-[#FB923C] bg-clip-text text-transparent">
              with Our Product Sourcing Service
            </span>
          </h1>

          <div className="max-w-xl space-y-4 text-lg leading-relaxed text-gray-600">
            <p>
              We understand the importance of finding reliable suppliers who
              offer high-quality products at competitive prices.
            </p>
            <p>
              Our Product Sourcing Service in China is designed to simplify your
              supply chain process, ensuring a seamless flow from procurement to
              delivery.
            </p>
          </div>

          {/* Option 1: Shine Effect Buttons */}
          <div className="flex flex-wrap gap-5 pt-4">
            <motion.button
              whileHover="hover" // Trigger internal animation
              whileTap={{ scale: 0.95 }}
              initial="initial"
              className={`relative overflow-hidden ${gradientBg} w-full rounded-md px-8 py-4 font-bold tracking-widest text-white uppercase shadow-lg transition-all xl:w-auto`}
            >
              {/* Text ko z-index denge taaki shine iske peeche rahe */}
              <span className="relative z-10">Report Template</span>

              {/* Shine Element */}
              <motion.div
                variants={{
                  initial: { x: "-100%" },
                  hover: { x: "100%" },
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 z-0 skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.button>

            <motion.button
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              initial="initial"
              className={`relative overflow-hidden ${gradientBg} w-full rounded-md px-8 py-4 font-bold tracking-widest text-white uppercase shadow-lg transition-all xl:w-auto`}
            >
              <span className="relative z-10">Contact Now</span>
              <motion.div
                variants={{
                  initial: { x: "-100%" },
                  hover: { x: "100%" },
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 z-0 skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className="relative"
        >
          {/* Gradient Border Frame */}
          <div className={`rounded-2xl p-1 ${gradientBg}`}>
            <div className="overflow-hidden rounded-xl bg-white">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000"
                alt="Warehouse"
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Floating Decorative Element */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute -bottom-10 -left-10 h-24 w-24 ${gradientBg} rounded-full opacity-30 blur-3xl`}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;
