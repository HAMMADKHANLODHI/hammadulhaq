"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";
import AdminProvider from "./AdminProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [opennav, setOpenNav] = useState(false);
  const router = useRouter();

  // 1. Separate the logic into a clean function
  const performLogout = async () => {
    const response = await fetch("/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Logout failed");
    }

    // Success logic
    router.push("/auth/login");
    return result;
  };

  // 2. The click handler that triggers the toast
  const handleLogoutClick = () => {
    toast.promise(performLogout(), {
      loading: "Terminating Session...",
      success: "Logged out successfully",
      error: (err) => `Error: ${err.message}`,
    });
  };

  return (
    <AdminProvider>
      {/* 3. Ensure Toaster is present */}
      <Toaster richColors position="top-right" />

      <div className="bg-stone-100 min-h-screen flex overflow-x-hidden">
        {/* Sidebar */}
        <nav
          className={`fixed top-0 z-50 h-full w-[280px] flex flex-col justify-start gap-4 bg-amber-400 p-6 transition-transform duration-300 shadow-xl ${
            opennav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-10 text-amber-950 font-bold text-2xl uppercase tracking-tighter">
            Admin Panel
            <button onClick={() => setOpenNav(false)} className="text-sm p-2 hover:bg-amber-500 rounded-full">✕</button>
          </div>

          <div className="flex flex-col gap-3">
            {["home", "contact"].map((item) => (
              <Link
                key={item}
                href={`/admin/${item}`}
                onClick={() => setOpenNav(false)}
                className="w-full flex items-center p-3 bg-amber-950 text-amber-400 rounded-lg hover:bg-amber-900 transition-colors capitalize font-medium"
              >
                {item}
              </Link>
            ))}
            
            {/* 4. Use the new click handler */}
            <div 
              onClick={handleLogoutClick} 
              className="w-full flex items-center p-3 bg-red-900 text-white rounded-lg mt-10 cursor-pointer hover:bg-red-800 transition-colors font-bold"
            >
              Logout
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex-1 h-full overflow-clip">
          <header className="bg-white w-full h-[3.5rem] px-6 flex items-center shadow-sm border-b">
            <button 
              onClick={() => setOpenNav(true)} 
              className="px-4 py-1.5 bg-amber-400 text-amber-950 font-bold rounded-lg hover:bg-amber-500 transition-all text-sm uppercase tracking-wider"
            >
              Menu
            </button>
          </header>
          <div className="p-6">{children}</div>
        </div>
      </div>
    </AdminProvider>
  );
};

export default Layout;