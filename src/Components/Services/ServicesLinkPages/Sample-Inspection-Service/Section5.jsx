import React from "react";
import { motion } from "framer-motion";
import {
  Handshake,
  ShoppingCart,
  Banknote,
  ChevronRight,
  ChevronDown,
  Briefcase,
  Rocket, // New icon for the full-width card
} from "lucide-react";

const processSteps = [
  {
    icon: Handshake,
    title: "Understanding Your Requirements",
    description:
      "We begin by comprehensively understanding your product specifications, quality standards, budget, and delivery timeline. This helps us tailor our sourcing strategy to meet your specific needs.",
  },
  {
    icon: ShoppingCart,
    title: "Finding Reliable Supplier",
    description:
      "We tap into our vast network of suppliers and conduct rigorous evaluations to ensure their credibility, reliability, and compliance with quality standards. We only partner with suppliers who meet criteria.",
  },
  {
    icon: Banknote,
    title: "Price Negotiation & Closing",
    description:
      "Our skilled negotiators work on your behalf to secure the most favorable pricing terms without compromising on quality. We strive to help you achieve cost savings while maintaining product excellence.",
  },
];

const Section5 = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="overflow-hidden bg-white py-16 font-sans lg:py-28 xl:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-2">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <span className="mb-6 inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase shadow-md shadow-pink-200">
            How It Works
          </span>
          <h2 className="mb-6 text-3xl font-bold text-[#0F172A] lg:text-5xl">
            Service Process
          </h2>
          <p className="text-lg leading-relaxed text-slate-500">
            Our experienced team leverages their extensive industry knowledge
            and network of suppliers in China to source the products you need.
            We follow a systematic approach to deliver the best results:
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-8"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Icon Circle */}
              <div className="relative mb-8">
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-slate-50 bg-white shadow-xl shadow-gray-100 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-pink-100">
                  <step.icon
                    className="h-9 w-9 text-[#F5386B]"
                    style={{
                      stroke: "url(#gradient-stroke)",
                      strokeWidth: 2,
                    }}
                  />
                  <svg width="0" height="0">
                    <linearGradient
                      id="gradient-stroke"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop stopColor="#F5386B" offset="0%" />
                      <stop stopColor="#FDB750" offset="100%" />
                    </linearGradient>
                  </svg>
                </div>

                {/* Arrow (Hidden on last item) */}
                {index !== processSteps.length - 1 && (
                  <>
                    <div className="absolute top-1/2 -right-[calc(50%+1rem)] z-0 hidden w-full -translate-y-1/2 transform justify-center md:flex lg:-right-[calc(50%+2rem)] xl:top-1/2 xl:left-54">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 shadow-sm">
                        <ChevronRight className="h-8 w-8 text-black" />
                      </div>
                    </div>
                    <div className="absolute -bottom-12 left-1/2 z-0 flex h-12 -translate-x-1/2 transform items-center md:hidden">
                      <ChevronDown className="h-6 w-6 animate-bounce text-slate-300" />
                    </div>
                  </>
                )}
              </div>

              {/* Text Content */}
              <h3 className="mb-4 bg-clip-text text-xl font-bold text-[#0F172A] transition-colors duration-300 group-hover:text-[#F5386B]">
                {step.title}
              </h3>
              <p className="px-2 leading-relaxed text-slate-600 lg:px-4">
                {step.description}
              </p>
            </motion.div>
          ))}

          {/* New Full Width Premium Card */}
          {/* Centered Full Width Card (Matches Screenshot) */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col items-center justify-center text-center md:col-span-3 lg:mt-12"
          >
            {/* Red Icon */}
            <div className="mb-5 flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <Briefcase className="h-10 w-10 text-[#C61C24]" strokeWidth={2} />
            </div>

            {/* Title */}
            <h3 className="mb-4 text-xl font-semibold text-[#0F172A] lg:text-2xl">
              Timely Feedback and Recommendations
            </h3>

            {/* Description */}
            <p className="max-w-4xl px-4 text-sm leading-relaxed text-slate-500 lg:text-base">
              If any issues are discovered, our inspectors provide you with
              timely feedback and recommendations for corrective actions. We
              work closely with you and your suppliers to ensure that necessary
              improvements are made to meet your quality standards.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section5;
