import React from "react";
import { motion } from "framer-motion";
import Section2image1 from "../../assets/images/imgi_139_female-foreman-stay-lifting-container-cargo-forklift-check-inspect-control-forklift_33850-529.jpg";
import Section2image2 from "../../assets/images/badge_verified.png";

const Section2 = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 lg:py-28 xl:py-16">
      <div className="container mx-auto px-4 lg:px-12 xl:px-2">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE: Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Pattern Background */}
            <div
              className="absolute -bottom-8 -left-8 z-0 hidden h-120 w-120 lg:block"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, #ffffff 0px, #ffffff 5px, #b91c1c 5px, #b91c1c 6px)",
                opacity: 0.6,
              }}
            ></div>

            {/* Main Image */}
            <div className="relative z-10 overflow-hidden rounded-sm shadow-xl">
              <img
                src={Section2image1}
                alt="Logistics Worker"
                className="h-137 w-full transform object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE: Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4">
              <span className="inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-3 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow-sm">
                About Us
              </span>
            </div>

            <h2 className="mb-6 text-3xl leading-tight font-bold text-[#0f172a] lg:text-5xl">
              We Offer Full-Service <br />
              Freight Management
            </h2>

            <h3 className="mb-6 text-sm leading-relaxed font-bold text-black">
              Designed for e-commerce, retail, and B2B companies who want to
              scale without hiring a logistics team.
            </h3>

            <p className="mb-8 text-base leading-7 text-black">
              We cater to a global clientele,{" "}
              <span className="font-medium text-[#b91c1c]">
                supporting sellers
              </span>{" "}
              and businesses. Whether you're a first-time importer or scaling an
              operation across borders; we act as your dedicated freight team.
            </p>

            <div className="mb-8 flex flex-col gap-2">
              <div className="h-14 w-36">
                <img src={Section2image2} alt="" />
              </div>

              <p className="mt-1 text-xs text-gray-500">
                Rated 4.9/5 by sellers and supply chain teams
              </p>
            </div>

            <div>
              <button className="rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-8 py-4 text-sm font-bold tracking-wider text-white uppercase shadow-lg shadow-red-900/20 transition-colors hover:bg-red-800">
                Get My Freight Handled
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
