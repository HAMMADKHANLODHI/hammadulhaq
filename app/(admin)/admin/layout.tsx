"use client";
import Link from "next/link";
import React, { useState ,useRef } from "react";


import AdminProvider from "./AdminProvider";
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [opennav, setOpenNav] = useState(false);
  
  return (
    <AdminProvider>
    <div className="bg-stone-100  min-h-screen flex overflow-x-hidden">
      {/* Sidebar */}
      <nav
        className={`fixed lg:fixed  top-0 z-50 w-[280px] flex flex-col justify-start gap-4 bg-amber-400 p-6 transition-transform duration-300 shadow-xl ${
          opennav ? "translate-x-0" : "-translate-x-full "
        }`}
      >
        <div className="flex justify-between items-center mb-10 text-amber-950 font-bold text-2xl uppercase tracking-tighter">
          Admin Panel
          <button onClick={() => setOpenNav(!opennav)} className=" text-sm">✕</button>
        </div>

        <div className="flex flex-col gap-3">
          {["home","contact"].map((item) => (
            <Link
              key={item}
              href={`/admin/${item}`}
              className="w-full flex items-center p-3 bg-amber-950 text-amber-400 rounded-lg hover:bg-amber-900 transition-colors capitalize font-medium"
            >
              {item}
            </Link>
          ))}
          <div className="w-full flex items-center p-3 bg-red-900 text-white rounded-lg mt-10 cursor-pointer hover:bg-red-800 transition-colors">
            Logout
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 h-full  overflow-clip">
        <header className="bg-white w-full h-[3rem]   flex items-center">
             <button onClick={() => setOpenNav(true)} className="p-2 bg-amber-400 rounded">Menu</button>
        </header>
        <div className="">{children}</div>
      </div>
    </div>
    </AdminProvider>
  );
};
export default Layout;