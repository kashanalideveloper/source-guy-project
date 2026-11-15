import React from "react";
import { motion } from "framer-motion";

const Section10 = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 font-sans xl:py-16">
      <div className="relative mx-auto max-w-6xl px-4 xl:px-2">
        {/* --- Top Right Decoration (Hatched Pattern) --- */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -top-6 -right-4 hidden h-24 w-48 md:block"
        >
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="contact-hatch"
                width="8"
                height="8"
                patternTransform="rotate(45 0 0)"
                patternUnits="userSpaceOnUse"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="8"
                  stroke="#b02626"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-hatch)" />
          </svg>
        </motion.div>

        {/* --- Main Content Box --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 bg-[#f9f8f6] p-12 text-center shadow-sm md:p-20"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 text-4xl font-bold tracking-tight text-[#13162b] md:text-5xl"
          >
            Still Have Queries?
          </motion.h2>

          {/* Description Paragraphs */}
          <div className="mx-auto max-w-3xl space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg leading-relaxed text-gray-900"
            >
              Our dedicated team is ready to assist you in any way we can.
              Whether you have a question about our services, or simply want to
              provide us with feedback, we are eager to hear from you.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-900"
            >
              Feel free to reach out to us by clicking the button below:
            </motion.p>
          </div>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12"
          >
            <button className="inline-flex items-center gap-3 rounded-md bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-10 py-4 text-sm font-bold tracking-widest text-white uppercase shadow-lg transition-colors duration-300 hover:bg-[#a0191e]">
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section10;
