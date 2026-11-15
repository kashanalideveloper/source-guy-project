import React from "react";
import { motion } from "framer-motion";

// --- Placeholder Images ---
const IMG_LOGISTICS =
  "https://sourceguy.com/wp-content/uploads/2025/08/imgi_164_plane-trucks-are-flying_37416-8.jpg"; // Trucks/Port
const IMG_SHIP =
  "https://sourceguy.com/wp-content/uploads/2023/07/cargo-ship-carrying-container-for-business-import-1.jpg"; // Cargo Ship

// --- Luxury Easing Curve ---
const luxuryEase = [0.25, 0.1, 0.25, 1.0];

const Section14 = () => {
  return (
    <section className="overflow-hidden bg-slate-50 px-4 py-16 font-sans md:px-12 lg:px-20 xl:px-2 xl:py-16">
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: luxuryEase }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
            Articles
          </span>
          <h2 className="text-3xl leading-tight font-bold text-[#0F172A] md:text-4xl lg:text-5xl">
            Smart Freight Insights & <br className="hidden md:block" />
            Seller Strategies
          </h2>
        </motion.div>

        {/* ================= BLOG GRID ================= */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
          {/* --- Column 1: Feature Card 1 --- */}
          <BlogCard
            image={IMG_LOGISTICS}
            date="04 August 2025"
            title="Should You Build an In-House Logistics Team or Outsource It?"
            desc="When it comes to freight management, businesses face a crucial decision: build an in-house logistics team or outsource it to a third-party provider."
            delay={0.2}
          />

          {/* --- Column 2: Feature Card 2 --- */}
          <BlogCard
            image={IMG_SHIP}
            date="23 June 2023"
            title="The Important Aspect Of Pre-Shipment Inspection"
            desc="Conducting an inspection prior to shipment ensures the quality of goods and products before they are dispatched. It is essential for customers..."
            delay={0.3}
          />

          {/* --- Column 3: Sidebar List --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: luxuryEase, delay: 0.4 }}
            className="flex flex-col space-y-8 lg:border-l lg:border-gray-200 lg:pl-10"
          >
            <SidebarPost
              date="23 November 2021"
              title="5 Important Aspects of a Pre-shipment Inspection"
              desc="Conducting an inspection prior to shipment ensures the quality of goods and.."
            />
            <div className="border-b border-gray-200" /> {/* Divider */}
            <SidebarPost
              date="21 November 2021"
              title="Role Of Inspection And Testing In Maintaining Quality"
              desc="In manufacturing and other industries, maintaining high-quality standards is crucial.."
            />
            <div className="border-b border-gray-200" /> {/* Divider */}
            <SidebarPost
              date="20 November 2021"
              title="What Can Cause Professional Quality Inspectors To Miss QC Issues?"
              desc="Professional quality inspectors are responsible for ensuring that products meet the required.."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Sub-Component: Main Blog Card ---
const BlogCard = ({ image, date, title, desc, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: luxuryEase, delay: delay }}
      className="group flex h-full flex-col"
    >
      {/* Image Container with Zoom Effect */}
      <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Optional Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
      </div>

      {/* Content */}
      <div className="flex flex-grow flex-col">
        {/* Date Meta */}
        <div className="mb-3 flex items-center text-xs font-semibold tracking-wide text-gray-500 uppercase">
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          {date}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl leading-snug font-bold text-[#0F172A] transition-colors duration-300 group-hover:text-[#B91C1C] md:text-2xl">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-slate-600 md:text-base">
          {desc}
        </p>

        {/* Read More Link */}
        <div className="mt-auto pt-2">
          <a
            href="#"
            className="inline-flex items-center text-xs font-bold tracking-widest text-[#B91C1C] uppercase hover:underline"
          >
            Read More
            <svg
              className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// --- Sub-Component: Sidebar Post (No Image) ---
const SidebarPost = ({ date, title, desc }) => {
  return (
    <div className="group block cursor-pointer">
      <div className="mb-2 flex items-center text-[10px] font-bold tracking-wide text-gray-400 uppercase md:text-xs">
        <svg
          className="mr-2 h-3 w-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
        {date}
      </div>

      <h4 className="mb-2 text-lg leading-tight font-bold text-[#0F172A] transition-colors duration-300 group-hover:text-[#B91C1C]">
        {title}
      </h4>

      <p className="line-clamp-2 text-sm leading-relaxed text-slate-500">
        {desc}
      </p>
    </div>
  );
};

export default Section14;
