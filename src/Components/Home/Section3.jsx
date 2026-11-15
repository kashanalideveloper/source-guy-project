import React from "react";
import { motion } from "framer-motion";
import { Brain, Truck, Layers, ChevronRight } from "lucide-react";

const Section3 = () => {
  return (
    <section className="w-full overflow-hidden bg-[#f8fafc] py-16 font-sans lg:py-28 xl:py-16">
      <div className="container mx-auto px-4 lg:px-12 xl:py-2">
        {/* ================= HEADER SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          {/* Badge */}
          <span className="mb-6 inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-3 py-1.5 text-[11px] font-bold tracking-widest text-white uppercase shadow-sm">
            How It Works
          </span>

          {/* Title */}
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-[#0f172a] lg:text-5xl">
            Service Process
          </h2>

          {/* Subtitle */}
          <p className="text-sblack text-[15px] leading-relaxed lg:text-[16px]">
            At SourceGuy, we offer comprehensive{" "}
            <span className="bg-gradient-to-r from-[#F5386B] to-[#FDB750] bg-clip-text font-semibold text-transparent">
              services
            </span>{" "}
            to meet your supply chain requirements and drive your success.
          </p>
        </motion.div>

        {/* ================= STEPS CONTAINER ================= */}
        <div className="relative grid grid-cols-1 items-start justify-center gap-8 md:grid-cols-3 lg:gap-4">
          {/* --- STEP 1: COMING FROM LEFT --- */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="group flex flex-col items-center text-center"
          >
            {/* Icon Wrapper */}
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-50 bg-white shadow-lg shadow-slate-200 transition-transform duration-300 group-hover:-translate-y-2">
              <Brain size={40} className="text-[#B91C1C]" strokeWidth={1.5} />
            </div>

            {/* Step Number */}
            <h3 className="mb-3 text-2xl font-bold text-[#0f172a]">Step 1</h3>

            {/* Description */}
            <p className="px-4 text-sm font-medium text-slate-500">
              We Understand Your Freight Needs
            </p>
          </motion.div>

          {/* --- ARROW 1 (Desktop Only) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-[15%] left-[28%] hidden text-slate-300 lg:flex"
          >
            <div className="rounded-full border border-slate-100 bg-white p-2 shadow-sm">
              <ChevronRight size={20} />
            </div>
          </motion.div>

          {/* --- STEP 2: COMING FROM BOTTOM (To Balance) --- */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="group flex flex-col items-center text-center"
          >
            {/* Icon Wrapper */}
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-50 bg-white shadow-lg shadow-slate-200 transition-transform duration-300 group-hover:-translate-y-2">
              <Layers size={40} className="text-[#B91C1C]" strokeWidth={1.5} />
            </div>

            {/* Step Number */}
            <h3 className="mb-3 text-2xl font-bold text-[#0f172a]">Step 2</h3>

            {/* Description */}
            <p className="px-4 text-sm font-medium text-slate-500">
              We Build a Scalable Freight Strategy
            </p>
          </motion.div>

          {/* --- ARROW 2 (Desktop Only) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute top-[15%] right-[28%] hidden text-slate-300 lg:flex"
          >
            <div className="rounded-full border border-slate-100 bg-white p-2 shadow-sm">
              <ChevronRight size={20} />
            </div>
          </motion.div>

          {/* --- STEP 3: COMING FROM RIGHT --- */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="group flex flex-col items-center text-center"
          >
            {/* Icon Wrapper */}
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-50 bg-white shadow-lg shadow-slate-200 transition-transform duration-300 group-hover:-translate-y-2">
              <Truck size={40} className="text-[#B91C1C]" strokeWidth={1.5} />
            </div>

            {/* Step Number */}
            <h3 className="mb-3 text-2xl font-bold text-[#0f172a]">Step 3</h3>

            {/* Description */}
            <p className="px-4 text-sm font-medium text-slate-500">
              We Manage, Track, and Deliver
            </p>
          </motion.div>
        </div>

        {/* ================= FOOTER TAGLINE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-lg font-bold text-[#0f172a]">
            Your dedicated logistics team.{" "}
            <span className="bg-gradient-to-r from-[#F5386B] to-[#FDB750] bg-clip-text text-transparent">
              No contracts. No hassle.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Section3;
