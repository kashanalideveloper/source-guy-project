import React from "react";
import { motion } from "framer-motion";

const Section5 = () => {
  const cardsData = [
    {
      // Yahan apni transparent PNG image ka link lagayein
      image:
        "https://sourceguy.com/wp-content/uploads/2023/08/Untitled-design-76.png",
      title: "Your Trusted Supply Chain Department",
      description:
        "At SourceGuy, we don't act like a vendor — we operate as your in-house supply chain team. From sourcing and freight to customs and distribution, we manage your logistics as if it were our own business.",
    },
    {
      image:
        "https://sourceguy.com/wp-content/uploads/2023/08/Untitled-design-75.png",
      title: "Expert Led, Technology Powered",
      description:
        "Our team combines decades of supply chain expertise with advanced tracking and management tools. You get the best of both worlds — human expertise to solve complex problems and technology to give you complete visibility and control.",
    },
    {
      image:
        "https://sourceguy.com/wp-content/uploads/2023/08/Untitled-design-77.png",
      title: "Always-On, White Glove Service",
      description:
        "Your supply chain never sleeps, and neither do we. Our specialists proactively monitor shipments, flag risks before they become issues, and keep you informed every step of the way — so you can scale without surprises.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="relative w-full overflow-hidden py-16 font-sans lg:py-32 xl:py-16">
      {/* --- Background Image & Overlay --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop"
          alt="Global Supply Chain Logistics"
          className="h-full w-full scale-105 transform-gpu object-cover blur-[2px]"
        />
        {/* Deep, rich dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-[#0a0f1c]/85 mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-4xl text-center lg:mb-20"
        >
          <span className="mb-6 inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-4 py-1.5 text-[10px] font-bold tracking-[0.15em] text-white uppercase shadow-md md:text-xs">
            Why SourceGuy
          </span>

          <h2 className="mb-8 text-3xl leading-[1.15] font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Because You Don't Need Another Freight Forwarder. You Need a{" "}
            <span className="bg-gradient-to-r from-[#F5386B] to-[#FDB750] bg-clip-text text-transparent">
              Supply Chain Partner.
            </span>
          </h2>

          <div className="mx-auto h-1 w-12 rounded-full bg-[#cc2229]" />
        </motion.div>

        {/* --- Cards Grid --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8"
        >
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col overflow-hidden rounded-[24px] bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            >
              {/* Top Pink Banner with Image (Replaced Icon) */}
              <div className="relative flex h-auto w-full items-center justify-center overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-grow flex-col px-6 py-8 lg:px-8">
                <h3 className="mb-4 text-xl leading-snug font-bold text-[#0F172A] transition-colors duration-300 group-hover:text-[#cc2229] md:text-[22px]">
                  {card.title}
                </h3>
                <p className="flex-grow text-sm leading-relaxed font-medium text-slate-600 md:text-[15px]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Section5;
