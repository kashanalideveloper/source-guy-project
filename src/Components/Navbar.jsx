import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/image.png"; // Ensure this path is correct
import {
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Menu,
  X,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  Plane,
  Truck,
  MapPin,
  Smartphone,
} from "lucide-react";

export default function SourceGuyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to manage which mobile accordion is open
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const location = useLocation();

  // Handle Entrance Animation & Scroll
  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileSubMenu(null);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  const toggleMobileSubMenu = (menuName) => {
    setMobileSubMenu(mobileSubMenu === menuName ? null : menuName);
  };

  return (
    <div className="relative z-50 w-full font-sans text-slate-800">
      {/* ================= TOP BAR (Red Section) ================= */}
      <div className="relative z-50 hidden bg-gradient-to-r from-[#F5386B] to-[#FDB750] py-2 text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-8 text-[12px] font-medium tracking-wide">
            <div className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-80">
              <Phone size={14} fill="currentColor" />
              <span>(+1) 346 458 0331</span>
            </div>
            <div className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-80">
              <Mail size={14} />
              <span>info@sourceguy.com</span>
            </div>
            <div className="flex items-center gap-2 opacity-90">
              <Clock size={14} />
              <span>Mon - Sat : 8am-6pm</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <SocialIcon icon={<Facebook size={14} fill="currentColor" />} />
            <SocialIcon icon={<Instagram size={14} />} />
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <header
        className={`sticky top-0 w-full border-b border-gray-100 transition-all duration-[1500ms] ease-out ${
          isMounted
            ? "blur-0 translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 blur-md"
        } ${
          isScrolled
            ? "bg-white/95 py-2 shadow-md backdrop-blur-md"
            : "bg-white py-2 shadow-sm"
        }`}
      >
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-6">
          {/* LOGO */}
          <Link
            to="/"
            className="group z-50 flex items-center gap-1 transition-transform duration-300 hover:scale-95"
          >
            <img src={logo} className="h-8 w-auto sm:w-40" alt="Source Guy" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden h-full items-center gap-8 lg:flex">
            <NavLink to="/" label="Home" active={isActive("/")} />
            <NavLink to="/about" label="About Us" active={isActive("/about")} />

            {/* === SERVICES MEGA MENU TRIGGER === */}
            <div className="group static flex h-full items-center">
              {/* import {Link} from "react-router-dom"; // Ye import zaroor add
              karein upar // ... baaki code */}
              <Link
                to="/services"
                className={`relative flex cursor-pointer items-center gap-1 py-4 text-[15px] font-semibold transition-all duration-300 active:scale-95 ${
                  isActive("/services")
                    ? "text-[#B91C1C]"
                    : "text-slate-700 hover:text-[#B91C1C]"
                }`}
              >
                Our Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-500 ${
                    isActive("/services")
                      ? "rotate-180" // Active hone par ulta
                      : "group-hover:rotate-180" // Hover hone par ulta (280 ko 180 kar diya)
                  }`}
                />
                <span
                  className={`absolute bottom-2 left-0 h-[2px] bg-gradient-to-r from-[#F5386B] to-[#FDB750] transition-all duration-500 ease-out ${
                    isActive("/services") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
              {/* MEGA MENU CONTAINER */}
              <div className="invisible absolute top-16 left-0 w-full translate-y-8 border-t-[3px] border-[#B91C1C] bg-white opacity-0 shadow-2xl transition-all delay-500 duration-900 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex w-full">
                  {/* Left Sidebar */}
                  <div className="flex w-1/4 flex-col justify-center border-r border-gray-100 bg-slate-50 p-10">
                    <h3 className="mb-3 text-xl leading-tight font-bold text-slate-900">
                      Want experts to handle your <br /> Amazon FBA PL Launch?
                    </h3>
                    <p className="mb-8 text-sm font-medium text-slate-500">
                      Well, we do that too!
                    </p>
                    <div className="mb-10 space-y-4">
                      <FeatureItem text="7 Years of Experience" />
                      <FeatureItem text="100% Quality Assurance" />
                      <FeatureItem text="0 Hidden Charges" />
                    </div>
                    <button className="w-fit rounded bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-8 py-3 text-xs font-bold tracking-widest text-white uppercase shadow-lg shadow-red-900/20 transition-all hover:bg-red-800 active:scale-95">
                      Learn More
                    </button>
                  </div>

                  {/* Right Content */}
                  <div className="relative grid w-3/4 grid-cols-3 gap-10 overflow-hidden bg-white p-10">
                    <Truck
                      size={250}
                      className="pointer-events-none absolute right-0 bottom-0 translate-x-10 translate-y-10 text-slate-50 opacity-50"
                    />
                    <Plane
                      size={120}
                      className="pointer-events-none absolute top-10 right-10 -rotate-12 text-slate-50 opacity-50"
                    />

                    <div className="z-10 space-y-8">
                      <ServiceCategory title="Product Sourcing">
                        <ServiceLink to="/services/sourcing-china">
                          Source Products From China
                        </ServiceLink>
                      </ServiceCategory>
                      <ServiceCategory title="Product Inspection">
                        <ServiceLink to="/services/pre-production">
                          Pre-Production Inspection
                        </ServiceLink>
                        <ServiceLink to="/services/during-production">
                          During Production Inspection
                        </ServiceLink>
                        <ServiceLink to="/services/pre-shipment">
                          Pre-Shipment Inspection
                        </ServiceLink>
                        <ServiceLink
                          badge="TRENDING"
                          to="/services/sample-inspection-service"
                        >
                          Sample Inspection
                        </ServiceLink>
                        <ServiceLink to="/services/sample-consolidation-service">
                          Sample Consolidation
                        </ServiceLink>
                      </ServiceCategory>
                    </div>

                    <div className="z-10 space-y-8">
                      <ServiceCategory title="Freight Forwarding">
                        <ServiceLink
                          badge="HOT"
                          badgeColor="bg-gradient-to-r from-[#F5386B] to-[#FDB750] text-white"
                          to="/services/freight-forwarding"
                        >
                          Forwarding from China
                        </ServiceLink>
                      </ServiceCategory>
                      <ServiceCategory title="Amazon 3PL Service">
                        <ServiceLink to="/services/amazon-3pl">
                          Warehouse Storage
                        </ServiceLink>
                      </ServiceCategory>
                      <ServiceCategory title="Media Services">
                        <ServiceLink to="/services/product-photography">
                          Product Photography
                        </ServiceLink>
                        <ServiceLink to="/services/product-videography">
                          Product Videography
                        </ServiceLink>
                      </ServiceCategory>
                    </div>

                    {/* Image Area */}
                    <div className="group/img relative flex h-full w-full items-end justify-center overflow-hidden rounded-xl bg-slate-100 shadow-inner">
                      <img
                        src="https://sourceguy.com/wp-content/uploads/2024/11/Untitled-design-2.png"
                        alt="Logistics"
                        className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-1000 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="relative z-10 p-6 text-white">
                        <p className="mb-1 text-[10px] font-bold tracking-wider text-red-400 uppercase">
                          Featured
                        </p>
                        <h4 className="text-lg leading-tight font-bold">
                          Global Logistics Solutions
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <NavLink
              to="/done-for-you"
              label="Done For You"
              active={isActive("/done-for-you")}
            />

            {/* === BLOG MEGA MENU TRIGGER === */}
            <div className="group static flex h-full items-center">
              <Link
                to="/blog"
                target=""
                rel="noopener noreferrer"
                className={`group relative flex items-center gap-1 py-4 text-[15px] font-semibold transition-all duration-300 active:scale-95 ${
                  isActive("/blog")
                    ? "text-[#B91C1C]"
                    : "text-slate-700 hover:text-[#B91C1C]"
                }`}
              >
                Blog
                <ChevronDown
                  size={14}
                  className="transition-transform duration-500 group-hover:rotate-180"
                />
                <span
                  className={`absolute bottom-2 left-0 h-[2px] bg-gradient-to-r from-[#F5386B] to-[#FDB750] transition-all duration-500 ease-out ${
                    isActive("/blog") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
              {/* BLOG MENU CONTAINER */}
              <div className="invisible absolute top-16 left-0 w-full translate-y-8 border-t-[3px] border-[#B91C1C] bg-white p-10 opacity-0 shadow-2xl transition-all delay-500 duration-900 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="mx-auto max-w-7xl">
                  <div className="mb-8 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#0f172a]">
                      Recent Insights
                    </h3>
                    <Link
                      to="/blog"
                      className="bg-gradient-to-r from-[#F5386B] to-[#FDB750] bg-clip-text text-sm font-bold tracking-wider text-transparent uppercase hover:underline"
                    >
                      View All
                    </Link>
                  </div>
                  <div className="grid grid-cols-4 gap-8">
                    <BlogCard
                      image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      title="Should You Build an In-House Logistics Team or Outsource It?"
                    />
                    <div className="group/card relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 transition-all duration-500 hover:border-red-100 hover:shadow-xl active:scale-95">
                      <h4 className="mb-4 bg-gradient-to-r from-[#F5386B] to-[#FDB750] bg-clip-text text-[18px] leading-tight font-bold text-transparent">
                        How to Buy Direct from China Factories in 2026: The
                        Complete Guide
                      </h4>
                      <span className="flex items-center gap-1 text-xs font-bold text-slate-800 uppercase transition-all group-hover/card:gap-2">
                        Read More{" "}
                        <ArrowRight size={12} className="text-[#B91C1C]" />
                      </span>
                    </div>
                    <BlogCard
                      image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      title="How to Check if a Chinese Supplier is Legitimate"
                      verified={true}
                    />
                    <BlogCard
                      image="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8fDA%3D"
                      title="How to Find a Reliable Supplier to Source Your Product"
                    />
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* DESKTOP BUTTONS */}
          <div className="hidden items-center gap-4 lg:flex">
            <NavButton label="TRACKER" />
            <NavButton label="GET QUOTE" />
          </div>

          {/* MOBILE TOGGLE */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Small Quote button for mobile header access */}
            <Link
              to="/quote"
              className="rounded bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-3 py-1.5 text-[10px] font-bold text-white shadow-sm active:scale-95"
            >
              QUOTE
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="group relative z-50 rounded-md p-2 text-slate-700 transition-colors hover:bg-slate-100 active:scale-90"
            >
              {isMobileMenuOpen ? (
                <X size={28} className="text-[#B91C1C]" />
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU (Fully Responsive) ================= */}
        <div
          className={`absolute top-[100%] left-0 w-full border-t border-gray-100 bg-white shadow-xl transition-all duration-500 ease-in-out lg:hidden ${
            isMobileMenuOpen
              ? "max-h-[90vh] overflow-y-auto opacity-100"
              : "max-h-0 overflow-hidden opacity-0"
          }`}
          style={{ scrollbarWidth: "none" }} // Hide scrollbar for cleaner look
        >
          <div className="flex flex-col p-6 pb-20">
            {/* Direct Links */}
            <MobileNavLink
              to="/"
              label="Home"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileNavLink
              to="/about"
              label="About Us"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Services Accordion */}
            <div className="border-b border-gray-50">
              <button
                onClick={() => toggleMobileSubMenu("services")}
                className="flex w-full items-center justify-between py-4 text-[16px] font-medium text-slate-700 active:bg-slate-50"
              >
                <span
                  className={
                    mobileSubMenu === "services" ? "text-[#B91C1C]" : ""
                  }
                >
                  Our Services
                </span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    mobileSubMenu === "services"
                      ? "rotate-180 text-[#B91C1C]"
                      : "text-slate-400"
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  mobileSubMenu === "services"
                    ? "mb-4 max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col gap-4 rounded-xl bg-slate-50 p-4">
                  <MobileServiceGroup title="Sourcing & Inspection">
                    <MobileSubLink>Source Products From China</MobileSubLink>
                    <MobileSubLink>Pre-Production Inspection</MobileSubLink>
                    <MobileSubLink>Sample Inspection</MobileSubLink>
                  </MobileServiceGroup>

                  <MobileServiceGroup title="Logistics">
                    <MobileSubLink>Forwarding from China</MobileSubLink>
                    <MobileSubLink>Amazon Warehouse Storage</MobileSubLink>
                  </MobileServiceGroup>

                  <MobileServiceGroup title="Media">
                    <MobileSubLink>Product Photography</MobileSubLink>
                    <MobileSubLink>Product Videography</MobileSubLink>
                  </MobileServiceGroup>

                  {/* Mobile Promo Card */}
                  <div className="mt-2 rounded-lg border border-[#B91C1C]/10 bg-gradient-to-r from-[#F5386B] to-[#FDB750]/5 p-4">
                    <h5 className="mb-1 text-sm font-bold text-[#B91C1C]">
                      Amazon FBA Launch?
                    </h5>
                    <p className="mb-3 text-xs text-slate-600">
                      Expert handling with 0 hidden charges.
                    </p>
                    <Link
                      to="#"
                      className="text-xs font-bold text-slate-800 underline decoration-[#B91C1C]"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <MobileNavLink
              to="/done-for-you"
              label="Done For You"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Blog Accordion */}
            <div className="border-b border-gray-50">
              <button
                onClick={() => toggleMobileSubMenu("blog")}
                className="flex w-full items-center justify-between py-4 text-[16px] font-medium text-slate-700 active:bg-slate-50"
              >
                <span
                  className={mobileSubMenu === "blog" ? "text-[#B91C1C]" : ""}
                >
                  Blog
                </span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    mobileSubMenu === "blog"
                      ? "rotate-180 text-[#B91C1C]"
                      : "text-slate-400"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileSubMenu === "blog"
                    ? "mb-4 max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col space-y-3 rounded-xl bg-slate-50 p-4">
                  <MobileSubLink>Recent Insights</MobileSubLink>
                  <MobileSubLink>Sourcing Guides</MobileSubLink>
                  <Link
                    to="/blog"
                    className="pt-2 text-xs font-bold tracking-wide text-[#B91C1C] uppercase"
                  >
                    View All Posts &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Buttons */}
            <div className="mt-8 flex flex-col gap-3">
              <button className="w-full rounded-lg bg-gradient-to-r from-[#F5386B] to-[#FDB750] py-3 text-sm font-bold tracking-wider text-white shadow-lg shadow-red-900/20 active:scale-95">
                GET FREE QUOTE
              </button>
              <button className="w-full rounded-lg border-2 border-slate-200 py-3 text-sm font-bold tracking-wider text-slate-700 active:scale-95 active:bg-slate-50">
                TRACK SHIPMENT
              </button>
            </div>

            {/* Mobile Contact Footer */}
            <div className="mt-8 border-t border-dashed border-gray-200 pt-6">
              <p className="mb-4 text-xs font-bold tracking-widest text-slate-400 uppercase">
                Contact Us
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                  <div className="rounded-full bg-red-50 p-2 text-[#B91C1C]">
                    <Smartphone size={16} />
                  </div>
                  (+1) 346 458 0331
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                  <div className="rounded-full bg-red-50 p-2 text-[#B91C1C]">
                    <Mail size={16} />
                  </div>
                  info@sourceguy.com
                </div>
                <div className="mt-4 flex gap-4 pl-1">
                  <SocialIcon
                    icon={<Facebook size={18} fill="currentColor" />}
                  />
                  <SocialIcon icon={<Instagram size={18} />} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

/* --- SUB COMPONENTS --- */

const NavLink = ({ to, label, active }) => (
  <Link
    to={to}
    className={`group relative flex items-center px-1 py-2 text-[15px] font-semibold transition-all duration-300 active:scale-95 ${
      active ? "text-[#B91C1C]" : "text-slate-700 hover:text-[#B91C1C]"
    }`}
  >
    {label}
    <span
      className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#F5386B] to-[#FDB750] transition-all duration-500 ease-out ${
        active ? "w-full" : "w-0 group-hover:w-full"
      }`}
    ></span>
  </Link>
);

/* Mobile Specific Sub Components */
const MobileNavLink = ({ to, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex w-full items-center justify-between border-b border-gray-50 py-4 text-[16px] font-medium text-slate-700 transition-colors active:text-[#B91C1C]"
  >
    {label}
    <ArrowRight size={14} className="text-slate-300" />
  </Link>
);

const MobileServiceGroup = ({ title, children }) => (
  <div className="mb-3 last:mb-0">
    <h6 className="mb-2 text-xs font-bold tracking-wider text-slate-400 uppercase">
      {title}
    </h6>
    <div className="flex flex-col gap-2 border-l-2 border-slate-200 pl-2">
      {children}
    </div>
  </div>
);

const MobileSubLink = ({ children }) => (
  <Link
    to="#"
    className="text-sm font-medium text-slate-600 hover:text-[#B91C1C]"
  >
    {children}
  </Link>
);

const NavButton = ({ label }) => (
  <button className="rounded bg-gradient-to-r from-[#F5386B] to-[#FDB750] px-7 py-2.5 text-sm font-bold tracking-widest text-white shadow-md shadow-red-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#991b1b] hover:shadow-lg active:scale-95">
    {label}
  </button>
);

const SocialIcon = ({ icon }) => (
  <a
    href="#"
    className="transition-transform duration-300 hover:scale-110 active:scale-90"
  >
    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white hover:bg-black hover:text-white">
      {icon}
    </div>
  </a>
);

const ServiceCategory = ({ title, children }) => (
  <div>
    <h4 className="mb-4 border-l-4 border-[#B91C1C] pl-3 text-[17px] font-bold text-[#0f172a]">
      {title}
    </h4>
    <ul className="space-y-3 pl-4">{children}</ul>
  </div>
);

const ServiceLink = ({
  to,
  children,
  badge,
  badgeColor = "bg-orange-100 text-orange-600",
}) => (
  <li className="flex items-center gap-2">
    <Link
      to={to}
      className="block text-[14px] font-medium text-slate-500 transition-all duration-200 hover:translate-x-1 hover:text-[#B91C1C]"
    >
      {children}
    </Link>
    {badge && (
      <span
        className={`rounded px-1.5 py-0.5 text-[9px] font-extrabold ${badgeColor}`}
      >
        {badge}
      </span>
    )}
  </li>
);

const FeatureItem = ({ text }) => (
  <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
    <CheckCircle size={18} className="fill-red-50 text-[#B91C1C]" />
    {text}
  </div>
);

const BlogCard = ({ image, title, verified }) => (
  <div className="group/card cursor-pointer transition-transform duration-200 active:scale-95">
    <div className="relative mb-4 h-40 overflow-hidden rounded-xl shadow-sm">
      <img
        src={image}
        alt="Blog"
        className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-110"
      />
      {verified && (
        <div className="absolute top-2 right-2 rounded-full bg-green-500 p-1 shadow">
          <CheckCircle size={12} className="text-white" />
        </div>
      )}
    </div>
    <h4 className="mb-3 pr-2 text-[15px] leading-snug font-bold text-slate-800 transition-colors group-hover/card:text-[#B91C1C]">
      {title}
    </h4>
    <span className="flex items-center gap-1 text-xs font-bold text-[#B91C1C] uppercase transition-all group-hover/card:gap-2">
      Read More <ArrowRight size={12} />
    </span>
  </div>
);
