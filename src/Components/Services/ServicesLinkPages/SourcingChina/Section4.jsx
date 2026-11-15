import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefitsData = [
  {
    title: "Access to a Global Network",
    description:
      "Our extensive network of suppliers spans across different regions and industries, giving you access to a diverse range of products.",
  },
  {
    title: "Cost Saving",
    description:
      "We leverage our negotiation expertise to secure competitive pricing, helping you optimize your procurement costs.",
  },
  {
    title: "Quality Assurance",
    description:
      "We prioritize quality control throughout the product sourcing process, ensuring that the products meet your expectations and specifications.",
  },
  {
    title: "Risk Mitigation",
    description:
      "Our comprehensive product supplier verification and monitoring processes minimize the risks associated with working with unknown or unreliable partners.",
  },
];

const Section4 = () => {
  // Animation Variants for smooth scrolling
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-16 font-sans lg:py-28 xl:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-2">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* UPDATED: Gradient Badge */}
          <span className="mb-6 inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-3 py-1 text-xs font-bold tracking-widest text-white uppercase shadow-md shadow-orange-100">
            Benefits
          </span>
          <h2 className="mb-4 max-w-3xl text-3xl leading-tight font-bold text-[#0F172A] lg:text-4xl">
            Why Should You Consider Getting Our Product Sourcing Service in
            China?
          </h2>
          <p className="text-md max-w-3xl text-slate-800">
            By partnering with us for your product sourcing needs in China, you
            can enjoy numerous benefits:
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:gap-y-16"
        >
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex cursor-pointer items-start gap-5"
            >
              {/* UPDATED: Gradient Icon Box */}
              <div className="mt-1 flex-shrink-0">
                <div className="relative flex h-8 w-8 transform items-center justify-center overflow-hidden rounded-sm shadow-lg shadow-pink-100 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {/* Gradient Background Layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F5386B] to-[#FDB750]" />

                  {/* Icon on top */}
                  <Check className="relative z-10 h-5 w-5 stroke-[3] text-white" />
                </div>
              </div>

              {/* Text Content */}
              <div>
                {/* UPDATED: Text Color on Hover */}
                <h3 className="mb-3 text-xl font-bold text-[#0F172A] transition-colors duration-300 group-hover:text-[#F5386B]">
                  {benefit.title}
                </h3>
                <p className="leading-relaxed text-slate-600 transition-colors group-hover:text-slate-700">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Section4;
