import React from "react";
import { motion } from "framer-motion";

// --- Placeholder Images ---
// Man with crossed arms (Green/Teal shirt as per screenshot vibe)
const CLIENT_IMAGE =
  "https://sourceguy.com/wp-content/uploads/2023/07/young-business-leader-working-at-office-2021-09-03-20-12-07-utc-1.jpg";
const CLIENT_AVATAR =
  "https://sourceguy.com/wp-content/uploads/2023/07/young-business-leader-working-at-office-2021-09-03-20-12-07-utc-1.jpg";

// --- Luxury Easing Curve ---
const luxuryEase = [0.25, 0.1, 0.25, 1.0];

const Section3 = () => {
  return (
    <section className="flex items-center justify-center bg-slate-50 px-4 py-16 font-sans md:px-12 lg:px-20 xl:px-2 xl:py-16">
      <div className="w-full max-w-6xl bg-white shadow-sm md:shadow-none">
        {" "}
        {/* White container */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ================= LEFT SIDE: CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className="flex flex-col justify-center p-6"
          >
            {/* Badge */}
            <span className="mb-6 inline-block w-max rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-3 py-1.5 text-[10px] font-bold tracking-widest text-white uppercase">
              Testimonial
            </span>

            {/* Heading */}
            <h2 className="mb-4 text-3xl leading-tight font-bold text-[#0F172A] md:text-4xl">
              What Our Client Say <br /> About Us
            </h2>

            {/* Star Rating */}
            <div className="mb-6 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 fill-current text-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>

            {/* Quote Text */}
            <blockquote className="mb-8 text-[16px] leading-relaxed font-medium text-slate-600 md:text-lg">
              "SourceGuy has been instrumental in our business growth. Their
              expertise in sourcing, inspection, and photography has
              significantly improved the quality and presentation of our
              products."
            </blockquote>

            {/* Author Profile */}
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="h-12 w-12 overflow-hidden rounded-full">
                <img
                  src={CLIENT_AVATAR}
                  alt="Mikka Hakkinen"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Name & Title */}
              <div>
                <h4 className="text-base font-bold text-[#0F172A]">
                  Mikka Hakkinen
                </h4>
                <p className="text-xs font-bold tracking-wide text-slate-400 uppercase">
                  Harlemdus CEO
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE: IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: luxuryEase, delay: 0.2 }}
            className="relative h-[400px] w-full lg:h-[500px]"
          >
            {/* Main Image */}
            <div className="h-full w-full overflow-hidden">
              <img
                src={CLIENT_IMAGE}
                alt="Client"
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Floating Quote Icon (Top Right Corner - Overlapping) */}
            <div className="absolute -top-6 -right-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-r from-[#F5386B] to-[#FDB750] shadow-lg lg:top-0 lg:-right-8 xl:-top-6 xl:-right-6">
              <svg
                className="h-7 w-7 fill-current text-white"
                viewBox="0 0 24 24"
              >
                {/* Inverted Commas Icon */}
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
