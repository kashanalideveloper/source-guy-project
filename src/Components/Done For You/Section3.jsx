import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Clock, BrainCircuit, AlertOctagon } from "lucide-react";
import problem from "../../assets/images/problem.png";
const Section3 = () => {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const centerGraphicVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 font-sans md:py-32 xl:py-16">
      {/* Background Abstract Pattern (Optional tech feel) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-2">
        {/* --- Header Section --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="mx-auto mb-16 max-w-4xl text-center md:mb-24"
        >
          <motion.div variants={fadeUp}>
            <span className="mb-6 inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-4 py-1.5 text-[10px] font-bold tracking-[0.15em] text-white uppercase md:text-xs">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mb-8 text-3xl leading-[1.15] font-bold tracking-tight text-[#0F172A] md:text-5xl"
          >
            The Costly Problem With In-House <br className="hidden md:block" />{" "}
            Supply Chains
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mx-auto mb-8 h-1 w-12 bg-[#cc2229]"
          />

          <motion.p
            variants={fadeUp}
            className="mb-6 text-base leading-relaxed font-medium text-[#333] md:text-[17px]"
          >
            Unlike traditional freight forwarders, we don't just move boxes; we
            become your{" "}
            <span className="font-bold">full supply chain department</span> on
            retainer.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-lg font-bold text-[#0F172A] md:text-xl"
          >
            Most companies struggle to scale logistics because...
          </motion.p>
        </motion.div>

        {/* --- Main Content Grid --- */}
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-4 xl:gap-0">
          {/* Left Column (Text Items) */}
          <div className="z-20 flex w-full flex-col gap-12 lg:w-1/3 lg:gap-24">
            {/* Item 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h3 className="mx-auto mb-3 max-w-sm text-xl font-bold text-[#0F172A] md:text-2xl lg:mx-0 lg:ml-auto">
                High Overheads
              </h3>
              <p className="mx-auto max-w-sm text-sm leading-relaxed text-slate-500 md:text-base lg:mx-0 lg:ml-auto">
                Salaries, benefits, and training for in-house staff drain cash
                flow.
              </p>
            </motion.div>

            {/* Item 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h3 className="mx-auto mb-3 max-w-sm text-xl font-bold text-[#0F172A] md:text-2xl lg:mx-0 lg:ml-auto">
                Wasted Time
              </h3>
              <p className="mx-auto max-w-sm text-sm leading-relaxed text-slate-500 md:text-base lg:mx-0 lg:ml-auto">
                Managing suppliers, customs, and carriers distracts leaders from
                growth.
              </p>
            </motion.div>
          </div>

          {/* Center Column (Graphic) */}
          <motion.div
            variants={centerGraphicVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex w-full items-center justify-center py-10 lg:w-1/3 lg:py-0 xl:px-4"
          >
            {/* Main Center Graphic Container */}
            <div className="relative flex h-64 w-64 items-center justify-center md:h-80 md:w-80 xl:h-auto xl:w-120">
              {/* Downward Trend Arrows (SVG) */}
              <img src={problem} alt="" />
            </div>
          </motion.div>

          {/* Right Column (Text Items) */}
          <div className="z-20 flex w-full flex-col gap-12 lg:w-1/3 lg:gap-24">
            {/* Item 3 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h3 className="mb-3 text-xl font-bold text-[#0F172A] md:text-2xl">
                Knowledge Gaps
              </h3>
              <p className="mx-auto max-w-sm text-sm leading-relaxed text-slate-500 md:text-base lg:mx-0">
                A few hires can't cover sourcing, freight, compliance, and
                global trade complexities.
              </p>
            </motion.div>

            {/* Item 4 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h3 className="mb-3 text-xl font-bold text-[#0F172A] md:text-2xl">
                Cost Inefficiencies
              </h3>
              <p className="mx-auto max-w-sm text-sm leading-relaxed text-slate-500 md:text-base lg:mx-0">
                Without deep industry networks, you pay more for freight and
                face more delays.
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- Footer Text --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-16 max-w-3xl text-center md:mt-24 xl:mt-0"
        >
          <p className="text-sm leading-relaxed font-bold text-[#333] md:text-[15px]">
            This slows down growth, eats into margins, and leaves companies
            vulnerable to global supply chain shocks.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Section3;
