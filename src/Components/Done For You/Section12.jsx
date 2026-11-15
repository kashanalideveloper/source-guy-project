import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";

const Section12 = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }, // Custom ease for luxury feel
    },
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gray-50 px-4 py-16 font-sans md:px-8 xl:px-2 xl:py-16">
      <motion.div
        className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* LEFT COLUMN: Image & Info Box */}
        <motion.div className="relative z-10" variants={itemVariants}>
          {/* Decorative Diagonal Stripe Pattern (Top Left) */}
          <div className="absolute -top-6 -left-6 -z-10 hidden h-64 w-64 opacity-60 lg:block">
            <svg width="100%" height="100%" fill="none">
              <defs>
                <pattern
                  id="stripe-pattern"
                  x="0"
                  y="0"
                  width="8"
                  height="8"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)" // Ye line pattern ko tircha (diagonal) karegi
                >
                  {/* Ye rectangle ab line ka kaam karega */}
                  <rect
                    x="0"
                    y="0"
                    width="2" // Line ki motai (Thickness)
                    height="8" // Pattern height ke barabar
                    className="fill-current text-red-300" // Screenshot wala rang
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#stripe-pattern)" />
            </svg>
          </div>

          {/* Main Image Container */}
          <div className="group relative h-[600px] w-full overflow-hidden rounded-sm shadow-2xl lg:w-[90%] xl:w-[800px]">
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
              alt="Worker in warehouse"
              className="group-hover:scale-105] h-full w-full object-cover transition-transform duration-700"
            />

            {/* Dark Overlay Gradient for better text visibility if needed */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* "Need Help?" Dark Box - Floating Over Image */}
          <motion.div
            className="absolute bottom-[-40px] left-0 z-20 w-full bg-[#111827] p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] lg:left-[-20px] lg:w-[380px] xl:left-9"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="mb-6 text-2xl font-bold tracking-tight">
              Need Help?
            </h3>

            <div className="mb-8 space-y-4">
              <div className="group flex cursor-pointer items-center gap-4">
                <div className="rounded-full bg-red-600/10 p-2 transition-colors duration-300 group-hover:bg-red-600">
                  <Phone className="h-5 w-5 text-red-500 transition-colors group-hover:text-white" />
                </div>
                <span className="text-lg text-gray-300 transition-colors group-hover:text-white">
                  (+1) 604 203 7786
                </span>
              </div>

              <div className="group flex cursor-pointer items-center gap-4">
                <div className="rounded-full bg-red-600/10 p-2 transition-colors duration-300 group-hover:bg-red-600">
                  <Mail className="h-5 w-5 text-red-500 transition-colors group-hover:text-white" />
                </div>
                <span className="text-lg text-gray-300 transition-colors group-hover:text-white">
                  info@sourceguy.com
                </span>
              </div>
            </div>

            <button className="flex w-full items-center justify-center gap-2 bg-white px-6 py-4 text-sm font-bold tracking-wider text-[#111827] uppercase transition-colors duration-300 hover:bg-gray-200">
              Contact Now
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Form Card */}
        <motion.div
          className="relative z-20 lg:-ml-12 xl:ml-10" // Negative margin to create overlap effect
          variants={itemVariants}
        >
          <div className="rounded-md border border-gray-100 bg-white p-8 shadow-[0_0_60px_rgba(0,0,0,0.05)] md:p-12">
            {/* Tag */}
            <span className="mb-4 inline-block rounded-sm bg-red-50 bg-gradient-to-r from-[#F5386B] to-[#FDB750] bg-clip-text px-3 py-1 text-xs font-bold tracking-widest text-transparent uppercase">
              Contact Us
            </span>

            <h2 className="mb-8 text-4xl leading-tight font-bold text-gray-900 md:text-5xl">
              Reach Out to{" "}
              <span className="bg-gradient-to-r from-[#F5386B] to-[#FDB750] bg-clip-text text-transparent">
                SourceGuy
              </span>{" "}
              Today!
            </h2>

            <form className="space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="group">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full border border-gray-200 bg-gray-50 p-4 text-gray-700 transition-all duration-300 placeholder:text-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full border border-gray-200 bg-gray-50 p-4 text-gray-700 transition-all duration-300 placeholder:text-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border border-gray-200 bg-gray-50 p-4 text-gray-700 transition-all duration-300 placeholder:text-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full border border-gray-200 bg-gray-50 p-4 text-gray-700 transition-all duration-300 placeholder:text-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full resize-none border border-gray-200 bg-gray-50 p-4 text-gray-700 transition-all duration-300 placeholder:text-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-6 py-5 text-sm font-bold tracking-wider text-white uppercase shadow-lg transition-all duration-300 hover:shadow-red-500/30"
              >
                Get a Quote Now
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section12;
