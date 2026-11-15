import React from "react";
import { motion } from "framer-motion";

const Section8 = () => {
  return (
    <section className="overflow-hidden bg-white py-16 font-sans md:py-32 xl:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-2">
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center md:mb-28"
        >
          <h2 className="text-xl font-bold tracking-tight text-[#0F172A] md:text-2xl lg:text-3xl">
            Our clients' dashboards tell the story. Fewer delays. Lower costs.
            Healthier profits.
          </h2>
        </motion.div>

        {/* --- Full Width Dashboard Image --- */}
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto w-full"
          >
            {/* Main Background Container */}
            <div className="rounded-2xl bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:p-3">
              <img
                src="https://sourceguy.com/wp-content/uploads/2023/10/Untitled-design-2023-10-02T120235.820.png"
                alt="Main Sales Dashboard"
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
