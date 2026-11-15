import React from "react";
import { motion } from "framer-motion";
import { Circle, Hexagon, Component } from "lucide-react"; // Using icons to simulate logos

const Section2 = () => {
  // Dummy data for logos. Replace these with your actual SVG/Image tags later.
  const logos = [
    { name: "Stockholm", icon: Circle },
    { name: "HARLEMDUS", icon: Component },
    { name: "HOLCERFIS", icon: Hexagon },
    { name: "Stockholm", icon: Circle },
    { name: "HARLEMDUS", icon: Component },
    { name: "HOLCERFIS", icon: Hexagon },
  ];

  // We duplicate the array to create a perfectly seamless infinite scroll
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="w-full bg-[#fafafa] font-sans">
      {/* --- 1. Top Red Marquee Strip --- */}
      <div className="relative z-10 flex w-full items-center overflow-hidden bg-gradient-to-r from-[#F5386B] to-[#FDB750] py-5 shadow-md md:py-6">
        {/* Fading Edges for Premium Look (Optional but recommended) */}
        <div className="absolute top-0 bottom-0 left-0 z-20 w-12 bg-transparent md:w-24" />
        <div className="absolute top-0 right-0 bottom-0 z-20 w-12 bg-transparent md:w-24" />

        <motion.div
          className="flex w-max items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }} // Scrolls exactly half its width, then resets seamlessly
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25, // Adjust this to make it faster or slower
          }}
        >
          {marqueeLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 px-12 md:px-24"
            >
              {/* Fake Logo Icon */}
              <logo.icon
                className="h-6 w-6 text-white md:h-8 md:w-8"
                fill="white"
              />
              {/* Fake Logo Text */}
              <span className="text-lg font-bold tracking-wider text-white uppercase md:text-xl">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- 2. "Who We Are" Content Section --- */}
      <div className="mx-auto max-w-5xl px-4 py-16 text-center md:py-28 xl:px-2 xl:py-16">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl lg:text-[54px]"
        >
          Who We Are & Why We{" "}
          <span className="bg-gradient-to-r from-[#F5386B] to-[#FDB750] bg-clip-text text-transparent">
            Exist
          </span>
        </motion.h2>

        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-8 max-w-4xl text-base leading-relaxed font-medium text-[#333333] md:text-[17px]"
        >
          At SourceGuy, unlike traditional freight forwarders, we don't just
          move boxes — we're your end-to-end supply chain department. From
          sourcing and inspection to freight management, customs, and last-mile
          delivery — we handle it all.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-8 max-w-4xl text-base leading-relaxed font-medium text-[#333333] md:text-[17px]"
        >
          Our vision is simple: To give growing businesses the same level of
          supply chain expertise and efficiency that global giants enjoy —
          without the cost of hiring, training, or managing an in-house team.
        </motion.p>

        {/* Highlighted Closing Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 text-lg font-semibold text-[#0F172A] md:text-xl"
        >
          With SourceGuy, you focus on scaling. We handle everything else.
        </motion.p>

        {/* Small Red Divider Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mb-10 h-1 w-12 bg-[#cc2229]"
        />

        {/* Call to Action Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-md bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-10 py-4 text-[13px] font-bold tracking-[0.15em] text-white uppercase shadow-lg shadow-red-900/10 transition-colors hover:bg-[#a61920]"
        >
          Speak To Consultant
        </motion.button>
      </div>
    </section>
  );
};

export default Section2;
