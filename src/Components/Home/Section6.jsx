import React from "react";
import { motion } from "framer-motion";
import Section6shipcargo from "../../assets/images/bg-video-services-02-1024x534.jpg";

const Section6 = () => {
  // Animation Variants for Staggered Effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Cards ek ke baad ek aayenge
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    // Background Gradient set to match the deep red/burgundy in the screenshot
    <section className="w-full overflow-hidden bg-gradient-to-br from-[#3a0005] via-[#6d000b] to-[#450005] py-16 font-sans text-white lg:py-28 xl:py-16">
      <div className="container mx-auto px-4 lg:px-12 xl:px-2">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {/* White Badge */}
          <span className="mb-6 inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-3 py-1.5 text-[11px] font-extrabold tracking-widest text-white uppercase shadow-sm">
            Services
          </span>

          {/* Main Title */}
          <h2 className="max-w-4xl text-4xl leading-[1.1] font-bold tracking-tight lg:text-[3.25rem] xl:text-5xl">
            Everything Your Logistics Department{" "}
            <br className="hidden lg:block" />
            Would Do – We Do It
          </h2>
        </motion.div>

        {/* ================= CARDS GRID ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10"
        >
          {/* --- CARD 1: Product Sourcing --- */}
          <motion.div variants={itemVariants} className="group flex flex-col">
            <div className="relative mb-6 h-64 w-full overflow-hidden rounded-sm shadow-2xl shadow-black/30">
              <div className="absolute inset-0 z-10 bg-black/10 transition-colors group-hover:bg-transparent"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
                alt="Product Sourcing"
                className="h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h3 className="mb-3 text-2xl font-bold transition-colors group-hover:text-red-200">
              Product Sourcing
            </h3>
            <p className="pr-4 text-[15px] leading-relaxed text-gray-100">
              Helping you find reliable suppliers in China and source
              high-quality products at competitive prices.
            </p>
          </motion.div>

          {/* --- CARD 2: Product Inspection --- */}
          <motion.div variants={itemVariants} className="group flex flex-col">
            <div className="relative mb-6 h-64 w-full overflow-hidden rounded-sm shadow-2xl shadow-black/30">
              <div className="absolute inset-0 z-10 bg-black/10 transition-colors group-hover:bg-transparent"></div>
              <img
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop"
                alt="Product Inspection"
                className="h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h3 className="mb-3 text-2xl font-bold transition-colors group-hover:text-red-200">
              Product Inspection
            </h3>
            <p className="pr-4 text-[15px] leading-relaxed text-gray-100">
              Identifying and rectifying any potential issues in your products
              to help you mitigate risks.
            </p>
          </motion.div>

          {/* --- CARD 3: Freight Forwarding --- */}
          <motion.div variants={itemVariants} className="group flex flex-col">
            <div className="relative mb-6 h-64 w-full overflow-hidden rounded-sm shadow-2xl shadow-black/30">
              <div className="absolute inset-0 z-10 bg-black/10 transition-colors group-hover:bg-transparent"></div>
              <img
                src={Section6shipcargo}
                alt="Freight Ship at Sea"
                className="h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h3 className="mb-3 text-2xl font-bold transition-colors group-hover:text-red-200">
              Freight Forwarding
            </h3>
            <p className="pr-4 text-[15px] leading-relaxed text-gray-100">
              Handling the coordination, documentation, and transportation of
              your goods from China.
            </p>
          </motion.div>
        </motion.div>

        {/* ================= BUTTON ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <button className="rounded-md bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-8 py-4 text-[13px] font-bold tracking-widest text-white uppercase shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100">
            See How It Works
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Section6;
