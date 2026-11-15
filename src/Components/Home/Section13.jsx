import React from "react";
import { motion } from "framer-motion";
import youtube from "../../assets/videos/istockphoto-2210092874-640_adpp_is.mp4";
// --- Placeholder Image (YouTube/Video Theme) ---
// Ek professional studio ya recording setup ki image use kar raha hoon

// --- Luxury Easing Curve ---
const luxuryEase = [0.25, 0.1, 0.25, 1.0];

const Section13 = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 font-sans md:px-12 lg:px-20 xl:px-2 xl:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* ================= LEFT SIDE: Video Thumbnail Image ================= */}
        {/* Animation: Left se slide karega */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: luxuryEase }}
          className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg shadow-2xl"
        >
          {/* Main Image */}
          <video
            src={youtube}
            autoPlay
            loop
            muted
            playsInline
            alt="Video Content"
            className="h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay (Dark Tint) */}
          <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30"></div>
        </motion.div>

        {/* ================= RIGHT SIDE: Text Content ================= */}
        {/* Animation: Right se slide karega */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: luxuryEase, delay: 0.2 }}
          className="flex flex-col justify-center text-left"
        >
          {/* Badge */}
          <div className="mb-6 inline-block">
            <span className="rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-4 py-2 text-xs font-bold tracking-widest text-white uppercase">
              Get Insider Tips
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-6 text-4xl leading-[1.15] font-bold text-slate-900 md:text-5xl">
            Creating Content To <br />
            <span className="text-slate-800">Help Sellers</span>
          </h2>

          {/* Text Block */}
          <div className="max-w-lg space-y-6 text-lg leading-relaxed font-medium text-slate-600">
            <p>
              Take action today and experience the difference SourceGuy can make
              for your business.
            </p>
            <p>
              Watch our videos on YouTube where we share insider tips and
              knowledge to help sellers like you so that they can understand the
              intricacies of business and help their business grow.
            </p>
          </div>

          {/* Button */}
          <div className="mt-10">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#991b1b" }}
              whileTap={{ scale: 0.95 }}
              className="rounded-md bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-10 py-4 text-sm font-bold tracking-widest text-white uppercase shadow-lg transition-all hover:shadow-red-900/30"
            >
              Visit YouTube
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section13;
