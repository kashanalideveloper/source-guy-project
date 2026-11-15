import React from "react";
import { motion } from "framer-motion";

// --- Luxury Easing Curve ---
const luxuryEase = [0.25, 0.1, 0.25, 1.0];

// --- Services Data ---
const servicesData = [
  {
    title: "Product Sourcing",
    desc: "Tailored to help you find reliable suppliers and source high-quality products at competitive prices.",
    img: "https://sourceguy.com/wp-content/uploads/2023/07/otr-vehicle-transportation-18-wheeler-big-rig-whit-2021-08-26-22-38-09-utc.jpg", // Road/Truck
  },
  {
    title: "Pre-Production Inspection",
    desc: "Identifying and rectifying any potential issues before production begins.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop", // Factory/Inspection
  },
  {
    title: "During Production Inspection",
    desc: "Providing real-time quality control during manufacturing to help you mitigate risks.",
    img: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=600&auto=format&fit=crop", // Warehouse Worker
  },
  {
    title: "Pre-Shipping Inspection",
    desc: "Verifying the quality, quantity, and packaging of your products before they are shipped.",
    img: "https://sourceguy.com/wp-content/uploads/2023/07/man-getting-parcels-from-courier-2021-08-28-12-44-32-utc-1.jpg", // Delivery Guy/Box
  },
  {
    title: "Freight Forwarding",
    desc: "Handling the coordination, documentation, and transportation of your goods.",
    img: "https://sourceguy.com/wp-content/uploads/2023/07/bg-video-services-02-1024x534.jpg", // Cargo Ship
  },
  {
    title: "Product Photography",
    desc: "Capture your products in the best light with our professional Photography Services.",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop", // Camera/Studio
  },
  {
    title: "Product Videography",
    desc: "Creating engaging videos that showcase the features and benefits of your products, helping you communicate their value effectively.",
    img: "https://sourceguy.com/wp-content/uploads/2023/07/maxresdefault-min-1024x576.jpg", // Video Camera
  },
  {
    title: "Sample Consolidation",
    desc: "Gathering and consolidating samples from multiple suppliers, saving you time, effort, and shipping costs.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop", // Hands/Team
  },
  {
    title: "Sample Inspection",
    desc: "We meticulously assess the samples against your specifications, helping you make informed decisions before production.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop", // Inspecting box
  },
  {
    title: "Amazon 3PL Warehousing",
    desc: "We are the Leaders in Full-Service Amazon Solutions. Our dedicated team of experts can help grow your brand in this constantly evolving marketplace.",
    img: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=600&auto=format&fit=crop", // Warehouse/Forklift
  },
  {
    title: "Amazon FBA PL Complete Package",
    desc: "We are the Leaders in Full-Service Amazon Solutions. Our dedicated team of experts can help grow your brand in this constantly evolving marketplace.",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop", // Woman with Tablet/Business
  },
];

const Section2 = () => {
  return (
    <section className="bg-white px-4 py-16 font-sans md:px-12 lg:px-20 xl:px-2 xl:py-16">
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
            Our Services
          </span>
          <h2 className="text-3xl leading-tight font-bold text-[#0F172A] md:text-4xl">
            Get Your Moving Solution Today
          </h2>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} data={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Sub-Component: Service Card ---
const ServiceCard = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: luxuryEase, delay: index * 0.1 }} // Staggered delay
      className="group flex h-full cursor-pointer flex-col"
    >
      {/* Image Container */}
      <div className="mb-6 aspect-[4/3] overflow-hidden rounded-sm">
        <img
          src={data.img}
          alt={data.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <h3 className="mb-3 text-xl font-bold text-[#0F172A] transition-colors duration-300 group-hover:text-[#B91C1C]">
        {data.title}
      </h3>
      <p className="text-sm leading-relaxed text-slate-500">{data.desc}</p>
    </motion.div>
  );
};

export default Section2;
