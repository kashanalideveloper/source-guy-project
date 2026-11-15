import React from "react";
import heroimage from "../../assets/images/sourceguy-full-freight-management.png";
import heroimage2 from "../../assets/images/SourceGuy-Fiverr.png";

const Hero = () => {
  return (
    // Main Container with the specific dark reddish-purple gradient background
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a040c] font-sans text-white selection:bg-[#D9232E] selection:text-white">
      {/* BACKGROUND GRADIENT GLOWS - To match the screenshot's atmosphere */}
      {/* The main dark background is set on the section tag above. These create the reddish glow on the bottom right. */}
      <div className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
        <div className="absolute right-[-10%] bottom-[-20%] h-[600px] w-[600px] rounded-full bg-[#6b0f1a] opacity-40 mix-blend-screen blur-[150px]"></div>
        <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#1a0510] opacity-50 blur-[120px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:px-20 xl:px-2 xl:py-16">
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row lg:gap-24">
          {/* ================= LEFT CONTENT COLUMN ================= */}
          <div className="w-full max-w-[580px] flex-1 text-left">
            {/* Tagline */}
            <p className="mb-5 text-[11px] font-bold tracking-[0.2em] text-white uppercase md:text-[13px]">
              Outsource your freight. Focus on growth.
            </p>

            {/* Headline */}
            {/* Using leading-tight for tighter line spacing as in the image */}
            <h1 className="mb-7 text-4xl leading-[1.1] font-bold tracking-tight md:text-5xl lg:text-[3.75rem] xl:text-5xl">
              Full-Service Freight, <br />
              {/* The specific salmon/pink color with a subtle drop shadow for pop */}
              <span className="bg-gradient-to-r from-[#F5386B] to-[#FDB750] bg-clip-text text-transparent drop-shadow-sm">
                Zero Headaches
              </span>
            </h1>

            {/* Subtext */}
            <p className="mb-9 max-w-xl text-base leading-relaxed text-white md:text-[1.05rem]">
              No internal team? No problem. We run your entire freight process
              from sourcing to delivery like it's our own — faster, cheaper,
              better.
            </p>

            {/* Feature List with Checkmarks */}
            <div className="mb-12 space-y-4">
              <FeatureItem text="Presence in USA, Canada and China" />
              <FeatureItem text="Over 8 Years of Market Experience" />
              <FeatureItem text="Serving 100+ businesses globally" />
            </div>

            {/* Fiverr Badge Area - Refined layout */}
            <div className="mb-10 flex flex-col items-start">
              <div className="mb-1.5 flex items-center gap-2">
                <img src={heroimage2} className="h-10 w-auto" alt="" />
              </div>
              <p className="text-[13px] font-medium text-white">
                Top Rated Seller on Fiverr
              </p>
            </div>

            {/* CTA Button - Best Design Improvements applied */}
            <button className="group mb-12 w-full rounded-[4px] bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-10 py-4 text-sm font-bold tracking-wider text-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#c01e28] hover:shadow-lg sm:w-auto md:text-base">
              BOOK A FREE FREIGHT AUDIT
            </button>

            {/* Social Proof / Trustpilot Area */}
            <div className="flex flex-wrap items-center gap-5">
              {/* Avatars with matching borders */}
              <div className="flex -space-x-4">
                {/* Note: The border color must match the background color behind it to look like a cutout */}
                <img
                  src="https://i.pravatar.cc/100?img=11"
                  alt="User"
                  className="h-11 w-11 rounded-full border-[3px] border-[#0d0811]"
                />
                <img
                  src="https://i.pravatar.cc/100?img=32"
                  alt="User"
                  className="relative z-10 h-11 w-11 rounded-full border-[3px] border-[#0d0811]"
                />
                <img
                  src="https://i.pravatar.cc/100?img=53"
                  alt="User"
                  className="relative z-20 h-11 w-11 rounded-full border-[3px] border-[#0d0811]"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-gray-400">
                  See our{" "}
                  <span className="font-bold text-white">15 reviews</span> on
                </span>
                <div className="mt-1 flex items-center gap-2">
                  {/* Trustpilot Star Icon */}
                  <svg className="h-5 w-5 fill-[#00b67a]" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                  </svg>
                  <span className="text-base leading-none font-bold text-white">
                    Trustpilot
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE COLUMN ================= */}
          {/* Added a slight fade-in animation for a premium feel */}
          <div className="animate-fade-in-up relative flex w-full flex-1 justify-center lg:justify-end">
            {/* Placeholder for the illustration. */}
            {/* IMPORTANT: Replace 'YOUR_IMAGE_URL_HERE' with the actual image from the screenshot. */}
            <div className="relative w-full max-w-[650px]">
              <img
                src={heroimage}
                alt="Freight Logistics Illustration Placeholder"
                className="h-auto w-full object-contain drop-shadow-2xl"
                style={{ filter: "saturate(1.1)" }} // Slight saturation boost to match the vibrant vector look
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper Component for List Items - Pixel perfect spacing and colors
const FeatureItem = ({ text }) => (
  <div className="flex items-start gap-3.5">
    {/* The white circle checkmark */}
    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white">
      <svg
        className="h-3 w-3 fill-current stroke-current stroke-2 text-black"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <span className="text-[15px] leading-tight font-medium text-white md:text-base">
      {text}
    </span>
  </div>
);

// Optional: Add this to your tailwind.config.js theme.extend for the smooth image entrance
// animation: {
//   'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
// },
// keyframes: {
//   fadeInUp: {
//     '0%': { opacity: '0', transform: 'translateY(20px)' },
//     '100%': { opacity: '1', transform: 'translateY(0)' },
//   }
// }

export default Hero;
