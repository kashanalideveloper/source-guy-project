import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

// --- Helper Component: Counter ---
// Ye component numbers ko animate karega jab wo screen par ayenge
const Counter = ({
  from = 0,
  to,
  prefix = "",
  suffix = "",
  duration = 2.5,
}) => {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" }); // Thoda sa upar aane par start hoga

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;

      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut", // Smooth ending
        onUpdate: (value) => {
          // Numbers ko format karna (e.g. 5000 -> 5,000)
          // Agar value float hai to fixed decimal hatega, integer rahega
          node.textContent = `${prefix}${Math.floor(value).toLocaleString()}${suffix}`;
        },
      });

      return () => controls.stop();
    }
  }, [isInView, from, to, prefix, suffix, duration]);

  return <span ref={nodeRef} />;
};

// --- Main Data with Numeric Values ---
const stats = [
  {
    target: 5000, // Asli number animation ke liye
    prefix: "",
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    target: 5,
    prefix: "$",
    suffix: "M",
    label: "Orders Processed",
  },
  {
    target: 2000,
    prefix: "$",
    suffix: "+", // $2K+ ko hum 2000+ dikha sakte hain ya logic change kar sakte hain.
    // Screenshot ke mutabiq "$2K+" hai.
    // Isliye hum target 2 rakhenge aur suffix "K+" denge taake animation 0->2 chale.
    customTarget: 2,
    customSuffix: "K+",
    label: "Saved For Each Client",
  },
];

// Map Pin Locations
const pinLocations = [
  { top: "30%", left: "20%" },
  { top: "35%", left: "28%" },
  { top: "65%", left: "32%" },
  { top: "28%", left: "48%" },
  { top: "50%", left: "55%" },
  { top: "35%", left: "75%" },
];

const Section7 = () => {
  return (
    <section className="overflow-hidden bg-white py-20 font-sans lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* LEFT: World Map Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[16/9] w-full lg:aspect-auto lg:h-[400px]"
          >
            {/* Dotted Map Image */}
            <img
              src="https://sourceguy.com/wp-content/uploads/2023/07/Untitled-design-30-1024x575.png"
              alt="World Map"
              className="h-full w-full object-contain opacity-100"
            />

            {/* Pulsing Pins */}
            {pinLocations.map((pin, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                className="absolute -translate-x-1/2 -translate-y-1/2 transform"
                style={{ top: pin.top, left: pin.left }}
              >
                <div className="group relative cursor-pointer">
                  <div className="absolute inset-0 animate-ping rounded-full bg-[#F5386B] opacity-75"></div>
                  <div className="relative z-10 rounded-full bg-white p-1 shadow-md transition-transform duration-300 group-hover:scale-125">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 md:h-6 md:w-6"
                    >
                      <path
                        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                        fill="url(#pin-gradient)"
                      />
                      <circle cx="12" cy="10" r="3" fill="white" />
                      <defs>
                        <linearGradient
                          id="pin-gradient"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="1"
                        >
                          <stop stopColor="#F5386B" />
                          <stop offset="1" stopColor="#FDB750" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT: Content & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8"
          >
            {/* Gradient Badge */}
            <span className="mb-6 inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase shadow-md shadow-pink-200">
              Our Achievements
            </span>

            <h2 className="mb-6 text-4xl font-bold text-[#0F172A] lg:text-5xl">
              Serving Globally
            </h2>

            <p className="mb-10 text-lg leading-relaxed text-slate-800">
              With years of experience in the industry, we understand the
              intricacies of international trade and have honed our skills to
              deliver exceptional results.
            </p>

            {/* Stats Grid with Animation */}
            <div className="grid grid-cols-3 gap-6 border-t border-slate-100 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-left">
                  {/* Animated Counter Number */}
                  <h3 className="mb-2 bg-gradient-to-r from-[#F5386B] to-[#FDB750] bg-clip-text text-center text-2xl font-bold text-transparent tabular-nums md:text-3xl lg:text-4xl">
                    {/* tabular-nums ensure karega ke numbers width change hone par hilein nahi */}
                    <Counter
                      from={0}
                      to={stat.customTarget || stat.target}
                      prefix={stat.prefix}
                      suffix={stat.customSuffix || stat.suffix}
                    />
                  </h3>
                  <p className="text-center text-xs leading-tight font-light tracking-wide text-slate-900 uppercase lg:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
