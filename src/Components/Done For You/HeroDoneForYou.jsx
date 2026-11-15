import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";
import bg from "../../assets/images/bg.png"; // path adjust karein agar component folder me ho
const HeroDoneForYou = () => {
  return (
    <section className="relative w-full overflow-hidden border-b border-slate-800 bg-[#121423] py-16 font-sans text-white lg:py-24 xl:py-16">
      {/* Subtle Background Pattern (Simulating the geometric lines) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${bg})` }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-2">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <p className="mb-4 text-[11px] font-bold tracking-[0.15em] text-white uppercase md:mb-6 md:text-xs">
              Cut 40% of supply chain costs without hiring a team
            </p>

            {/* Headline */}
            <h1 className="mb-6 text-4xl leading-[1.15] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Your Entire{" "}
              <span className="bg-gradient-to-r from-[#F5386B] to-[#FDB750] bg-clip-text text-transparent">
                Supply Chain
              </span>{" "}
              Managed by Experts. Zero Overhead.
            </h1>

            {/* Sub-headline */}
            <p className="mb-8 max-w-xl pr-4 text-base leading-relaxed text-slate-100 md:text-lg">
              Stop building expensive in-house logistics teams. With SourceGuy,
              you get a dedicated freight and supply chain department for a
              fixed monthly retainer; saving you time, cost, and headaches.
            </p>

            {/* Bullet Points */}
            <ul className="mb-10 space-y-3">
              {[
                "US-Canadian Company",
                "Over 8 Years of Market Experience",
                "In-house team of Sourcing and Procurement Specialists in China",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start text-sm font-medium text-slate-100 md:text-base"
                >
                  <CheckCircle2
                    className="mr-3 h-5 w-5 shrink-0 text-white"
                    fill="currentColor"
                    stroke="#121423"
                  />
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-md bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-8 py-4 text-sm font-bold tracking-wider text-white uppercase shadow-lg shadow-red-900/20 transition-colors hover:bg-[#a61920]"
            >
              Book a call today
            </motion.button>
          </motion.div>

          {/* Right Image/Graphics Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mt-12 flex items-end justify-center lg:mt-0 lg:h-[600px] lg:items-center"
          >
            {/* Background Abstract Shapes (Simulating the S shape) */}
            <div className="absolute top-20 right-0 -z-10 h-[70%] w-[80%] rotate-[-6deg] transform rounded-[40px] bg-[#cc2229]" />
            <div className="absolute top-32 right-8 -z-10 h-[70%] w-[80%] rotate-[4deg] transform rounded-[40px] bg-[#0f111c] shadow-2xl" />

            {/* Main Person Image */}
            {/* Note: Replace this src with your actual cut-out image of the man */}
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop&bg=transparent"
              alt="Professional Consultant"
              className="relative z-10 w-[85%] max-w-md rounded-t-3xl [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] object-contain drop-shadow-2xl"
            />

            {/* Floating UI Widget 1: Product Sales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute top-10 right-0 z-20 hidden w-56 rounded-xl bg-white p-4 shadow-2xl md:-right-8 md:block"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-bold text-[#0F172A]">
                  Product Sales
                </span>
                <span className="rounded bg-green-100 px-2 py-1 text-xs font-bold text-green-700">
                  0%
                </span>
              </div>
              <div className="flex h-24 items-end gap-2">
                {/* Y-axis labels */}
                <div className="flex h-full flex-col justify-between pb-1 text-[9px] text-slate-400">
                  <span>100K</span>
                  <span>80K</span>
                  <span>60K</span>
                  <span>40K</span>
                </div>
                {/* Bars */}
                <div className="flex h-full flex-1 items-end gap-1.5 border-b border-slate-100 pb-1">
                  <div className="h-[30%] w-1/5 rounded-t-sm bg-[#FFA000]" />
                  <div className="h-[50%] w-1/5 rounded-t-sm bg-[#FFA000]" />
                  <div className="h-[40%] w-1/5 rounded-t-sm bg-[#FFA000]" />
                  <div className="h-[80%] w-1/5 rounded-t-sm bg-[#FFA000]" />
                  <div className="h-[95%] w-1/5 rounded-t-sm bg-[#FFA000]" />
                </div>
              </div>
            </motion.div>

            {/* Floating UI Widget 2: Ratings */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute right-12 bottom-32 z-20 flex hidden items-center gap-4 rounded-lg bg-white px-5 py-3 shadow-2xl md:flex"
            >
              <div className="flex flex-col">
                <div className="mb-1 flex gap-0.5 text-[#FFA000]">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <span className="text-lg leading-none font-bold text-[#0F172A]">
                  4.8
                </span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-xs font-medium text-slate-500">
                  8,566 Ratings
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroDoneForYou;
