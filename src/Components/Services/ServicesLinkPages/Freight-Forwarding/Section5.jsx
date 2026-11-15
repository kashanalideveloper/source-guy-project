import React from "react";
import { motion } from "framer-motion";

const Section5 = () => {
  const services = [
    {
      title: "Air Freight",
      description:
        "We have partnership with airlines company. Thanks to our presence in International Chinese airports, we will be able to ship it worldwide insuring a smooth flow to your parcel.",
      image:
        "https://images.unsplash.com/photo-1561212587-5003e0f21ac7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Road Freight",
      description:
        "Road freight is essential considering the fact that we must use it to pick up/deliver to the departure/arrival. 20, 40 feet container or oversized items, feel free to contact our experts.",
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Train Freight",
      description:
        "Rail freight is sometimes the most suitable solution to ship your goods. It allows to reduce cost and delay especially when it comes to oversized items.",
      image:
        "https://plus.unsplash.com/premium_photo-1661964188820-90b48fcdf860?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sea Freight",
      description:
        "We work closely with shipping companies since decades. FCL, LCL or oversized items, we ship all kind of goods from and to all mains container terminals in the world.",
      image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop",
    },
  ];

  // Animation variants for staggered card loading
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#fafafa] px-4 py-16 font-sans md:px-8 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="mb-6 inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-4 py-1.5 text-[10px] font-bold tracking-wider text-white uppercase md:text-xs">
            Types of Freight Options Available
          </span>
          <h2 className="mb-6 text-3xl leading-tight font-bold text-[#0f2043] md:text-4xl lg:text-5xl">
            Comprehensive Logistics Services from China to the World
          </h2>
          <p className="text-sm leading-relaxed text-gray-800 md:text-base">
            Streamline your logistics process, ensure secure and timely delivery
            of your products, and experience peace of mind with our top-tier
            China freight forwarding services. Trusted by both high-growth
            e-commerce and FBA businesses, as well as traditional enterprises,
            we handle thousands of shipments every month. Benefit from our
            extensive network of 8 strategically located offices across China,
            providing localized support and seamless operations. Choose
            SourceGuy for excellence and nationwide coverage.
          </p>
        </motion.div>

        {/* Cards Grid Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-grow flex-col p-6 text-center">
                <h3 className="mb-3 text-xl font-bold text-[#0f2043]">
                  {service.title}
                </h3>
                <p className="mb-8 flex-grow text-sm leading-relaxed text-gray-500">
                  {service.description}
                </p>

                {/* Button (Always aligned to bottom via mt-auto) */}
                <div className="mt-auto">
                  <button className="w-max rounded-full bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-8 py-2.5 text-sm font-bold text-white shadow-sm transition-colors duration-300 hover:bg-[#9a171d] hover:shadow-md">
                    Learn more
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Section5;
