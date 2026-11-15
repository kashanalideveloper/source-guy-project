import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Section2 = () => {
  // Complete data for 12 cards extracted from the reference design
  const articles = [
    {
      image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=600&auto=format&fit=crop",
      title: "Should You Build an In-House Logistics Team or Outsource It?",
      excerpt:
        "When it comes to freight management, businesses face a crucial decision: build an in-house logistics...",
    },
    {
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQhscRoYjqCFnM7PQTDZ0KNZcwhFjTWCdN2GRkVHeaPhwl7XROROVKh5hQEwwFF",
      title:
        "How to Buy Direct from China Factories in 2025: The Complete Guide",
      excerpt:
        "Sourcing products directly from Chinese factories is a lucrative option for businesses seeking cost efficiency...",
    },
    {
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop",
      title:
        "How to Check if a Chinese Supplier is Legitimate: A Practical Guide for Importers",
      excerpt:
        "If you're looking to buy products from China, one of the first steps is to...",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=600&auto=format&fit=crop",
      title: "How to Find a Reliable Supplier to Source Your Product in China",
      excerpt:
        "Finding a reliable supplier in China can be a game-changer for any business, big or...",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?q=80&w=600&auto=format&fit=crop",
      title: "Why Freight Forwarding is Crucial for International Businesses",
      excerpt:
        "Freight forwarding plays an indispensable role in international trade, acting as a bridge that connects...",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
      title:
        "The Importance of Pre-Production Inspections for Ensuring Quality",
      excerpt:
        "In the manufacturing world, ensuring product quality is essential to build trust and maintain a...",
    },
    {
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=600&auto=format&fit=crop",
      title:
        "How to Effectively Source Products from China: A Step-by-Step Guide",
      excerpt:
        "Sourcing products from China can be a game-changer for your business, offering access to high-quality...",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
      title: "How to Order and Pay on 1688.com",
      excerpt:
        "1688.com is a major Chinese online wholesale marketplace owned by Alibaba Group. It serves as...",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop",
      title:
        "Common Quality Issues in Chinese Manufacturing and How to Avoid Them",
      excerpt:
        "China stands out as a major player in the global manufacturing space. However, quality...",
    },
    {
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
      title: "The Ultimate Guide to Identifying Reliable Suppliers in China",
      excerpt:
        "Sourcing products from China offers a plethora of opportunities for businesses worldwide. However, identifying reliable...",
    },
    {
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTID23KYZZ9ExSAm3TNf6K77Mj_HXBEiNu0XbIAMGhd9dQ8XuCDMJ1NvgggR7Io",
      title: "What is Pre-Shipment Inspection Checklist",
      excerpt:
        "Introduction During a business owner, it is important to ensure the quality and integrity of...",
    },
    {
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=600&auto=format&fit=crop",
      title: "Pre-Shipment Inspection: Essential Aspects and Benefits Unveiled",
      excerpt:
        "The world of international trade is a complex web of negotiations, agreements, and expectations. Amidst...",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="xl:py-16font-sans w-full bg-[#fafafa] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-2">
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-6 inline-block rounded-sm bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-4 py-1.5 text-[10px] font-bold tracking-[0.15em] text-white uppercase md:text-xs">
            Articles
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl lg:text-5xl">
            Recent Articles
          </h2>
        </motion.div>

        {/* --- Blog Grid --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex h-full cursor-pointer flex-col rounded-sm border border-slate-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
            >
              {/* Article Thumbnail */}
              <div className="relative h-48 w-full overflow-hidden md:h-56">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
              </div>

              {/* Article Content */}
              <div className="flex flex-grow flex-col p-6 md:p-8">
                {/* Title */}
                <h3 className="mb-4 text-lg leading-snug font-bold text-[#cc2229] transition-colors group-hover:text-[#a61920] md:text-[20px]">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="mb-8 text-sm leading-relaxed font-medium text-slate-500 md:text-[15px]">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <div className="mt-auto flex items-center text-xs font-bold tracking-widest text-[#cc2229] uppercase transition-colors group-hover:text-[#a61920]">
                  READ MORE
                  <ChevronRight
                    className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1"
                    strokeWidth={3}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;
