import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const packages = [
  {
    name: "Basic Package",
    price: "80",
    features: ["3 Suppliers Quotation", "Supplier Contact Details"],
    isPopular: false,
  },
  {
    name: "Standard Package",
    price: "160",
    features: [
      "3 Suppliers Quotation",
      "Detailed Excel Sheet",
      "Sample Arrangement",
      "Sample Shipping",
    ],
    isPopular: true, // Highlights this card
  },
  {
    name: "Premium Package",
    price: "240",
    features: [
      "3 Suppliers Quotation",
      "Detailed Excel Sheet",
      "Sample Arrangement",
      "Sample Shipping",
      "Order Placement",
      "Payment Solution",
      "Order Followup",
    ],
    isPopular: false,
  },
];

const Section6 = () => {
  return (
    <section className="bg-white py-16 font-sans lg:py-28 xl:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-2">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-6 inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase shadow-md shadow-pink-200">
            Our Pricing
          </span>
          <h2 className="mb-4 text-4xl font-bold text-[#0F172A] lg:text-5xl">
            Sourcing Packages
          </h2>
          <p className="text-lg font-medium text-slate-500">
            <span className="font-bold text-[#0F172A]">$70</span> will be
            charged as an upfront which will be{" "}
            <br className="hidden md:block" />
            <span className="font-bold text-[#F5386B]">Non-Refundable.</span>
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`relative flex flex-col overflow-hidden rounded-xl shadow-2xl transition-transform duration-300 hover:-translate-y-2 ${pkg.isPopular ? "z-10 scale-100 border-2 border-pink-100 bg-pink-50 md:scale-105" : "border border-slate-100 bg-white"} `}
            >
              {/* Card Header (Gradient Background) */}
              <div className="bg-gradient-to-r from-[#F5386B] to-[#FDB750] py-6 text-center">
                <h3 className="text-xl font-bold tracking-wider text-white uppercase">
                  {pkg.name}
                </h3>
              </div>

              {/* Price Area */}
              <div className="border-b border-slate-100/50 px-6 py-10 text-center">
                <div className="flex items-start justify-center gap-1">
                  <span className="mt-2 text-2xl font-bold text-slate-400">
                    $
                  </span>
                  <span className="text-6xl font-bold tracking-tight text-[#0F172A]">
                    {pkg.price}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="flex-grow px-6 py-8">
                <ul className="space-y-0">
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 border-b border-slate-200/60 py-3 last:border-0"
                    >
                      <CheckCircle2
                        className={`h-5 w-5 flex-shrink-0 ${pkg.isPopular ? "text-[#F5386B]" : "text-slate-400"}`}
                      />
                      <span className="text-sm font-medium text-slate-600 lg:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-auto p-6 pt-0">
                <button
                  className={`w-full rounded-lg px-6 py-4 text-sm font-bold tracking-widest uppercase shadow-lg transition-all duration-300 ${
                    pkg.isPopular
                      ? "bg-gradient-to-r from-[#F5386B] to-[#FDB750] text-white hover:scale-[1.02] hover:shadow-pink-300"
                      : "bg-[#0F172A] text-white hover:bg-slate-800 hover:shadow-xl"
                  } `}
                >
                  Get Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;
