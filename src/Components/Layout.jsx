import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";

export default function Layout() {
  // Sidebar se related saari state aur useEffect yahan se hata di gayi hai.

  return (
    <div className="flex h-screen w-full overflow-hidden transition-colors duration-300 selection:bg-blue-500/30">
      <div className="relative flex h-full flex-1 flex-col overflow-hidden">
        {/* Navbar se isSidebarOpen aur toggleSidebar props hata diye hain */}
        <Navbar />

        {/* Content Area */}
        <main className="custom-scrollbar relative flex-1 overflow-y-auto scroll-smooth">
          <div className="mx-auto min-h-[calc(100vh-4rem)] w-full">
            <Outlet />
          </div>
          <FloatingActions />
          <Footer />
        </main>
      </div>
    </div>
  );
}
