import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Box,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 bg-white pt-16 pb-8 font-sans">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-2">
        {/* ================= TOP GRID SECTION ================= */}
        <div className="mb-12 grid grid-cols-1 gap-x-26 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {/* --- Column 1: Brand Info --- */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center">
                {/* Logo Placeholder */}
                <div className="mr-1 rounded-sm bg-[#B91C1C] p-1 text-white">
                  <Box size={24} strokeWidth={3} />
                </div>
                <span className="text-2xl font-extrabold tracking-tighter text-slate-900">
                  SOURCE<span className="text-[#B91C1C]">GUY</span>
                  <sup className="ml-0.5 text-xs text-slate-400">TM</sup>
                </span>
              </div>
            </div>

            <p className="max-w-xs text-sm leading-relaxed font-medium text-slate-500">
              Your Trusted Partner for Product Sourcing, Inspection, Photography
              & Shipping Services in China
            </p>

            {/* Social Icons (Hover Scale Effect) */}
            <div className="flex gap-3">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* --- Column 2: Services --- */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-slate-900">Services</h3>
            <ul className="space-y-3">
              {[
                "Product Sourcing",
                "Pre-Production Inspection",
                "During Production Inspection",
                "Freight Forwarding",
                "Full Service Amazon Agency",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-block text-sm font-medium text-slate-500 transition-all duration-300 hover:translate-x-1 hover:text-[#B91C1C]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Column 3: Company --- */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-slate-900">Company</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Our Services",
                "Our Team",
                "Contact Us",
                "FAQs",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-block text-sm font-medium text-slate-500 transition-all duration-300 hover:translate-x-1 hover:text-[#B91C1C]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Column 4: Quick Contact --- */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-slate-900">
              Quick Contact
            </h3>
            <ul className="space-y-5">
              {/* Address 1 */}
              <li className="group flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-0.5 shrink-0 text-slate-600 transition-colors group-hover:text-[#B91C1C]"
                  fill="currentColor"
                  fillOpacity={0.2}
                />
                <span className="text-sm font-medium text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#B91C1C]">
                  Wyoming State, USA
                </span>
              </li>

              {/* Address 2 */}
              <li className="group flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-0.5 shrink-0 text-slate-600 transition-colors group-hover:text-[#B91C1C]"
                  fill="currentColor"
                  fillOpacity={0.2}
                />
                <span className="text-sm font-medium text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#B91C1C]">
                  Yiwu, Zhejiang, China
                </span>
              </li>

              {/* Phone */}
              <li className="group flex cursor-pointer items-center gap-3">
                <Phone
                  size={20}
                  className="shrink-0 text-slate-600 transition-colors group-hover:text-[#B91C1C]"
                  fill="currentColor"
                  fillOpacity={0.2}
                />
                <span className="text-sm font-medium text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#B91C1C]">
                  (-1) 346 458 0331
                </span>
              </li>

              {/* Email */}
              <li className="group flex cursor-pointer items-center gap-3">
                <Mail
                  size={20}
                  className="shrink-0 text-slate-600 transition-colors group-hover:text-[#B91C1C]"
                  fill="currentColor"
                  fillOpacity={0.2}
                />
                <span className="text-sm font-medium text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#B91C1C]">
                  info@sourceguy.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
          <p className="text-sm font-medium text-slate-500">
            Copyright © 2023 SourceGuy | All Rights Reserved.
          </p>
          <p className="text-sm font-medium text-slate-500">
            Designed & Developed by{" "}
            <span className="font-bold text-[#B91C1C]">AdSpiked</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

// Social Icon Component
const SocialIcon = ({ icon }) => (
  <a
    href="#"
    className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-600 text-white transition-all duration-300 hover:scale-110 hover:bg-[#B91C1C]"
  >
    {icon}
  </a>
);
