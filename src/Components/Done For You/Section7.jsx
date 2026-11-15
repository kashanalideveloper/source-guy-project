import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ArrowDown } from "lucide-react";

const Section7 = () => {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const leftMetrics = [
    {
      bold: "56+ Global Markets Served",
      normal: "– helping brands break borders and sell worldwide.",
    },
    {
      bold: "$50M+ Worth of Products Moved",
      normal: "– with zero hidden costs or supplier headaches.",
    },
    {
      bold: "30–40% Savings on Overhead",
      normal: "– by eliminating in-house supply chain staffing.",
    },
    {
      bold: "Consistent 20–25 Days Faster Lead Times",
      normal: "– through proactive freight and supplier management.",
    },
  ];

  const rightMetrics = [
    "Cost-per-unit reduced by up to 18%.",
    "Production delays cut by 60%.",
    "Fulfillment accuracy maintained at 99.7%.",
  ];

  return (
    <section className="overflow-hidden bg-white py-16 font-sans md:py-28 xl:py-16">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 xl:px-2">
        {/* --- Top Header Section --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mb-16 flex flex-col items-center text-center"
        >
          {/* Label */}
          <motion.div variants={fadeUp}>
            <span className="mb-6 inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-4 py-1.5 text-[10px] font-bold tracking-widest text-white uppercase md:text-[11px]">
              Our Results
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            variants={fadeUp}
            className="mb-6 text-3xl font-bold tracking-tight text-[#000000] md:text-5xl"
          >
            Helping Brands Scale Exponentially
          </motion.h2>

          {/* Red Divider */}
          <motion.div
            variants={fadeUp}
            className="mb-8 h-[2px] w-10 bg-[#cc2229]"
          />

          {/* Subheadings */}
          <motion.p
            variants={fadeUp}
            className="mb-6 text-[15px] font-medium text-gray-800 md:text-base"
          >
            We don't just move containers; we move numbers that matter.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="max-w-3xl text-sm leading-relaxed font-medium text-gray-600 md:text-[15px]"
          >
            From scrappy startups to established e-commerce brands, our clients
            see measurable gains in revenue, margins, and speed-to-market once
            we take over their supply chain.
          </motion.p>
        </motion.div>

        {/* --- Middle Headings & Arrow --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 flex flex-col items-center justify-between text-center md:flex-row md:px-8 md:text-left"
        >
          <h3 className="mb-4 text-center text-lg font-bold text-black md:mb-0 md:w-5/12 md:text-center md:text-xl">
            The Results We Deliver:
          </h3>

          {/* Circular Red Arrow */}
          <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#F5386B] to-[#FDB750] shadow-lg md:mb-0">
            <ArrowRight
              className="hidden h-6 w-6 text-white md:block"
              strokeWidth={2.5}
            />
            <ArrowDown
              className="h-6 w-6 text-white md:hidden"
              strokeWidth={2.5}
            />
          </div>

          <h3 className="text-center text-lg font-bold text-black md:w-5/12 md:text-center md:text-xl">
            Proof in Action
          </h3>
        </motion.div>

        {/* --- Bottom Grid Layout --- */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
          {/* Left Column (Lists) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-5"
          >
            {leftMetrics.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#2ea366]"
                  fill="#2ea366"
                  stroke="white"
                  strokeWidth={2}
                />
                <p className="text-[14.5px] leading-relaxed text-[#333333]">
                  <span className="font-bold text-black">{item.bold}</span>{" "}
                  {item.normal}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Right Column (Lists & Savings Box) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col"
          >
            {/* Right Lists */}
            <div className="mb-8 flex flex-col gap-5">
              {rightMetrics.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#2ea366]"
                    fill="#2ea366"
                    stroke="white"
                    strokeWidth={2}
                  />
                  <p className="text-[14.5px] font-medium text-[#333333]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Light Green Savings Box */}
            <div className="mt-auto rounded-sm border border-[#dcfce7] bg-[#f0fdf4] p-6 lg:p-8">
              <div className="mb-1 flex w-full items-end justify-between">
                <span className="text-lg leading-none font-bold text-[#0f766e]">
                  Annual Savings
                </span>

                {/* Dotted Line connecting text to number */}
                <div className="relative top-[-4px] mx-4 flex-grow border-b-2 border-dotted border-[#99f6e4]"></div>

                <span className="text-2xl leading-none font-extrabold text-[#047857] md:text-[28px]">
                  $55,500
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-[#64748b]">
                10,000 units
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
