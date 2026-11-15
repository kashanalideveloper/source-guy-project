import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Award,
  Send,
  Package,
  AlertTriangle,
  ArrowUpRight,
} from "lucide-react";

const Section6 = () => {
  const services = [
    {
      icon: Eye,
      title: "End-to-End Visibility",
      description:
        "From factory floor to your customer's doorstep, you'll know where every order stands in real time.",
    },
    {
      icon: Award,
      title: "Negotiation Power with Factories",
      description:
        "We cut through supplier games, secure fair pricing, and make sure you never overpay.",
    },
    {
      icon: Send,
      title: "Freight That Fits Your Brand",
      description:
        "Air, sea, or rail; we match the right freight solution to your timelines and margins, not what's easiest for the carrier.",
    },
    {
      icon: Package,
      title: "Consolidation That Saves You Thousands",
      description:
        "Instead of juggling endless small shipments, we combine orders into optimized loads that slash freight costs.",
    },
    {
      icon: AlertTriangle,
      title: "Risk & Compliance Management",
      description:
        "Customs paperwork, regulatory requirements, quality checks; we handle it all so you avoid costly mistakes.",
    },
    {
      icon: ArrowUpRight,
      title: "Scale Without Stress",
      description:
        "Whether you're shipping 1 pallet or 100 containers, our systems are built to scale alongside your growth.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa] py-16 font-sans xl:py-16">
      {/* Subtle Background Elements for Premium Feel */}
      <div className="pointer-events-none absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-50 opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-slate-100 opacity-50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-2">
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-5xl text-center"
        >
          <span className="mb-6 inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-4 py-1.5 text-[10px] font-bold tracking-[0.15em] text-white uppercase md:text-xs">
            Our Services
          </span>

          {/* Note: Corrected the typo 'Managmentent' from the image to 'Management' */}
          <h2 className="mb-8 text-3xl leading-[1.15] font-bold tracking-tight text-[#0F172A] md:text-5xl lg:text-[54px]">
            The Leaders in Full Service <br className="hidden md:block" />{" "}
            Supply Chain Management
          </h2>

          <div className="mx-auto mb-8 h-1 w-12 bg-[#cc2229]" />

          <p className="mb-6 text-base leading-relaxed font-medium text-[#333] md:text-[17px]">
            Running your own supply chain in-house is expensive, time-consuming,
            and full of blind spots. At SourceGuy, we plug in as your outsourced
            supply chain department—without the overhead. Our job is simple:{" "}
            <span className="font-bold">
              make sure your products move smarter, faster, and cheaper, while
              you focus on growing your brand.
            </span>
          </p>

          <p className="text-lg font-bold text-[#0F172A] md:text-xl">
            Find out how our suite of services takes you to the next level.
          </p>
        </motion.div>

        {/* --- Grid Layout --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex items-start gap-5"
            >
              {/* Icon Container */}
              <div className="mt-1 flex-shrink-0">
                <service.icon
                  className="h-8 w-8 text-[#cc2229] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 md:h-10 md:w-10"
                  strokeWidth={2}
                />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="mb-3 text-lg leading-snug font-bold text-[#0F172A] md:text-xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 md:text-[15px]">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Section6;
