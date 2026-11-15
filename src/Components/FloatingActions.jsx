import { useEffect, useState } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";

const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923037400557" // apna number yahan
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 z-50 rounded-full bg-green-500 p-3 text-white shadow-lg transition-all duration-300 hover:bg-green-600 md:p-4"
      >
        <FaWhatsapp className="text-xl md:text-2xl" />
      </a>

      {/* Scroll To Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-4 z-50 rounded-full bg-gray-800 p-3 text-white shadow-lg transition-all duration-300 hover:bg-black md:p-4"
        >
          <FaArrowUp className="text-lg md:text-xl" />
        </button>
      )}
    </>
  );
};

export default FloatingActions;
